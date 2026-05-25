export type Project = {
  slug: string;
  title: string;
  client?: string;
  role: "fullstack" | "devops" | "both";
  jobTitle: string;
  period: string;
  location?: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
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
    jobTitle: "Tech Lead DevOps + Tech Lead Backend",
    period: "Octubre 2024 – Presente",
    location: "Remoto · España",
    summary:
      "Plataforma iGaming multi-brand operando en 5 países, con foco en disponibilidad, seguridad y escalabilidad.",
    problem:
      "La operación estaba sobre máquinas virtuales en Azure con un monolito acoplado, despliegues manuales y sin infraestructura como código. El crecimiento a múltiples brands y países exigía aislar entornos, reducir tiempos de despliegue y endurecer la seguridad.",
    solution:
      "Migré la plataforma de Azure VMs a AWS EKS, descomponiendo el monolito en más de 20 microservicios. Reemplacé Gradle por Maven, dockericé todos los servicios, levanté toda la infra con Terraform y endurecí seguridad (IAM, secretos, segmentación de red). Operación 24/7 con observabilidad y runbooks.",
    impact: [
      "7 brands activas en 5 países (Ecuador, Guatemala, Panamá, Brasil, Angola)",
      "20+ microservicios sobre 3 clusters EKS",
      "120k+ usuarios concurrentes y 200k+ requests en pico",
      "Uptime sostenido del 99.2%",
      "Tech Lead de un equipo de 22 personas entre DevOps y Backend",
    ],
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
    jobTitle: "Site Reliability Engineer",
    period: "Octubre 2023 – Presente",
    location: "Remoto · España",
    summary:
      "Plataforma para tipsters profesionales que comercializan sus pronósticos deportivos a apostadores.",
    problem:
      "La infraestructura previa no escalaba con el crecimiento de la base de tipsters y apostadores. Hacían falta despliegues reproducibles, mejor disponibilidad y una operación que pudiera crecer sin sumar fricción.",
    solution:
      "Migré la infraestructura a Kubernetes sobre AWS EKS con Terraform como fuente única de verdad. Ordené los microservicios Node.js, definí pipelines de despliegue y mejoré observabilidad y políticas de seguridad.",
    impact: [
      "~10 microservicios en producción",
      "50k+ usuarios atendidos",
      "70k+ requests en pico",
      "Despliegues reproducibles vía Terraform",
    ],
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
    jobTitle: "DevOps Engineer",
    period: "2019 – 2021",
    location: "Remoto · Colombia",
    summary:
      "Marketplace móvil y web con geolocalización para servicios profesionales — concepto tipo \"Uber de servicios\" (médicos, veterinarios, técnicos).",
    problem:
      "Había que construir desde cero la infraestructura de un marketplace con geolocalización, listo para escalar y con un nivel de seguridad alto desde el día uno.",
    solution:
      "Diseñé e implementé toda la infraestructura sobre AWS con Terraform y Ansible, pipelines en CircleCI y un backend en Node.js. Hardening de seguridad, gestión de secretos y separación estricta de entornos.",
    impact: [
      "Reconocimiento por seguridad de infraestructura otorgado por auditora estadounidense",
      "Infraestructura inmutable y reproducible (Terraform + Ansible)",
      "Producto no llegó a producción por razones comerciales — no técnicas",
    ],
    stack: ["AWS", "Terraform", "Ansible", "CircleCI", "Node.js"],
    featured: true,
  },
  {
    slug: "zigswift",
    title: "ZigSwift",
    client: "ZigSwift (USA)",
    role: "fullstack",
    jobTitle: "Web Developer + IT Manager",
    period: "Agosto 2021 – Octubre 2025",
    location: "Remoto · Estados Unidos",
    summary:
      "Plataforma de generación masiva y automatizada de sitios WordPress para una agencia de marketing.",
    problem:
      "La agencia necesitaba lanzar grandes volúmenes de sitios WordPress de forma rápida y consistente, sin que el levantamiento manual fuera el cuello de botella del negocio.",
    solution:
      "Construí un sistema de automatización en Python y Node.js que provisiona y configura sitios WordPress de extremo a extremo: infra en AWS (EC2 + RDS PostgreSQL) más SiteGround para hosting compartido, plantillas reutilizables y administración centralizada.",
    impact: [
      "Alto volumen de sitios desplegados de forma automatizada",
      "4 años operando la plataforma como IT Manager",
      "Reducción drástica del tiempo de lanzamiento de cada sitio",
    ],
    stack: ["Python", "Node.js", "WordPress", "AWS EC2", "AWS RDS PostgreSQL", "SiteGround"],
    featured: true,
  },
];