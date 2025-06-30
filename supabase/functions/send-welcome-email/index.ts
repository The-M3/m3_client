// import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

// const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

// interface SponsorData {
//   fullname: string
//   email: string
//   company: string
//   phone: string
// }

// serve(async (req: Request) => {
//   try {
//     const { record }: { record: SponsorData } = await req.json()
    
//     if (!RESEND_API_KEY) {
//       throw new Error('RESEND_API_KEY is not set')
//     }

//     // Send welcome email using Resend
//     const emailResponse = await fetch('https://api.resend.com/emails', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${RESEND_API_KEY}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         from: 'The M3 Community <noreply@the-m3-community.netlify.app>',
//         to: [record.email],
//         subject: 'Welcome to The M3 Community!',
//         html: `
//           <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//             <h2 style="color: #333; text-align: center;">Welcome to The M3 Community!</h2>
//             <p>Dear ${record.fullname},</p>
//             <p>Thank you for your interest in sponsoring The M3 Community! We're excited to have you join our growing network of supporters.</p>
//             <p>We've received your application and our team will review it shortly. We'll get back to you within 24 hours with next steps.</p>
//             <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
//               <h3 style="color: #495057; margin-top: 0;">Your Application Details:</h3>
//               <p><strong>Name:</strong> ${record.fullname}</p>
//               <p><strong>Company:</strong> ${record.company}</p>
//               <p><strong>Email:</strong> ${record.email}</p>
//               <p><strong>Phone:</strong> ${record.phone}</p>
//             </div>
//             <p>If you have any questions, feel free to reply to this email or contact us directly.</p>
//             <p style="margin-top: 30px;">Best regards,<br><strong>The M3 Community Team</strong></p>
//           </div>
//         `,
//       }),
//     })

//     if (!emailResponse.ok) {
//       const errorData = await emailResponse.text()
//       throw new Error(`Resend API error: ${errorData}`)
//     }

//     const emailResult = await emailResponse.json()
//     console.log('Email sent successfully:', emailResult)

//     return new Response(
//       JSON.stringify({ 
//         message: 'Welcome email sent successfully',
//         emailId: emailResult.id 
//       }),
//       { 
//         headers: { 'Content-Type': 'application/json' },
//         status: 200 
//       }
//     )
//   } catch (error: any) {
//     console.error('Error sending email:', error)
//     return new Response(
//       JSON.stringify({ error: error?.message || 'Unknown error' }),
//       { 
//         headers: { 'Content-Type': 'application/json' },
//         status: 500 
//       }
//     )
//   }
// })
