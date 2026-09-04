import { processSchema, type ProcessContent } from "./schema";

/**
 * Phase copy is deliberately lopsided: `description` is a short phrase saying
 * what the stage is, while `quality` carries the weight. The descriptions are
 * the generic half — any competent freelancer could write them — so they earn
 * few words; the quality practice is the differentiator, so it gets the space.
 */
const data: ProcessContent = {
  eyebrow: "How I work",
  title: "Quality isn't a phase. It runs through every step.",
  description:
    "No black boxes. Here's how a typical engagement runs — and the quality practice built into each stage.",
  phases: [
    {
      title: "Discovery",
      description:
        "Understanding your goals, your users, and the constraints you're working within.",
      quality:
        "I ask what could go wrong as early as what should go right. Risks found here cost nothing to fix.",
    },
    {
      title: "Shape & plan",
      description:
        "Agreeing scope, approach and a clear plan before any work starts.",
      quality:
        "Scope is prioritised by risk, so the areas most likely to hurt you get the most attention — not just the loudest features.",
    },
    {
      title: "Design & architect",
      description:
        "Modelling the domain and choosing the structure your software will grow into.",
      quality:
        "The design makes correct behaviour easy to build and incorrect behaviour hard. The cheapest defect is the one the architecture won't allow.",
    },
    {
      title: "Build",
      description:
        "Development in small, reviewable increments with regular check-ins.",
      quality:
        "Tests are written alongside the code, so each increment arrives already proven.",
    },
    {
      title: "Prove & release",
      description:
        "Shipping to production with documentation and a clean handover.",
      quality:
        "Automated checks — tests, types, accessibility — all pass before anything ships. Releasing becomes a decision backed by evidence.",
    },
    {
      title: "Support & evolve",
      description:
        "Maintenance, improvements and ongoing support as your needs change.",
      quality:
        "The test suite evolves with the product, so changes stay safe long after launch.",
    },
  ],
};

export const workProcess = processSchema.parse(data);
