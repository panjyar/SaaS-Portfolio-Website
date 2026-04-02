import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { fullname, companyname, email, subject, message } = await req.json();

    // Configure the SMTP transporter using Microsoft Office 365
    // Ensure you have SMTP_EMAIL and SMTP_PASSWORD set up in your .env or .env.local file
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports like 587
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        // Outlook requires this to bypass some strict SSLv3 restrictions
        ciphers: 'SSLv3',
        rejectUnauthorized: false
      }
    });

    const mailOptions = {
      from: process.env.SMTP_EMAIL, // This MUST be the same as the authenticated user for Office365
      to: 'contact@livnsense.com', // Your destination email
      replyTo: email, // This allows you to click "Reply" and send directly to the customer
      subject: `New Contact Request: ${subject || 'No Subject'}`,
      text: `
Name: ${fullname || ''}
Company: ${companyname || ''}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
      // HTML version
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #00A755;">New Contact Form Submission</h2>
          <table style="width: 100%; max-width: 600px; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold; width: 100px;">Name:</td>
              <td style="padding: 10px 0;">${fullname || ''}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Company:</td>
              <td style="padding: 10px 0;">${companyname || ''}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Email:</td>
              <td style="padding: 10px 0;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 10px 0; font-weight: bold;">Subject:</td>
              <td style="padding: 10px 0;">${subject}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 20px 0 10px 0; font-weight: bold;">Message:</td>
            </tr>
            <tr>
              <td colspan="2" style="padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                ${message ? message.replace(/\n/g, '<br>') : ''}
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email. Check your SMTP configuration.', error: error.message },
      { status: 500 }
    );
  }
}
