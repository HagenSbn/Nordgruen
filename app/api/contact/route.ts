import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const { name, telefon, email, nachricht } = await req.json();

  if (!name || !email || !nachricht) {
    return NextResponse.json(
      { error: "Bitte alle Pflichtfelder ausfüllen." },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
  await transporter.sendMail({
    from: `"Nordgrün Website" <${process.env.SMTP_USER}>`,
    to: "info@nordgruen.com",
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: [
      `Name: ${name}`,
      `Telefon: ${telefon || "–"}`,
      `E-Mail: ${email}`,
      "",
      `Nachricht:`,
      nachricht,
    ].join("\n"),
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Telefon:</strong> ${telefon || "–"}</p>
      <p><strong>E-Mail:</strong> <a href="mailto:${email}">${email}</a></p>
      <br/>
      <p><strong>Nachricht:</strong></p>
      <p style="white-space:pre-wrap">${nachricht}</p>
    `,
  });

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "SMTP-Fehler";
    console.error("SMTP error:", message);
    return NextResponse.json({ error: `E-Mail konnte nicht gesendet werden: ${message}` }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
