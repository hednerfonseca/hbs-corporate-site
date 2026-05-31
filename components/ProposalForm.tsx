import { SiteContent } from "@/lib/content";
import { Locale } from "@/lib/i18n";

type Props = {
  content: SiteContent;
  locale: Locale;
};

const labels: Record<Locale, { funnel: string; select: string; phone: string; country: string; budget: string; timeline: string }> = {
  pt: { funnel: "Funil", select: "Selecionar", phone: "Telefone / WhatsApp", country: "País", budget: "Orçamento previsto", timeline: "Prazo previsto" },
  fr: { funnel: "Parcours", select: "Sélectionner", phone: "Téléphone / WhatsApp", country: "Pays", budget: "Budget prévu", timeline: "Délai prévu" },
  en: { funnel: "Funnel", select: "Select", phone: "Phone / WhatsApp", country: "Country", budget: "Estimated budget", timeline: "Estimated timeline" }
};

export function ProposalForm({ content, locale }: Props) {
  const copy = labels[locale];

  return (
    <form className="contact-form proposal-form" action="/api/proposals" method="post">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden-field" aria-hidden="true" />
      <label>
        {copy.funnel}
        <select name="funnel" required>
          <option value="">{copy.select}</option>
          {content.funnels.items.map((item) => (
            <option key={item.title} value={item.title}>{item.title}</option>
          ))}
        </select>
      </label>
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
        {copy.phone}
        <input name="phone" maxLength={80} />
      </label>
      <label>
        {copy.country}
        <input name="country" maxLength={100} />
      </label>
      <label>
        {copy.budget}
        <input name="budget" maxLength={100} />
      </label>
      <label>
        {copy.timeline}
        <input name="timeline" maxLength={100} />
      </label>
      <label>
        {content.form.message}
        <textarea name="message" minLength={20} maxLength={2500} rows={7} required />
      </label>
      <button className="button" type="submit">{content.form.submit}</button>
    </form>
  );
}
