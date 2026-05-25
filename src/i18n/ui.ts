export const languages = {
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";
export type Lang = keyof typeof languages;

export const ui = {
  es: {
    // ─── Nav ──────────────────────────────────────
    "nav.about": "Sobre mí",
    "nav.projects": "Proyectos",
    "nav.experience": "Trayectoria",
    "nav.cv": "CV",
    "nav.contact": "Contacto",
    "nav.cta": "Hablemos",

    // ─── Hero ─────────────────────────────────────
    "hero.statusAvailable": "Available for hire",
    "hero.cmdHint": "command palette",
    "hero.ctaProjects": "Ver proyectos →",
    "hero.ctaCV": "↓ Descargar CV",
    "hero.statHeroExp": "Experiencia",
    "hero.statHeroSvcs": "Microservicios",
    "hero.statHeroUptime": "Uptime",
    "hero.statHeroUsers": "Usuarios",
    "hero.statHeroTeam": "Team lead",
    "hero.sysinfoStatus": "open to roles",

    // ─── About ────────────────────────────────────
    "about.title": "Dos perfiles, un mismo workflow",
    "about.fullstackTitle": "Senior Full Stack",
    "about.fullstackDesc":
      "Construyo APIs y aplicaciones web de extremo a extremo: del modelo de datos hasta la UI. Backend pesado en Java/Spring, frontend en React o Vue.",
    "about.devopsTitle": "Senior SRE / DevOps",
    "about.devopsDesc":
      "Llevo plataformas a producción de forma confiable: contenedores, orquestación, IaC y observabilidad. Linux como base hace 10 años.",

    // ─── Experience / Timeline ────────────────────
    "exp.title": "Trayectoria",
    "exp.intro":
      "12 años entre Nicaragua, Costa Rica, Colombia, USA, España y Brasil. Empecé como soporte y crecí hacia desarrollo, infraestructura y liderazgo técnico.",
    "exp.statsCompanies": "Empresas",
    "exp.statsCountries": "Países",
    "exp.statsYears": "Trayectoria",
    "exp.panelStats": "─ Stats",
    "exp.panelCountries": "─ Países",
    "exp.panelSectors": "─ Sectores",
    "exp.panelStart": "─ Inicio",
    "exp.labelActive": "Activo",
    "exp.statsYearsShort": "en TI",
    "exp.statsCompaniesShort": "empresas",
    "exp.statsCountriesShort": "países",

    // ─── Projects ─────────────────────────────────
    "projects.title": "Proyectos seleccionados",
    "projects.intro":
      "Cuatro casos reales con métricas. Click en cualquiera para ver el case study completo: problema, solución, impacto y stack.",
    "projects.viewCase": "Ver case study →",
    "projects.more": "más",

    // ─── Case study (single project) ──────────────
    "case.back": "← cd ../projects/",
    "case.metaClient": "Cliente",
    "case.metaRole": "Rol",
    "case.metaPeriod": "Periodo",
    "case.metaLocation": "Ubicación",
    "case.problem": "# Problema",
    "case.solution": "# Solución",
    "case.impactTitle": "Impacto medible",
    "case.stackTitle": "Stack técnico",
    "case.linksTitle": "Sitios públicos",
    "case.prev": "← Anterior",
    "case.next": "Siguiente →",

    // ─── Role labels ──────────────────────────────
    "role.fullstack": "Full Stack",
    "role.devops": "SRE / DevOps",
    "role.both": "Full Stack + DevOps",

    // ─── Contact ──────────────────────────────────
    "contact.title": "¿Hablamos?",
    "contact.intro":
      "Empleo full-time remoto, freelance y contratos largos. Respondo en menos de 24h.",
    "contact.labelEmail": "EMAIL",
    "contact.labelLinkedIn": "LINKEDIN",
    "contact.labelGitHub": "GITHUB",

    // ─── CV page ──────────────────────────────────
    "cv.back": "← cd ~",
    "cv.title": "Curriculum Vitae",
    "cv.intro": "4 versiones para que elijas la que mejor encaje con tu búsqueda.",
    "cv.subintro":
      "Dos perfiles (Full Stack y SRE/DevOps), dos idiomas (español e inglés).",
    "cv.download": "↓ Descargar",
    "cv.langES": "Español",
    "cv.langEN": "English",
    "cv.note.lead": "¿Necesitas un formato específico o una versión adaptada?",
    "cv.note.cta": "Escribime",

    // ─── Command palette ──────────────────────────
    "cmdk.placeholder": "Buscar página, proyecto, red...",
    "cmdk.groupNav": "Navegar",
    "cmdk.groupProjects": "Proyectos",
    "cmdk.groupSocial": "Redes",
    "cmdk.itemHome": "Inicio",
    "cmdk.itemAbout": "Sobre mí",
    "cmdk.itemProjects": "Proyectos",
    "cmdk.itemContact": "Contacto",
    "cmdk.itemCV": "CV",
    "cmdk.itemLinkedIn": "LinkedIn",
    "cmdk.itemGitHub": "GitHub",
    "cmdk.itemTwitter": "Twitter / X",
    "cmdk.itemEmail": "Enviar email",
    "cmdk.hintNav": "navegar",
    "cmdk.hintOpen": "abrir",

    // ─── Footer ───────────────────────────────────
    "footer.builtWith": "Built with Astro · Hosted on Cloudflare Pages",
  },
  en: {
    // ─── Nav ──────────────────────────────────────
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.cv": "Resume",
    "nav.contact": "Contact",
    "nav.cta": "Let's talk",

    // ─── Hero ─────────────────────────────────────
    "hero.statusAvailable": "Available for hire",
    "hero.cmdHint": "command palette",
    "hero.ctaProjects": "See projects →",
    "hero.ctaCV": "↓ Download resume",
    "hero.statHeroExp": "Experience",
    "hero.statHeroSvcs": "Microservices",
    "hero.statHeroUptime": "Uptime",
    "hero.statHeroUsers": "Users",
    "hero.statHeroTeam": "Team lead",
    "hero.sysinfoStatus": "open to roles",

    // ─── About ────────────────────────────────────
    "about.title": "Two profiles, one workflow",
    "about.fullstackTitle": "Senior Full Stack",
    "about.fullstackDesc":
      "I build APIs and web apps end-to-end: from data model to UI. Heavy backend in Java/Spring, frontend in React or Vue.",
    "about.devopsTitle": "Senior SRE / DevOps",
    "about.devopsDesc":
      "I ship platforms to production reliably: containers, orchestration, IaC and observability. Linux has been my base for 10 years.",

    // ─── Experience / Timeline ────────────────────
    "exp.title": "Career",
    "exp.intro":
      "12 years across Nicaragua, Costa Rica, Colombia, USA, Spain and Brazil. I started in support and grew into development, infrastructure and technical leadership.",
    "exp.statsCompanies": "Companies",
    "exp.statsCountries": "Countries",
    "exp.statsYears": "Career",
    "exp.panelStats": "─ Stats",
    "exp.panelCountries": "─ Countries",
    "exp.panelSectors": "─ Sectors",
    "exp.panelStart": "─ Start",
    "exp.labelActive": "Active",
    "exp.statsYearsShort": "in tech",
    "exp.statsCompaniesShort": "companies",
    "exp.statsCountriesShort": "countries",

    // ─── Projects ─────────────────────────────────
    "projects.title": "Selected projects",
    "projects.intro":
      "Four real cases with metrics. Click any of them to see the full case study: problem, solution, impact and stack.",
    "projects.viewCase": "View case study →",
    "projects.more": "more",

    // ─── Case study (single project) ──────────────
    "case.back": "← cd ../projects/",
    "case.metaClient": "Client",
    "case.metaRole": "Role",
    "case.metaPeriod": "Period",
    "case.metaLocation": "Location",
    "case.problem": "# Problem",
    "case.solution": "# Solution",
    "case.impactTitle": "Measurable impact",
    "case.stackTitle": "Tech stack",
    "case.linksTitle": "Public sites",
    "case.prev": "← Previous",
    "case.next": "Next →",

    // ─── Role labels ──────────────────────────────
    "role.fullstack": "Full Stack",
    "role.devops": "SRE / DevOps",
    "role.both": "Full Stack + DevOps",

    // ─── Contact ──────────────────────────────────
    "contact.title": "Let's talk",
    "contact.intro":
      "Open to full-time remote roles, freelance, and long-term contracts. I reply within 24h.",
    "contact.labelEmail": "EMAIL",
    "contact.labelLinkedIn": "LINKEDIN",
    "contact.labelGitHub": "GITHUB",

    // ─── CV page ──────────────────────────────────
    "cv.back": "← cd ~",
    "cv.title": "Curriculum Vitae",
    "cv.intro": "4 versions so you can pick the one that fits your search best.",
    "cv.subintro":
      "Two profiles (Full Stack and SRE/DevOps), two languages (Spanish and English).",
    "cv.download": "↓ Download",
    "cv.langES": "Spanish",
    "cv.langEN": "English",
    "cv.note.lead": "Need a specific format or a tailored version?",
    "cv.note.cta": "Email me",

    // ─── Command palette ──────────────────────────
    "cmdk.placeholder": "Search page, project, social...",
    "cmdk.groupNav": "Navigate",
    "cmdk.groupProjects": "Projects",
    "cmdk.groupSocial": "Social",
    "cmdk.itemHome": "Home",
    "cmdk.itemAbout": "About",
    "cmdk.itemProjects": "Projects",
    "cmdk.itemContact": "Contact",
    "cmdk.itemCV": "Resume",
    "cmdk.itemLinkedIn": "LinkedIn",
    "cmdk.itemGitHub": "GitHub",
    "cmdk.itemTwitter": "Twitter / X",
    "cmdk.itemEmail": "Send email",
    "cmdk.hintNav": "navigate",
    "cmdk.hintOpen": "open",

    // ─── Footer ───────────────────────────────────
    "footer.builtWith": "Built with Astro · Hosted on Cloudflare Pages",
  },
} as const;

export type UIKey = keyof (typeof ui)["es"];
