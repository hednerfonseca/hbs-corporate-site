import type { Metadata } from "next";
import Link from "next/link";
import { PartnerCTA } from "@/components/PartnerCTA";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { content } from "@/lib/content";
import { isLocale, localizePath } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: content[locale].meta.title,
    description: content[locale].meta.description,
    alternates: { canonical: `/${locale}` }
  };
}

export default async function Home({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) return null;
  const pageContent = content[locale];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "HORONHO BUSINESS SOLUTION, SARL",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://horonho.com",
    areaServed: ["Guinea-Bissau", "West Africa", "International"],
    description: pageContent.meta.description
  };

  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">{pageContent.hero.eyebrow}</p>
          <h1>{pageContent.hero.title}</h1>
          <p>{pageContent.hero.text}</p>
          <div className="hero-actions">
            <Link className="button" href={localizePath(locale, "/contacto")}>{pageContent.hero.primary}</Link>
            <Link className="button secondary" href={localizePath(locale, "/projectos")}>{pageContent.hero.secondary}</Link>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="HORONHO areas">
        {pageContent.trust.map((item) => <span key={item}>{item}</span>)}
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>{pageContent.sections.companyTitle}</h2>
          <p>{pageContent.sections.companyText}</p>
        </div>
      </section>

      <section className="section alt">
        <div className="section-heading">
          <h2>{pageContent.sections.servicesTitle}</h2>
          <p>{pageContent.pages.servicos.intro}</p>
        </div>
        <div className="service-grid">
          {pageContent.services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>{pageContent.sections.projectsTitle}</h2>
          <p>{pageContent.pages.projectos.intro}</p>
        </div>
        <div className="project-list">
          {pageContent.projects.map((project) => <ProjectCard key={project.title} locale={locale} {...project} />)}
        </div>
      </section>

      <PartnerCTA locale={locale} title={pageContent.sections.partnersTitle} text={pageContent.sections.partnersText} action={pageContent.cta} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </main>
  );
}
