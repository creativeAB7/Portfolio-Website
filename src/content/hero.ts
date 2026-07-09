import { heroSchema, type Hero } from "./schema";

const data: Hero = {
  availability: "Available for freelance & consulting",
  headline: "Software that works.",
  headlineAccent: "And the tests to prove it.",
  subheadline:
    "I'm Akeem Baker — a QA-led software engineer. I design, build, and rigorously test web applications, so you can ship faster, break less, and release with confidence.",
  panelLabel: "quality-first delivery",
  proofPoints: [
    "10+ years in QA & test automation",
    "Testing-first delivery, integrated into CI",
    "Accessible, performant & SEO-ready",
    "Full-stack: Next.js, React & TypeScript",
  ],
  stats: [
    { value: "10+ yrs", label: "QA & automation" },
    { value: "Full-stack", label: "build & test" },
    { value: "CI-first", label: "every release" },
  ],
};

export const hero = heroSchema.parse(data);
