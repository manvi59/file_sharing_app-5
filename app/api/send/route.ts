import { EmailTemplate } from '@/app/_components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response =await req.json();
    const data = await resend.emails.send({
      from: 'file_app@resend.dev',
      to: ['manviyogi59@gmail.com'],
      subject: 'Sending Email using React Email',
      react: EmailTemplate({ firstName: 'Parnav' }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
