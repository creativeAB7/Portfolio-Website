import { aboutSchema, type About } from "./schema";

const data: About = {
  eyebrow: "About",
  title: "A decade of making quality a competitive advantage",
  lead: "I'm Akeem Baker — a QA automation and software engineer who helps teams ship web applications with confidence.",
  paragraphs: [
    "Over the past ten years I've delivered quality across functional, regression, and UAT testing — building automation frameworks in Playwright, Selenium, and TestComplete, and driving test strategy inside fast-moving Agile teams.",
    "Today I pair that testing rigour with hands-on development in TypeScript, React, and Next.js, plus AI-assisted workflows — so I can build features and prove they work, end to end.",
    "I care about maintainable code, accessible interfaces, and delivery you can trust. Whether I'm writing tests or shipping product, quality is the throughline.",
  ],
  highlights: [
    { value: "10+ yrs", label: "in QA & test automation" },
    { value: "End-to-end", label: "test strategy to delivery" },
    { value: "Agile", label: "team leadership & mentoring" },
  ],
};

export const about = aboutSchema.parse(data);
