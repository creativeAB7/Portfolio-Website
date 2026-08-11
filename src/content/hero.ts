import { heroSchema, type Hero } from "./schema";

const data: Hero = {
  availability: "Available for freelance & consulting",
  headline: "Software that works.",
  headlineAccent: "And the tests to prove it.",
  subheadline:
    "I'm Akeem Baker — a Quality Engineer. A decade of understanding how systems fail now shapes how I design, build and ship them: deliberate architecture, sharper trade-offs, and far fewer expensive surprises.",
  panelLabel: "how i engineer",
  // Spread deliberately across experience, judgement, evidence and capability —
  // so the panel reads as an engineer with a quality lens, not only a tester.
  // Add `value`/`description` to any of these as real metrics become available.
  proofPoints: [
    {
      icon: "experience",
      value: "10+ years",
      label: "across testing, automation & delivery",
    },
    {
      icon: "architecture",
      label: "Architecture chosen for what it costs to change later",
    },
    {
      icon: "testing",
      label: "Proven continuously — tests, types & accessibility in CI",
    },
    {
      icon: "stack",
      label: "Full-stack delivery: Next.js, React & TypeScript",
    },
  ],
};

export const hero = heroSchema.parse(data);
