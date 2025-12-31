import nodemailer from "nodemailer";

const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

const formatEmailBody = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([label, value]) => `${label}: ${value || "—"}`)
    .join("\n");

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
    const message = String(body.researchFocus ?? "").trim();

    if (!firstName || !email || !message) {
      response.status(400).json({ ok: false, error: "Missing required fields." });
      return;
    }

    const name = `${firstName}${lastName ? ` ${lastName}` : ""}`;
    const timestamp = new Date().toISOString();

    const emailBody = formatEmailBody({
      Name: name,
      Email: email,
      Phone: String(body.phone ?? "").trim(),
      Position: String(body.position ?? "").trim(),
      Institution: String(body.institution ?? "").trim(),
      Department: String(body.department ?? "").trim(),
      "Address Line 1": String(body.address1 ?? "").trim(),
      "Address Line 2": String(body.address2 ?? "").trim(),
      State: String(body.state ?? "").trim(),
      "Zip Code": String(body.zipCode ?? "").trim(),
      Country: String(body.country ?? "").trim(),
      "Website or LinkedIn": String(body.websiteOrLinkedIn ?? "").trim(),
      "Research Focus": String(body.researchFocus ?? "").trim(),
      Publications: String(body.publications ?? "").trim(),
      "Consent Accuracy": String(body.consentAccuracy ?? false),
      "Consent Data Processing": String(body.consentDataProcessing ?? false),
      "Consent No Guarantee": String(body.consentNoGuarantee ?? false),
      "Consent Privacy Policy": String(body.consentPrivacyPolicy ?? false),
      Page: String(body.pageUrl ?? "").trim(),
      "User Agent": String(request.headers["user-agent"] ?? "").trim(),
      Submitted: timestamp,
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
      subject: `RealHand Sponsorship Application: ${name}`,
      text: emailBody,
    });

    response.status(200).json({ ok: true });
  } catch (error: any) {
    response.status(500).json({ ok: false, error: error?.message ?? "Unexpected error" });
  }
}
