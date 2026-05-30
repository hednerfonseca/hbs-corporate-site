import Link from "next/link";
import { SiteContent } from "@/lib/content";
import { Locale, localizePath } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export function Header({ locale, content }: Props) {
  return (
    <header className="site-header">
      <Link href={localizePath(locale)} className="brand" aria-label="HORONHO home">
        <span>HORONHO</span>
        <small>Business Solution</small>
      </Link>
      <nav aria-label="Main navigation">
        {content.nav.map((item) => (
          <Link key={item.href} href={localizePath(locale, item.href)}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageSwitcher locale={locale} />
        <Link className="button small" href={localizePath(locale, "/contacto")}>
          {content.cta}
        </Link>
      </div>
    </header>
  );
}
