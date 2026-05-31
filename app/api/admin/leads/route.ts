import { NextResponse } from "next/server";
import { listRecords } from "@/lib/supabase";

function authorized(request: Request) {
  const expected = process.env.ADMIN_TOKEN;
  const provided = request.headers.get("x-admin-token");
  return Boolean(expected && provided && expected === provided);
}

export async function GET(request: Request) {
  if (!authorized(request)) {
    return NextResponse.json({ ok: false, error: "Unauthorized." }, { status: 401 });
  }

  const [leads, proposals] = await Promise.all([
    listRecords("leads", 100),
    listRecords("proposal_requests", 100)
  ]);

  return NextResponse.json({
    ok: leads.ok && proposals.ok,
    crmConfigured: leads.configured && proposals.configured,
    leads: leads.records,
    proposals: proposals.records,
    errors: [leads.error, proposals.error].filter(Boolean)
  });
}
