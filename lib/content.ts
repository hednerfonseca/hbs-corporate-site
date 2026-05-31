import { Locale } from "./i18n";

type NavItem = { label: string; href: string };
type Service = { title: string; summary: string; points: string[] };
type Project = { title: string; subtitle: string; summary: string; status: string; href: string };

type EcosystemItem = { title: string; category: string; summary: string; status: string; href?: string };
type InfoItem = { title: string; text: string };

export type SiteContent = {
  meta: { title: string; description: string };
  nav: NavItem[];
  cta: string;
  hero: { eyebrow: string; title: string; text: string; primary: string; secondary: string };
  trust: string[];
  operatingModel: { title: string; items: { title: string; text: string }[] };
  about: {
    mission: InfoItem;
    vision: InfoItem;
    values: InfoItem[];
    commitments: InfoItem[];
  };
  whyChoose: InfoItem[];
  futureIntegrations: string[];
  leadership: { title: string; name: string; role: string; summary: string; areas: string[] };
  financialHub: { status: string; description: string; features: string[] };
  institutionalAffairs: { description: string; areas: InfoItem[] };
  credibility: { founderTitle: string; founderText: string; experience: string[]; proofTitle: string; proofItems: InfoItem[]; certificatesTitle: string; certificates: string[]; galleryTitle: string; galleryText: string };
  funnels: { title: string; text: string; items: { title: string; text: string; action: string; href: string }[] };
  sections: {
    companyTitle: string;
    companyText: string;
    servicesTitle: string;
    projectsTitle: string;
    partnersTitle: string;
    partnersText: string;
    contactTitle: string;
    contactText: string;
    ecosystemTitle: string;
    ecosystemText: string;
    areasTitle: string;
    whyTitle: string;
    futureTitle: string;
    futureText: string;
    leadershipTitle: string;
    leadershipText: string;
  };
  services: Service[];
  projects: Project[];
  ecosystem: EcosystemItem[];
  matuGarandi: {
    title: string;
    subtitle: string;
    initiative: string;
    description: string;
    historyTitle: string;
    historyText: string;
    objectivesTitle: string;
    objectives: string[];
    impactTitle: string;
    impactText: string;
    publicationsTitle: string;
    publications: string[];
    memoryTitle: string;
    memoryText: string;
    futureTitle: string;
    futureAreas: string[];
  };
  pages: Record<string, { title: string; intro: string }>;
  footer: { summary: string; rights: string };
  form: {
    name: string;
    email: string;
    organization: string;
    subject: string;
    message: string;
    submit: string;
    success: string;
  };
};

const services = {
  pt: [
    {
      title: "Consultoria Estratégica",
      summary: "Apoiamos decisões críticas, posicionamento, modelos de crescimento e governação empresarial.",
      points: ["Estratégia corporativa", "Modelos de crescimento", "Planeamento executivo"]
    },
    {
      title: "Assuntos Institucionais",
      summary: "Estruturamos relações com entidades públicas, privadas e institucionais com comunicação profissional.",
      points: ["Relações institucionais", "Representação formal", "Comunicação executiva"]
    },
    {
      title: "Desenvolvimento Empresarial",
      summary: "Criamos oportunidades comerciais, parcerias, canais de expansão e estruturas de monetização.",
      points: ["Parcerias estratégicas", "Expansão comercial", "Modelos de receita"]
    },
    {
      title: "Inteligência Artificial",
      summary: "Desenhamos soluções de IA aplicadas a produtividade, atendimento, análise, automação e conhecimento.",
      points: ["Agentes de IA", "Automação inteligente", "Sistemas de conhecimento"]
    },
    {
      title: "Transformação Digital",
      summary: "Modernizamos presença digital, processos, plataformas, dados e canais operacionais.",
      points: ["Websites institucionais", "Plataformas digitais", "Integrações"]
    },
    {
      title: "Representação Comercial",
      summary: "Apoiamos marcas, empresas e parceiros que procuram entrada estruturada em mercados estratégicos.",
      points: ["Representação de marcas", "Negociação", "Desenvolvimento de canais"]
    },
    {
      title: "Gestão de Projetos",
      summary: "Organizamos projectos com objectivos, responsabilidades, execução, controlo e indicadores claros.",
      points: ["Planeamento", "Coordenação", "Monitorização de resultados"]
    }
  ],
  fr: [
    {
      title: "Conseil Stratégique",
      summary: "Nous soutenons les décisions critiques, le positionnement, les modèles de croissance et la gouvernance.",
      points: ["Stratégie d'entreprise", "Croissance", "Planification exécutive"]
    },
    {
      title: "Affaires Institutionnelles",
      summary: "Nous structurons les relations avec les acteurs publics, privés et institutionnels.",
      points: ["Relations institutionnelles", "Représentation formelle", "Communication exécutive"]
    },
    {
      title: "Développement d'Entreprise",
      summary: "Nous créons des opportunités commerciales, partenariats, canaux d'expansion et modèles de revenus.",
      points: ["Partenariats", "Expansion commerciale", "Modèles de revenus"]
    },
    {
      title: "Intelligence Artificielle",
      summary: "Nous concevons des solutions IA pour productivité, service, analyse, automatisation et connaissance.",
      points: ["Agents IA", "Automatisation intelligente", "Systèmes de connaissance"]
    },
    {
      title: "Transformation Digitale",
      summary: "Nous modernisons présence digitale, processus, plateformes, données et canaux opérationnels.",
      points: ["Sites institutionnels", "Plateformes digitales", "Intégrations"]
    },
    {
      title: "Représentation Commerciale",
      summary: "Nous accompagnons les marques et partenaires qui cherchent une entrée structurée dans des marchés stratégiques.",
      points: ["Représentation", "Négociation", "Développement de canaux"]
    },
    {
      title: "Gestion de Projets",
      summary: "Nous organisons les projets avec objectifs, responsabilités, exécution, contrôle et indicateurs clairs.",
      points: ["Planification", "Coordination", "Suivi des résultats"]
    }
  ],
  en: [
    {
      title: "Strategic Consulting",
      summary: "We support critical decisions, positioning, growth models and business governance.",
      points: ["Corporate strategy", "Growth models", "Executive planning"]
    },
    {
      title: "Institutional Affairs",
      summary: "We structure relationships with public, private and institutional stakeholders.",
      points: ["Institutional relations", "Formal representation", "Executive communication"]
    },
    {
      title: "Business Development",
      summary: "We create commercial opportunities, partnerships, expansion channels and monetization structures.",
      points: ["Strategic partnerships", "Commercial expansion", "Revenue models"]
    },
    {
      title: "Artificial Intelligence",
      summary: "We design AI solutions for productivity, service, analysis, automation and knowledge systems.",
      points: ["AI agents", "Intelligent automation", "Knowledge systems"]
    },
    {
      title: "Digital Transformation",
      summary: "We modernize digital presence, processes, platforms, data and operational channels.",
      points: ["Institutional websites", "Digital platforms", "Integrations"]
    },
    {
      title: "Commercial Representation",
      summary: "We support brands, companies and partners seeking structured entry into strategic markets.",
      points: ["Brand representation", "Negotiation", "Channel development"]
    },
    {
      title: "Project Management",
      summary: "We organize projects with clear objectives, responsibilities, execution, control and indicators.",
      points: ["Planning", "Coordination", "Results monitoring"]
    }
  ]
} satisfies Record<Locale, Service[]>;

const matu = {
  pt: {
    title: "MATU GARANDI",
    subtitle: "Plataforma Nacional de História, Cultura e Património da Guiné-Bissau",
    initiative: "Uma iniciativa da HORONHO BUSINESS SOLUTION, SARL",
    description: "MATU GARANDI é uma iniciativa cultural e educativa estratégica desenvolvida pela HORONHO BUSINESS SOLUTION, SARL. O projecto visa preservar, documentar, promover e transmitir a história, a memória colectiva, o património cultural e o conhecimento tradicional da Guiné-Bissau através de plataformas digitais, publicações, conteúdos educativos e narrativa cultural.",
    historyTitle: "História do Projeto",
    historyText: "MATU GARANDI nasce como resposta à necessidade de organizar, preservar e tornar acessível a memória histórica e cultural da Guiné-Bissau. O projecto estrutura conhecimento disperso em formatos digitais, editoriais e educativos com padrão institucional.",
    objectivesTitle: "Objectivos estratégicos",
    objectives: ["Preservar a memória nacional", "Promover a cultura guineense", "Desenvolver recursos educativos", "Criar arquivos culturais digitais", "Apoiar investigação e aprendizagem", "Reforçar a identidade cultural", "Expandir internacionalmente através dos media digitais"],
    impactTitle: "Impacto Cultural",
    impactText: "O projecto pretende fortalecer identidade, educação, investigação e orgulho cultural, criando pontes entre gerações, escolas, investigadores, comunidades e diáspora guineense.",
    publicationsTitle: "Futuras Publicações",
    publications: ["Colecções históricas", "Biografias de figuras nacionais", "Guias educativos", "Cadernos culturais", "Edições digitais e impressas"],
    memoryTitle: "Centro de Memória Nacional",
    memoryText: "A visão futura inclui um centro de referência para arquivos, conteúdos, investigação, documentação oral, biblioteca digital e projectos de preservação cultural.",
    futureTitle: "Áreas futuras de desenvolvimento",
    futureAreas: ["Biblioteca Digital", "Arquivo Histórico", "Plataforma Educativa", "Livros e Publicações", "Podcasts", "Projectos Documentais", "Aplicações Móveis", "Centro de Investigação Cultural"]
  },
  fr: {
    title: "MATU GARANDI",
    subtitle: "Plateforme nationale d'histoire, culture et patrimoine de la Guinée-Bissau",
    initiative: "Une initiative de HORONHO BUSINESS SOLUTION, SARL",
    description: "MATU GARANDI est une initiative culturelle et éducative stratégique développée par HORONHO BUSINESS SOLUTION, SARL. Le projet vise à préserver, documenter, promouvoir et transmettre l'histoire, la mémoire collective, le patrimoine culturel et les connaissances traditionnelles de la Guinée-Bissau à travers des plateformes numériques, publications, contenus éducatifs et récits culturels.",
    historyTitle: "Histoire du Projet",
    historyText: "MATU GARANDI naît du besoin d'organiser, préserver et rendre accessible la mémoire historique et culturelle de la Guinée-Bissau.",
    objectivesTitle: "Objectifs stratégiques",
    objectives: ["Préserver la mémoire nationale", "Promouvoir la culture guinéenne", "Développer des ressources éducatives", "Créer des archives culturelles numériques", "Soutenir la recherche et l'apprentissage", "Renforcer l'identité culturelle", "S'étendre à l'international par les médias numériques"],
    impactTitle: "Impact Culturel",
    impactText: "Le projet vise à renforcer identité, éducation, recherche et fierté culturelle en reliant générations, écoles, chercheurs, communautés et diaspora.",
    publicationsTitle: "Futures Publications",
    publications: ["Collections historiques", "Biographies nationales", "Guides éducatifs", "Cahiers culturels", "Éditions digitales et imprimées"],
    memoryTitle: "Centre de Mémoire Nationale",
    memoryText: "La vision future inclut un centre de référence pour archives, contenus, recherche, mémoire orale, bibliothèque numérique et préservation culturelle.",
    futureTitle: "Axes futurs de développement",
    futureAreas: ["Bibliothèque numérique", "Archives historiques", "Plateforme éducative", "Livres et publications", "Podcasts", "Projets documentaires", "Applications mobiles", "Centre de recherche culturelle"]
  },
  en: {
    title: "MATU GARANDI",
    subtitle: "National Platform for History, Culture and Heritage of Guinea-Bissau",
    initiative: "An Initiative of HORONHO BUSINESS SOLUTION, SARL",
    description: "MATU GARANDI is a strategic cultural and educational initiative developed by HORONHO BUSINESS SOLUTION, SARL. The project aims to preserve, document, promote and transmit the history, collective memory, cultural heritage and traditional knowledge of Guinea-Bissau through digital platforms, publications, educational content and cultural storytelling.",
    historyTitle: "Project History",
    historyText: "MATU GARANDI emerges from the need to organize, preserve and make Guinea-Bissau's historical and cultural memory accessible through institutional digital, editorial and educational formats.",
    objectivesTitle: "Strategic objectives",
    objectives: ["Preserve national memory", "Promote Guinean culture", "Develop educational resources", "Create digital cultural archives", "Support research and learning", "Strengthen cultural identity", "Expand internationally through digital media"],
    impactTitle: "Cultural Impact",
    impactText: "The project aims to strengthen identity, education, research and cultural pride by connecting generations, schools, researchers, communities and the Guinean diaspora.",
    publicationsTitle: "Future Publications",
    publications: ["Historical collections", "National biographies", "Educational guides", "Cultural notebooks", "Digital and print editions"],
    memoryTitle: "National Memory Center",
    memoryText: "The future vision includes a reference center for archives, content, research, oral memory, digital library and cultural preservation projects.",
    futureTitle: "Future development areas",
    futureAreas: ["Digital Library", "Historical Archive", "Educational Platform", "Books and Publications", "Podcasts", "Documentary Projects", "Mobile Applications", "Cultural Research Center"]
  }
} satisfies Record<Locale, SiteContent["matuGarandi"]>;

const projects = {
  pt: [
    {
      title: "MATU GARANDI",
      subtitle: matu.pt.subtitle,
      summary: "Projecto cultural estratégico, propriedade intelectual e plataforma institucional desenvolvida e gerida pela HORONHO.",
      status: "Projecto estratégico emblemático",
      href: "/matu-garandi"
    },
    {
      title: "HBS AI Labs",
      subtitle: "Laboratório futuro de inteligência artificial aplicada",
      summary: "Unidade futura para protótipos, agentes, automações e soluções de IA para empresas e instituições.",
      status: "Futuro laboratório",
      href: "/ecossistema-horonho"
    },
    {
      title: "HBS Academy",
      subtitle: "Academia futura de formação e conhecimento",
      summary: "Plataforma futura para formação executiva, literacia digital, tecnologia, negócios e cultura institucional.",
      status: "Futura academia",
      href: "/ecossistema-horonho"
    }
  ],
  fr: [
    {
      title: "MATU GARANDI",
      subtitle: matu.fr.subtitle,
      summary: "Projet culturel stratégique, propriété intellectuelle et plateforme institutionnelle développée et gérée par HORONHO.",
      status: "Projet stratégique phare",
      href: "/matu-garandi"
    },
    {
      title: "HBS AI Labs",
      subtitle: "Futur laboratoire d'intelligence artificielle appliquée",
      summary: "Unité future pour prototypes, agents, automatisations et solutions IA pour entreprises et institutions.",
      status: "Futur laboratoire",
      href: "/ecossistema-horonho"
    },
    {
      title: "HBS Academy",
      subtitle: "Future académie de formation et connaissance",
      summary: "Future plateforme de formation exécutive, culture digitale, technologie, affaires et communication institutionnelle.",
      status: "Future académie",
      href: "/ecossistema-horonho"
    }
  ],
  en: [
    {
      title: "MATU GARANDI",
      subtitle: matu.en.subtitle,
      summary: "A flagship strategic cultural project, intellectual property and institutional platform owned and managed by HORONHO.",
      status: "Flagship strategic project",
      href: "/matu-garandi"
    },
    {
      title: "HBS AI Labs",
      subtitle: "Future applied artificial intelligence laboratory",
      summary: "Future unit for prototypes, agents, automations and AI solutions for companies and institutions.",
      status: "Future laboratory",
      href: "/ecossistema-horonho"
    },
    {
      title: "HBS Academy",
      subtitle: "Future academy for training and knowledge",
      summary: "Future platform for executive training, digital literacy, technology, business and institutional knowledge.",
      status: "Future academy",
      href: "/ecossistema-horonho"
    }
  ]
} satisfies Record<Locale, Project[]>;

const ecosystem = {
  pt: [
    { title: "HORONHO BUSINESS SOLUTION, SARL", category: "Empresa-mãe", summary: "Entidade independente responsável por serviços profissionais, projectos estratégicos e plataformas de inovação.", status: "Activo", href: "/sobre" },
    { title: "MATU GARANDI", category: "Projecto cultural estratégico", summary: "Propriedade intelectual e plataforma cultural desenvolvida, detida e gerida pela HORONHO.", status: "Em desenvolvimento", href: "/matu-garandi" },
    { title: "HBS AI Labs", category: "Laboratório futuro de IA", summary: "Estrutura futura para soluções de inteligência artificial, agentes, automação e prototipagem aplicada.", status: "Planeado" },
    { title: "HBS Academy", category: "Academia futura", summary: "Unidade futura para formação, conhecimento aplicado, literacia digital e capacitação profissional.", status: "Planeado" },
    { title: "HBS Financial Hub", category: "Plataforma financeira futura", summary: "Centro financeiro em desenvolvimento para proformas, comprovativos, referências, pagamentos e integrações bancárias.", status: "Em Desenvolvimento", href: "/centro-financeiro-hbs" },
    { title: "Outros projectos futuros", category: "Expansão controlada", summary: "Novas iniciativas devem entrar no ecossistema apenas com governação, marca e objectivo claro.", status: "Reservado" }
  ],
  fr: [
    { title: "HORONHO BUSINESS SOLUTION, SARL", category: "Société mère", summary: "Entité indépendante responsable des services professionnels, projets stratégiques et plateformes d'innovation.", status: "Actif", href: "/sobre" },
    { title: "MATU GARANDI", category: "Projet culturel stratégique", summary: "Propriété intellectuelle et plateforme culturelle développée, détenue et gérée par HORONHO.", status: "En développement", href: "/matu-garandi" },
    { title: "HBS AI Labs", category: "Futur laboratoire IA", summary: "Structure future pour solutions IA, agents, automatisation et prototypage appliqué.", status: "Planifié" },
    { title: "HBS Academy", category: "Future académie", summary: "Unité future pour formation, connaissance appliquée, culture digitale et compétences professionnelles.", status: "Planifié" },
    { title: "HBS Financial Hub", category: "Future plateforme financière", summary: "Centre financier en développement pour proformas, justificatifs, références, paiements et intégrations bancaires.", status: "En développement", href: "/centro-financeiro-hbs" },
    { title: "Autres projets futurs", category: "Expansion contrôlée", summary: "Les nouvelles initiatives doivent entrer dans l'écosystème avec gouvernance, marque et objectif clair.", status: "Réservé" }
  ],
  en: [
    { title: "HORONHO BUSINESS SOLUTION, SARL", category: "Parent company", summary: "Independent company responsible for professional services, strategic projects and innovation platforms.", status: "Active", href: "/sobre" },
    { title: "MATU GARANDI", category: "Strategic cultural project", summary: "Intellectual property and cultural platform developed, owned and managed by HORONHO.", status: "In development", href: "/matu-garandi" },
    { title: "HBS AI Labs", category: "Future AI laboratory", summary: "Future structure for AI solutions, agents, automation and applied prototyping.", status: "Planned" },
    { title: "HBS Academy", category: "Future academy", summary: "Future unit for training, applied knowledge, digital literacy and professional capacity building.", status: "Planned" },
    { title: "HBS Financial Hub", category: "Future financial platform", summary: "Financial center in development for proformas, proof uploads, payment references, payments and banking integrations.", status: "In Development", href: "/centro-financeiro-hbs" },
    { title: "Other future projects", category: "Controlled expansion", summary: "New initiatives should enter the ecosystem only with governance, brand clarity and a defined objective.", status: "Reserved" }
  ]
} satisfies Record<Locale, EcosystemItem[]>;

export const content: Record<Locale, SiteContent> = {
  pt: {
    meta: {
      title: "HORONHO BUSINESS SOLUTION, SARL",
      description: "Empresa independente de consultoria estratégica, desenvolvimento de negócios, assuntos institucionais, transformação digital, inteligência artificial e plataformas de conhecimento."
    },
    nav: [
      { label: "Home", href: "/" },
      { label: "Sobre HORONHO", href: "/sobre" },
      { label: "Serviços", href: "/servicos" },
      { label: "Assuntos Institucionais", href: "/assuntos-institucionais" },
      { label: "Credibilidade", href: "/credibilidade-institucional" },
      { label: "Projectos Estratégicos", href: "/projectos-estrategicos" },
      { label: "Parcerias", href: "/parcerias" },
      { label: "Contacto", href: "/contacto" }
    ],
    cta: "Fale Connosco",
    hero: {
      eyebrow: "Empresa independente de estratégia, tecnologia e desenvolvimento institucional",
      title: "HORONHO BUSINESS SOLUTION, SARL",
      text: "Consultoria estratégica, assuntos institucionais, desenvolvimento empresarial e inovação digital.",
      primary: "Fale Connosco",
      secondary: "Ver projectos estratégicos"
    },
    trust: ["Serviços profissionais", "Projectos estratégicos", "Plataformas de inovação", "Representação comercial"],
    operatingModel: {
      title: "Modelo de actuação",
      items: [
        { title: "Serviços profissionais", text: "Consultoria, desenvolvimento de negócios, transformação digital, IA e assuntos institucionais." },
        { title: "Projectos estratégicos", text: "Iniciativas próprias de longo prazo, incluindo MATU GARANDI como projecto cultural emblemático." },
        { title: "Plataformas de inovação", text: "Estruturas digitais e futuras unidades como HBS AI Labs e HBS Academy." }
      ]
    },
    about: {
      mission: { title: "Missão", text: "Promover soluções estratégicas, empresariais, digitais e institucionais que criem valor económico, cultural e social para a Guiné-Bissau, África e parceiros internacionais." },
      vision: { title: "Visão", text: "Tornar-se uma referência africana em consultoria estratégica, inovação, plataformas de conhecimento e desenvolvimento de projectos com impacto real." },
      values: [
        { title: "Rigor", text: "Decisões baseadas em clareza, responsabilidade e execução séria." },
        { title: "Integridade", text: "Relações transparentes com clientes, parceiros e instituições." },
        { title: "Inovação", text: "Uso prático de tecnologia, inteligência artificial e conhecimento para resolver problemas concretos." },
        { title: "Identidade", text: "Valorização da memória, cultura e capacidade produtiva africana." }
      ],
      commitments: [
        { title: "Compromisso com a Guiné-Bissau", text: "Contribuir para projectos que reforcem capacidade empresarial, memória nacional, literacia digital e reputação institucional do país." },
        { title: "Compromisso com África", text: "Construir pontes empresariais, culturais e tecnológicas entre mercados africanos e parceiros internacionais." },
        { title: "Compromisso com Inovação", text: "Transformar tecnologia, dados e inteligência artificial em ferramentas acessíveis, úteis e sustentáveis." }
      ]
    },
    whyChoose: [
      { title: "Visão Estratégica", text: "A HORONHO liga objectivos empresariais, contexto institucional e execução prática." },
      { title: "Conhecimento Institucional", text: "A empresa entende a importância de reputação, governança, parcerias e comunicação formal." },
      { title: "Rede de Parceiros", text: "O modelo prepara cooperação com empresas, instituições, especialistas e plataformas futuras." },
      { title: "Execução Orientada a Resultados", text: "Cada projecto deve ter responsáveis, etapas, indicadores e capacidade de continuidade." }
    ],
    futureIntegrations: ["Centro Financeiro HBS", "Portal de Clientes", "Área Reservada", "Faturação Digital", "Proformas", "Pagamentos Online"],
    leadership: { title: "Liderança", name: "Hedner Humberto Gomes da Fonseca", role: "Fundador", summary: "Liderança orientada para estratégia empresarial, relações institucionais, diplomacia, desenvolvimento comercial e transformação digital.", areas: ["Assuntos Institucionais", "Estratégia Empresarial", "Diplomacia", "Desenvolvimento Comercial", "Transformação Digital"] },
    financialHub: { status: "Em Desenvolvimento", description: "O Centro Financeiro HBS é uma plataforma futura da HORONHO para organizar processos financeiros digitais, emissão documental, comprovativos, referências de pagamento e integração com meios financeiros relevantes para a Guiné-Bissau e a UEMOA.", features: ["Emissão de Proformas", "Upload de Comprovativos", "Referências de Pagamento", "Orange Money", "TeleTaco", "Banco PI", "Integração Bancária UEMOA"] },
    institutionalAffairs: { description: "A área de Assuntos Institucionais apoia organizações, projectos e parceiros que precisam de representação formal, leitura política, diplomacia empresarial e gestão estratégica de relações.", areas: [{ title: "Relações Governamentais", text: "Estruturação de diálogo com entidades públicas e organismos regulatórios." }, { title: "Diplomacia Empresarial", text: "Construção de relações de confiança entre empresas, instituições e parceiros internacionais." }, { title: "Cooperação Internacional", text: "Apoio a iniciativas com dimensão regional, africana e internacional." }, { title: "Representação Institucional", text: "Presença formal, comunicação executiva e defesa de interesses legítimos." }, { title: "Gestão de Stakeholders", text: "Mapeamento, priorização e acompanhamento de actores críticos para cada projecto." }] },
    credibility: { founderTitle: "Sobre o Fundador", founderText: "Hedner Humberto Gomes da Fonseca lidera a HORONHO com foco em assuntos institucionais, estratégia empresarial, diplomacia, desenvolvimento comercial e transformação digital. A sua trajectória deve ser apresentada como activo reputacional da empresa, com documentação progressiva de experiências, formações e missões.", experience: ["Presidência da República", "Segurança Presidencial", "Protocolo", "Diplomacia", "Relações Institucionais", "Desenvolvimento Empresarial", "Transformação Digital"], proofTitle: "Casos e Projectos", proofItems: [{ title: "MATU GARANDI", text: "Projecto cultural nacional dedicado à história, cultura, património e memória colectiva da Guiné-Bissau." }, { title: "HBS AI", text: "Linha tecnológica futura para agentes, automação e soluções de inteligência artificial aplicadas a empresas e instituições." }, { title: "Consultoria Institucional", text: "Área preparada para apoiar representação, relações governamentais, diplomacia empresarial e gestão de stakeholders." }], certificatesTitle: "Formação e Credenciais a Documentar", certificates: ["Marrocos", "Diplomacia", "Liderança", "Protocolo", "Cerimonial"], galleryTitle: "Galeria Institucional", galleryText: "Área preparada para fotografias reais de Rabat, Casablanca, ministérios, formações e missões. As imagens devem ser adicionadas apenas após validação e autorização de uso." },
    funnels: { title: "Funis Comerciais", text: "O website passa a orientar visitantes para acções concretas de consultoria, representação, parcerias e projectos estratégicos.", items: [{ title: "Consultoria Empresarial", text: "Para empresas que precisam de estratégia, estruturação e crescimento.", action: "Solicitar Consultoria", href: "/contacto" }, { title: "Assuntos Institucionais", text: "Para entidades que precisam de reunião, representação ou leitura institucional.", action: "Solicitar Reunião Institucional", href: "/assuntos-institucionais" }, { title: "Representação Comercial", text: "Para marcas e parceiros que procuram entrada estruturada no mercado local.", action: "Procurar Parceiro Local", href: "/parcerias" }, { title: "MATU GARANDI", text: "Para patrocinadores, instituições e parceiros culturais.", action: "Apoiar o Projecto", href: "/matu-garandi" }, { title: "Centro Financeiro HBS", text: "Para acompanhar a futura plataforma de proformas, comprovativos e pagamentos.", action: "Ver Centro Financeiro", href: "/centro-financeiro-hbs" }] },
    sections: {
      companyTitle: "Empresa independente, arquitectura preparada para crescer",
      companyText: "A HORONHO BUSINESS SOLUTION, SARL é a entidade empresarial central. A empresa presta serviços profissionais, desenvolve projectos estratégicos próprios e constrói plataformas de inovação e conhecimento com governação clara.",
      servicesTitle: "Serviços profissionais",
      projectsTitle: "Projectos estratégicos",
      partnersTitle: "Parcerias para escala e impacto institucional",
      partnersText: "A HORONHO trabalha com empresas, instituições, parceiros comerciais e entidades culturais que procuram projectos sérios, governáveis e preparados para crescimento sustentável.",
      contactTitle: "Contacto comercial e institucional",
      contactText: "Use este canal para propostas, parcerias, pedidos comerciais ou reuniões institucionais. Pedidos completos recebem resposta prioritária.",
      ecosystemTitle: "Ecossistema HORONHO",
      ecosystemText: "Uma arquitectura empresarial escalável para organizar a empresa-mãe, projectos estratégicos, laboratórios futuros, academia futura e novas iniciativas sem reconstruir o website.",
      areasTitle: "Áreas de Atuação",
      whyTitle: "Porque escolher a HORONHO",
      futureTitle: "Integrações futuras",
      futureText: "A arquitectura já prevê evolução para produtos internos e portais transaccionais sem reconstruir a base institucional.",
      leadershipTitle: "Liderança",
      leadershipText: "A liderança da HORONHO combina visão institucional, estratégia empresarial, diplomacia e transformação digital."
    },
    services: services.pt,
    projects: projects.pt,
    ecosystem: ecosystem.pt,
    matuGarandi: matu.pt,
    pages: {
      sobre: { title: "Sobre a HORONHO", intro: "Empresa independente orientada para consultoria estratégica, desenvolvimento de negócios, assuntos institucionais, transformação digital, IA e plataformas de conhecimento." },
      servicos: { title: "Serviços", intro: "Serviços profissionais para empresas, instituições e projectos que precisam de estratégia, estrutura, tecnologia e crescimento comercial." },
      projectos: { title: "Projectos Estratégicos", intro: "Iniciativas próprias da HORONHO com valor institucional, cultural, tecnológico e económico de longo prazo." },
      matu: { title: "MATU GARANDI", intro: matu.pt.subtitle },
      ecossistema: { title: "Ecossistema HORONHO", intro: "Estrutura preparada para organizar a empresa-mãe, projectos estratégicos, plataformas de inovação e futuras unidades de crescimento." },
      centroFinanceiro: { title: "Centro Financeiro HBS", intro: "Plataforma financeira futura da HORONHO para proformas, comprovativos, referências e pagamentos digitais." },
      assuntos: { title: "Assuntos Institucionais", intro: "Área dedicada a relações governamentais, diplomacia empresarial, cooperação internacional, representação institucional e gestão de stakeholders." },
      credibilidade: { title: "Credibilidade Institucional", intro: "Fundador, experiência, projectos, credenciais e provas progressivas da capacidade institucional da HORONHO." },
      proposta: { title: "Solicitar Proposta", intro: "Escolha o caminho de contacto mais adequado para consultoria, assuntos institucionais, representação comercial ou projectos estratégicos." },
      parcerias: { title: "Parcerias", intro: "Relações comerciais, institucionais e culturais com objectivos claros, governação simples e impacto mensurável." },
      contacto: { title: "Contacto", intro: "Canal único para pedidos comerciais, institucionais e de parceria." },
      privacidade: { title: "Política de Privacidade", intro: "Como tratamos dados pessoais recebidos pelos nossos canais digitais." },
      termos: { title: "Termos de Utilização", intro: "Condições gerais para utilização do website e contacto com a HORONHO." }
    },
    footer: { summary: "HORONHO BUSINESS SOLUTION, SARL. Consultoria estratégica, desenvolvimento de negócios, transformação digital, IA, representação comercial e projectos estratégicos.", rights: "Todos os direitos reservados." },
    form: { name: "Nome", email: "Email", organization: "Organização", subject: "Assunto", message: "Mensagem", submit: "Enviar pedido", success: "Pedido preparado com sucesso." }
  },
  fr: {
    meta: { title: "HORONHO BUSINESS SOLUTION, SARL", description: "Entreprise indépendante de conseil stratégique, développement commercial, affaires institutionnelles, transformation digitale, IA et plateformes de connaissance." },
    nav: [
      { label: "Home", href: "/" },
      { label: "À propos", href: "/sobre" },
      { label: "Services", href: "/servicos" },
      { label: "Affaires Institutionnelles", href: "/assuntos-institucionais" },
      { label: "Crédibilité", href: "/credibilidade-institucional" },
      { label: "Projets Stratégiques", href: "/projectos-estrategicos" },
      { label: "Partenariats", href: "/parcerias" },
      { label: "Contact", href: "/contacto" }
    ],
    cta: "Nous Contacter",
    hero: { eyebrow: "Entreprise indépendante de stratégie, technologie et développement institutionnel", title: "HORONHO BUSINESS SOLUTION, SARL", text: "Nous opérons à travers services professionnels, projets stratégiques et plateformes d'innovation pour créer une valeur économique, institutionnelle et culturelle.", primary: "Prendre contact", secondary: "Voir les projets" },
    trust: ["Services professionnels", "Projets stratégiques", "Plateformes d'innovation", "Représentation commerciale"],
    operatingModel: { title: "Modèle d'action", items: [
      { title: "Services professionnels", text: "Conseil, développement commercial, transformation digitale, IA et affaires institutionnelles." },
      { title: "Projets stratégiques", text: "Initiatives propres de long terme, incluant MATU GARANDI comme projet culturel phare." },
      { title: "Plateformes d'innovation", text: "Structures numériques et futures unités comme HBS AI Labs et HBS Academy." }
    ] },
    about: { mission: { title: "Mission", text: "Promouvoir des solutions stratégiques, commerciales, digitales et institutionnelles créant de la valeur économique, culturelle et sociale." }, vision: { title: "Vision", text: "Devenir une référence africaine en conseil stratégique, innovation, plateformes de connaissance et développement de projets." }, values: [{ title: "Rigueur", text: "Décisions claires, responsables et exécutables." }, { title: "Intégrité", text: "Relations transparentes avec clients, partenaires et institutions." }, { title: "Innovation", text: "Technologie, IA et connaissance au service de problèmes concrets." }, { title: "Identité", text: "Valorisation de la mémoire, culture et capacité africaine." }], commitments: [{ title: "Engagement envers la Guinée-Bissau", text: "Renforcer capacité entrepreneuriale, mémoire nationale, culture digitale et réputation institutionnelle." }, { title: "Engagement envers l'Afrique", text: "Créer des ponts commerciaux, culturels et technologiques entre marchés africains et partenaires internationaux." }, { title: "Engagement envers l'innovation", text: "Transformer technologie, données et IA en outils utiles, accessibles et durables." }] },
    whyChoose: [{ title: "Vision stratégique", text: "HORONHO relie objectifs commerciaux, contexte institutionnel et exécution pratique." }, { title: "Connaissance institutionnelle", text: "L'entreprise comprend réputation, gouvernance, partenariats et communication formelle." }, { title: "Réseau de partenaires", text: "Le modèle prépare la coopération avec entreprises, institutions, experts et futures plateformes." }, { title: "Exécution orientée résultats", text: "Chaque projet doit avoir responsables, étapes, indicateurs et continuité." }],
    futureIntegrations: ["Centre Financier HBS", "Portail Clients", "Espace Réservé", "Facturation Digitale", "Proformas", "Paiements en Ligne"],
    leadership: { title: "Leadership", name: "Hedner Humberto Gomes da Fonseca", role: "Fondateur", summary: "Leadership orienté vers stratégie d'entreprise, relations institutionnelles, diplomatie, développement commercial et transformation digitale.", areas: ["Affaires Institutionnelles", "Stratégie d'Entreprise", "Diplomatie", "Développement Commercial", "Transformation Digitale"] },
    financialHub: { status: "En développement", description: "Le Centre Financier HBS est une future plateforme de HORONHO pour organiser processus financiers digitaux, documents, justificatifs, références de paiement et intégrations financières utiles à la Guinée-Bissau et à l'UEMOA.", features: ["Émission de Proformas", "Upload de Justificatifs", "Références de Paiement", "Orange Money", "TeleTaco", "Banco PI", "Intégration Bancaire UEMOA"] },
    institutionalAffairs: { description: "Les Affaires Institutionnelles accompagnent organisations, projets et partenaires nécessitant représentation formelle, lecture politique, diplomatie d'entreprise et gestion stratégique des relations.", areas: [{ title: "Relations Gouvernementales", text: "Structuration du dialogue avec entités publiques et organismes de régulation." }, { title: "Diplomatie d'Entreprise", text: "Construction de relations de confiance entre entreprises, institutions et partenaires internationaux." }, { title: "Coopération Internationale", text: "Soutien aux initiatives régionales, africaines et internationales." }, { title: "Représentation Institutionnelle", text: "Présence formelle, communication exécutive et défense d'intérêts légitimes." }, { title: "Gestion des Parties Prenantes", text: "Cartographie, priorisation et suivi des acteurs critiques." }] },
    credibility: { founderTitle: "À propos du Fondateur", founderText: "Hedner Humberto Gomes da Fonseca dirige HORONHO avec une orientation vers affaires institutionnelles, stratégie d'entreprise, diplomatie, développement commercial et transformation digitale.", experience: ["Présidence de la République", "Sécurité Présidentielle", "Protocole", "Diplomatie", "Relations Institutionnelles", "Développement d'Entreprise", "Transformation Digitale"], proofTitle: "Cas et Projets", proofItems: [{ title: "MATU GARANDI", text: "Projet culturel national dédié à l'histoire, culture, patrimoine et mémoire collective de la Guinée-Bissau." }, { title: "HBS AI", text: "Future ligne technologique pour agents, automatisation et solutions IA." }, { title: "Conseil Institutionnel", text: "Domaine préparé pour représentation, relations gouvernementales, diplomatie d'entreprise et gestion des parties prenantes." }], certificatesTitle: "Formations et Références à Documenter", certificates: ["Maroc", "Diplomatie", "Leadership", "Protocole", "Cérémonial"], galleryTitle: "Galerie Institutionnelle", galleryText: "Espace préparé pour photographies réelles de Rabat, Casablanca, ministères, formations et missions, après validation et autorisation." },
    funnels: { title: "Parcours Commerciaux", text: "Le site oriente les visiteurs vers des actions concrètes de conseil, représentation, partenariats et projets stratégiques.", items: [{ title: "Conseil d'Entreprise", text: "Pour entreprises nécessitant stratégie, structuration et croissance.", action: "Demander Conseil", href: "/contacto" }, { title: "Affaires Institutionnelles", text: "Pour entités nécessitant réunion, représentation ou lecture institutionnelle.", action: "Demander Réunion Institutionnelle", href: "/assuntos-institucionais" }, { title: "Représentation Commerciale", text: "Pour marques et partenaires cherchant une entrée structurée sur le marché local.", action: "Trouver Partenaire Local", href: "/parcerias" }, { title: "MATU GARANDI", text: "Pour sponsors, institutions et partenaires culturels.", action: "Soutenir le Projet", href: "/matu-garandi" }, { title: "Centre Financier HBS", text: "Pour suivre la future plateforme de proformas, justificatifs et paiements.", action: "Voir Centre Financier", href: "/centro-financeiro-hbs" }] },
    sections: { companyTitle: "Entreprise indépendante, architecture prête pour la croissance", companyText: "HORONHO BUSINESS SOLUTION, SARL est l'entité centrale. L'entreprise fournit des services professionnels, développe ses propres projets stratégiques et construit des plateformes d'innovation et de connaissance.", servicesTitle: "Services professionnels", projectsTitle: "Projets stratégiques", partnersTitle: "Partenariats pour l'échelle et l'impact", partnersText: "HORONHO travaille avec entreprises, institutions, partenaires commerciaux et entités culturelles recherchant des projets sérieux et durables.", contactTitle: "Contact commercial et institutionnel", contactText: "Utilisez ce canal pour propositions, partenariats, demandes commerciales ou réunions institutionnelles.", ecosystemTitle: "Écosystème HORONHO", ecosystemText: "Une architecture évolutive pour organiser la société mère, les projets stratégiques, les futurs laboratoires, la future académie et les nouvelles initiatives.", areasTitle: "Domaines d'Action", whyTitle: "Pourquoi choisir HORONHO", futureTitle: "Intégrations futures", futureText: "L'architecture prévoit déjà l'évolution vers produits internes et portails transactionnels sans reconstruire la base institutionnelle.", leadershipTitle: "Leadership", leadershipText: "Le leadership de HORONHO combine vision institutionnelle, stratégie d'entreprise, diplomatie et transformation digitale." },
    services: services.fr,
    projects: projects.fr,
    ecosystem: ecosystem.fr,
    matuGarandi: matu.fr,
    pages: { sobre: { title: "À propos de HORONHO", intro: "Entreprise indépendante orientée vers le conseil stratégique, développement commercial, affaires institutionnelles, transformation digitale, IA et plateformes de connaissance." }, servicos: { title: "Services", intro: "Services professionnels pour organisations qui ont besoin de stratégie, structure, technologie et croissance commerciale." }, projectos: { title: "Projets Stratégiques", intro: "Initiatives propres de HORONHO avec valeur institutionnelle, culturelle, technologique et économique à long terme." }, matu: { title: "MATU GARANDI", intro: matu.fr.subtitle }, ecossistema: { title: "Écosystème HORONHO", intro: "Structure conçue pour organiser la société mère, les projets stratégiques, les plateformes d'innovation et les futures unités de croissance." }, centroFinanceiro: { title: "Centre Financier HBS", intro: "Future plateforme financière de HORONHO pour proformas, justificatifs, références et paiements digitaux." }, assuntos: { title: "Affaires Institutionnelles", intro: "Domaine consacré aux relations gouvernementales, diplomatie d'entreprise, coopération internationale, représentation institutionnelle et gestion des parties prenantes." }, credibilidade: { title: "Crédibilité Institutionnelle", intro: "Fondateur, expérience, projets, références et preuves progressives de la capacité institutionnelle de HORONHO." }, proposta: { title: "Demander une Proposition", intro: "Choisissez le parcours de contact adapté au conseil, affaires institutionnelles, représentation commerciale ou projets stratégiques." }, parcerias: { title: "Partenariats", intro: "Relations commerciales, institutionnelles et culturelles avec objectifs clairs, gouvernance simple et impact mesurable." }, contacto: { title: "Contact", intro: "Canal unique pour demandes commerciales, institutionnelles et partenariats." }, privacidade: { title: "Politique de Confidentialité", intro: "Comment nous traitons les données personnelles reçues par nos canaux digitaux." }, termos: { title: "Conditions d'Utilisation", intro: "Conditions générales d'utilisation du site et de contact avec HORONHO." } },
    footer: { summary: "HORONHO BUSINESS SOLUTION, SARL. Conseil stratégique, développement commercial, transformation digitale, IA, représentation commerciale et projets stratégiques.", rights: "Tous droits réservés." },
    form: { name: "Nom", email: "Email", organization: "Organisation", subject: "Sujet", message: "Message", submit: "Envoyer", success: "Demande préparée avec succès." }
  },
  en: {
    meta: { title: "HORONHO BUSINESS SOLUTION, SARL", description: "Independent company for strategic consulting, business development, institutional affairs, digital transformation, AI and knowledge platforms." },
    nav: [
      { label: "Home", href: "/" },
      { label: "About HORONHO", href: "/sobre" },
      { label: "Services", href: "/servicos" },
      { label: "Institutional Affairs", href: "/assuntos-institucionais" },
      { label: "Credibility", href: "/credibilidade-institucional" },
      { label: "Strategic Projects", href: "/projectos-estrategicos" },
      { label: "Partnerships", href: "/parcerias" },
      { label: "Contact", href: "/contacto" }
    ],
    cta: "Contact Us",
    hero: { eyebrow: "Independent company for strategy, technology and institutional development", title: "HORONHO BUSINESS SOLUTION, SARL", text: "We operate through professional services, strategic projects and innovation platforms to create business, institutional and cultural value.", primary: "Start contact", secondary: "View strategic projects" },
    trust: ["Professional services", "Strategic projects", "Innovation platforms", "Commercial representation"],
    operatingModel: { title: "Operating model", items: [
      { title: "Professional Services", text: "Consulting, business development, digital transformation, AI and institutional affairs." },
      { title: "Strategic Projects", text: "Long-term owned initiatives, including MATU GARANDI as the flagship cultural project." },
      { title: "Innovation Platforms", text: "Digital structures and future units such as HBS AI Labs and HBS Academy." }
    ] },
    about: { mission: { title: "Mission", text: "Promote strategic, business, digital and institutional solutions that create economic, cultural and social value for Guinea-Bissau, Africa and international partners." }, vision: { title: "Vision", text: "Become an African reference in strategic consulting, innovation, knowledge platforms and project development with real impact." }, values: [{ title: "Rigor", text: "Clear, responsible and executable decisions." }, { title: "Integrity", text: "Transparent relationships with clients, partners and institutions." }, { title: "Innovation", text: "Practical use of technology, artificial intelligence and knowledge to solve concrete problems." }, { title: "Identity", text: "Valuing African memory, culture and productive capacity." }], commitments: [{ title: "Commitment to Guinea-Bissau", text: "Support projects that strengthen business capacity, national memory, digital literacy and institutional reputation." }, { title: "Commitment to Africa", text: "Build commercial, cultural and technological bridges between African markets and international partners." }, { title: "Commitment to Innovation", text: "Turn technology, data and AI into accessible, useful and sustainable tools." }] },
    whyChoose: [{ title: "Strategic Vision", text: "HORONHO connects business objectives, institutional context and practical execution." }, { title: "Institutional Knowledge", text: "The company understands reputation, governance, partnerships and formal communication." }, { title: "Partner Network", text: "The model prepares cooperation with companies, institutions, experts and future platforms." }, { title: "Results-Oriented Execution", text: "Every project should have owners, phases, indicators and continuity." }],
    futureIntegrations: ["HBS Financial Center", "Client Portal", "Reserved Area", "Digital Invoicing", "Proformas", "Online Payments"],
    leadership: { title: "Leadership", name: "Hedner Humberto Gomes da Fonseca", role: "Founder", summary: "Leadership focused on institutional affairs, business strategy, diplomacy, commercial development and digital transformation.", areas: ["Institutional Affairs", "Business Strategy", "Diplomacy", "Commercial Development", "Digital Transformation"] },
    financialHub: { status: "In Development", description: "HBS Financial Hub is a future HORONHO platform for digital financial processes, document issuance, proof uploads, payment references and financial integrations relevant to Guinea-Bissau and UEMOA.", features: ["Proforma Issuance", "Proof of Payment Uploads", "Payment References", "Orange Money", "TeleTaco", "Banco PI", "UEMOA Banking Integration"] },
    institutionalAffairs: { description: "Institutional Affairs supports organizations, projects and partners that require formal representation, political reading, business diplomacy and strategic relationship management.", areas: [{ title: "Government Relations", text: "Structured dialogue with public entities and regulatory bodies." }, { title: "Business Diplomacy", text: "Trust-building between companies, institutions and international partners." }, { title: "International Cooperation", text: "Support for regional, African and international initiatives." }, { title: "Institutional Representation", text: "Formal presence, executive communication and legitimate interest representation." }, { title: "Stakeholder Management", text: "Mapping, prioritization and follow-up of critical actors." }] },
    credibility: { founderTitle: "About the Founder", founderText: "Hedner Humberto Gomes da Fonseca leads HORONHO with a focus on institutional affairs, business strategy, diplomacy, commercial development and digital transformation.", experience: ["Presidency of the Republic", "Presidential Security", "Protocol", "Diplomacy", "Institutional Relations", "Business Development", "Digital Transformation"], proofTitle: "Cases and Projects", proofItems: [{ title: "MATU GARANDI", text: "National cultural project dedicated to the history, culture, heritage and collective memory of Guinea-Bissau." }, { title: "HBS AI", text: "Future technology line for agents, automation and artificial intelligence solutions." }, { title: "Institutional Consulting", text: "Area prepared to support representation, government relations, business diplomacy and stakeholder management." }], certificatesTitle: "Training and Credentials to Document", certificates: ["Morocco", "Diplomacy", "Leadership", "Protocol", "Ceremonial"], galleryTitle: "Institutional Gallery", galleryText: "Area prepared for real photographs from Rabat, Casablanca, ministries, training and missions, after validation and usage authorization." },
    funnels: { title: "Commercial Funnels", text: "The website now guides visitors toward concrete actions for consulting, representation, partnerships and strategic projects.", items: [{ title: "Business Consulting", text: "For companies that need strategy, structure and growth.", action: "Request Consulting", href: "/contacto" }, { title: "Institutional Affairs", text: "For entities that need meetings, representation or institutional reading.", action: "Request Institutional Meeting", href: "/assuntos-institucionais" }, { title: "Commercial Representation", text: "For brands and partners seeking structured market entry.", action: "Find Local Partner", href: "/parcerias" }, { title: "MATU GARANDI", text: "For sponsors, institutions and cultural partners.", action: "Support the Project", href: "/matu-garandi" }, { title: "HBS Financial Hub", text: "To follow the future platform for proformas, proofs and payments.", action: "View Financial Hub", href: "/centro-financeiro-hbs" }] },
    sections: { companyTitle: "Independent company, architecture prepared for growth", companyText: "HORONHO BUSINESS SOLUTION, SARL is the central business entity. The company provides professional services, develops owned strategic projects and builds innovation and knowledge platforms with clear governance.", servicesTitle: "Professional Services", projectsTitle: "Strategic Projects", partnersTitle: "Partnerships for scale and institutional impact", partnersText: "HORONHO works with companies, institutions, commercial partners and cultural entities seeking serious, governable and sustainable projects.", contactTitle: "Commercial and institutional contact", contactText: "Use this channel for proposals, partnerships, commercial requests or institutional meetings.", ecosystemTitle: "HORONHO Ecosystem", ecosystemText: "A scalable enterprise architecture to organize the parent company, strategic projects, future labs, future academy and new initiatives without rebuilding the website.", areasTitle: "Areas of Work", whyTitle: "Why Choose HORONHO", futureTitle: "Future Integrations", futureText: "The architecture already prepares future internal products and transactional portals without rebuilding the institutional base.", leadershipTitle: "Leadership", leadershipText: "HORONHO leadership combines institutional vision, business strategy, diplomacy and digital transformation." },
    services: services.en,
    projects: projects.en,
    ecosystem: ecosystem.en,
    matuGarandi: matu.en,
    pages: { sobre: { title: "About HORONHO", intro: "Independent company focused on strategic consulting, business development, institutional affairs, digital transformation, AI and knowledge platforms." }, servicos: { title: "Services", intro: "Professional services for companies, institutions and projects that need strategy, structure, technology and commercial growth." }, projectos: { title: "Strategic Projects", intro: "HORONHO-owned initiatives with long-term institutional, cultural, technological and economic value." }, matu: { title: "MATU GARANDI", intro: matu.en.subtitle }, ecossistema: { title: "HORONHO Ecosystem", intro: "A structure designed to organize the parent company, strategic projects, innovation platforms and future growth units." }, centroFinanceiro: { title: "HBS Financial Hub", intro: "Future HORONHO financial platform for proformas, proof uploads, payment references and digital payments." }, assuntos: { title: "Institutional Affairs", intro: "Area dedicated to government relations, business diplomacy, international cooperation, institutional representation and stakeholder management." }, credibilidade: { title: "Institutional Credibility", intro: "Founder, experience, projects, credentials and progressive evidence of HORONHO institutional capacity." }, proposta: { title: "Request Proposal", intro: "Choose the right contact path for consulting, institutional affairs, commercial representation or strategic projects." }, parcerias: { title: "Partnerships", intro: "Commercial, institutional and cultural relationships with clear objectives, simple governance and measurable impact." }, contacto: { title: "Contact", intro: "Single channel for commercial, institutional and partnership requests." }, privacidade: { title: "Privacy Policy", intro: "How we handle personal data received through our digital channels." }, termos: { title: "Terms of Use", intro: "General conditions for using the website and contacting HORONHO." } },
    footer: { summary: "HORONHO BUSINESS SOLUTION, SARL. Strategic consulting, business development, digital transformation, AI, commercial representation and strategic projects.", rights: "All rights reserved." },
    form: { name: "Name", email: "Email", organization: "Organization", subject: "Subject", message: "Message", submit: "Send request", success: "Request prepared successfully." }
  }
};
