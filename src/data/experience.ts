export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlight?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "Atomo Gaming",
    role: "Tech Lead DevOps + Backend",
    period: "10/2024 — Presente",
    location: "Barcelona · Remoto",
    current: true,
    highlight: true,
  },
  {
    company: "Over Group",
    role: "Site Reliability Engineer",
    period: "10/2023 — Presente",
    location: "España · Remoto",
    current: true,
    highlight: true,
  },
  {
    company: "ZigSwift",
    role: "Web Developer + IT Manager",
    period: "08/2021 — 10/2025",
    location: "USA · Remoto",
    highlight: true,
  },
  {
    company: "REEMP",
    role: "DevOps Engineer",
    period: "2019 — 2021",
    location: "Colombia · Remoto",
    highlight: true,
  },
  {
    company: "Undergrub",
    role: "Backend / DevOps",
    period: "04/2018 — 10/2023",
    location: "Managua",
  },
  {
    company: "Startup Labs",
    role: "Full Stack Developer",
    period: "2021",
    location: "Remoto",
  },
  {
    company: "SIPRO",
    role: "DevOps Engineer",
    period: "2021",
    location: "Costa Rica · Remoto",
  },
  {
    company: "Nexss S.A.",
    role: "Java Developer",
    period: "11/2020 — 06/2021",
    location: "Managua",
  },
  {
    company: "MEFCCA",
    role: "Soporte → Dev → DevOps",
    period: "07/2017 — 09/2020",
    location: "Managua",
  },
];
