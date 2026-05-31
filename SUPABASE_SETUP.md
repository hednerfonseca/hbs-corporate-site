# HORONHO CRM And Analytics Setup

## Environment Variables

Add these variables in Vercel Project Settings.

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_PROJECT_ID=xxxxxxxxxx
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
ADMIN_TOKEN=choose-a-long-private-token
```

Never expose `SUPABASE_SERVICE_ROLE_KEY` in client-side code.

## Supabase Tables

Run this SQL in Supabase SQL Editor.

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  funnel text,
  name text not null,
  email text not null,
  organization text,
  subject text,
  message text not null,
  source text not null default 'website'
);

create table if not exists public.proposal_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  funnel text not null,
  name text not null,
  email text not null,
  organization text,
  phone text,
  country text,
  budget text,
  timeline text,
  message text not null,
  source text not null default 'website_proposal'
);

alter table public.leads enable row level security;
alter table public.proposal_requests enable row level security;
```

The website writes with the server-side service role key. Do not create public insert policies unless there is a deliberate reason.

## Admin Area

Admin page:

```text
/pt/admin
```

Use the value of `ADMIN_TOKEN` in the password field. This is a simple operational dashboard, not a full back-office.

## Recommended Next Tables

- `partners`
- `documents`
- `payment_references`
- `client_accounts`
- `uploaded_proofs`
- `invoices`
```
