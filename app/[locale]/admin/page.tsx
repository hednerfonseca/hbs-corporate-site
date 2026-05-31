import { AdminLeads } from "@/components/AdminLeads";

export default function AdminPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-intro">
          <h1>Admin HORONHO</h1>
          <p>Área simples para consultar leads e pedidos de proposta guardados no Supabase.</p>
        </div>
      </section>
      <section className="section narrow">
        <AdminLeads />
      </section>
    </main>
  );
}
