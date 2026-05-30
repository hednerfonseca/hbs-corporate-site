import { ContactForm } from "./ContactForm";
import { PageHeader } from "./PageHeader";
import { ProjectCard } from "./ProjectCard";
import { ServiceCard } from "./ServiceCard";
import { SiteContent } from "@/lib/content";
import { Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
  content: SiteContent;
  pageKey: "sobre" | "servicos" | "projectos" | "historia" | "parcerias" | "contacto" | "privacidade" | "termos";
};

export function StandardPage({ locale, content, pageKey }: Props) {
  const page = content.pages[pageKey];

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
          <div className="project-list">
            {content.projects.map((project) => <ProjectCard key={project.title} locale={locale} {...project} />)}
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
      {!["servicos", "projectos", "contacto"].includes(pageKey) && (
        <section className="section">
          <div className="content-columns">
            <div>
              <h2>{page.title}</h2>
              <p>{page.intro}</p>
            </div>
            <div>
              {pageKey === "sobre" && <AboutCopy />}
              {pageKey === "historia" && <HistoryCopy />}
              {pageKey === "parcerias" && <PartnershipCopy />}
              {pageKey === "privacidade" && <PrivacyCopy />}
              {pageKey === "termos" && <TermsCopy />}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

function AboutCopy() {
  return (
    <>
      <p>A HORONHO combina execucao empresarial, tecnologia aplicada e desenvolvimento institucional. A empresa organiza iniciativas que precisam de estrutura, canais digitais, parceiros e modelos sustentaveis.</p>
      <p>O foco e criar sistemas simples de operar, comunicacao clara e projectos com valor economico e social para a Guine-Bissau e mercados relacionados.</p>
    </>
  );
}

function HistoryCopy() {
  return (
    <>
      <p>A plataforma de Historia da Guine-Bissau deve preservar conteudos historicos, biografias, datas importantes, memoria cultural e materiais educativos.</p>
      <p>O modelo futuro pode incluir patrocinio institucional, publicidade digital, conteudo patrocinado e servicos SMS em parceria com operadores de telecomunicacoes.</p>
    </>
  );
}

function PartnershipCopy() {
  return (
    <>
      <p>A HORONHO procura parcerias com empresas, operadoras telecom, instituicoes publicas, entidades culturais e patrocinadores que valorizem impacto, reputacao e continuidade.</p>
      <p>Cada parceria deve ter objectivo definido, responsabilidades claras, governacao simples e indicadores de resultado.</p>
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
