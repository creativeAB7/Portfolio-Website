import type { Project } from "@/content";

/**
 * TEST FIXTURE — not shipped as site content and not registered in the project
 * registry. It exercises every case-study block type so tests can prove the
 * schema and the block renderer support the full range of sections. It can
 * also be temporarily registered during development to preview the template.
 */
export const exampleProject: Project = {
  slug: "example-case-study",
  title: "End-to-End Test Automation Platform",
  summary:
    "A Playwright-based automation platform that cut regression time and raised release confidence for a retail web app.",
  category: "freelance",
  status: "completed",
  role: "Lead QA Automation Engineer",
  timeframe: "2024 · 3 months",
  client: "Retail web app (fixture)",
  tags: ["Playwright", "TypeScript", "CI/CD", "Azure DevOps"],
  cover: {
    src: "/projects/example/cover.png",
    alt: "Test automation dashboard",
  },
  featured: true,
  order: 1,
  links: [
    { label: "Source", href: "https://example.com/repo", type: "repo" },
    { label: "Live demo", href: "https://example.com/demo", type: "demo" },
    { label: "Write-up", href: "https://example.com/blog", type: "external" },
  ],
  related: [],
  body: [
    {
      type: "prose",
      title: "Overview",
      body: [
        "This fixture describes an end-to-end testing platform built to replace a slow, flaky manual regression process.",
        "It exists purely to exercise the case-study template.",
      ],
    },
    {
      type: "prose",
      title: "Problem",
      body: [
        "Regression testing was manual, taking days per release and letting defects slip into production.",
      ],
    },
    {
      type: "list",
      title: "Objectives",
      style: "check",
      items: [
        "Cut regression time from days to hours",
        "Catch regressions before release",
        "Give the team confidence to ship weekly",
      ],
    },
    {
      type: "techStack",
      title: "Technologies Used",
      groups: [
        { category: "Automation", items: ["Playwright", "TypeScript"] },
        { category: "Delivery", items: ["Azure DevOps", "CI/CD"] },
      ],
    },
    {
      type: "decisions",
      title: "Architecture & Technical Decisions",
      items: [
        {
          decision: "Adopt Playwright for end-to-end testing",
          rationale:
            "Fast, reliable cross-browser automation with first-class TypeScript support and parallelism.",
          alternatives:
            "Cypress (weaker multi-tab/cross-origin support) and Selenium (more flaky, higher maintenance).",
        },
      ],
    },
    {
      type: "featureList",
      title: "Key Features",
      items: [
        {
          title: "Parallel test execution",
          description: "Sharded runs keep the suite fast as it grows.",
        },
        { title: "Rich HTML reporting" },
      ],
    },
    {
      type: "metrics",
      title: "Results & Business Outcome",
      items: [
        { value: "70%", label: "reduction in manual regression time" },
        { value: "3×", label: "increase in release frequency" },
      ],
    },
    {
      type: "gallery",
      title: "Screenshots",
      items: [
        {
          src: "/projects/example/dashboard.png",
          alt: "Reporting dashboard",
          caption: "The reporting dashboard fixture caption.",
        },
      ],
    },
    {
      type: "quote",
      quote: "This fixture proves the case-study template renders every block.",
      attribution: "Engineering Lead (fixture)",
    },
  ],
};
