# HORONHO Website Testing Plan

## 1. Build And Static Validation

- Run `npm install` in an environment with access to npm.
- Run `npm run build` and confirm all routes compile.
- Confirm sitemap and robots routes are generated.
- Search the codebase for incorrect brand spelling before every release.

## 2. Responsive QA

- Test homepage, services, projects, history platform, partnerships and contact pages on mobile, tablet and desktop.
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
- Submit invalid email, short name, short subject and short message.
- Submit the hidden anti-spam field and confirm the system does not process it as a real lead.
- After Supabase integration, confirm data is written only to the approved table with protected access rules.

## 5. SEO And Sharing QA

- Validate page titles and descriptions for PT, FR and EN.
- Confirm Open Graph image renders in LinkedIn, WhatsApp and Facebook previews.
- Confirm canonical paths are correct.
- Confirm `Organization` schema validates.

## 6. Security QA

- Add rate limiting or Turnstile before public launch.
- Confirm environment variables are not exposed client-side unless intentionally prefixed with `NEXT_PUBLIC_`.
- Confirm no secrets are committed.
- Confirm privacy and terms pages are reviewed before production.
