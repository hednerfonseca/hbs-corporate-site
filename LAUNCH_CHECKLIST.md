# HORONHO Website Launch Checklist

## Strategic Checks

- [ ] Confirm final production domain, preferably `horonho.com` or another HORONHO-owned domain.
- [ ] Confirm legal company name, registration data, address and official contact channels.
- [ ] Confirm HORONHO is presented as an independent company.
- [ ] Confirm excluded third-party projects do not appear anywhere in public website content, visuals, metadata or project positioning.
- [ ] Confirm MATU GARANDI is presented as a strategic cultural project owned and managed by HORONHO, not as a service or separate company.
- [ ] Confirm the website communicates international-level institutional positioning.
- [ ] Confirm the About page includes Mission, Vision, Values and commitments to Guinea-Bissau, Africa and Innovation.
- [ ] Confirm MATU GARANDI includes project history, objectives, cultural impact, future publications, digital library and National Memory Center positioning.
- [ ] Confirm future integrations are presented as planned architecture, not active products.
- [ ] Confirm HBS Financial Hub is shown as in development and not as an active financial service.
- [ ] Confirm the Institutional Affairs page includes government relations, business diplomacy, international cooperation, institutional representation and stakeholder management.
- [ ] Confirm Leadership profile displays Hedner Humberto Gomes da Fonseca as Founder.
- [ ] Confirm all investor and international partner language is strategic, credible and not exaggerated.
- [ ] Decide whether prices or commercial offers should appear publicly in the institutional site.
- [ ] Review Portuguese, French and English copy with an institutional reviewer.

## Technical Checks

- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel.
- [ ] Connect contact form to Supabase or approved CRM.
- [ ] Add rate limiting or Turnstile before public launch.
- [ ] Configure transactional email for contact notifications.
- [ ] Add analytics with privacy-conscious defaults.
- [ ] Validate sitemap and robots output.

## Quality Checks

- [ ] Run `npm run build` before deploy.
- [ ] Test all pages on mobile, tablet and desktop.
- [ ] Test form validation with valid, invalid and spam-like submissions.
- [ ] Check accessibility contrast and keyboard navigation.
- [ ] Verify Open Graph preview on LinkedIn, Facebook and WhatsApp.
- [ ] Run Lighthouse for performance, accessibility, SEO and best practices.

## Deployment Checks

- [ ] Deploy to Vercel preview.
- [ ] Review preview with leadership and institutional stakeholders.
- [ ] Connect production domain only after approval.
- [ ] Monitor errors and form submissions during the first 30 days.
