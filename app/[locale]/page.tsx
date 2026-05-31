import type { Metadata } from "next";
import Link from "next/link";
import { PartnerCTA } from "@/components/PartnerCTA";
import { ProjectCard } from "@/components/ProjectCard";
import { ServiceCard } from "@/components/ServiceCard";
import { content } from "@/lib/content";
import { isLocale, localizePath } from "@/lib/i18n";

type Props = { params: Promise<{ locale: string }> };

const bridgeCopy = {
  pt: "Construímos pontes entre negócios, instituições e inovação.",
  fr: "Nous construisons des ponts entre affaires, institutions et innovation.",
  en: "We build bridges between business, institutions and innovation."
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return {
    title: content[locale].meta.title,
    description: content[locale].meta.description,
    keywords: [
      "Guiné-Bissau",
      "Business Consulting Guinea-Bissau",
      "Strategic Consulting Africa",
      "Institutional Affairs",
      "Digital Transformation",
      "Artificial Intelligence Africa",
      "HORONHO BUSINESS SOLUTION",
      "MATU GARANDI"
    ],
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
          <img className="hero-logo" src="/brand/horonho-logo-clean.png" alt="HORONHO Business Solution, SARL" />
          <p className="eyebrow">{pageContent.hero.eyebrow}</p>
          <h1>{pageContent.hero.title}</h1>
          <p>{pageContent.hero.text}</p>
          <p className="bridge-line">{bridgeCopy[locale]}</p>
          <div className="hero-actions">
            <Link className="button secondary" href={localizePath(locale, "/sobre")}>{pageContent.hero.primary}</Link>
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
        <div className="operating-model" aria-label={pageContent.operatingModel.title}>
          {pageContent.operatingModel.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="section-heading">
          <h2>{pageContent.sections.areasTitle}</h2>
          <p>{pageContent.pages.servicos.intro}</p>
        </div>
        <div className="service-grid">
          {pageContent.services.map((service) => <ServiceCard key={service.title} {...service} />)}
        </div>
      </section>

      <section className="section leadership-home">
        <div className="section-heading">
          <h2>{pageContent.sections.leadershipTitle}</h2>
          <p>{pageContent.sections.leadershipText}</p>
        </div>
        <div className="leadership-card">
          <div>
            <span>{pageContent.leadership.role}</span>
            <h3>{pageContent.leadership.name}</h3>
            <p>{pageContent.leadership.summary}</p>
          </div>
          <div>
            {pageContent.leadership.areas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <h2>{pageContent.sections.whyTitle}</h2>
          <p>{pageContent.sections.partnersText}</p>
        </div>
        <div className="why-grid">
          {pageContent.whyChoose.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
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

      <section className="section alt">
        <div className="section-heading">
          <h2>{pageContent.sections.ecosystemTitle}</h2>
          <p>{pageContent.sections.ecosystemText}</p>
        </div>
        <div className="future-grid integration-grid">
          <h3>{pageContent.sections.futureTitle}</h3>
          <div>
            {pageContent.futureIntegrations.map((item) => <span key={item}>{item}</span>)}
          </div>
          <p>{pageContent.sections.futureText}</p>
        </div>
      </section>

      <PartnerCTA locale={locale} title={pageContent.sections.partnersTitle} text={pageContent.sections.partnersText} action={pageContent.cta} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </main>
  );
}
