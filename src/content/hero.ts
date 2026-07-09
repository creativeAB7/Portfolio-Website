import { heroSchema, type Hero } from "./schema";

const data: Hero = {
  availability: "Available for freelance & consulting",
  headline: "Software that works.",
  headlineAccent: "And the tests to prove it.",
  subheadline:
    "I'm Akeem Baker — a QA-led software engineer. I design, build, and rigorously test web applications, so you can ship faster, break less, and release with confidence.",
  panelLabel: "quality-first delivery",
  // Qualitative today; add `value`/`description` to make these concrete business
  // outcomes as real metrics become available (e.g. value: "70%").
  proofPoints: [
    {
      icon: "experience",
      value: "10+ years",
      label: "in QA & test automation",
    },
    {
      icon: "testing",
      label: "Testing-first delivery, integrated into CI",
    },
    {
      icon: "quality",
      label: "Accessible, performant & SEO-ready",
    },
    {
      icon: "stack",
      label: "Full-stack: Next.js, React & TypeScript",
    },
  ],
};

export const hero = heroSchema.parse(data);
