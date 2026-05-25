export type Project = {
  slug: string;
  title: string;
  role: "fullstack" | "devops" | "both";
  client?: string;
  description: string;
  problem: string;
  solution: string;
  impact?: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "placeholder-1",
    title: "Plataforma de Gaming Multi-Tenant",
    role: "both",
    client: "Cliente confidencial",
    description:
      "Arquitectura y operación de una plataforma de gaming con múltiples integraciones de proveedores.",
    problem:
      "Necesidad de escalar a múltiples tenants y proveedores manteniendo aislamiento de datos y baja latencia regional.",
    solution:
      "Microservicios en Java/Spring sobre EKS, secretos sincronizados con AWS Secrets Manager, despliegues con Helm y GitLab CI/CD.",
    impact: [
      "Reducción del 40% en tiempo de despliegue",
      "Aislamiento por tenant a nivel de schema",
      "SLA 99.9% sostenido",
    ],
    stack: ["Java 17", "Spring Boot", "EKS", "Helm", "Terraform", "MySQL", "Redis"],
    featured: true,
  },
  {
    slug: "placeholder-2",
    title: "SaaS B2B para Clínicas Médicas",
    role: "fullstack",
    description:
      "Diseño e implementación de un SaaS multi-tenant (schema-per-tenant) para gestión clínica.",
    problem:
      "Clínicas necesitaban una plataforma unificada con aislamiento de datos sensibles (PHI).",
    solution:
      "Spring Boot 4 + React 19 + Postgres 14 con esquemas por tenant, Flyway para migraciones, RBAC granular.",
    stack: ["Spring Boot 4", "React 19", "PostgreSQL", "Flyway", "Vite", "MUI"],
    featured: true,
  },
  {
    slug: "placeholder-3",
    title: "Tracking de Conversiones Multi-Plataforma",
    role: "fullstack",
    description:
      "Implementación de tracking server-side de conversiones para campañas de Google Ads.",
    problem:
      "Formularios externos no eran rastreados, perdiendo atribución de conversiones publicitarias.",
    solution:
      "Eventos GA4 con custom code en Webflow, importación automática a Google Ads, validación con enhanced measurement.",
    stack: ["GA4", "Google Ads", "GTM", "Webflow"],
  },
];
