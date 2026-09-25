"use server";

import { Resend } from "resend";

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitTrialAction(formData: FormData) {
  const parentName = formData.get("parent-name") as string;
  const gymnastAge = formData.get("gymnast-age") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const experience = formData.get("experience") as string;

  if (!parentName || !gymnastAge || !email || !phone) {
    return { success: false, error: "Missing required fields" };
  }

  // The email address that emails will be sent FROM.
  // IMPORTANT: This domain must be verified in your Resend dashboard!
  const FROM_EMAIL = "info@bravorhythmic.com"; 
  
  // The email address where YOU want to receive notifications.
  const ADMIN_EMAIL = "info@bravorhythmic.com"; 

  try {
    // 1. Send Notification Email to You (Admin)
    await resend.emails.send({
      from: `Bravo Website <${FROM_EMAIL}>`,
      to: [ADMIN_EMAIL, "sk@67path.com"],
      subject: `New Trial Request: ${parentName}`,
      html: `
        <h2>New Trial Class Request</h2>
        <p><strong>Parent:</strong> ${parentName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gymnast Age:</strong> ${gymnastAge}</p>
        <p><strong>Experience:</strong> ${experience || "None specified"}</p>
      `,
    });

    // 2. Send Auto-responder Email to the Parent
    await resend.emails.send({
      from: `Bravo Rhythmic Gymnastics <${FROM_EMAIL}>`,
      to: email,
      subject: "Book your Free Trial Class at Bravo Rhythmic",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <p>Hello, ${parentName}!</p>
          <p>Thank you for your interest in Bravo Rhythmic. We have received your request for a trial class.</p>
          <p>Please follow this link <a href="https://portal.iclasspro.com/bravo" style="color: #6C5CE7; font-weight: bold;">https://portal.iclasspro.com/bravo</a> to book a specific date and time for your trial class.</p>
          <p>If you have any questions, feel free to contact us:</p>
          <p>
            <a href="mailto:info@bravorhythmic.com" style="color: #6C5CE7;">info@bravorhythmic.com</a><br/>
            (408) 384-9595
          </p>
          <br />
          <p>Best regards,</p>
          <p><strong>Bravo Team</strong></p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Resend Error:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
