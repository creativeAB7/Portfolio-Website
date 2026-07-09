import { servicesSchema, type ServicesContent } from "./schema";

const data: ServicesContent = {
  eyebrow: "Services",
  title: "How I help you ship with confidence",
  description:
    "Practical help across the software lifecycle — each focused on reducing risk and delivering software you can rely on.",
  items: [
    {
      icon: "test-automation",
      title: "Test Automation",
      problem:
        "Manual regression testing is slow and costly, yet bugs still reach production.",
      solution:
        "I build reliable automated test suites wired into your pipeline, so every change is checked automatically before it ships.",
      outcome:
        "Faster, safer releases — and confidence that new work hasn't broken what already worked.",
    },
    {
      icon: "qa-strategy",
      title: "QA Strategy & Leadership",
      problem:
        "Testing feels ad-hoc, and it's never quite clear whether a release is safe to ship.",
      solution:
        "I shape a pragmatic, risk-based quality strategy and coach your team to raise the bar without slowing delivery.",
      outcome:
        "Clear visibility into quality and release decisions you can actually trust.",
    },
    {
      icon: "software-testing",
      title: "Software Testing",
      problem:
        "Every release is stressful because you're never sure the product behaves as intended.",
      solution:
        "Thorough functional, regression, and UAT testing — APIs included — to catch problems before your users do.",
      outcome:
        "Releases that work as expected, and far less firefighting after launch.",
    },
    {
      icon: "web-development",
      title: "Web Development",
      problem:
        "You need a modern web app built properly — not a fragile prototype you'll have to rebuild.",
      solution:
        "I design and build accessible, high-performance web applications, tested from day one so quality isn't an afterthought.",
      outcome:
        "A polished, maintainable product that's ready to grow with your business.",
    },
    {
      icon: "ai-assisted",
      title: "AI-Assisted Delivery",
      problem:
        "AI tools promise speed, but used carelessly they quietly ship insecure, low-quality code.",
      solution:
        "I bring AI into the workflow responsibly — accelerating delivery while keeping quality, security, and review standards intact.",
      outcome: "The speed of AI without the hidden risk.",
    },
  ],
};

export const services = servicesSchema.parse(data);
