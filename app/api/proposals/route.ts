import { NextResponse } from "next/server";
import { insertRecord } from "@/lib/supabase";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const honeypot = clean(formData.get("website"));

  if (honeypot) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload = {
    funnel: clean(formData.get("funnel")),
    name: clean(formData.get("name")),
    email: clean(formData.get("email")),
    organization: clean(formData.get("organization")),
    phone: clean(formData.get("phone")),
    country: clean(formData.get("country")),
    budget: clean(formData.get("budget")),
    timeline: clean(formData.get("timeline")),
    message: clean(formData.get("message"))
  };

  const errors: string[] = [];

  if (!payload.funnel) errors.push("Invalid funnel.");
  if (payload.name.length < 2 || payload.name.length > 120) errors.push("Invalid name.");
  if (!emailPattern.test(payload.email) || payload.email.length > 160) errors.push("Invalid email.");
  if (payload.organization.length > 160) errors.push("Invalid organization.");
  if (payload.message.length < 20 || payload.message.length > 2500) errors.push("Invalid message.");

  if (errors.length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const proposal = await insertRecord("proposal_requests", {
    ...payload,
    source: "website_proposal"
  });

  const lead = await insertRecord("leads", {
    funnel: payload.funnel,
    name: payload.name,
    email: payload.email,
    organization: payload.organization || null,
    subject: `Proposal request: ${payload.funnel}`,
    message: payload.message,
    source: "website_proposal"
  });

  if (!proposal.ok) console.warn("Proposal request was not stored", proposal.error);
  if (!lead.ok) console.warn("Lead mirror was not stored", lead.error);

  return NextResponse.json({ ok: true, stored: proposal.ok, leadStored: lead.ok, crmConfigured: proposal.configured }, { status: 202 });
}
