"use server";
import { Resend } from 'resend';
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY!);

interface SponsorFormValues {
    fullname: string;
    email: string;
    company: string;
    phone: string;
}

export const sendEmail = async (values: SponsorFormValues) => {
    await resend.emails.send({
        from: 'The M3 Community <onboarding@resend.dev>',
        to: 'dexkode4@gmail.com',
        subject: 'Welcome to The M3 Community!',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; text-align: center;">Welcome to The M3 Community!</h2>
            <p>Dear ${values.fullname},</p>
            <p>Thank you for your interest in sponsoring The M3 Community! We're excited to have you join our growing network of supporters.</p>
            <p>We've received your application and our team will review it shortly. We'll get back to you within 24 hours with next steps.</p>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #495057; margin-top: 0;">Your Application Details:</h3>
              <p><strong>Name:</strong> ${values.fullname}</p>
              <p><strong>Company:</strong> ${values.company}</p>
              <p><strong>Email:</strong> ${values.email}</p>
              <p><strong>Phone:</strong> ${values.phone}</p>
            </div>
            <p>If you have any questions, feel free to reply to this email or contact us directly.</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>The M3 Community Team</strong></p>
          </div>
        `,
      })
}
