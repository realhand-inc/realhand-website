import nodemailer from "nodemailer";

const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

const formatEmailBody = (data: {
  name: string;
  email: string;
  message: string;
  pageUrl?: string;
  userAgent?: string;
  timestamp: string;
}) => {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Message:`,
    data.message,
    "",
    `Page: ${data.pageUrl ?? "unknown"}`,
    `User Agent: ${data.userAgent ?? "unknown"}`,
    `Submitted: ${data.timestamp}`,
  ].join("\n");
};

export default async function handler(request: any, response: any) {
  if (request.method !== "POST") {
    response.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const smtpHost = getEnv("SMTP_HOST");
    const smtpPort = Number(getEnv("SMTP_PORT"));
    const smtpUser = getEnv("SMTP_USER");
    const smtpPass = getEnv("SMTP_PASS");
    const senderEmail = getEnv("CONTACT_SENDER_EMAIL");
    const recipients = getEnv("CONTACT_RECIPIENT_EMAILS").split(",").map((email) => email.trim());

    const body = typeof request.body === "string" ? JSON.parse(request.body) : request.body ?? {};
    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const message = String(body.message ?? "").trim();
    const pageUrl = String(body.pageUrl ?? "").trim();
    const userAgent = String(request.headers["user-agent"] ?? "").trim();

    if (!firstName || !email || !message) {
      response.status(400).json({ ok: false, error: "Missing required fields." });
      return;
    }

    const name = `${firstName}${lastName ? ` ${lastName}` : ""}`;
    const timestamp = new Date().toISOString();
    const subject = `RealHand Contact Form: ${name}`;

    const emailBody = formatEmailBody({
      name,
      email,
      message,
      pageUrl,
      userAgent,
      timestamp,
    });

    const transport = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transport.sendMail({
      from: senderEmail,
      to: recipients,
      replyTo: email,
      subject,
      text: emailBody,
    });

    response.status(200).json({ ok: true });
  } catch (error: any) {
    response.status(500).json({ ok: false, error: error?.message ?? "Unexpected error" });
  }
}
