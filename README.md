# HeartData Landing Page

Landing page for the **Australian Cardiovascular Disease Data Commons (ACDC)**.

Built with React 19, TypeScript, Vite 7, Tailwind CSS 4, and Three.js.

## Prerequisites

- **Node.js** v18+ (CI uses v20)
- **npm** v10+

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/AustralianBioCommons/heartdata-landing-page.git
cd heartdata-landing-page

# 2. Install dependencies
npm install

# 3. Copy env file
cp .env.example .env

# 4. Start dev server (runs on http://localhost:5173)
npm run dev
```

## Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start Vite dev server (port 5173)    |
| `npm run build`   | Production build to `dist/`          |
| `npm run preview` | Preview production build (port 5173) |
| `npm run lint`    | Run linter (placeholder)             |

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
