import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, checkIn, checkOut, guests, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',  // Using Resend's default sender
      to: ['nona.dzhurkova@hotmail.com'], // Replace with your email where you want to receive booking requests
      reply_to: email, // Add reply-to so you can reply directly to the guest
      subject: 'New Availability Request',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Availability Request</h2>
          <div style="margin: 20px 0;">
            <p><strong>Guest Name:</strong> ${name}</p>
            <p><strong>Guest Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            <p><strong>Check-in Date:</strong> ${new Date(checkIn).toLocaleDateString()}</p>
            <p><strong>Check-out Date:</strong> ${new Date(checkOut).toLocaleDateString()}</p>
            <p><strong>Number of Guests:</strong> ${guests}</p>
            ${message ? `<p><strong>Message:</strong> ${message}</p>` : ''}
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 