import Link from "next/link";
import { Locale, localizePath } from "@/lib/i18n";

type Props = {
  locale: Locale;
  title: string;
  text: string;
  action: string;
};

export function PartnerCTA({ locale, title, text, action }: Props) {
  return (
    <section className="partner-cta">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <Link className="button" href={localizePath(locale, "/contacto")}>
        {action}
      </Link>
    </section>
  );
}
