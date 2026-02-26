import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export function buildContactEmail(data: {
  name: string;
  email: string;
  company: string;
  employees?: string;
  bottleneck?: string;
  message?: string;
}): { subject: string; html: string } {
  return {
    subject: `New AIRY Inquiry — ${data.company}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      ${data.employees ? `<p><strong>Employees:</strong> ${data.employees}</p>` : ""}
      ${data.bottleneck ? `<p><strong>Biggest Bottleneck:</strong> ${data.bottleneck}</p>` : ""}
      ${data.message ? `<p><strong>Message:</strong></p><p>${data.message}</p>` : ""}
    `,
  };
}
