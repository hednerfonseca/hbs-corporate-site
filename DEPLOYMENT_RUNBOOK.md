# HORONHO Operational Activation Runbook

## Objective

Activate the HORONHO website as an operational commercial system with analytics, CRM, proposal capture and a simple admin view.

## 1. Supabase Project

Create one Supabase project dedicated to HORONHO.

Required values:

```bash
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxxxx
```

Security rule: `SUPABASE_SERVICE_ROLE_KEY` must only be stored in Vercel environment variables. Never expose it in frontend code, GitHub, screenshots or shared documents.

## 2. Supabase SQL

Open Supabase SQL Editor and run the SQL in `SUPABASE_SETUP.md`.

Expected tables:

- `leads`
- `proposal_requests`

Expected security state:

- Row Level Security enabled on both tables.
- No public insert/update/select policy required at this stage.
- Writes happen through the website server API using the service role key.

## 3. Vercel Environment Variables

Add these variables in Vercel Project Settings.

```bash
NEXT_PUBLIC_SITE_URL=https://your-production-domain.com
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
SUPABASE_URL=https://xxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxxxx
ADMIN_TOKEN=use-a-long-private-random-token
```

Rules:

- `NEXT_PUBLIC_*` values can be visible in the browser.
- `SUPABASE_SERVICE_ROLE_KEY` and `ADMIN_TOKEN` are private server-side values.
- Use the same variables for Production, Preview and Development only when intentionally needed.

## 4. Redeploy

After saving variables in Vercel:

1. Open the Vercel project.
2. Go to Deployments.
3. Select the latest deployment.
4. Click Redeploy.

Reason: environment variables are applied at build/runtime after redeploy.

## 5. Proposal Funnel Test

Open:

```text
/pt/solicitar-proposta
```

Submit one test request for each funnel:

- Consultoria Empresarial
- Assuntos Institucionais
- Representação Comercial
- MATU GARANDI
- Centro Financeiro HBS

Expected result in Supabase:

- `proposal_requests`: one full record per submission.
- `leads`: one mirrored lead per submission.

## 6. Contact Form Test

Open:

```text
/pt/contacto
```

Submit one general contact request.

Expected result:

- `leads`: one record with `source = website_contact`.

## 7. Admin Test

Open:

```text
/pt/admin
```

Use the value of `ADMIN_TOKEN`.

Expected result:

- Proposal requests list appears.
- Leads list appears.
- If Supabase is not configured, the page shows a controlled message rather than exposing secrets.

## 8. Analytics Test

After deployment:

- Open the website in a private browser window.
- Visit `/pt`, `/pt/solicitar-proposta`, `/pt/credibilidade-institucional`, `/pt/matu-garandi` and `/pt/assuntos-institucionais`.
- Confirm realtime traffic in Google Analytics.
- Confirm session capture in Microsoft Clarity.

## 9. Acceptance Criteria

The activation is complete only when:

- A real proposal request reaches `proposal_requests`.
- A mirrored lead reaches `leads`.
- `/pt/admin` displays both datasets with `ADMIN_TOKEN`.
- Google Analytics receives realtime traffic.
- Microsoft Clarity records at least one session.
- No private key appears in browser source, GitHub or public logs.

## 10. Next Technical Phase

After these checks pass, the next phase should be:

- Lead status management.
- CRM notes and follow-up history.
- File upload for proofs and documents.
- Client area authentication.
- HBS Financial Hub operational workflow.
- Full admin dashboard with role-based access.
