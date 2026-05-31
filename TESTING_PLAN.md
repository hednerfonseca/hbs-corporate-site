# HORONHO Website Testing Plan

## 1. Build And Static Validation

- Run `npm install` in an environment with access to npm.
- Run `npm run build` and confirm all routes compile.
- Confirm sitemap and robots routes are generated.
- Search the codebase for incorrect brand spelling before every release.
- Confirm strategic routes exist: `/projectos-estrategicos`, `/matu-garandi` and `/ecossistema-horonho`.
- Confirm corporate routes exist: `/centro-financeiro-hbs` and `/assuntos-institucionais`.
- Search public website files for forbidden third-party associations, excluded operating models, ownership references and spelling errors.
- Confirm MATU GARANDI is presented only as a strategic cultural project owned and managed by HORONHO, never as a service or separate company.
- Confirm the About page includes Mission, Vision, Values and commitments to Guinea-Bissau, Africa and Innovation.
- Confirm the services section includes the seven approved Areas of Work.
- Confirm the site includes institutional credibility content under "Why Choose HORONHO".
- Confirm future integration labels are present: HBS Financial Center, Client Portal, Reserved Area, Digital Invoicing, Proformas and Online Payments.
- Confirm HBS Financial Hub is clearly marked as in development.
- Confirm Leadership includes Hedner Humberto Gomes da Fonseca as Founder with the approved profile areas.
- Confirm the Institutional Credibility page includes Founder profile, experience areas, cases/projects, certificates/training placeholders and gallery placeholder.
- Confirm the Request Proposal page includes five commercial funnels and each funnel has a clear action.
- Confirm the mobile header uses the hamburger menu and remains keyboard accessible.
- Confirm GA4 and Microsoft Clarity load only when their public environment variables are configured.
- Confirm contact form writes to `leads` when Supabase is configured.
- Confirm proposal form writes to `proposal_requests` and mirrors into `leads`.
- Confirm `/pt/admin` requires `ADMIN_TOKEN` before displaying CRM records.

## 2. Responsive QA

- Test homepage, services, strategic projects, MATU GARANDI, ecosystem, HBS Financial Hub, Institutional Affairs, partnerships and contact pages on mobile, tablet and desktop.
- Test Institutional Credibility and Request Proposal pages on mobile, tablet and desktop.
- Confirm the hero text remains readable over the image.
- Confirm navigation wraps cleanly on small screens.
- Confirm cards and project blocks do not overlap or clip text.

## 3. Accessibility QA

- Test keyboard navigation through header, language selector, CTAs and contact form.
- Confirm focus states are visible.
- Confirm colour contrast on the hero, buttons and footer.
- Confirm all form inputs have labels.

## 4. Contact Form QA

- Submit a valid request and confirm the API returns success.
- Submit one proposal request per funnel and confirm records appear in Supabase.
- Submit invalid email, short name, short subject and short message.
- Submit the hidden anti-spam field and confirm the system does not process it as a real lead.
- After Supabase integration, confirm data is written only to the approved table with protected access rules.

## 5. SEO And Sharing QA

- Validate page titles and descriptions for PT, FR and EN.
- Validate SEO keywords for Guinea-Bissau, Business Consulting Guinea-Bissau, Strategic Consulting Africa, Institutional Affairs, Digital Transformation and Artificial Intelligence Africa.
- Confirm Open Graph image renders in LinkedIn, WhatsApp and Facebook previews.
- Confirm canonical paths are correct.
- Confirm `Organization` schema validates.

## 6. Security QA

- Add rate limiting or Turnstile before public launch.
- Confirm environment variables are not exposed client-side unless intentionally prefixed with `NEXT_PUBLIC_`.
- Confirm no secrets are committed.
- Confirm privacy and terms pages are reviewed before production.
- Confirm `SUPABASE_SERVICE_ROLE_KEY` and `ADMIN_TOKEN` exist only in Vercel environment variables.
