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
    slug: "hi-beauty",
    title: "Hi Beauty",
    client: "SUBSCRIPCIONBOXCO-SAS (Colombia)",
    role: "both",
    jobTitle: {
      es: "DevOps Engineer + Backend Consultant",
      en: "DevOps Engineer + Backend Consultant",
    },
    period: {
      es: "Julio 2026 – Presente",
      en: "July 2026 – Present",
    },
    location: {
      es: "Remoto · Colombia",
      en: "Remote · Colombia",
    },
    summary: {
      es: "Ecommerce por suscripción de beauty box operando en Colombia, Chile y España. Migré 21 aplicaciones desde 3 EC2 legacy monolíticos a EKS gestionado por Terraform, con cero downtime en el cutover.",
      en: "Beauty box subscription ecommerce operating in Colombia, Chile and Spain. Migrated 21 applications from 3 legacy monolithic EC2 instances to EKS managed by Terraform, with zero downtime during the DNS cutover.",
    },
    problem: {
      es: "La operación corría sobre 3 EC2 monolíticos con PM2, Mongo local y Nginx configurado a mano — sin IaC, secretos hardcodeados en archivos .env y despliegues manuales. Además el proveedor de nube estaba por finalizar servicio, lo que obligaba a migrar toda la plataforma a una cuenta AWS nueva bajo presión de tiempo y sin margen para downtime del negocio.",
      en: "The operation ran on 3 monolithic EC2 instances with PM2, local Mongo and hand-configured Nginx — no IaC, secrets hardcoded in .env files and manual deploys. On top of that, the cloud provider was about to shut down service, forcing a full migration to a new AWS account under time pressure and with no room for business downtime.",
    },
    solution: {
      es: "Diseñé desde cero la infraestructura nueva en AWS EKS 1.33 con Terraform como fuente única de verdad: VPC, node groups (on-demand + spot), NLB con TLS ACM, ECR, ElastiCache Redis. Instalé el operator PSMDB para levantar 3 réplicas MongoDB por país con HA (quorum), centralicé los 42 secretos en AWS Secrets Manager y los sincronicé al cluster con ExternalSecrets Operator + Reloader. Dockericé y armé los manifests K8s de las 21 apps (Express, NestJS y Next.js), reusables workflows de GitHub Actions con OIDC (sin claves long-lived) y ArgoCD/manual deploys por dispatch. Cutover DNS de 22 records vía API de Cloudflare, backup completo de las 3 mongos legacy y sync incremental S3 legacy → nuevo bucket con CronJob. Post-migración detecté una query \\$regex saturando el primary Mongo al 100% CPU (getGuide sobre 718k docs) y la arreglé con equality lowercase + índice compuesto: 27s → 0ms.",
      en: "I designed the new infrastructure on AWS EKS 1.33 from scratch using Terraform as the single source of truth: VPC, node groups (on-demand + spot), NLB with ACM TLS, ECR, ElastiCache Redis. I installed the PSMDB operator to run 3-replica MongoDB clusters per country with HA (quorum), centralized 42 secrets in AWS Secrets Manager synced to the cluster via ExternalSecrets Operator + Reloader. Dockerized and wrote K8s manifests for 21 apps (Express, NestJS and Next.js), reusable GitHub Actions workflows with OIDC (no long-lived keys) and ArgoCD/manual deploys by dispatch. Cutover of 22 DNS records via Cloudflare API, full backup of the 3 legacy mongos and incremental S3 sync from legacy bucket to the new one via CronJob. Post-migration I found a \\$regex query saturating the Mongo primary to 100% CPU (getGuide over 718k docs) and fixed it with equality lowercase + compound index: 27s → 0ms.",
    },
    impact: {
      es: [
        "21 microservicios migrados a EKS sin downtime en el cutover DNS",
        "3 países operando (Colombia, Chile, España) sobre un solo cluster",
        "42 secretos gestionados centralizadamente con ExternalSecrets + rotación automática",
        "Ahorro de USD 396/mes en AWS (32% de reducción, de USD 1230 a ~USD 834/mes)",
        "Bug crítico en producción resuelto: query lenta 27s → 0ms, CPU mongo 100% → 15%",
        "100% uptime post-cutover sin incidentes reportados",
      ],
      en: [
        "21 microservices migrated to EKS with zero downtime during DNS cutover",
        "3 countries live (Colombia, Chile, Spain) on a single cluster",
        "42 secrets centrally managed with ExternalSecrets + automatic rotation",
        "USD 396/month AWS cost reduction (32% cut, from USD 1230 to ~USD 834/month)",
        "Critical production bug fixed: 27s query → 0ms, Mongo CPU 100% → 15%",
        "100% post-cutover uptime with zero reported incidents",
      ],
    },
    stack: [
      "AWS EKS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "MongoDB",
      "Percona Server MongoDB Operator",
      "ExternalSecrets Operator",
      "AWS Secrets Manager",
      "ElastiCache Redis",
      "CloudFront",
      "S3",
      "EventBridge",
      "SQS",
      "Cloudflare",
      "GitHub Actions (OIDC)",
      "Node.js",
      "NestJS",
      "Next.js",
      "Express",
    ],
    links: [
      { label: "hibeauty.com.co", href: "https://hibeauty.com.co" },
      { label: "hibeautybox.cl", href: "https://hibeautybox.cl" },
      { label: "hibeautybox.es", href: "https://hibeautybox.es" },
    ],
    featured: true,
  },
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
