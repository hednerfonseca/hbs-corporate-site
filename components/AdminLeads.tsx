"use client";

import { useState } from "react";

type AdminData = {
  ok: boolean;
  crmConfigured: boolean;
  leads: Record<string, unknown>[];
  proposals: Record<string, unknown>[];
  errors?: string[];
};

export function AdminLeads() {
  const [token, setToken] = useState("");
  const [data, setData] = useState<AdminData | null>(null);
  const [error, setError] = useState("");

  async function load() {
    setError("");
    setData(null);

    const response = await fetch("/api/admin/leads", {
      headers: { "x-admin-token": token }
    });

    const payload = await response.json();
    if (!response.ok) {
      setError(payload.error || "Unable to load records.");
      return;
    }

    setData(payload);
  }

  return (
    <div className="admin-panel">
      <label>
        Admin token
        <input type="password" value={token} onChange={(event) => setToken(event.target.value)} />
      </label>
      <button className="button" type="button" onClick={load}>Carregar CRM</button>
      {error && <p className="admin-error">{error}</p>}
      {data && (
        <div className="admin-results">
          <section>
            <h3>Pedidos de proposta</h3>
            <pre>{JSON.stringify(data.proposals, null, 2)}</pre>
          </section>
          <section>
            <h3>Leads</h3>
            <pre>{JSON.stringify(data.leads, null, 2)}</pre>
          </section>
          {!data.crmConfigured && <p className="admin-error">Supabase ainda não está configurado.</p>}
        </div>
      )}
    </div>
  );
}
