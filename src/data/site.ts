import type { Lang } from "../i18n/ui";

type LocalizedString = { es: string; en: string };
type LocalizedArray = { es: string[]; en: string[] };

export const site = {
  name: "Tyronne Mendoza",
  fullName: "Tyronne Antonio Mendoza Zavala",
  email: "tyronne@tyronnemendoza.com",
  yearsExperience: 12,

  title: {
    es: "Senior Full Stack · SRE / DevOps",
    en: "Senior Full Stack · SRE / DevOps",
  } satisfies LocalizedString,

  tagline: {
    es: "Diseño, construyo y opero plataformas en producción.",
    en: "I design, build and operate platforms in production.",
  } satisfies LocalizedString,

  bio: {
    es: "Senior Full Stack y SRE/DevOps con 12 años operando plataformas críticas en gobierno, aduanas, marketing e iGaming. Actualmente lidero los equipos de DevOps y Backend en Atomo Gaming.",
    en: "Senior Full Stack and SRE/DevOps with 12 years operating critical platforms in government, customs, marketing and iGaming. Currently leading the DevOps and Backend teams at Atomo Gaming.",
  } satisfies LocalizedString,

  about: {
    es: "Ingeniero en Sistemas con 12 años en el sector TI. Empecé en Nicaragua como técnico y crecí hacia desarrollo backend, infraestructura y DevOps, trabajando con empresas en Nicaragua, Costa Rica, Colombia, USA, España y Brasil. Mantengo dos perfiles profesionales que se complementan: Full Stack (Java/Spring, Node.js, React, Vue) y SRE/DevOps (AWS, Azure, Kubernetes, Terraform).",
    en: "Systems Engineer with 12 years in the IT industry. I started in Nicaragua as a technician and grew into backend development, infrastructure and DevOps, working with companies in Nicaragua, Costa Rica, Colombia, USA, Spain and Brazil. I maintain two complementary professional profiles: Full Stack (Java/Spring, Node.js, React, Vue) and SRE/DevOps (AWS, Azure, Kubernetes, Terraform).",
  } satisfies LocalizedString,

  location: {
    es: "Managua, Nicaragua · Remoto",
    en: "Managua, Nicaragua · Remote",
  } satisfies LocalizedString,

  highlights: {
    es: [
      "12 años en TI: desarrollo backend, infraestructura y DevOps",
      "Sysadmin Linux hace 10 años — es mi sistema base de trabajo",
      "AWS Certified: Cloud Practitioner + Developer Associate (exámenes aprobados)",
      "Tech Lead de DevOps y Backend en Atomo Gaming · equipo de 22 personas",
    ],
    en: [
      "12 years in IT: backend development, infrastructure and DevOps",
      "Linux sysadmin for 10 years — it's my daily driver",
      "AWS Certified: Cloud Practitioner + Developer Associate (exams passed)",
      "Tech Lead of DevOps and Backend at Atomo Gaming · 22-person team",
    ],
  } satisfies LocalizedArray,

  social: {
    github: "https://github.com/devfrikz",
    linkedin: "https://www.linkedin.com/in/devfrikkz",
    twitter: "https://twitter.com/devfrikz",
    email: "mailto:tyronne@tyronnemendoza.com",
  },

  cvs: {
    fullstackEs: "/cvs/tyronne-mendoza-fullstack-es.pdf",
    fullstackEn: "/cvs/tyronne-mendoza-fullstack-en.pdf",
    devopsEs: "/cvs/tyronne-mendoza-devops-es.pdf",
    devopsEn: "/cvs/tyronne-mendoza-devops-en.pdf",
  },
} as const;

export function pick<T>(field: { es: T; en: T }, lang: Lang): T {
  return field[lang];
}
