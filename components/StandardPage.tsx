import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { PageHeader } from "./PageHeader";
import { ProposalForm } from "./ProposalForm";
import { ProjectCard } from "./ProjectCard";
import { ServiceCard } from "./ServiceCard";
import { SiteContent } from "@/lib/content";
import { Locale, localizePath } from "@/lib/i18n";

type PageKey = "sobre" | "servicos" | "projectos" | "matu" | "ecossistema" | "centroFinanceiro" | "assuntos" | "credibilidade" | "proposta" | "parcerias" | "contacto" | "privacidade" | "termos";

type Props = {
  locale: Locale;
  content: SiteContent;
  pageKey: PageKey;
};

const ecosystemLabels: Record<Locale, { parent: string; strategic: string; future: string }> = {
  pt: { parent: "Empresa-Mãe", strategic: "Projetos Estratégicos", future: "Plataformas Futuras" },
  fr: { parent: "Société Mère", strategic: "Projets Stratégiques", future: "Plateformes Futures" },
  en: { parent: "Parent Company", strategic: "Strategic Projects", future: "Future Platforms" }
};

const aboutLabels: Record<Locale, { values: string; valuesText: string; commitments: string; commitmentsText: string }> = {
  pt: {
    values: "Valores",
    valuesText: "Os princípios que orientam a actuação institucional, comercial e tecnológica da HORONHO.",
    commitments: "Compromissos",
    commitmentsText: "A empresa assume uma visão ligada à Guiné-Bissau, a África e à inovação aplicada."
  },
  fr: {
    values: "Valeurs",
    valuesText: "Les principes qui guident l'action institutionnelle, commerciale et technologique de HORONHO.",
    commitments: "Engagements",
    commitmentsText: "L'entreprise assume une vision liée à la Guinée-Bissau, à l'Afrique et à l'innovation appliquée."
  },
  en: {
    values: "Values",
    valuesText: "The principles that guide HORONHO's institutional, commercial and technological work.",
    commitments: "Commitments",
    commitmentsText: "The company is committed to Guinea-Bissau, Africa and applied innovation."
  }
};

export function StandardPage({ locale, content, pageKey }: Props) {
  const page = content.pages[pageKey];
  const labels = aboutLabels[locale];
  const ecosystemCopy = ecosystemLabels[locale];

  return (
    <main>
      <PageHeader title={page.title} intro={page.intro} />
      {pageKey === "servicos" && (
        <section className="section alt">
          <div className="service-grid">
            {content.services.map((service) => <ServiceCard key={service.title} {...service} />)}
          </div>
        </section>
      )}
      {pageKey === "projectos" && (
        <section className="section">
          <div className="section-heading">
            <h2>{content.sections.projectsTitle}</h2>
            <p>{content.pages.projectos.intro}</p>
          </div>
          <div className="project-list">
            {content.projects.map((project) => <ProjectCard key={project.title} locale={locale} {...project} />)}
          </div>
        </section>
      )}
      {pageKey === "matu" && (
        <section className="section matu-section">
          <div className="matu-layout">
            <div>
              <p className="eyebrow dark">{content.matuGarandi.initiative}</p>
              <h2>{content.matuGarandi.title}</h2>
              <h3>{content.matuGarandi.subtitle}</h3>
              <p>{content.matuGarandi.description}</p>
              <div className="matu-story">
                <h3>{content.matuGarandi.historyTitle}</h3>
                <p>{content.matuGarandi.historyText}</p>
                <h3>{content.matuGarandi.impactTitle}</h3>
                <p>{content.matuGarandi.impactText}</p>
              </div>
            </div>
            <div className="matu-panel">
              <h3>{content.matuGarandi.objectivesTitle}</h3>
              <ul>
                {content.matuGarandi.objectives.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="matu-development">
            <article>
              <h3>{content.matuGarandi.publicationsTitle}</h3>
              <ul>
                {content.matuGarandi.publications.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
            <article>
              <h3>{content.matuGarandi.memoryTitle}</h3>
              <p>{content.matuGarandi.memoryText}</p>
            </article>
          </div>
          <div className="future-grid" aria-label={content.matuGarandi.futureTitle}>
            <h3>{content.matuGarandi.futureTitle}</h3>
            <div>
              {content.matuGarandi.futureAreas.map((area) => <span key={area}>{area}</span>)}
            </div>
          </div>
        </section>
      )}
      {pageKey === "ecossistema" && (
        <section className="section">
          <div className="section-heading">
            <h2>{content.sections.ecosystemTitle}</h2>
            <p>{content.sections.ecosystemText}</p>
          </div>
          <div className="ecosystem-structure">
            <article>
              <span>{ecosystemCopy.parent}</span>
              <h3>HORONHO BUSINESS SOLUTION, SARL</h3>
              <p>{content.ecosystem[0].summary}</p>
            </article>
            <article>
              <span>{ecosystemCopy.strategic}</span>
              <h3><Link href={localizePath(locale, "/matu-garandi")}>MATU GARANDI</Link></h3>
              <p>{content.ecosystem.find((item) => item.title === "MATU GARANDI")?.summary}</p>
            </article>
            <article>
              <span>{ecosystemCopy.future}</span>
              <ul>
                <li>HBS AI Labs</li>
                <li>HBS Academy</li>
                <li><Link href={localizePath(locale, "/centro-financeiro-hbs")}>HBS Financial Hub</Link></li>
              </ul>
            </article>
          </div>
          <div className="ecosystem-list">
            {content.ecosystem.map((item) => (
              <article key={item.title} className="ecosystem-row">
                <span>{item.status}</span>
                <h3>{item.href ? <Link href={localizePath(locale, item.href)}>{item.title}</Link> : item.title}</h3>
                <strong>{item.category}</strong>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
          <div className="future-grid integration-grid" aria-label={content.sections.futureTitle}>
            <h3>{content.sections.futureTitle}</h3>
            <div>
              {content.futureIntegrations.map((item) => <span key={item}>{item}</span>)}
            </div>
            <p>{content.sections.futureText}</p>
          </div>
        </section>
      )}
      {pageKey === "centroFinanceiro" && (
        <section className="section">
          <div className="section-heading">
            <h2>{content.pages.centroFinanceiro.title}</h2>
            <p>{content.financialHub.description}</p>
          </div>
          <div className="status-banner">{content.financialHub.status}</div>
          <div className="future-grid">
            <h3>{content.pages.centroFinanceiro.title}</h3>
            <div>
              {content.financialHub.features.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </section>
      )}
      {pageKey === "assuntos" && (
        <section className="section">
          <div className="section-heading">
            <h2>{content.pages.assuntos.title}</h2>
            <p>{content.institutionalAffairs.description}</p>
          </div>
          <div className="why-grid">
            {content.institutionalAffairs.areas.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      )}
      {pageKey === "credibilidade" && (
        <section className="section">
          <div className="section-heading">
            <h2>{content.pages.credibilidade.title}</h2>
            <p>{content.credibility.founderText}</p>
          </div>
          <div className="leadership-card credibility-leadership">
            <div>
              <span>{content.leadership.role}</span>
              <h3>{content.leadership.name}</h3>
              <p>{content.leadership.summary}</p>
            </div>
            <div>
              {content.credibility.experience.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="section-heading compact-heading">
            <h2>{content.credibility.proofTitle}</h2>
            <p>{content.pages.credibilidade.intro}</p>
          </div>
          <div className="why-grid">
            {content.credibility.proofItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="future-grid integration-grid">
            <h3>{content.credibility.certificatesTitle}</h3>
            <div>
              {content.credibility.certificates.map((item) => <span key={item}>{item}</span>)}
            </div>
            <p>{content.credibility.galleryText}</p>
          </div>
        </section>
      )}
      {pageKey === "proposta" && (
        <section className="section">
          <div className="section-heading">
            <h2>{content.funnels.title}</h2>
            <p>{content.funnels.text}</p>
          </div>
          <div className="funnel-grid">
            {content.funnels.items.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link className="button small" href={localizePath(locale, item.href)}>{item.action}</Link>
              </article>
            ))}
          </div>
          <div className="proposal-panel">
            <h3>{content.pages.proposta.title}</h3>
            <p>{content.pages.proposta.intro}</p>
            <ProposalForm content={content} locale={locale} />
          </div>
        </section>
      )}
      {pageKey === "contacto" && (
        <section className="section narrow">
          <h2>{content.sections.contactTitle}</h2>
          <p>{content.sections.contactText}</p>
          <ContactForm content={content} />
        </section>
      )}
      {!["servicos", "projectos", "matu", "ecossistema", "centroFinanceiro", "assuntos", "credibilidade", "proposta", "contacto"].includes(pageKey) && (
        <section className="section">
          <div className="content-columns">
            <div>
              <h2>{page.title}</h2>
              <p>{page.intro}</p>
            </div>
            <div>
              {pageKey === "sobre" && <AboutCopy content={content} />}
              {pageKey === "parcerias" && <PartnershipCopy content={content} />}
              {pageKey === "privacidade" && <PrivacyCopy />}
              {pageKey === "termos" && <TermsCopy />}
            </div>
          </div>
          {pageKey === "sobre" && (
            <div className="institutional-grid">
              <article className="wide">
                <h3>{content.about.mission.title}</h3>
                <p>{content.about.mission.text}</p>
              </article>
              <article className="wide">
                <h3>{content.about.vision.title}</h3>
                <p>{content.about.vision.text}</p>
              </article>
              <article className="wide section-label">
                <h3>{labels.values}</h3>
                <p>{labels.valuesText}</p>
              </article>
              {content.about.values.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
              <article className="wide section-label">
                <h3>{labels.commitments}</h3>
                <p>{labels.commitmentsText}</p>
              </article>
              {content.about.commitments.map((item) => (
                <article key={item.title} className="commitment">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  );
}

function AboutCopy({ content }: { content: SiteContent }) {
  return (
    <>
      <p>{content.sections.companyText}</p>
      <p>{content.operatingModel.items.map((item) => item.title).join(" · ")}</p>
    </>
  );
}

function PartnershipCopy({ content }: { content: SiteContent }) {
  return (
    <>
      <p>{content.sections.partnersText}</p>
      <p>{content.sections.futureText}</p>
    </>
  );
}

function PrivacyCopy() {
  return (
    <>
      <p>Os dados enviados atraves do website sao usados para responder a pedidos comerciais, institucionais e de parceria. A HORONHO deve recolher apenas a informacao necessaria para avaliar e responder ao contacto.</p>
      <p>Antes de ligar sistemas externos, recomenda-se validar juridicamente a politica final, o periodo de retencao e o fornecedor de armazenamento de dados.</p>
    </>
  );
}

function TermsCopy() {
  return (
    <>
      <p>O website apresenta informacao institucional e comercial. O envio de um formulario nao cria contrato, exclusividade ou obrigacao comercial sem acordo escrito entre as partes.</p>
      <p>Os conteudos, marcas e materiais da HORONHO devem ser protegidos por regras claras de propriedade intelectual e uso autorizado.</p>
    </>
  );
}
