import Link from "next/link";
import { Locale, locales } from "@/lib/i18n";

type Props = {
  locale: Locale;
  pathname?: string;
};

export function LanguageSwitcher({ locale, pathname = "" }: Props) {
  const cleanPath = pathname.replace(/^\/(pt|fr|en)/, "") || "";

  return (
    <div className="language-switcher" aria-label="Language selector">
      {locales.map((item) => (
        <Link key={item} href={`/${item}${cleanPath}`} aria-current={item === locale ? "page" : undefined}>
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
