import Link from "next/link";
import { SiteContent } from "@/lib/content";
import { Locale, localizePath } from "@/lib/i18n";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  locale: Locale;
  content: SiteContent;
};

function NavigationLinks({ locale, content }: Props) {
  return (
    <>
      {content.nav.map((item) => (
        <Link key={item.href} href={localizePath(locale, item.href)}>
          {item.label}
        </Link>
      ))}
    </>
  );
}

export function Header({ locale, content }: Props) {
  return (
    <header className="site-header">
      <Link href={localizePath(locale)} className="brand" aria-label="HORONHO home">
        <img src="/brand/horonho-logo-clean.png" alt="HORONHO Business Solution, SARL" />
        <span>HORONHO</span>
        <small>Business Solution</small>
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">
        <NavigationLinks locale={locale} content={content} />
      </nav>
      <div className="header-actions">
        <LanguageSwitcher locale={locale} />
        <Link className="button small" href={localizePath(locale, "/solicitar-proposta")}>
          {content.cta}
        </Link>
      </div>
      <details className="mobile-menu">
        <summary aria-label="Open navigation"><span></span><span></span><span></span></summary>
        <nav aria-label="Mobile navigation">
          <NavigationLinks locale={locale} content={content} />
          <LanguageSwitcher locale={locale} />
          <Link className="button small" href={localizePath(locale, "/solicitar-proposta")}>
            {content.cta}
          </Link>
        </nav>
      </details>
    </header>
  );
}
