# tyronnemendoza.com

Portafolio personal de **Tyronne Antonio Mendoza Zavala** — Full Stack Senior + SRE/DevOps Senior.

## Stack

- **Astro 6** (static site, content-first)
- **TypeScript** (strict)
- **Tailwind CSS 4** (Vite plugin)
- **pnpm** (workspace + corepack)
- **Cloudflare Pages** (hosting + DNS)

## Requisitos

- Node `>= 22.12.0` (gestionado con `nvm`)
- pnpm `>= 11` (vía `corepack`)

## Comandos

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo en `http://localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Preview del build de producción |
| `pnpm astro <cmd>` | CLI de Astro (ej: `astro add`, `astro check`) |

## Estructura

```
src/
├── components/      # Hero, About, Projects, Contact, Header, Footer
├── data/            # site.ts (info personal), projects.ts (proyectos tipados)
├── layouts/         # BaseLayout.astro (head, fonts, meta)
├── pages/           # index.astro (single-page por ahora)
└── styles/          # global.css (Tailwind + theme tokens)
```

## Personalización rápida

- **Datos personales**: `src/data/site.ts`
- **Proyectos**: `src/data/projects.ts`
- **Theme (colores, fuentes)**: `src/styles/global.css` → bloque `@theme`

## Deploy

Push a `main` → Cloudflare Pages buildea y deploya automáticamente.

```bash
# Build local
pnpm build

# Preview del build
pnpm preview
```
