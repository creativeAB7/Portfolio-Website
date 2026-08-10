import { processSchema, type ProcessContent } from "./schema";

const data: ProcessContent = {
  eyebrow: "How I work",
  title: "Quality isn't a phase. It runs through every step.",
  description:
    "No black boxes. Here's how a typical engagement runs — and the quality practice built into each stage, rather than bolted on before release.",
  phases: [
    {
      title: "Discovery",
      description:
        "I start by understanding your goals, your users, and your constraints — so we build the right thing, not just any thing.",
      quality:
        "I ask what could go wrong as early as what should go right. Risks found at this stage cost nothing to fix.",
    },
    {
      title: "Shape & plan",
      description:
        "We agree scope, approach, and a clear plan up front, so there are no surprises on timeline or budget.",
      quality:
        "Scope is prioritised by risk, so the areas most likely to hurt you get the most attention — not just the loudest features.",
    },
    {
      title: "Design & architect",
      description:
        "I model the domain and choose the structure your software will grow into — the decisions that are expensive to reverse later.",
      quality:
        "The design makes correct behaviour easy to build and incorrect behaviour hard. The cheapest defect is the one the architecture won't allow.",
    },
    {
      title: "Build",
      description:
        "I develop in small, reviewable increments with regular check-ins, so you always see progress.",
      quality:
        "Tests are written alongside the code, not after it, so each increment arrives already proven rather than waiting on a testing phase.",
    },
    {
      title: "Prove & release",
      description:
        "I ship to production with documentation and a smooth handover — no lock-in, no mess.",
      quality:
        "Automated checks — tests, types, accessibility — all have to pass before anything ships. Releasing becomes a decision backed by evidence, not a hope.",
    },
    {
      title: "Support & evolve",
      description:
        "After launch I'm available for maintenance, improvements, and ongoing support as your needs change.",
      quality:
        "The test suite evolves with the product, so changes stay safe long after launch instead of getting riskier over time.",
    },
  ],
};

export const workProcess = processSchema.parse(data);
