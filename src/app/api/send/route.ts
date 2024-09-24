import { EmailTemplate } from '../../../components/email-template'; 
import { Resend } from 'resend';

const resend = new Resend("re_DT9xfskb_2moAbo1LZXNNXEyiNpcXX9C2");

export async function POST(req: Request) {
  try {
    // Parse the form data from the request body
    const formData = await req.json();

    const { firstName, lastName, email, phone, company, jobTitle } = formData;

    // Send the email with the form data
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: "dtamilselvan1004@gmail.com",
      subject: 'Demo Request Submission',
      react: EmailTemplate({ firstName, lastName, email, phone, company, jobTitle }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
