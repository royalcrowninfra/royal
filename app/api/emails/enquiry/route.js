import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "royalcrowninfra@gmail.com";

export async function POST(req) {
  try {
    const body = await req.json();
    const { enquiryFor, fullName, email, phone, message } = body;

    const emailData = {
      from: "Royal Crown Infra <no-reply@royalcrowninfra.com>",
      to: ADMIN_EMAIL,
      subject: `New Enquiry: ${enquiryFor}`,
      html: `
        <h1>New Enquiry Received</h1>
        <p>A new enquiry has been submitted through the website.</p>
        <h2>Enquiry Details:</h2>
        <ul>
          <li><strong>Enquiry For:</strong> ${enquiryFor}</li>
          <li><strong>Name:</strong> ${fullName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Please respond to this enquiry as soon as possible.</p>
        <hr>
        <p><small>This is an automated message from your website's contact form.</small></p>
      `,
      reply_to: email, // Allow admin to reply directly to the enquirer
    };

    const result = await resend.emails.send(emailData);
    console.log("Email sent successfully:", result);
    return NextResponse.json(
      { message: "Enquiry received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to process enquiry" },
      { status: 500 }
    );
  }
}
