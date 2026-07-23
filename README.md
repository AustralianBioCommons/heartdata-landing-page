# HeartData Landing Page

Landing page for the **Australian Cardiovascular Disease Data Commons (ACDC)**.

Built with React 19, TypeScript, Vite 7, Tailwind CSS 4, and Three.js.

## Prerequisites

- **Node.js** v20 (pinned in [`.nvmrc`](.nvmrc))
- **pnpm** v10.16+ (enabled via Corepack, which ships with Node)

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/AustralianBioCommons/heartdata-landing-page.git
cd heartdata-landing-page

# 2. Use the Node version pinned in .nvmrc
nvm install   # first time only — installs Node 20
nvm use       # switches the current shell to Node 20

# 3. Enable pnpm (bundled with Node via Corepack)
corepack enable pnpm

# 4. Install dependencies
pnpm install

# 5. Copy env file
cp .env.example .env

# 6. Start dev server (runs on http://localhost:5173)
pnpm dev
```

> Dependencies are installed with a 14-day [`minimumReleaseAge`](https://pnpm.io/settings#minimumreleaseage)
> delay (configured in [`pnpm-workspace.yaml`](pnpm-workspace.yaml)) so newly
> published — and potentially compromised — package versions are never pulled in
> until they have had time to be vetted.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `pnpm dev`      | Start Vite dev server (port 5173)    |
| `pnpm build`    | Production build to `dist/`          |
| `pnpm preview`  | Preview production build (port 5173) |
| `pnpm lint`     | Run linter (placeholder)             |

## Project Structure

```
src/
├── main.tsx            # App entry point
├── App.tsx             # Root component
├── index.css           # Global styles / Tailwind
├── components/
│   ├── Header.tsx
│   ├── StatusBadge.tsx
│   ├── hero/           # Hero section with Three.js visualisation
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   └── ui/             # Reusable UI components
├── data/
│   └── cohorts.ts      # Cohort data
└── hooks/
    └── useParticleHeart.ts
```

## Environment Variables

See [.env.example](.env.example):

| Variable         | Description         | Default                  |
| ---------------- | ------------------- | ------------------------ |
| `VITE_APP_NAME`  | Application name    | HeartData Landing Page   |
| `VITE_ENV`       | Environment         | prod                     |
| `VITE_BUILD_SHA` | Git SHA for builds  | dev                      |

## Deployment

Merging to `main` triggers a GitHub Actions workflow that builds and deploys to AWS S3 + CloudFront. See [.github/workflows/deploy-web.yml](.github/workflows/deploy-web.yml).
