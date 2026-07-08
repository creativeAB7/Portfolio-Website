@AGENTS.md

# Project: Akeem Baker portfolio & consulting site

Personal professional website (not a company). Goal: showcase QA automation,
software testing, and web-development experience to attract freelance/consulting
clients. Narrative pillars: **what I do → how I work → proof I deliver**.

## Commands

- `npm run dev` — dev server (Turbopack)
- `npm run build` — production build (must pass before merging)
- `npm run lint` / `npm run typecheck` — static checks
- `npm run format` — Prettier write; `format:check` verifies (CI-gated)
- `npm run test` — Vitest unit/component; `npm run e2e` — Playwright + axe

## Conventions

- **TypeScript strict**; no `any`. Prefer explicit, readable code over clever code.
- **Static-first, no database.** Contact uses a `mailto:` fallback for now — do
  not add a backend/DB without discussing it.
- **Sections are self-contained** components in `src/components/sections/`, built
  on the shared `Section` primitive so each can become a standalone page later.
- **Identity/nav/social** live only in `src/config/site.ts` — the single source
  of truth. Don't hardcode these elsewhere.
- **Design tokens** are CSS variables in `src/app/globals.css`; use the generated
  Tailwind utilities (`bg-background`, `text-brand`, etc.), not raw hex/oklch.
- **shadcn/ui** primitives go in `src/components/ui/` (added via `npx shadcn add`).
- **Accessibility & mobile-first are non-negotiable:** semantic HTML, labelled
  controls, keyboard support, and `prefers-reduced-motion` respected. New UI
  should keep the axe e2e check at zero violations.
- **Motion** is used sparingly for subtle micro-interactions; always guard with
  reduced-motion.
- **Imports** use the `@/` alias for `src/`.

## Priorities (in order)

UX → accessibility → maintainability → code quality → features.

Full context and locked decisions live in the roadmap in `README.md`.
