import { NextResponse } from "next/server";
import {
  getResend,
  getFromAddress,
  buildContactEmail,
  buildGuideEmail,
  buildGuideFollowUpEmail,
} from "@/lib/resend";

// Not exported: Next.js route modules may only export handlers/config.
const GUIDE_SLUGS = [
  "the-airy-blueprint",
  "ai-native-organization",
  "graph-engineering",
  "ai-authority-engine",
  "marketing-engineering",
  "digital-credibility-stack",
] as const;

const FOLLOW_UP_DELAY_MS = 2 * 24 * 60 * 60 * 1000;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidGuide(guide: unknown): guide is string {
  return (
    typeof guide === "string" &&
    /^[a-z0-9-]{1,80}$/.test(guide) &&
    (GUIDE_SLUGS as readonly string[]).includes(guide)
  );
}

function clean(value: unknown, max = 100): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed || undefined;
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(body?.name);
  const email = clean(body?.email, 254);
  const company = clean(body?.company);
  const aiStage = clean(body?.aiStage);
  const guide = body?.guide;

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }
  if (!isValidGuide(guide)) {
    return NextResponse.json({ error: "Unknown guide." }, { status: 400 });
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://airytransformation.com").replace(/\/$/, "");
  const guideUrl = `${siteUrl}/blueprint/guides/${guide}.html`;

  // Sender comes from RESEND_FROM; the airytransformation.com domain must be
  // verified in Resend before leads receive mail from it.
  const from = getFromAddress();
  const resend = getResend();

  const guideEmail = buildGuideEmail({ name, guide, guideUrl });
  const notification = buildContactEmail({
    name,
    email,
    company: company ?? "(not provided)",
    aiStage,
    message: `Guide download: ${guide}`,
    source: "blueprint-download",
  });
  const followUp = buildGuideFollowUpEmail({ name, guide, guideUrl });

  const [guideResult, notifyResult, followUpResult] = await Promise.allSettled([
    resend.emails.send({ from, to: email, subject: guideEmail.subject, html: guideEmail.html }),
    resend.emails.send({
      from,
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject: notification.subject,
      html: notification.html,
    }),
    resend.emails.send({
      from,
      to: email,
      subject: followUp.subject,
      html: followUp.html,
      scheduledAt: new Date(Date.now() + FOLLOW_UP_DELAY_MS).toISOString(),
    }),
  ]);

  const failed = (r: PromiseSettledResult<{ error: unknown }>) =>
    r.status === "rejected" || Boolean(r.value.error);

  if (failed(notifyResult)) {
    console.error("Blueprint lead notification failed:", notifyResult);
  }
  if (failed(followUpResult)) {
    console.error("Blueprint follow-up scheduling failed:", followUpResult);
  }
  if (failed(guideResult)) {
    console.error("Blueprint guide email failed:", guideResult);
    return NextResponse.json(
      { error: "Failed to send the guide. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
