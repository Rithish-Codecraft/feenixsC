import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "rithish@feenixs.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "notifications@resend.dev";

interface EmailPayload {
  subject: string;
  html: string;
}

export async function sendNotificationEmail({ subject, html }: EmailPayload) {
  try {
    const { data, error } = await resend.emails.send({
      from: `Feenixs Platform <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject,
      html,
    });

    if (error) {
      console.error("[EMAIL] Failed to send:", error);
      return { success: false, error };
    }

    console.log("[EMAIL] Sent successfully. ID:", data?.id);
    return { success: true, id: data?.id };
  } catch (err) {
    console.error("[EMAIL] Exception:", err);
    return { success: false, error: err };
  }
}

// ── HTML Email Templates ──

export function buildLeadEmail(data: {
  name: string;
  email: string;
  org: string;
  domain?: string;
  budget?: string;
  timeline?: string;
  message: string;
  referenceId: string;
}) {
  return {
    subject: `🤝 New Collaboration Lead: ${data.name} — ${data.org}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf9; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2D6A4F, #0D9488); padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Collaboration Lead</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 12px;">Reference: ${data.referenceId}</p>
        </div>
        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Full Name</td><td style="padding: 8px 0; font-weight: 600;">${data.name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2D6A4F;">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Organization</td><td style="padding: 8px 0; font-weight: 600;">${data.org}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Research Domain</td><td style="padding: 8px 0;">${data.domain || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Budget Tier</td><td style="padding: 8px 0;">${data.budget || "N/A"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Timeline</td><td style="padding: 8px 0;">${data.timeline || "N/A"}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: white; border: 1px solid #e2e8f0; border-radius: 8px;">
            <p style="color: #64748b; font-size: 11px; text-transform: uppercase; margin: 0 0 8px; letter-spacing: 0.5px;">Message</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b;">${data.message}</p>
          </div>
          <p style="margin-top: 20px; font-size: 11px; color: #94a3b8;">Submitted at ${new Date().toISOString()}</p>
        </div>
      </div>
    `,
  };
}

export function buildCareerEmail(data: {
  jobId: string;
  fullName: string;
  email: string;
  fileName: string;
  coverLetter?: string;
  trackerId: string;
}) {
  return {
    subject: `📄 New Job Application: ${data.fullName} — Job ${data.jobId}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf9; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2D6A4F, #0D9488); padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Job Application</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0; font-size: 12px;">Tracker: ${data.trackerId}</p>
        </div>
        <div style="padding: 24px 32px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #64748b; width: 140px;">Candidate</td><td style="padding: 8px 0; font-weight: 600;">${data.fullName}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${data.email}" style="color: #2D6A4F;">${data.email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Job ID</td><td style="padding: 8px 0; font-weight: 600;">${data.jobId}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b;">Resume File</td><td style="padding: 8px 0;">${data.fileName}</td></tr>
          </table>
          ${data.coverLetter ? `
          <div style="margin-top: 16px; padding: 16px; background: white; border: 1px solid #e2e8f0; border-radius: 8px;">
            <p style="color: #64748b; font-size: 11px; text-transform: uppercase; margin: 0 0 8px; letter-spacing: 0.5px;">Cover Letter</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b;">${data.coverLetter}</p>
          </div>
          ` : ""}
          <p style="margin-top: 20px; font-size: 11px; color: #94a3b8;">Submitted at ${new Date().toISOString()}</p>
        </div>
      </div>
    `,
  };
}

export function buildNewsletterEmail(data: { email: string }) {
  return {
    subject: `📬 New Newsletter Subscriber: ${data.email}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fafaf9; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #2D6A4F, #0D9488); padding: 24px 32px;">
          <h1 style="color: white; margin: 0; font-size: 20px;">New Newsletter Subscriber</h1>
        </div>
        <div style="padding: 24px 32px;">
          <p style="font-size: 14px; color: #1e293b;">A new user subscribed to the Feenixs newsletter:</p>
          <div style="margin-top: 12px; padding: 16px; background: white; border: 1px solid #e2e8f0; border-radius: 8px; text-align: center;">
            <a href="mailto:${data.email}" style="color: #2D6A4F; font-size: 16px; font-weight: 600;">${data.email}</a>
          </div>
          <p style="margin-top: 20px; font-size: 11px; color: #94a3b8;">Subscribed at ${new Date().toISOString()}</p>
        </div>
      </div>
    `,
  };
}
