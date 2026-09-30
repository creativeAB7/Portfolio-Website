import { servicesSchema, type ServicesContent } from "./schema";

/**
 * Services are framed as engagement shapes — what someone can actually hire me
 * for — rather than as a list of skills, and ordered by the work I want:
 * testing, AI-assisted development, then web development.
 *
 * Architecture is deliberately NOT sold as a standalone engagement. It still
 * shapes the work (see Application Development, and the case studies), but
 * listing an offer I don't want to be booked for would attract the wrong
 * enquiries. The two testing services are split across the order so the three
 * priorities come first — on mobile the cards stack in sequence, so order is
 * the only signal of emphasis.
 *
 * Copy is kept tight: `problem` earns its place only where it says something
 * the buyer doesn't already know, and `solution` states what I do without
 * restating the problem back at them.
 */
const data: ServicesContent = {
  eyebrow: "Services",
  title: "Bring me in to build it, or to prove it works.",
  description:
    "Testing, AI-assisted development and full-stack delivery — with quality engineered in from the first decision rather than inspected at the end.",
  items: [
    {
      icon: "test-automation",
      title: "Test Automation",
      problem:
        "Manual regression testing is slow and expensive — and defects still reach production.",
      solution:
        "I build maintainable automated suites — unit, integration and end-to-end — wired into your pipeline so every change is checked before it ships.",
      outcome:
        "Faster, safer releases, and confidence that new work hasn't broken what already worked.",
    },
    {
      icon: "ai-assisted",
      title: "AI-Assisted Development",
      problem:
        "AI can accelerate delivery dramatically — or quietly fill a codebase with insecure, unmaintainable code nobody understands.",
      solution:
        "I build with AI as a deliberate part of the workflow, using it to move faster while holding the same standards for structure, review, security and test coverage.",
      outcome:
        "The speed advantage, without inheriting a codebase you can't maintain.",
    },
    {
      icon: "web-development",
      title: "Application Development",
      problem:
        "You need a product built properly — not a prototype you'll pay to replace within a year.",
      solution:
        "I design, build and ship web applications end to end in TypeScript, React and Next.js — modelling the data and boundaries up front, then writing tests alongside the code.",
      outcome:
        "Software that works on launch day and stays cheap to change long afterwards.",
    },
    {
      icon: "software-testing",
      title: "Manual & Exploratory Testing",
      problem:
        "Automation only catches what someone thought to check. It's the unknown unknowns that reach your users.",
      solution:
        "Hands-on functional, regression, UAT and API testing that probes the paths nobody specified.",
      outcome:
        "Problems found before your customers find them, and an honest picture of what actually works.",
    },
    {
      icon: "qa-strategy",
      title: "Quality Strategy & Review",
      problem:
        'Testing feels ad hoc, nobody quite agrees what "ready to release" means, and it\'s unclear where the real risk sits.',
      solution:
        "I review how you build and test today, then shape a pragmatic risk-based strategy your team can actually sustain.",
      outcome:
        "Release decisions grounded in evidence, and a team that holds the line after I've gone.",
    },
  ],
};

export const services = servicesSchema.parse(data);
