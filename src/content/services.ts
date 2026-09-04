import { servicesSchema, type ServicesContent } from "./schema";

/**
 * Services are framed as engagement shapes — the things a reader could
 * reasonably want after finishing the case studies — rather than as a list of
 * skills. They run in lifecycle order (design → build → prove → raise the bar),
 * mirroring the phases in "How I work".
 *
 * Copy is kept tight: `problem` earns its place only where it says something
 * the buyer doesn't already know, and `solution` states what I do without
 * restating the problem back at them.
 */
const data: ServicesContent = {
  eyebrow: "Services",
  title: "Bring me in to design it, build it, or prove it works.",
  description:
    "Engagements across the software lifecycle — from the architecture decisions that are expensive to reverse, through delivery, to the testing that shows it holds up.",
  items: [
    {
      icon: "architecture",
      title: "Architecture & Technical Design",
      problem:
        "The decisions made before any code exists — how data is modelled, where boundaries sit, who can see what — are the most expensive ones to undo.",
      solution:
        "I model your domain, define the boundaries, and design the data and security architecture up front, with every significant trade-off written down.",
      outcome:
        "A system that can grow without being rebuilt, and a team that understands why it's shaped the way it is.",
    },
    {
      icon: "web-development",
      title: "Application Development",
      problem:
        "You need a product built properly — not a prototype you'll pay to replace within a year.",
      solution:
        "I design, build and ship web applications end to end in TypeScript, React and Next.js, with tests written alongside the code.",
      outcome:
        "Software that works on launch day and stays cheap to change long afterwards.",
    },
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
    {
      icon: "ai-assisted",
      title: "AI-Assisted Delivery",
      problem:
        "AI tooling promises speed, but used without judgement it quietly ships insecure code somebody still has to own.",
      solution:
        "I bring AI into the workflow deliberately — accelerating the work while keeping architecture, review and security standards intact.",
      outcome:
        "The speed advantage, without inheriting a codebase nobody understands.",
    },
  ],
};

export const services = servicesSchema.parse(data);
