# HORONHO Website Launch Checklist

## Strategic Checks

- [ ] Confirm final production domain, preferably `horonho.com` or another HORONHO-owned domain.
- [ ] Confirm legal company name, registration data, address and official contact channels.
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
