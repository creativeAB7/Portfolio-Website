import { projectSchema, type Project } from "../schema";

const data: Project = {
  slug: "landlord-app",
  title: "The Landlord App: Property Management, Built Quality-First",
  summary:
    "A two-sided property management platform for self-managing UK landlords and their tenants — and a look at how I design a product for reliability, security and long-term growth from day one.",
  category: "personal",
  status: "in-progress",
  role: "Product, architecture, full-stack engineering & QA (solo)",
  timeframe: "2026 · in progress",
  tags: [
    "Next.js",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Row Level Security",
    "Testing",
  ],
  cover: {
    src: "/projects/landlord-app/architecture.png",
    alt: "Architecture of the Landlord App: two roles and a Next.js app backed by Supabase with Row Level Security, and a data model built around the tenancy.",
  },
  featured: true,
  order: 0,
  links: [],
  related: ["portfolio-website"],
  body: [
    {
      type: "prose",
      title: "Overview",
      body: [
        "The Landlord App is a web-based property management platform for self-managing UK landlords — the people running roughly one to ten properties themselves, without a letting agent — and, deliberately, for their tenants too. Rather than landlord software with tenants bolted on as records, it's a genuinely two-sided platform where both sides collaborate.",
        "It's an in-progress product I'm designing and building solo. This case study is less a feature tour than a look at how I think — the decisions, trade-offs and quality discipline behind it — because that's what matters if you're considering working with me.",
      ],
    },
    {
      type: "prose",
      title: "The problem",
      body: [
        "Most self-managing landlords run their properties on a patchwork of spreadsheets, email, WhatsApp, cloud folders, paper and memory. Information scatters, and nothing lives in one place. Their tenants, meanwhile, have nowhere central to see documents, track rent, report a repair or reach their landlord — so every interaction is fragmented.",
        "The real cost isn't just wasted time; it's disorganisation and risk. Compliance certificates — Gas Safety, EICR, EPC — quietly expire, and a lapsed certificate isn't mere admin: it can bring fines and can legally block a landlord from regaining possession. Documents get lost, rent disputes come down to “did you pay?” with no shared record, and it all compounds as a portfolio grows.",
      ],
    },
    {
      type: "prose",
      title: "Why it's different",
      body: [
        "Most existing tools are single-sided and finance-first — built for the landlord's bookkeeping, with the tenant as a payment record. The Landlord App makes the opposite bet: a two-sided, communication-first platform where landlord and tenant work together. It targets an underserved middle — landlords too big for spreadsheets, too small to justify an agent's fee or enterprise software — and it competes on focus, not feature count, obsessing over the handful of workflows landlords perform every week.",
        "To be clear about scope: today's product isn't a replacement for a letting agent. It's the organisational backbone that makes self-management far easier — the foundation for a longer-term vision of “a property management company in your pocket”, reached deliberately over time.",
      ],
    },
    {
      type: "featureList",
      title: "The six core workflows",
      items: [
        {
          title: "Property management",
          description: "A landlord's whole portfolio, organised in one place.",
        },
        {
          title: "Tenant management",
          description:
            "Tenants onboard themselves through a secure invitation — no accounts created on their behalf.",
        },
        {
          title: "Document management",
          description:
            "Certificates and agreements stored as a single source of truth, shared with tenants only when intended.",
        },
        {
          title: "Rent tracking — not processing",
          description:
            "Landlords record payments; tenants see due, pending or paid, with history — validating the workflow before tackling payments.",
        },
        {
          title: "Maintenance",
          description:
            "Tenants raise issues that move through a clear new → in-progress → resolved lifecycle, visible to both sides.",
        },
        {
          title: "Communication",
          description:
            "Messaging tied to the tenancy, so conversations stay in context with a permanent history — not scattered across apps.",
        },
      ],
    },
    {
      type: "decisions",
      title: "Key engineering decisions (and the trade-offs)",
      items: [
        {
          decision: "Model the tenancy as a first-class entity",
          rationale:
            "In the real world, properties persist, tenants change, and tenancies begin and end. Making the tenancy the spine — with documents, rent, maintenance and messages living inside it — preserves history and lets a property move cleanly between tenants.",
          alternatives:
            "Attaching tenants directly to properties is simpler at first, but makes lifecycle changes painful and turns future features like renewals, joint tenancies and HMOs into rewrites.",
        },
        {
          decision: "Enforce authorization at the database layer",
          rationale:
            "Access control is enforced in PostgreSQL itself via Row Level Security, so a tenant can never reach another tenancy's data — even by bypassing the interface and calling the backend directly.",
          alternatives:
            "Hiding data only in the UI is the common shortcut, and it's fundamentally insecure: anyone who crafts their own request gets everything.",
        },
        {
          decision: "Build it genuinely two-sided from day one",
          rationale:
            "Property management is collaborative, so both landlord and tenant are modelled as active users with their own authentication, permissions and experience. It mirrors reality and creates a stronger foundation.",
          alternatives:
            "A landlord-only app with tenants as passive records would have been far easier to build — but a weaker product, and expensive to make two-sided later.",
        },
        {
          decision: "Lean on managed services rather than build everything",
          rationale:
            "Using Supabase for authentication, database, storage and security let me spend my limited solo time on user problems, not infrastructure I'd have to build and maintain.",
          alternatives:
            "Rolling custom auth, storage and a backend would mean more control but a large time sink; the accepted trade-off — some dependence on Supabase — is mitigated because the core is standard PostgreSQL and portable.",
        },
        {
          decision: "Track rent, don't collect it (yet)",
          rationale:
            "Payment processing brings financial regulation, reconciliation, security and third-party integration — none of which is needed to learn whether landlords value the rent-tracking workflow.",
          alternatives:
            "Integrating payments up front looks impressive, but solves hard problems before validating that anyone wants the workflow.",
        },
      ],
    },
    {
      type: "prose",
      title: "The hardest part wasn't the code — it was the boundaries",
      body: [
        "In a platform where landlords and tenants share one system, the challenge isn't writing features; it's modelling ownership, permissions and lifecycle correctly. My instinct, shaped by a decade in QA, is to keep asking “what happens if…” until the design handles the real world, not just the happy path.",
        "The tenant invitation is a good example. It looks trivial — a landlord invites a tenant — until you interrogate it:",
      ],
    },
    {
      type: "list",
      title: "Questions I answered before writing a line of code",
      items: [
        "What if the tenant already has an account, or registers with a different email?",
        "What if the invitation is forwarded to someone else?",
        "How do I guarantee they join the correct tenancy?",
        "Should invitations expire, or be usable only once?",
        "What if the landlord removes the tenant before they accept?",
        "What if a tenant leaves and, later, a new tenant occupies the same property?",
      ],
    },
    {
      type: "prose",
      body: [
        "None of those were bugs — they were decisions to make before implementation. Working through them turned a simple registration screen into a tenancy-centred invitation model: a secure onboarding mechanism that ties a specific person to a specific tenancy while preserving the permission boundaries that run through the rest of the app.",
        "I don't do this in isolation, either. I use AI as an experienced engineering partner — to challenge assumptions, surface risks and review decisions — while the judgement and direction stay mine. It accelerates the thinking; it doesn't replace it.",
      ],
    },
    {
      type: "prose",
      title: "Quality, built in from the start",
      body: [
        "Quality here isn't a phase at the end. A decade in QA taught me the cheapest defect is the one that never gets the chance to exist — so instead of “how will I test this later?”, I ask “how do I design this so it's easier to build correctly and harder to build incorrectly?” That question shaped the stack, the data model and the security model before a single test was written.",
        "In practice, that means defence in depth — strict TypeScript, shared validation schemas, database constraints and Row Level Security — each catching a different class of problem. And I'm precise about where the project stands today: those built-in gates are working now, while broader automated test suites, including tests that prove the access boundaries hold, are the deliberate next step. I'd rather show exactly where it is than imply coverage that isn't there yet.",
      ],
    },
    {
      type: "techStack",
      title: "How it's built",
      groups: [
        {
          category: "Product & frontend",
          items: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "shadcn/ui",
          ],
        },
        {
          category: "Backend & data",
          items: [
            "Supabase",
            "PostgreSQL",
            "Row Level Security",
            "Supabase Auth",
            "Supabase Storage",
          ],
        },
        {
          category: "Validation & quality",
          items: ["Zod", "React Hook Form", "GitHub Actions"],
        },
      ],
    },
    {
      type: "prose",
      title: "Where it is today — and what's next",
      body: [
        "The core platform is largely built — the six workflows, secure onboarding, role-based access — on a production-quality architecture, but it isn't yet ready for daily use, and I won't pretend otherwise. My near-term focus is confidence, not features: expanding automated testing around the security boundaries and critical workflows, deploying a stable MVP, and getting it in front of real landlords for feedback. At this stage, feedback is worth more than functionality.",
        "From there the roadmap is deliberately sequenced — deepening organisation first (automated compliance reminders, richer documents and maintenance, notifications and reporting), and only later taking on higher-complexity capabilities like payments and financial tooling. Every addition has to justify its complexity. I don't measure progress by feature count; I measure it by confidence, with each phase answering a specific question before the next begins.",
      ],
    },
    {
      type: "prose",
      title: "What this means if you're hiring me",
      body: [
        "This is the first product I've taken from a real-world problem through discovery, architecture, engineering, quality and deployment, entirely on my own. For years I've helped teams ship better software through QA; this shows I apply that same rigour across the whole lifecycle — and that I can build products, not just contribute to them.",
        "More than any single technology, it reflects how I approach engineering: understand the domain, model it honestly, make deliberate trade-offs, and build quality in rather than bolt it on. Because in the end, good software isn't about the cleverest code — it's about understanding people, solving problems that matter, and making decisions that stand the test of time.",
      ],
    },
  ],
};

export const landlordApp = projectSchema.parse(data);
