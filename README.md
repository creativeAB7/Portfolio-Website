# Akeem Baker — Portfolio & Consulting Site

[![CI](https://github.com/creativeAB7/Portfolio-Website/actions/workflows/ci.yml/badge.svg)](https://github.com/creativeAB7/Portfolio-Website/actions/workflows/ci.yml)
[![Live site](https://img.shields.io/badge/live-akeembaker.com-2563eb)](https://akeembaker.com)

A personal, production-grade professional website for a QA automation & software
engineer — built to attract freelance and consulting clients and to serve as a
showcase of engineering standards: clean architecture, strict typing, a strong
content/presentation separation, accessibility, and automated testing.

The site is content-driven and **static-first**: every section reads from a
typed, schema-validated content layer, and pages prerender to static HTML.

## Features

- **Content-driven marketing site** — Hero, About, Services, Experience & Skills,
  Technologies, Projects, Testimonials, Certifications, FAQ, and Contact.
- **Case-study platform** — a block-based case-study system with a dynamic
  `/projects/[slug]` route and a `/projects` index. Adding a project is a pure
  content change; the routing, templates, and layouts never change.
- **Trust layer** — testimonials, certifications, and a client-focused FAQ, with
  elegant empty states so nothing looks broken before real content is added.
- **Accessible contact form** — React Hook Form + Zod, honeypot spam guard, and
  full submitting/success/error states. Delivery sits behind an adapter (mailto
  today; a hosted email provider can be swapped in without UI changes).
- **Light / dark / system theming** with no flash of incorrect theme.
- **SEO** — per-page metadata, canonical URLs, `sitemap.xml`, `robots.txt`,
  dynamic Open Graph images, and JSON-LD (`Person` + `FAQPage`).
- **Accessibility & performance by default** — semantic landmarks, skip link,
  keyboard support, `prefers-reduced-motion`, minimal client-side JavaScript,
  and optimised fonts/images.
- **Analytics-ready** — Google Analytics + Microsoft Clarity load only when
  their env vars are set.

## Tech stack

| Concern        | Choice                                                                                   |
| -------------- | ---------------------------------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router, RSC, Turbopack)                            |
| Language       | [TypeScript](https://www.typescriptlang.org) (strict)                                    |
| Styling        | [Tailwind CSS v4](https://tailwindcss.com)                                               |
| UI primitives  | [shadcn/ui](https://ui.shadcn.com) (Radix) + [Lucide](https://lucide.dev)                |
| Animation      | [Motion](https://motion.dev) (Framer Motion)                                             |
| Forms & schema | [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)                  |
| Theming        | [next-themes](https://github.com/pacocoursey/next-themes)                                |
| Unit testing   | [Vitest](https://vitest.dev) + Testing Library                                           |
| E2E & a11y     | [Playwright](https://playwright.dev) + [axe-core](https://github.com/dequelabs/axe-core) |
| Hosting / CI   | [Vercel](https://vercel.com) · GitHub Actions                                            |

## Architecture overview

- **Content is separate from presentation.** All copy and data live in
  `src/content/`, validated by [Zod schemas](src/content/schema.ts) with
  `.parse()` **at import time** — so invalid content fails the build. Components
  are pure presentation and consume typed content; they contain no hard-coded copy.
- **Block-based case studies.** A case study's body is an ordered,
  discriminated-union of typed blocks (prose, list, feature list, tech stack,
  decisions, metrics, gallery, quote) rendered by a **type-safe registry**
  ([`case-study-blocks.tsx`](src/components/projects/case-study-blocks.tsx)). New
  section types = add a schema variant + a renderer + one registry entry.
- **Submission behind an adapter.** The contact UI depends only on a
  `ContactSubmitter` seam ([`src/lib/contact`](src/lib/contact/index.ts)); the
  mechanism (mailto → Resend, etc.) can change without touching components.
- **Design tokens** (light/dark, brand accent) are CSS variables in
  [`globals.css`](src/app/globals.css), exposed as Tailwind utilities.
- **Single source of truth** for identity/navigation/links in
  [`src/config/site.ts`](src/config/site.ts).

## Project structure

```
src/
├─ app/                       # App Router
│  ├─ layout.tsx, page.tsx    # root layout + homepage
│  ├─ projects/               # /projects index + [slug] case study
│  ├─ opengraph-image.tsx     # dynamic OG images (root + per project)
│  ├─ sitemap.ts, robots.ts   # SEO route handlers
│  └─ globals.css             # Tailwind + design tokens
├─ components/
│  ├─ layout/                 # header, footer, nav, Container, Section
│  ├─ sections/               # one component per homepage section
│  ├─ projects/               # case-study template, blocks, cards, grid
│  ├─ testimonials/, certifications/, contact/
│  ├─ ui/                     # shadcn/ui primitives
│  ├─ seo/                    # JSON-LD helper
│  └─ empty-state, rating, technology-groups, icons, analytics …
├─ content/                   # typed, Zod-validated content (the data layer)
│  ├─ schema.ts               # all schemas + inferred types
│  └─ projects/               # project registry (one file per project)
├─ config/site.ts             # identity, navigation, social links
├─ lib/                       # contact service layer, structured data, utils
└─ test/fixtures/             # test-only fixtures (never shipped)
e2e/                          # Playwright specs
```

## Local development

```bash
npm install
cp .env.example .env.local    # optional — the site runs with no env vars
npm run dev                   # http://localhost:3000
```

### Scripts

| Script                 | Description                                   |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Dev server (Turbopack)                        |
| `npm run build`        | Production build                              |
| `npm run start`        | Serve the production build                    |
| `npm run lint`         | ESLint                                        |
| `npm run typecheck`    | TypeScript, no emit                           |
| `npm run format`       | Format with Prettier                          |
| `npm run format:check` | Verify formatting (CI)                        |
| `npm run test`         | Unit/component tests (Vitest)                 |
| `npm run e2e`          | End-to-end & accessibility tests (Playwright) |

## Testing

- **Unit / component:** Vitest + Testing Library (jsdom) — content validation,
  the case-study block renderer, credibility cards, and the contact form.
- **End-to-end + accessibility:** Playwright drives a real browser and runs an
  axe-core scan asserting **zero WCAG A/AA violations** on `/` and `/projects`.

```bash
npm run test
npm run e2e     # first run downloads a browser: npx playwright install chromium
```

CI (GitHub Actions) runs formatting, lint, typecheck, unit tests, build, and the
Playwright suite on every push and pull request.

## Deployment

Deployed on **Vercel** (zero-config Next.js). The app is static-first: routes
prerender to static HTML/SSG.

Environment variables (all optional — see [`.env.example`](.env.example)):

| Variable                 | Purpose                                                                                                                |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`   | Canonical production URL — **set this in production** so canonical links, the sitemap, and OG image URLs are absolute. |
| `NEXT_PUBLIC_GA_ID`      | Google Analytics 4 measurement ID (enables GA when set).                                                               |
| `NEXT_PUBLIC_CLARITY_ID` | Microsoft Clarity project ID (enables Clarity when set).                                                               |

## Roadmap

- [x] **Foundation** — tooling, design system, layout, testing infra, CI.
- [x] **Content layer & core sections** — typed, schema-validated content.
- [x] **Projects & case studies** — block-based platform + dynamic routes.
- [x] **Trust layer** — testimonials, certifications, FAQ.
- [x] **Contact** — accessible form with a swappable submission adapter.
- [x] **Production readiness** — SEO, performance, accessibility, docs.

### Future enhancements

- Real content: first case studies, testimonials, certifications; final FAQ.
- Hosted email delivery (Resend) via a server route + a `ResendSubmitter`.
- Project filtering/tags on `/projects`; MDX for long-form case-study prose.
- Lighthouse CI / performance budgets; Vercel Analytics & Speed Insights.

```

```
