import { SiteContent } from "@/lib/content";

type Props = {
  content: SiteContent;
};

export function ContactForm({ content }: Props) {
  return (
    <form className="contact-form" action="/api/contact" method="post">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden-field" aria-hidden="true" />
      <label>
        {content.form.name}
        <input name="name" minLength={2} maxLength={120} required />
      </label>
      <label>
        {content.form.email}
        <input name="email" type="email" maxLength={160} required />
      </label>
      <label>
        {content.form.organization}
        <input name="organization" maxLength={160} />
      </label>
      <label>
        {content.form.subject}
        <input name="subject" minLength={3} maxLength={160} required />
      </label>
      <label>
        {content.form.message}
        <textarea name="message" minLength={20} maxLength={2000} rows={7} required />
      </label>
      <button className="button" type="submit">{content.form.submit}</button>
    </form>
  );
}
