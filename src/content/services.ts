import { servicesSchema, type ServicesContent } from "./schema";

const data: ServicesContent = {
  eyebrow: "Services",
  title: "How I can help",
  description:
    "Practical help across the software quality lifecycle — from setting up test automation to building and shipping the product itself.",
  items: [
    {
      icon: "test-automation",
      title: "Test Automation",
      description:
        "Reliable, maintainable automation frameworks in Playwright, Selenium, or TestComplete — wired into CI so regressions are caught before they reach users.",
      features: [
        "Framework design & setup",
        "CI/CD integration",
        "Cross-browser & API coverage",
      ],
    },
    {
      icon: "qa-strategy",
      title: "QA Strategy & Leadership",
      description:
        "Shape test strategy, quality processes, and risk-based coverage for your product — with hands-on leadership and mentoring for your QA team.",
      features: [
        "Test strategy & planning",
        "Risk-based coverage",
        "Team mentoring",
      ],
    },
    {
      icon: "software-testing",
      title: "Software Testing",
      description:
        "Thorough functional, regression, and UAT testing — including API testing — so releases behave exactly as intended.",
      features: ["Functional & regression", "API testing", "UAT support"],
    },
    {
      icon: "web-development",
      title: "Web Development",
      description:
        "Modern, accessible web applications built with Next.js, React, and TypeScript — mobile-first and built to last.",
      features: [
        "Next.js & React",
        "Accessible, mobile-first UI",
        "Performance & SEO",
      ],
    },
    {
      icon: "ai-assisted",
      title: "AI-Assisted Delivery",
      description:
        "Bring AI into your delivery workflow responsibly — accelerating development and testing without sacrificing quality or control.",
      features: [
        "AI-assisted development",
        "Tooling & workflow setup",
        "Pragmatic adoption",
      ],
    },
  ],
};

export const services = servicesSchema.parse(data);
