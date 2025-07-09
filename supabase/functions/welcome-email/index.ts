// const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

// Deno.serve(async (req: Request) => {
//   const { record } = await req.json()
  
//   const email = record.email
//   const name = record.fullname

//   const res = await fetch('https://api.resend.com/emails', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${RESEND_API_KEY}`,
//     },
//     body: JSON.stringify({
//       from: 'The M3 Community <noreply@the-m3-community.netlify.app>',
//       to: email,
//       subject: 'Welcome to The M3 Community!',
//       html: `<strong>Hello ${name}, welcome to M3!</strong>`,
//     }),
//   })

//   const data = await res.json()

//   return new Response(JSON.stringify(data), {
//     status: 200,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
// })
