# Akeem Baker — Portfolio & Consulting Site

A personal professional website showcasing QA automation, software testing, and
web-development work — built to a production standard and designed to attract
freelance and consulting clients.

> **Status:** Milestone 1 (foundation) complete. Content sections, project case
> studies, and the contact flow are being built out in subsequent milestones —
> see the [roadmap](#roadmap).

## Tech stack

| Concern        | Choice                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router, RSC)                                       |
| Language       | [TypeScript](https://www.typescriptlang.org) (strict)                                    |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com)                                               |
| UI primitives  | [shadcn/ui](https://ui.shadcn.com) (Radix) + [Lucide](https://lucide.dev)                |
| Animation      | [Motion](https://motion.dev) (Framer Motion)                                             |
| Forms & schema | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)                  |
| Theming        | [next-themes](https://github.com/pacocoursey/next-themes) (light/dark/system)            |
| Unit testing   | [Vitest](https://vitest.dev) + Testing Library                                           |
| E2E & a11y     | [Playwright](https://playwright.dev) + [axe-core](https://github.com/dequelabs/axe-core) |
| Hosting        | [Vercel](https://vercel.com)                                                             |

## Architecture at a glance

- **Static-first.** The site prerenders to static HTML — fast, cheap, and
  resilient. No database; the contact form uses a `mailto:` fallback for now and
  can be upgraded to a real email service later.
- **Reusable, self-contained sections.** Every content section is a standalone
  component built on a shared `Section` primitive, so any section can later be
  promoted to its own page without changes.
- **Single source of truth for identity & nav** in [`src/config/site.ts`](src/config/site.ts).
- **Design tokens** (light/dark, brand accent) live as CSS variables in
  [`src/app/globals.css`](src/app/globals.css) and are exposed as Tailwind utilities.
- **Accessibility & performance by default:** semantic landmarks, a skip link,
  keyboard-friendly navigation, `prefers-reduced-motion` support, and an
  automated axe accessibility check in the test suite.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional: nothing is required to run locally
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script                 | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Start the dev server (Turbopack)              |
| `npm run build`        | Production build                              |
| `npm run start`        | Serve the production build                    |
| `npm run lint`         | ESLint                                        |
| `npm run typecheck`    | TypeScript, no emit                           |
| `npm run format`       | Format with Prettier                          |
| `npm run format:check` | Verify formatting (used in CI)                |
| `npm run test`         | Unit/component tests (Vitest)                 |
| `npm run e2e`          | End-to-end & accessibility tests (Playwright) |

## Project structure

```
src/
├─ app/                 # App Router: layout, page, global styles
├─ components/
│  ├─ layout/           # Header, footer, nav, Container, Section primitives
│  ├─ sections/         # Page sections (Hero, …) — one component each
│  ├─ ui/               # shadcn/ui primitives
│  ├─ analytics.tsx     # GA + Clarity loader (env-gated, off by default)
│  ├─ theme-provider.tsx / theme-toggle.tsx
│  └─ icons.tsx         # Brand icons not shipped by Lucide
├─ config/site.ts       # Site identity, navigation, social links
└─ lib/utils.ts         # cn() helper
e2e/                    # Playwright specs
```

## Testing

- **Unit/component:** Vitest + Testing Library (jsdom).
- **End-to-end + accessibility:** Playwright drives a real browser and runs an
  axe-core scan asserting **zero WCAG A/AA violations**.

```bash
npm run test    # unit
npm run e2e     # e2e (installs a browser on first run: npx playwright install chromium)
```

## Deployment

Deployed on Vercel. Environment variables (all optional) are documented in
[`.env.example`](.env.example): `NEXT_PUBLIC_SITE_URL`, and — when you're ready to
switch analytics on — `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_CLARITY_ID`.

## Roadmap

- [x] **M1 — Foundation:** tooling, design system, layout, testing infra, CI.
- [ ] **M2 — Core sections:** Hero, About, Services, Technologies, Experience/Skills.
- [ ] **M3 — Work:** projects listing + case-study pages.
- [ ] **M4 — Social proof:** testimonials, certifications, FAQ.
- [ ] **M5 — Contact:** form with validation (mailto → email service).
- [ ] **M6 — Polish:** full SEO (sitemap/OG/JSON-LD), a11y & performance pass,
      expanded test suite.
