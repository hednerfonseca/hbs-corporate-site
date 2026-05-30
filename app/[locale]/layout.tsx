import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { content } from "@/lib/content";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const pageContent = content[locale];

  return (
    <>
      <Header locale={locale} content={pageContent} />
      {children}
      <Footer locale={locale} content={pageContent} />
    </>
  );
}
