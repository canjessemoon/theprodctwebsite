import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: 'contact@yourdomain.com', // Use your verified domain or Resend sandbox
      to: 'jdmoon@gmail.com',
      subject: 'New Contact Form Submission',
      replyTo: email,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br/>${message}</p>`
    });

    return NextResponse.json({ message: 'Email sent!', data }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
