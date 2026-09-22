import { NextResponse } from "next/server";
import { getResend, getFromAddress, buildContactEmail, type ContactPath } from "@/lib/resend";

const VALID_PATHS: readonly ContactPath[] = ["accelerator", "agentops", "enterprise", "general"];
const MAX_OPTIONAL_LENGTH = 100;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function cleanOptional(value: unknown, max = MAX_OPTIONAL_LENGTH): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim().slice(0, max);
  return trimmed || undefined;
}

function cleanPath(value: unknown): ContactPath | undefined {
  return typeof value === "string" && (VALID_PATHS as readonly string[]).includes(value)
    ? (value as ContactPath)
    : undefined;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, employees, bottleneck, message } = body;

    if (!name || !email || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { subject, html } = buildContactEmail({
      name,
      email,
      company,
      employees,
      bottleneck,
      message,
      path: cleanPath(body.path),
      aiStage: cleanOptional(body.aiStage),
      layer: cleanOptional(body.layer),
      source: cleanOptional(body.source),
    });

    // Sender comes from RESEND_FROM; the airytransformation.com domain must be
    // verified in Resend before leads receive mail from it.
    const { error } = await getResend().emails.send({
      from: getFromAddress(),
      to: process.env.CONTACT_EMAIL!,
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
