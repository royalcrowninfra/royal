import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Admin email address where contact form submissions will be sent
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "royalcrowninfra@gmail.com";

export async function POST(req) {
  try {
    // Parse the request body
    const body = await req.json();
    const { fullName, email, contactNumber, message } = body;

    // Validate required fields
    if (!fullName || !email || !contactNumber || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Prepare email data
    const emailData = {
      from: "Royal Crown Infra <no-reply@royalcrowninfra.com>",
      to: ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background-color: #f8f9fa; padding: 20px; border-radius: 5px; }
              .content { margin-top: 20px; }
              .footer { margin-top: 30px; font-size: 12px; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <h3>Contact Details:</h3>
                <p><strong>Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${contactNumber}</p>
                <h3>Message:</h3>
                <p>${message}</p>
              </div>
              <div class="footer">
                <p>This email was sent from your website's contact form.</p>
                <p>© ${new Date().getFullYear()} Royal Crown Infra. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `,
      reply_to: email,
    };

    // Send email using Resend
    const result = await resend.emails.send(emailData);

    // Log the result for debugging
    console.log("Email sent successfully:", result);

    // Return success response
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log the error for debugging
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
