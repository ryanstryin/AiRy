import { NextResponse } from "next/server";
import { resend, buildContactEmail } from "@/lib/resend";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
    });

    const { error } = await resend.emails.send({
      from: "AIRY Website <onboarding@resend.dev>",
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
