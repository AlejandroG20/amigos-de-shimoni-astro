import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();
  const name = (data.get('name') as string)?.trim();
  const email = (data.get('email') as string)?.trim();
  const message = (data.get('message') as string)?.trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Todos los campos son obligatorios.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: 'El correo electrónico no es válido.' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { error } = await resend.emails.send({
    from: import.meta.env.EMAIL_FROM,
    to: import.meta.env.EMAIL_TO,
    replyTo: email,
    subject: `Nuevo mensaje de contacto de ${name}`,
    html: `
      <h2>Nuevo mensaje desde el formulario web</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Mensaje:</strong></p>
      <blockquote style="border-left:3px solid #ccc;padding-left:12px;color:#555">${message.replace(/\n/g, '<br>')}</blockquote>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error: 'No se pudo enviar el mensaje. Inténtalo de nuevo.' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
