const TOKEN_ENDPOINT = "https://oauth2.googleapis.com/token";
const GMAIL_SEND_ENDPOINT = "https://gmail.googleapis.com/gmail/v1/users/me/messages/send";

const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

const encodeBase64Url = (input: string) =>
  Buffer.from(input, "utf8")
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

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

const buildRawEmail = (params: {
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  body: string;
}) => {
  const headers = [
    `From: ${params.from}`,
    `To: ${params.to.join(", ")}`,
    `Reply-To: ${params.replyTo}`,
    `Subject: ${params.subject}`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
  ];

  return `${headers.join("\n")}\n\n${params.body}`;
};

export default async function handler(request: any, response: any) {
  if (request.method !== "POST") {
    response.status(405).json({ ok: false, error: "Method not allowed" });
    return;
  }

  try {
    const clientId = getEnv("GOOGLE_CLIENT_ID");
    const clientSecret = getEnv("GOOGLE_CLIENT_SECRET");
    const refreshToken = getEnv("GOOGLE_REFRESH_TOKEN");
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

    const tokenResponse = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      response.status(500).json({ ok: false, error: "Failed to fetch access token.", details: errorText });
      return;
    }

    const tokenJson = await tokenResponse.json();
    const accessToken = tokenJson.access_token;

    const rawMessage = buildRawEmail({
      from: senderEmail,
      to: recipients,
      replyTo: email,
      subject,
      body: emailBody,
    });

    const gmailResponse = await fetch(GMAIL_SEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        raw: encodeBase64Url(rawMessage),
      }),
    });

    if (!gmailResponse.ok) {
      const errorText = await gmailResponse.text();
      response.status(500).json({ ok: false, error: "Failed to send email.", details: errorText });
      return;
    }

    response.status(200).json({ ok: true });
  } catch (error: any) {
    response.status(500).json({ ok: false, error: error?.message ?? "Unexpected error" });
  }
}
