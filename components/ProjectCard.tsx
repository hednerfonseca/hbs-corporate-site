import Link from "next/link";
import { Locale, localizePath } from "@/lib/i18n";

type Props = {
  locale: Locale;
  title: string;
  subtitle: string;
  summary: string;
  status: string;
  href: string;
};

const detailLabels: Record<Locale, string> = {
  pt: "Detalhes",
  fr: "Details",
  en: "Details"
};

export function ProjectCard({ locale, title, subtitle, summary, status, href }: Props) {
  return (
    <article className="project-card">
      <span>{status}</span>
      <h3>{title}</h3>
      <strong>{subtitle}</strong>
      <p>{summary}</p>
      <Link href={localizePath(locale, href)}>{detailLabels[locale]}</Link>
    </article>
  );
}
