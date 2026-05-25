type LocalizedString = { es: string; en: string };

export type ExperienceItem = {
  company: string;
  role: LocalizedString;
  period: LocalizedString;
  location: LocalizedString;
  current?: boolean;
  highlight?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "Atomo Gaming",
    role: {
      es: "Tech Lead DevOps + Backend",
      en: "Tech Lead DevOps + Backend",
    },
    period: {
      es: "10/2024 — Presente",
      en: "10/2024 — Present",
    },
    location: {
      es: "Barcelona · Remoto",
      en: "Barcelona · Remote",
    },
    current: true,
    highlight: true,
  },
  {
    company: "Over Group",
    role: {
      es: "Site Reliability Engineer",
      en: "Site Reliability Engineer",
    },
    period: {
      es: "10/2023 — Presente",
      en: "10/2023 — Present",
    },
    location: {
      es: "España · Remoto",
      en: "Spain · Remote",
    },
    current: true,
    highlight: true,
  },
  {
    company: "ZigSwift",
    role: {
      es: "Web Developer + IT Manager",
      en: "Web Developer + IT Manager",
    },
    period: {
      es: "08/2021 — 10/2025",
      en: "08/2021 — 10/2025",
    },
    location: {
      es: "USA · Remoto",
      en: "USA · Remote",
    },
    highlight: true,
  },
  {
    company: "REEMP",
    role: {
      es: "DevOps Engineer",
      en: "DevOps Engineer",
    },
    period: {
      es: "2019 — 2021",
      en: "2019 — 2021",
    },
    location: {
      es: "Colombia · Remoto",
      en: "Colombia · Remote",
    },
    highlight: true,
  },
  {
    company: "Undergrub",
    role: {
      es: "Backend / DevOps",
      en: "Backend / DevOps",
    },
    period: {
      es: "04/2018 — 10/2023",
      en: "04/2018 — 10/2023",
    },
    location: {
      es: "Managua",
      en: "Managua",
    },
  },
  {
    company: "Startup Labs",
    role: {
      es: "Full Stack Developer",
      en: "Full Stack Developer",
    },
    period: { es: "2021", en: "2021" },
    location: { es: "Remoto", en: "Remote" },
  },
  {
    company: "SIPRO",
    role: { es: "DevOps Engineer", en: "DevOps Engineer" },
    period: { es: "2021", en: "2021" },
    location: { es: "Costa Rica · Remoto", en: "Costa Rica · Remote" },
  },
  {
    company: "Nexss S.A.",
    role: { es: "Java Developer", en: "Java Developer" },
    period: { es: "11/2020 — 06/2021", en: "11/2020 — 06/2021" },
    location: { es: "Managua", en: "Managua" },
  },
  {
    company: "MEFCCA",
    role: {
      es: "Soporte → Dev → DevOps",
      en: "Support → Dev → DevOps",
    },
    period: { es: "07/2017 — 09/2020", en: "07/2017 — 09/2020" },
    location: { es: "Managua", en: "Managua" },
  },
];

export const countries = [
  { flag: "🇳🇮", es: "Nicaragua", en: "Nicaragua" },
  { flag: "🇨🇷", es: "Costa Rica", en: "Costa Rica" },
  { flag: "🇨🇴", es: "Colombia", en: "Colombia" },
  { flag: "🇺🇸", es: "USA", en: "USA" },
  { flag: "🇪🇸", es: "España", en: "Spain" },
  { flag: "🇧🇷", es: "Brasil", en: "Brazil" },
] as const;

export const sectors = {
  es: ["Gobierno", "Aduanas", "Marketplace", "Marketing digital", "iGaming", "Logística"],
  en: ["Government", "Customs", "Marketplace", "Digital marketing", "iGaming", "Logistics"],
} as const;
