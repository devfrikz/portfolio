export type TechIcon = {
  name: string;
  icon: string;
};

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const make = (name: string, path: string): TechIcon => ({ name, icon: `${CDN}/${path}` });

export const tech = {
  java:          make("Java",           "java/java-original.svg"),
  spring:        make("Spring",         "spring/spring-original.svg"),
  nodejs:        make("Node.js",        "nodejs/nodejs-original.svg"),
  typescript:    make("TypeScript",     "typescript/typescript-original.svg"),
  react:         make("React",          "react/react-original.svg"),
  vue:           make("Vue",            "vuejs/vuejs-original.svg"),
  postgresql:    make("PostgreSQL",     "postgresql/postgresql-original.svg"),
  mysql:         make("MySQL",          "mysql/mysql-original.svg"),
  mongodb:       make("MongoDB",        "mongodb/mongodb-original.svg"),
  redis:         make("Redis",          "redis/redis-original.svg"),
  rabbitmq:      make("RabbitMQ",       "rabbitmq/rabbitmq-original.svg"),
  elasticsearch: make("Elasticsearch",  "elasticsearch/elasticsearch-original.svg"),
  kubernetes:    make("Kubernetes",     "kubernetes/kubernetes-original.svg"),
  docker:        make("Docker",         "docker/docker-original.svg"),
  aws:           make("AWS",            "amazonwebservices/amazonwebservices-original-wordmark.svg"),
  azure:         make("Azure",          "azure/azure-original.svg"),
  terraform:     make("Terraform",      "terraform/terraform-original.svg"),
  helm:          make("Helm",           "helm/helm-original.svg"),
  ansible:       make("Ansible",        "ansible/ansible-original.svg"),
  gitlab:        make("GitLab",         "gitlab/gitlab-original.svg"),
  github:        make("GitHub Actions", "githubactions/githubactions-original.svg"),
  circleci:      make("CircleCI",       "circleci/circleci-plain.svg"),
  prometheus:    make("Prometheus",     "prometheus/prometheus-original.svg"),
  grafana:       make("Grafana",        "grafana/grafana-original.svg"),
  nginx:         make("Nginx",          "nginx/nginx-original.svg"),
  linux:         make("Linux",          "linux/linux-original.svg"),
  bash:          make("Bash",           "bash/bash-original.svg"),
  python:        make("Python",         "python/python-original.svg"),
  wordpress:     make("WordPress",      "wordpress/wordpress-original.svg"),
  maven:         make("Maven",          "maven/maven-original.svg"),
  gradle:        make("Gradle",         "gradle/gradle-original.svg"),
} satisfies Record<string, TechIcon>;

export type TechKey = keyof typeof tech;
