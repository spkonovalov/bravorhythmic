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
  const FROM_EMAIL = "hello@bravorhythmic.com"; 
  
  // The email address where YOU want to receive notifications.
  const ADMIN_EMAIL = "hello@bravorhythmic.com"; 

  try {
    // 1. Send Notification Email to You (Admin)
    await resend.emails.send({
      from: `Bravo Website <${FROM_EMAIL}>`,
      to: ADMIN_EMAIL,
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
      subject: "Your Free Trial Request at Bravo Rhythmic Gymnastics",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; line-height: 1.6;">
          <h2 style="color: #6C5CE7;">Welcome to Bravo Rhythmic Gymnastics!</h2>
          <p>Hi ${parentName},</p>
          <p>Thank you for your interest! We've received your request for a free trial class for your ${gymnastAge}-year-old gymnast.</p>
          <p>Our team will contact you shortly at <strong>${phone}</strong> to confirm the best time and location for your trial class.</p>
          <p>In the meantime, feel free to reply directly to this email if you have any questions before we connect.</p>
          <br />
          <p>Best regards,</p>
          <p><strong>The Bravo Team</strong><br/>
          Redwood City & Santa Clara<br/>
          <a href="https://learn.bravorhythmic.com" style="color: #6C5CE7;">learn.bravorhythmic.com</a></p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    console.error("Resend Error:", error);
    return { success: false, error: error.message || "Failed to send email" };
  }
}
