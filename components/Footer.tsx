import Link from "next/link";
import { SiteContent } from "@/lib/content";
import { Locale, localizePath } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: SiteContent;
};

export function Footer({ locale, content }: Props) {
  return (
    <footer className="site-footer">
      <div>
        <strong>HORONHO BUSINESS SOLUTION, SARL</strong>
        <p>{content.footer.summary}</p>
      </div>
      <div className="footer-links">
        <Link href={localizePath(locale, "/privacidade")}>{content.pages.privacidade.title}</Link>
        <Link href={localizePath(locale, "/termos")}>{content.pages.termos.title}</Link>
      </div>
      <p className="copyright">© {new Date().getFullYear()} HORONHO. {content.footer.rights}</p>
    </footer>
  );
}
