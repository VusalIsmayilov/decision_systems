import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "contact@dataofis.az";
const FROM_EMAIL = "diagnostic@send.dataofis.az";

type IntakePayload = {
  name: string;
  company: string;
  role: string;
  decision: string;
  inconsistencyWhere: string[];
  howHappens: string;
  email: string;
};

function asText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validateEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function parsePayload(body: unknown): IntakePayload | null {
  if (!body || typeof body !== "object") return null;
  const obj = body as Record<string, unknown>;
  const inconsistencyRaw = Array.isArray(obj.inconsistencyWhere) ? obj.inconsistencyWhere : [];
  const inconsistencyWhere = inconsistencyRaw
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter(Boolean);

  const payload: IntakePayload = {
    name: asText(obj.name),
    company: asText(obj.company),
    role: asText(obj.role),
    decision: asText(obj.decision),
    inconsistencyWhere,
    howHappens: asText(obj.howHappens),
    email: asText(obj.email),
  };

  if (
    !payload.name ||
    !payload.company ||
    !payload.role ||
    !payload.decision ||
    !payload.howHappens ||
    !payload.email ||
    payload.inconsistencyWhere.length === 0
  ) {
    return null;
  }

  if (!validateEmail(payload.email)) return null;
  return payload;
}

function buildEmailText(payload: IntakePayload): string {
  return [
    `Name: ${payload.name}`,
    `Company: ${payload.company}`,
    `Your role: ${payload.role}`,
    "",
    "Which recurring decision produces inconsistent outcomes?",
    payload.decision,
    "",
    "Where inconsistency appears:",
    ...payload.inconsistencyWhere.map((v) => `- ${v}`),
    "",
    "How this decision currently happens:",
    payload.howHappens,
    "",
    `Email: ${payload.email}`,
  ].join("\n");
}

export async function POST(req: Request) {
  try {
    const payload = parsePayload(await req.json().catch(() => null));
    if (!payload) {
      return NextResponse.json({ ok: false, error: "Invalid form data." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ ok: false, error: "RESEND_API_KEY is missing on the server." }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    const subject = `Decision Diagnostic Request — ${payload.company} — ${payload.name}`;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: payload.email,
      subject,
      text: buildEmailText(payload),
    });

    if (error) {
      const message = error.message || "Failed to send request.";
      return NextResponse.json({ ok: false, error: message }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unexpected server error.";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
