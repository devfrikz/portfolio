type LocalizedString = { es: string; en: string };
type LocalizedArray = { es: string[]; en: string[] };

export type Project = {
  slug: string;
  title: string;
  client?: string;
  role: "fullstack" | "devops" | "both";
  jobTitle: LocalizedString;
  period: LocalizedString;
  location?: LocalizedString;
  summary: LocalizedString;
  problem: LocalizedString;
  solution: LocalizedString;
  impact: LocalizedArray;
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "atomo-gaming",
    title: "Atomo Gaming",
    client: "Atomo Gaming (Barcelona)",
    role: "both",
    jobTitle: {
      es: "Tech Lead DevOps + Tech Lead Backend",
      en: "Tech Lead DevOps + Tech Lead Backend",
    },
    period: {
      es: "Octubre 2024 – Presente",
      en: "October 2024 – Present",
    },
    location: {
      es: "Remoto · España",
      en: "Remote · Spain",
    },
    summary: {
      es: "Plataforma iGaming multi-brand operando en 5 países, con foco en disponibilidad, seguridad y escalabilidad.",
      en: "Multi-brand iGaming platform running in 5 countries, focused on availability, security and scalability.",
    },
    problem: {
      es: "La operación estaba sobre máquinas virtuales en Azure con un monolito acoplado, despliegues manuales y sin infraestructura como código. El crecimiento a múltiples brands y países exigía aislar entornos, reducir tiempos de despliegue y endurecer la seguridad.",
      en: "The operation ran on Azure VMs with a tightly-coupled monolith, manual deploys and no infrastructure as code. Growth into multiple brands and countries required isolating environments, reducing deploy times and hardening security.",
    },
    solution: {
      es: "Migré la plataforma de Azure VMs a AWS EKS, descomponiendo el monolito en más de 20 microservicios. Reemplacé Gradle por Maven, dockericé todos los servicios, levanté toda la infra con Terraform y endurecí seguridad (IAM, secretos, segmentación de red). Operación 24/7 con observabilidad y runbooks.",
      en: "I migrated the platform from Azure VMs to AWS EKS, breaking the monolith into 20+ microservices. Replaced Gradle with Maven, dockerized every service, provisioned all infrastructure with Terraform and hardened security (IAM, secrets, network segmentation). 24/7 operation with observability and runbooks.",
    },
    impact: {
      es: [
        "7 brands activas en 5 países (Ecuador, Guatemala, Panamá, Brasil, Angola)",
        "20+ microservicios sobre 3 clusters EKS",
        "120k+ usuarios concurrentes y 200k+ requests en pico",
        "Uptime sostenido del 99.2%",
        "Tech Lead de un equipo de 22 personas entre DevOps y Backend",
      ],
      en: [
        "7 live brands across 5 countries (Ecuador, Guatemala, Panama, Brazil, Angola)",
        "20+ microservices across 3 EKS clusters",
        "120k+ concurrent users and 200k+ peak requests",
        "Sustained 99.2% uptime",
        "Tech Lead of a 22-person DevOps + Backend team",
      ],
    },
    stack: [
      "Java 21",
      "Spring Boot",
      "Maven",
      "Docker",
      "Kubernetes",
      "AWS EKS",
      "Terraform",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "RabbitMQ",
      "MongoDB",
      "Elasticsearch",
    ],
    links: [
      { label: "atomogaming.com", href: "https://atomogaming.com" },
      { label: "bet593.ec", href: "https://bet593.ec" },
      { label: "sport507.com", href: "https://sport507.com" },
      { label: "parbet.com.br", href: "https://parbet.com.br" },
    ],
    featured: true,
  },
  {
    slug: "over-group",
    title: "Over Group · OverOption",
    client: "Over Group (España)",
    role: "devops",
    jobTitle: {
      es: "Site Reliability Engineer",
      en: "Site Reliability Engineer",
    },
    period: {
      es: "Octubre 2023 – Presente",
      en: "October 2023 – Present",
    },
    location: {
      es: "Remoto · España",
      en: "Remote · Spain",
    },
    summary: {
      es: "Plataforma para tipsters profesionales que comercializan sus pronósticos deportivos a apostadores.",
      en: "Platform for professional tipsters who sell their sports predictions to bettors.",
    },
    problem: {
      es: "La infraestructura previa no escalaba con el crecimiento de la base de tipsters y apostadores. Hacían falta despliegues reproducibles, mejor disponibilidad y una operación que pudiera crecer sin sumar fricción.",
      en: "The previous infrastructure didn't scale with the growth in tipsters and bettors. Reproducible deploys, better uptime and an operation that could scale without adding friction were needed.",
    },
    solution: {
      es: "Migré la infraestructura a Kubernetes sobre AWS EKS con Terraform como fuente única de verdad. Ordené los microservicios Node.js, definí pipelines de despliegue y mejoré observabilidad y políticas de seguridad.",
      en: "I migrated the infrastructure to Kubernetes on AWS EKS with Terraform as the single source of truth. Cleaned up the Node.js microservices, set up deploy pipelines and improved observability and security policies.",
    },
    impact: {
      es: [
        "~10 microservicios en producción",
        "50k+ usuarios atendidos",
        "70k+ requests en pico",
        "Despliegues reproducibles vía Terraform",
      ],
      en: [
        "~10 microservices in production",
        "50k+ users served",
        "70k+ peak requests",
        "Reproducible deploys via Terraform",
      ],
    },
    stack: ["AWS", "EKS", "Kubernetes", "Terraform", "Node.js", "MySQL"],
    links: [
      { label: "overoption.io", href: "https://overoption.io" },
      { label: "over-group.io", href: "https://over-group.io" },
    ],
    featured: true,
  },
  {
    slug: "reemp",
    title: "REEMP",
    client: "REEMP S.A. (Colombia)",
    role: "devops",
    jobTitle: {
      es: "DevOps Engineer",
      en: "DevOps Engineer",
    },
    period: {
      es: "2019 – 2021",
      en: "2019 – 2021",
    },
    location: {
      es: "Remoto · Colombia",
      en: "Remote · Colombia",
    },
    summary: {
      es: 'Marketplace móvil y web con geolocalización para servicios profesionales — concepto tipo "Uber de servicios" (médicos, veterinarios, técnicos).',
      en: 'Mobile and web marketplace with geolocation for professional services — an "Uber for services" concept (doctors, vets, technicians).',
    },
    problem: {
      es: "Había que construir desde cero la infraestructura de un marketplace con geolocalización, listo para escalar y con un nivel de seguridad alto desde el día uno.",
      en: "We had to build from scratch the infrastructure for a geolocation-based marketplace, ready to scale and with a high security level from day one.",
    },
    solution: {
      es: "Diseñé e implementé toda la infraestructura sobre AWS con Terraform y Ansible, pipelines en CircleCI y un backend en Node.js. Hardening de seguridad, gestión de secretos y separación estricta de entornos.",
      en: "I designed and built the entire infrastructure on AWS with Terraform and Ansible, CircleCI pipelines and a Node.js backend. Security hardening, secrets management and strict environment separation.",
    },
    impact: {
      es: [
        "Reconocimiento por seguridad de infraestructura otorgado por auditora estadounidense",
        "Infraestructura inmutable y reproducible (Terraform + Ansible)",
        "Producto no llegó a producción por razones comerciales — no técnicas",
      ],
      en: [
        "Security recognition awarded by a US-based auditing firm",
        "Immutable and reproducible infrastructure (Terraform + Ansible)",
        "Product never reached production for commercial reasons — not technical",
      ],
    },
    stack: ["AWS", "Terraform", "Ansible", "CircleCI", "Node.js"],
    featured: true,
  },
  {
    slug: "zigswift",
    title: "ZigSwift",
    client: "ZigSwift (USA)",
    role: "fullstack",
    jobTitle: {
      es: "Web Developer + IT Manager",
      en: "Web Developer + IT Manager",
    },
    period: {
      es: "Agosto 2021 – Octubre 2025",
      en: "August 2021 – October 2025",
    },
    location: {
      es: "Remoto · Estados Unidos",
      en: "Remote · United States",
    },
    summary: {
      es: "Plataforma de generación masiva y automatizada de sitios WordPress para una agencia de marketing.",
      en: "Mass, automated WordPress site generation platform for a marketing agency.",
    },
    problem: {
      es: "La agencia necesitaba lanzar grandes volúmenes de sitios WordPress de forma rápida y consistente, sin que el levantamiento manual fuera el cuello de botella del negocio.",
      en: "The agency needed to ship large volumes of WordPress sites quickly and consistently, without manual setup being the business bottleneck.",
    },
    solution: {
      es: "Construí un sistema de automatización en Python y Node.js que provisiona y configura sitios WordPress de extremo a extremo: infra en AWS (EC2 + RDS PostgreSQL) más SiteGround para hosting compartido, plantillas reutilizables y administración centralizada.",
      en: "I built an automation system in Python and Node.js that provisions and configures WordPress sites end-to-end: AWS infra (EC2 + RDS PostgreSQL) plus SiteGround for shared hosting, reusable templates and centralized admin.",
    },
    impact: {
      es: [
        "Alto volumen de sitios desplegados de forma automatizada",
        "4 años operando la plataforma como IT Manager",
        "Reducción drástica del tiempo de lanzamiento de cada sitio",
      ],
      en: [
        "High volume of sites deployed automatically",
        "4 years operating the platform as IT Manager",
        "Drastic reduction in site launch time",
      ],
    },
    stack: ["Python", "Node.js", "WordPress", "AWS EC2", "AWS RDS PostgreSQL", "SiteGround"],
    featured: true,
  },
];
