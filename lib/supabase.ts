type SupabaseInsertResult = {
  ok: boolean;
  configured: boolean;
  error?: string;
};

function config() {
  return {
    url: process.env.SUPABASE_URL,
    serviceRoleKey: process.env.SUPABASE_SERVICE_ROLE_KEY
  };
}

export function isSupabaseConfigured() {
  const { url, serviceRoleKey } = config();
  return Boolean(url && serviceRoleKey);
}

export async function insertRecord(table: string, payload: Record<string, unknown>): Promise<SupabaseInsertResult> {
  const { url, serviceRoleKey } = config();

  if (!url || !serviceRoleKey) {
    return { ok: false, configured: false, error: "Supabase is not configured." };
  }

  const response = await fetch(`${url}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      "Content-Type": "application/json",
      Prefer: "return=representation"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return { ok: false, configured: true, error: await response.text() };
  }

  return { ok: true, configured: true };
}

export async function listRecords(table: string, limit = 50) {
  const { url, serviceRoleKey } = config();

  if (!url || !serviceRoleKey) {
    return { ok: false, configured: false, records: [], error: "Supabase is not configured." };
  }

  const response = await fetch(`${url}/rest/v1/${table}?select=*&order=created_at.desc&limit=${limit}`, {
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`
    },
    cache: "no-store"
  });

  if (!response.ok) {
    return { ok: false, configured: true, records: [], error: await response.text() };
  }

  return { ok: true, configured: true, records: await response.json() };
}
