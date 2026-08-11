import { projectSchema, type Project } from "../schema";

const data: Project = {
  slug: "portfolio-website",
  title: "This Website: Built to the Standard I'd Apply to Yours",
  shortTitle: "This Website",
  summary:
    "A consulting site is easy to fill with claims about engineering standards. I built mine so the claims are checkable — the architecture, the trade-offs, and the automated gates every change has to pass before it ships.",
  category: "personal",
  role: "Product design, full-stack engineering & QA",
  timeframe: "2026",
  tags: [
    "Next.js",
    "TypeScript",
    "Testing",
    "Accessibility",
    "SEO",
    "Tailwind CSS",
  ],
  cover: {
    src: "/projects/portfolio-website/home-light.png",
    alt: "The homepage of this website: the hero headline alongside a credibility panel listing experience, architecture, continuous testing and full-stack delivery.",
  },
  featured: true,
  order: 1,
  links: [
    {
      label: "View source",
      href: "https://github.com/creativeAB7/Portfolio-Website",
      type: "repo",
    },
  ],
  related: [],
  body: [
    {
      type: "prose",
      title: "Overview",
      body: [
        "This website is my portfolio — but I treated it as a real product with a real goal: help potential clients quickly decide whether I'm the right person to build their software. That meant it couldn't just claim I deliver high-quality work; it had to demonstrate it.",
        "So I designed and built it end to end as a production-grade application: content-driven, rigorously tested, accessible, fast, and easy to maintain. This case study walks through how I approached it and, more importantly, why — and because the source is public, none of it has to be taken on trust.",
      ],
    },
    {
      type: "metrics",
      title: "The evidence",
      items: [
        {
          value: "0",
          label:
            "accessibility violations, verified automatically on every build",
        },
        {
          value: "100%",
          label:
            "of pages statically rendered — no server to secure or slow down",
        },
        {
          value: "6",
          label: "automated gates every change has to pass before it ships",
        },
      ],
    },
    {
      type: "prose",
      title: "The brief I set myself",
      body: [
        "The objective was commercial, not decorative: turn visitors into conversations. A consulting site has to build trust in seconds, make it easy to explore proof of work, and remove friction from getting in touch.",
        "It also had to be cheap to run, effortless to update, and able to grow — adding a new case study or service shouldn't mean paying for a rebuild.",
      ],
    },
    {
      type: "list",
      title: "What it had to achieve",
      style: "check",
      items: [
        "Build trust and communicate value within the first few seconds",
        "Present work as in-depth case studies, not just screenshots",
        "Be fast, accessible, and discoverable by default",
        "Be inexpensive to host and simple to maintain",
        "Scale to new content without engineering work",
      ],
    },
    {
      type: "decisions",
      title: "Key decisions (and the trade-offs)",
      items: [
        {
          decision: "Static-first, with no database",
          rationale:
            "The site pre-renders to static pages, so it loads almost instantly, costs next to nothing to host, and has no server or database to secure or maintain.",
          alternatives:
            "A database-backed CMS would allow instant edits, but adds cost, complexity, a security surface, and slower pages — overkill for a site that changes when I choose to publish.",
        },
        {
          decision: "Separate content from design",
          rationale:
            "All text and data live in a typed, validated content layer, kept completely separate from the visual components. Updates are quick and safe, and invalid content is caught automatically before it can ever go live.",
          alternatives:
            "Hard-coding text into the design is faster on day one, but turns every future edit into a developer task and risks shipping broken pages.",
        },
        {
          decision:
            "Build quality in — testing and accessibility from the start",
          rationale:
            "Automated tests and accessibility checks run on every change, so regressions are caught before release and the site works for everyone, on every device. Quality is proven, not promised.",
          alternatives:
            "Leaving testing until 'later' is the industry default — and a big reason so many sites ship bugs and inaccessible experiences. Building it in costs a little upfront and saves far more downstream.",
        },
        {
          decision: "A reusable case-study platform",
          rationale:
            "Case studies are assembled from typed content blocks, so adding a new project — or a whole new type of section — is a content task, not a redesign.",
          alternatives:
            "Hand-designing each case study looks bespoke but doesn't scale; the site would need developer time every time the portfolio grows.",
        },
      ],
    },
    {
      type: "prose",
      title: "Every change has to earn its way in",
      body: [
        "Six automated gates stand between a change and production: formatting, linting, type-checking, unit tests, a production build, and end-to-end tests in a real browser — including an accessibility audit that has to report zero issues. Nothing ships unless every one of them passes.",
        "This is the same discipline I bring to client work: catch problems early, keep the codebase healthy, and make it safe to move quickly without breaking what already works.",
      ],
    },
    {
      type: "techStack",
      title: "How it's built",
      groups: [
        {
          category: "Framework & language",
          items: ["Next.js", "React", "TypeScript"],
        },
        {
          category: "Design & UI",
          items: ["Tailwind CSS", "shadcn/ui", "Motion"],
        },
        {
          category: "Quality & delivery",
          items: [
            "Playwright",
            "Vitest",
            "axe-core",
            "GitHub Actions",
            "Vercel",
          ],
        },
      ],
    },
    {
      type: "gallery",
      title: "A look under the hood",
      items: [
        {
          src: "/projects/portfolio-website/architecture.png",
          alt: "Architecture diagram: content is typed and validated, rendered by React Server Components, built by Next.js, and delivered via Vercel's CDN, tested at every step.",
          caption:
            "How content flows from typed, validated data to a fast, static site — tested and accessible at every step.",
        },
        {
          src: "/projects/portfolio-website/home-dark.png",
          alt: "The website's homepage in dark mode",
          caption:
            "The same site in dark mode — theming built in from the start.",
        },
      ],
    },
    {
      type: "prose",
      title: "What this means for you",
      body: [
        "If you're hiring someone to build software, this site is the proof: it's the standard I hold my own work to, and the standard I'd apply to yours — fast, accessible, tested, maintainable, and built to grow.",
        "More than the specific technologies, it shows how I think: weighing trade-offs against your goals, building quality in rather than bolting it on, and making decisions that keep the long-term cost of ownership low.",
      ],
    },
  ],
};

export const portfolioWebsite = projectSchema.parse(data);
