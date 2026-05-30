import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";
import { content } from "@/lib/content";
import { isLocale } from "@/lib/i18n";

export type PageKey = "sobre" | "servicos" | "projectos" | "matu" | "ecossistema" | "centroFinanceiro" | "assuntos" | "parcerias" | "contacto" | "privacidade" | "termos";

export type LocaleParams = { params: Promise<{ locale: string }> };

export async function metadataForPage({ params }: LocaleParams, pageKey: PageKey): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const page = content[locale].pages[pageKey];
  return {
    title: `${page.title} | HORONHO`,
    description: page.intro,
    keywords: [
      "Guiné-Bissau",
      "Business Consulting Guinea-Bissau",
      "Strategic Consulting Africa",
      "Institutional Affairs",
      "Digital Transformation",
      "Artificial Intelligence Africa",
      "HORONHO BUSINESS SOLUTION",
      "MATU GARANDI"
    ]
  };
}

export async function renderStandardPage({ params }: LocaleParams, pageKey: PageKey) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  return <StandardPage locale={locale} content={content[locale]} pageKey={pageKey} />;
}
