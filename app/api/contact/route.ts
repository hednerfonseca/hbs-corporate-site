import { NextResponse } from "next/server";
import { insertRecord } from "@/lib/supabase";

type ContactPayload = {
  funnel?: string;
  name: string;
  email: string;
  organization?: string;
  subject: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function validate(payload: ContactPayload) {
  const errors: string[] = [];

  if (payload.name.length < 2 || payload.name.length > 120) errors.push("Invalid name.");
  if (!emailPattern.test(payload.email) || payload.email.length > 160) errors.push("Invalid email.");
  if (payload.organization && payload.organization.length > 160) errors.push("Invalid organization.");
  if (payload.subject.length < 3 || payload.subject.length > 160) errors.push("Invalid subject.");
  if (payload.message.length < 20 || payload.message.length > 2000) errors.push("Invalid message.");

  return errors;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const honeypot = clean(formData.get("website"));

  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload: ContactPayload = {
    funnel: clean(formData.get("funnel")) || "general_contact",
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    organization: clean(formData.get("organization")),
    subject: clean(formData.get("subject")),
    message: clean(formData.get("message"))
  };

  const errors = validate(payload);
  if (errors.length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const result = await insertRecord("leads", {
    funnel: payload.funnel,
    name: payload.name,
    email: payload.email,
    organization: payload.organization || null,
    subject: payload.subject,
    message: payload.message,
    source: "website_contact"
  });

  if (!result.ok) {
    console.warn("HORONHO contact request was not stored", result.error);
  }

  return NextResponse.json({ ok: true, stored: result.ok, crmConfigured: result.configured }, { status: 202 });
}
