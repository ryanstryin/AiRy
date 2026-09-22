import { Resend } from "resend";

export function getResend() {
  return new Resend(process.env.RESEND_API_KEY);
}

/**
 * Sender address for every outgoing email.
 * NOTE: the airytransformation.com domain must be verified in Resend (and
 * RESEND_FROM set, e.g. "AIRY <hello@airytransformation.com>") before any
 * email reaches leads. The onboarding@resend.dev test sender only delivers
 * to the Resend account owner's own address.
 */
export function getFromAddress(): string {
  return process.env.RESEND_FROM || "AIRY Website <onboarding@resend.dev>";
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export type ContactPath = "accelerator" | "agentops" | "enterprise" | "general";

const pathLabels: Record<ContactPath, string> = {
  accelerator: "AI Accelerator",
  agentops: "AgentOps Partner",
  enterprise: "Enterprise (AgentSpeak.io)",
  general: "Not sure yet",
};

export function buildContactEmail(data: {
  name: string;
  email: string;
  company: string;
  employees?: string;
  bottleneck?: string;
  message?: string;
  path?: ContactPath;
  aiStage?: string;
  layer?: string;
  source?: string;
}): { subject: string; html: string } {
  const e = escapeHtml;
  const row = (label: string, value?: string) =>
    value ? `<p><strong>${label}:</strong> ${e(value)}</p>` : "";
  const prefix = data.path === "agentops" ? "[AgentOps] " : "";

  return {
    subject: `${prefix}New AIRY Inquiry — ${data.company}`,
    html: `
      <h2>New Contact Form Submission</h2>
      ${row("Name", data.name)}
      ${row("Email", data.email)}
      ${row("Company", data.company)}
      ${row("Interested in", data.path ? pathLabels[data.path] : undefined)}
      ${row("Employees", data.employees)}
      ${row("Biggest Bottleneck", data.bottleneck)}
      ${row("AI stage", data.aiStage)}
      ${row("Weakest Blueprint layer", data.layer)}
      ${data.message ? `<p><strong>Message:</strong></p><p>${e(data.message)}</p>` : ""}
      ${row("Source", data.source)}
    `,
  };
}

const emailShell = (body: string) => `
  <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#111;line-height:1.6">
    ${body}
    <p style="margin-top:32px;color:#666;font-size:13px">— Ryan, AIRY<br/><a href="https://airytransformation.com" style="color:#7C3AED">airytransformation.com</a></p>
  </div>
`;

function guideTitle(guide: string): string {
  return guide
    .split("-")
    .map((w) => (w === "ai" ? "AI" : w === "airy" ? "AIRY" : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

export function buildGuideEmail(data: {
  name: string;
  guide: string;
  guideUrl: string;
}): { subject: string; html: string } {
  const title = guideTitle(data.guide);
  const firstName = data.name.trim().split(/\s+/)[0] || data.name;
  return {
    subject: `Your guide: ${title}`,
    html: emailShell(`
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>Here's the guide you asked for: <strong>${escapeHtml(title)}</strong>.</p>
      <p><a href="${escapeHtml(data.guideUrl)}" style="display:inline-block;background:#7C3AED;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Open the guide →</a></p>
      <p>Skim the layer that hurts most first. It's the fastest way to find where your organisation leaks time.</p>
    `),
  };
}

export function buildGuideFollowUpEmail(data: {
  name: string;
  guide: string;
  guideUrl: string;
  bookingUrl?: string;
}): { subject: string; html: string } {
  const title = guideTitle(data.guide);
  const firstName = data.name.trim().split(/\s+/)[0] || data.name;
  const bookingUrl =
    data.bookingUrl ?? "https://airytransformation.com/contact?path=agentops&source=guide-follow-up";
  return {
    subject: "Your AgentOps Briefing + one thing to read first",
    html: emailShell(`
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>A couple of days ago you grabbed <a href="${escapeHtml(data.guideUrl)}" style="color:#7C3AED">${escapeHtml(title)}</a>. If you've had a chance to skim it, the next step is a short AgentOps Briefing.</p>
      <p>Tell us where you are. We'll find your weakest layer and tell you honestly which path fits, even if it isn't ours. We reply within 24 hours.</p>
      <p><a href="${escapeHtml(bookingUrl)}" style="display:inline-block;background:#7C3AED;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-weight:600">Book my AgentOps Briefing →</a></p>
    `),
  };
}
