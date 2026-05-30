import { Locale } from "./i18n";

type NavItem = { label: string; href: string };
type Service = { title: string; summary: string; points: string[] };
type Project = { title: string; summary: string; status: string; href: string };

export type SiteContent = {
  meta: { title: string; description: string };
  nav: NavItem[];
  cta: string;
  hero: { eyebrow: string; title: string; text: string; primary: string; secondary: string };
  trust: string[];
  sections: {
    companyTitle: string;
    companyText: string;
    servicesTitle: string;
    projectsTitle: string;
    partnersTitle: string;
    partnersText: string;
    contactTitle: string;
    contactText: string;
  };
  services: Service[];
  projects: Project[];
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

const baseServices = {
  pt: [
    {
      title: "Soluções empresariais",
      summary: "Estruturamos processos, canais e sistemas para empresas que precisam de operar com mais controlo.",
      points: ["Diagnóstico operacional", "Sistemas internos", "Automação de fluxos"]
    },
    {
      title: "Comércio e importação/exportação",
      summary: "Apoiamos modelos comerciais com foco em representação, distribuição e parcerias sustentáveis.",
      points: ["Representação comercial", "Distribuição", "Parcerias internacionais"]
    },
    {
      title: "Comunicação digital e media",
      summary: "Criamos presença digital, conteúdos e canais de comunicação preparados para reputação e crescimento.",
      points: ["Websites", "Conteúdo multimédia", "Gestão de canais digitais"]
    },
    {
      title: "Plataformas e automação",
      summary: "Desenvolvemos plataformas digitais simples, seguras e escaláveis para projectos empresariais e culturais.",
      points: ["Arquitectura web", "Integrações", "Assistentes e formulários inteligentes"]
    }
  ],
  fr: [
    {
      title: "Solutions d'entreprise",
      summary: "Nous structurons les processus, canaux et systemes pour des organisations qui ont besoin de plus de controle.",
      points: ["Diagnostic operationnel", "Systemes internes", "Automatisation"]
    },
    {
      title: "Commerce et import-export",
      summary: "Nous soutenons des modeles commerciaux axes sur la representation, la distribution et les partenariats durables.",
      points: ["Representation commerciale", "Distribution", "Partenariats internationaux"]
    },
    {
      title: "Communication digitale et media",
      summary: "Nous creons des presences digitales et des contenus adaptes a la reputation et a la croissance.",
      points: ["Sites web", "Contenus multimedia", "Gestion des canaux digitaux"]
    },
    {
      title: "Plateformes et automatisation",
      summary: "Nous developpons des plateformes simples, securisees et evolutives pour les projets d'entreprise et culturels.",
      points: ["Architecture web", "Integrations", "Assistants et formulaires intelligents"]
    }
  ],
  en: [
    {
      title: "Business solutions",
      summary: "We structure processes, channels and systems for organizations that need stronger operational control.",
      points: ["Operational diagnosis", "Internal systems", "Workflow automation"]
    },
    {
      title: "Commerce and import-export",
      summary: "We support commercial models built around representation, distribution and sustainable partnerships.",
      points: ["Commercial representation", "Distribution", "International partnerships"]
    },
    {
      title: "Digital communication and media",
      summary: "We build digital presence, content and communication channels prepared for reputation and growth.",
      points: ["Websites", "Multimedia content", "Digital channel management"]
    },
    {
      title: "Platforms and automation",
      summary: "We develop simple, secure and scalable digital platforms for business and cultural initiatives.",
      points: ["Web architecture", "Integrations", "Smart assistants and forms"]
    }
  ]
} satisfies Record<Locale, Service[]>;

const baseProjects = {
  pt: [
    {
      title: "Plataforma de Historia da Guine-Bissau",
      summary: "Projecto digital dedicado a preservar e divulgar memoria historica, cultura e conhecimento nacional.",
      status: "Projecto estrategico",
      href: "/plataforma-historia-guine-bissau"
    },
    {
      title: "Sistemas digitais para clientes",
      summary: "Arquitectura de jornadas, formulários, follow-up e operações para empresas de serviços.",
      status: "Oferta comercial",
      href: "/servicos"
    },
    {
      title: "Parcerias telecom e institucionais",
      summary: "Modelos de SMS informativo, patrocínio cultural, publicidade digital e responsabilidade social.",
      status: "Em desenvolvimento",
      href: "/parcerias"
    }
  ],
  fr: [
    {
      title: "Plateforme Histoire de la Guinee-Bissau",
      summary: "Projet digital dedie a la preservation et a la diffusion de la memoire historique et culturelle nationale.",
      status: "Projet strategique",
      href: "/plataforma-historia-guine-bissau"
    },
    {
      title: "Systemes digitaux clients",
      summary: "Architecture de parcours, formulaires, suivi et operations pour les entreprises de services.",
      status: "Offre commerciale",
      href: "/servicos"
    },
    {
      title: "Partenariats telecom et institutionnels",
      summary: "Modeles SMS informatifs, sponsoring culturel, publicite digitale et responsabilite sociale.",
      status: "En developpement",
      href: "/parcerias"
    }
  ],
  en: [
    {
      title: "Guinea-Bissau History Platform",
      summary: "A digital initiative dedicated to preserving and sharing national historical memory and culture.",
      status: "Strategic project",
      href: "/plataforma-historia-guine-bissau"
    },
    {
      title: "Digital client systems",
      summary: "Journey architecture, forms, follow-up and operations for service businesses.",
      status: "Commercial offer",
      href: "/servicos"
    },
    {
      title: "Telecom and institutional partnerships",
      summary: "Informational SMS, cultural sponsorship, digital advertising and social responsibility models.",
      status: "In development",
      href: "/parcerias"
    }
  ]
} satisfies Record<Locale, Project[]>;

export const content: Record<Locale, SiteContent> = {
  pt: {
    meta: {
      title: "HORONHO BUSINESS SOLUTION, SARL",
      description: "Empresa guineense de solucoes empresariais, comunicacao digital, comercio, plataformas digitais e projectos culturais."
    },
    nav: [
      { label: "Sobre", href: "/sobre" },
      { label: "Servicos", href: "/servicos" },
      { label: "Projectos", href: "/projectos" },
      { label: "Parcerias", href: "/parcerias" },
      { label: "Contacto", href: "/contacto" }
    ],
    cta: "Falar com a HORONHO",
    hero: {
      eyebrow: "Empresa guineense de solucoes empresariais e digitais",
      title: "HORONHO BUSINESS SOLUTION",
      text: "Desenhamos sistemas, plataformas e parcerias que ligam comercio, comunicacao digital, automacao e valorizacao cultural.",
      primary: "Iniciar contacto",
      secondary: "Ver projectos"
    },
    trust: ["Solucoes empresariais", "Comercio e import-export", "Plataformas digitais", "Projectos culturais"],
    sections: {
      companyTitle: "Empresa institucional, execucao pratica",
      companyText: "A HORONHO BUSINESS SOLUTION, SARL actua a partir da Guine-Bissau com uma agenda clara: criar valor economico e social atraves de tecnologia, comunicacao, comercio e projectos culturais sustentaveis.",
      servicesTitle: "Areas de actuacao",
      projectsTitle: "Projectos prioritarios",
      partnersTitle: "Parcerias para escala e impacto",
      partnersText: "Trabalhamos com empresas privadas, instituicoes publicas, operadores de telecomunicacoes e parceiros culturais que procuram projectos digitais com governacao, reputacao e continuidade.",
      contactTitle: "Contacto comercial e institucional",
      contactText: "Use este canal para propostas, parcerias, pedidos comerciais ou reunioes institucionais. A equipa responde com prioridade aos pedidos completos."
    },
    services: baseServices.pt,
    projects: baseProjects.pt,
    pages: {
      sobre: { title: "Sobre a HORONHO", intro: "Empresa guineense orientada para solucoes empresariais, comercio, comunicacao digital e desenvolvimento de plataformas." },
      servicos: { title: "Servicos", intro: "Servicos modulares para empresas, instituicoes e projectos que precisam de organizacao, presenca digital e sistemas operacionais." },
      projectos: { title: "Projectos", intro: "Iniciativas que combinam tecnologia, cultura, comercio e impacto institucional." },
      historia: { title: "Plataforma de Historia da Guine-Bissau", intro: "Uma plataforma digital para preservar, organizar e divulgar historia, cultura e memoria nacional." },
      parcerias: { title: "Parcerias estrategicas", intro: "Propostas para telecomunicacoes, patrocinadores, instituicoes e empresas que procuram impacto sustentavel." },
      contacto: { title: "Contacto", intro: "Canal unico para pedidos comerciais, institucionais e de parceria." },
      privacidade: { title: "Politica de Privacidade", intro: "Como tratamos dados pessoais recebidos pelos nossos canais digitais." },
      termos: { title: "Termos de Utilizacao", intro: "Condicoes gerais para utilizacao do website e contacto com a HORONHO." }
    },
    footer: { summary: "HORONHO BUSINESS SOLUTION, SARL. Solucoes empresariais, comercio, comunicacao digital, plataformas e cultura.", rights: "Todos os direitos reservados." },
    form: { name: "Nome", email: "Email", organization: "Organizacao", subject: "Assunto", message: "Mensagem", submit: "Enviar pedido", success: "Pedido preparado com sucesso." }
  },
  fr: {
    meta: { title: "HORONHO BUSINESS SOLUTION, SARL", description: "Entreprise guineenne de solutions d'entreprise, communication digitale, commerce, plateformes et projets culturels." },
    nav: [
      { label: "A propos", href: "/sobre" },
      { label: "Services", href: "/servicos" },
      { label: "Projets", href: "/projectos" },
      { label: "Partenariats", href: "/parcerias" },
      { label: "Contact", href: "/contacto" }
    ],
    cta: "Contacter HORONHO",
    hero: { eyebrow: "Entreprise guineenne de solutions d'entreprise et digitales", title: "HORONHO BUSINESS SOLUTION", text: "Nous concevons des systemes, plateformes et partenariats reliant commerce, communication digitale, automatisation et valorisation culturelle.", primary: "Prendre contact", secondary: "Voir les projets" },
    trust: ["Solutions d'entreprise", "Commerce et import-export", "Plateformes digitales", "Projets culturels"],
    sections: { companyTitle: "Institution solide, execution pratique", companyText: "HORONHO BUSINESS SOLUTION, SARL agit depuis la Guinee-Bissau avec une ambition claire: creer de la valeur economique et sociale par la technologie, la communication, le commerce et la culture.", servicesTitle: "Domaines d'activite", projectsTitle: "Projets prioritaires", partnersTitle: "Partenariats pour l'echelle et l'impact", partnersText: "Nous collaborons avec entreprises, institutions, operateurs telecom et partenaires culturels autour de projets digitaux durables.", contactTitle: "Contact commercial et institutionnel", contactText: "Utilisez ce canal pour les propositions, partenariats, demandes commerciales ou reunions institutionnelles." },
    services: baseServices.fr,
    projects: baseProjects.fr,
    pages: { sobre: { title: "A propos de HORONHO", intro: "Entreprise guineenne orientee vers les solutions d'entreprise, le commerce, la communication digitale et les plateformes." }, servicos: { title: "Services", intro: "Services modulaires pour organisations qui ont besoin de structure, presence digitale et systemes operationnels." }, projectos: { title: "Projets", intro: "Initiatives associant technologie, culture, commerce et impact institutionnel." }, historia: { title: "Plateforme Histoire de la Guinee-Bissau", intro: "Une plateforme digitale pour preserver, organiser et diffuser l'histoire et la culture nationale." }, parcerias: { title: "Partenariats strategiques", intro: "Propositions pour telecoms, sponsors, institutions et entreprises recherchant un impact durable." }, contacto: { title: "Contact", intro: "Canal unique pour demandes commerciales, institutionnelles et partenariats." }, privacidade: { title: "Politique de Confidentialite", intro: "Comment nous traitons les donnees personnelles recues par nos canaux digitaux." }, termos: { title: "Conditions d'Utilisation", intro: "Conditions generales d'utilisation du site et de contact avec HORONHO." } },
    footer: { summary: "HORONHO BUSINESS SOLUTION, SARL. Solutions d'entreprise, commerce, communication digitale, plateformes et culture.", rights: "Tous droits reserves." },
    form: { name: "Nom", email: "Email", organization: "Organisation", subject: "Sujet", message: "Message", submit: "Envoyer", success: "Demande preparee avec succes." }
  },
  en: {
    meta: { title: "HORONHO BUSINESS SOLUTION, SARL", description: "Guinean company for business solutions, digital communication, commerce, platforms and cultural projects." },
    nav: [
      { label: "About", href: "/sobre" },
      { label: "Services", href: "/servicos" },
      { label: "Projects", href: "/projectos" },
      { label: "Partnerships", href: "/parcerias" },
      { label: "Contact", href: "/contacto" }
    ],
    cta: "Contact HORONHO",
    hero: { eyebrow: "Guinean business and digital solutions company", title: "HORONHO BUSINESS SOLUTION", text: "We design systems, platforms and partnerships connecting commerce, digital communication, automation and cultural value.", primary: "Start contact", secondary: "View projects" },
    trust: ["Business solutions", "Commerce and import-export", "Digital platforms", "Cultural projects"],
    sections: { companyTitle: "Institutional company, practical execution", companyText: "HORONHO BUSINESS SOLUTION, SARL operates from Guinea-Bissau with a clear agenda: create economic and social value through technology, communication, commerce and sustainable cultural projects.", servicesTitle: "Areas of work", projectsTitle: "Priority projects", partnersTitle: "Partnerships for scale and impact", partnersText: "We work with private companies, public institutions, telecom operators and cultural partners seeking digital projects with governance, reputation and continuity.", contactTitle: "Commercial and institutional contact", contactText: "Use this channel for proposals, partnerships, commercial requests or institutional meetings." },
    services: baseServices.en,
    projects: baseProjects.en,
    pages: { sobre: { title: "About HORONHO", intro: "A Guinean company focused on business solutions, commerce, digital communication and platform development." }, servicos: { title: "Services", intro: "Modular services for organizations that need structure, digital presence and operational systems." }, projectos: { title: "Projects", intro: "Initiatives combining technology, culture, commerce and institutional impact." }, historia: { title: "Guinea-Bissau History Platform", intro: "A digital platform to preserve, organize and share national history, culture and memory." }, parcerias: { title: "Strategic partnerships", intro: "Proposals for telecom operators, sponsors, institutions and companies seeking sustainable impact." }, contacto: { title: "Contact", intro: "Single channel for commercial, institutional and partnership requests." }, privacidade: { title: "Privacy Policy", intro: "How we handle personal data received through our digital channels." }, termos: { title: "Terms of Use", intro: "General conditions for using the website and contacting HORONHO." } },
    footer: { summary: "HORONHO BUSINESS SOLUTION, SARL. Business solutions, commerce, digital communication, platforms and culture.", rights: "All rights reserved." },
    form: { name: "Name", email: "Email", organization: "Organization", subject: "Subject", message: "Message", submit: "Send request", success: "Request prepared successfully." }
  }
};
