import { projectSchema, type Project } from "../schema";

const data: Project = {
  slug: "landlord-app",
  title: "The Landlord App: Property Management, Built Quality-First",
  shortTitle: "The Landlord App",
  summary:
    "A two-sided property management platform for self-managing UK landlords and their tenants — and a look at how I design a product for reliability, security and long-term growth from day one.",
  category: "personal",
  status: "in-progress",
  phase: "Active development · MVP validation",
  role: "Product, architecture, full-stack engineering & QA (solo)",
  timeframe: "2026 – present",
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
    alt: "Architecture of the Landlord App: a two-sided platform where landlords and tenants each get their own experience but share one system, backed by Supabase with Row Level Security, all built around a shared tenancy.",
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
        "To be clear about scope: today's product isn't a replacement for a letting agent. It's the organisational backbone that makes self-management far easier — the foundation for something larger, built deliberately over time (more on that below).",
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
      title: "Where it is today: MVP validation",
      body: [
        "The product is exactly where I planned for it to be: at the smallest version that can prove the idea, ready to be validated with real landlords before it grows any further. The core is in place — the six workflows, secure onboarding, and database-enforced access control — on a production-quality architecture. This is a deliberate MVP stage, not an unfinished one: the next milestone isn't more features, it's evidence.",
        "So my current work is intentionally narrow — hardening the automated tests around the security boundaries and critical workflows, deploying a stable MVP, and putting it in front of real landlords to learn what genuinely helps them day to day. At this stage a single piece of honest feedback is worth more than another feature, because the job right now is to validate the idea, not to inflate it.",
      ],
    },
    {
      type: "prose",
      title: "Where it's heading",
      body: [
        "Beyond validation, the roadmap is sequenced by intent rather than ambition. First, deepen the organisational core — automated compliance reminders so a certificate never lapses unnoticed, richer document and maintenance handling, notifications and reporting. Only later come the higher-complexity capabilities like rent collection and financial tooling, each earning its place by justifying the complexity it adds.",
        "The long-term vision is a genuine “property management company in your pocket” — but I'm careful to hold that as a destination, reached one validated step at a time, not a claim about what exists today. Naming where something is going is easy; the discipline is being honest about how far along the road it actually is.",
      ],
    },
    {
      type: "prose",
      title: "Why this is a turning point for me",
      body: [
        "For most of the last decade, my role has been to assure the quality of software that other teams designed and built — finding the risks, strengthening what shipped, and being the person who asks “but what happens if…”. This project is where that role changes shape. Here I own the entire lifecycle: the discovery, the product decisions, the architecture, the engineering, the quality strategy and the deployment, end to end.",
        "That's the transition this represents — from safeguarding other people's products to being fully accountable for one of my own. And it has confirmed something I long suspected: the instincts I built in QA are at their most valuable when they shape a product from its very first decision, not when they're brought in to check it at the end.",
      ],
    },
    {
      type: "prose",
      title: "What this means if you're hiring me",
      body: [
        "If you're deciding whether to work with me, this project is the honest answer. It's how I'd approach your product too: start from the real problem your users have, model it faithfully, weigh every trade-off against your goals, and make the decisions today that keep the software cheap to own and safe to change for years.",
        "And it reflects the one belief that runs through everything I build: progress isn't measured by how many features you've shipped, but by how much you can trust what you've built — and that trust is designed in from the very first decision, never bolted on at the end. That's the standard I've held this project to, and exactly the standard I'd hold yours to.",
      ],
    },
  ],
};

export const landlordApp = projectSchema.parse(data);
