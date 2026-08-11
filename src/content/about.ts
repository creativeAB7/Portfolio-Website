import { aboutSchema, type About } from "./schema";

const data: About = {
  eyebrow: "About",
  title: "Knowing how software breaks changes how you build it.",
  lead: "I'm Akeem Baker — a Quality Engineer. A decade spent finding where systems fail now shapes the architecture I choose, the trade-offs I make, and the software I hand over.",
  paragraphs: [
    "Across functional, regression and UAT testing — and automation built in Playwright, Selenium and TestComplete — I watched the same failures repeat: unclear boundaries, hidden coupling, and decisions made by default rather than on purpose. Those patterns are what I now design against, long before anything is written.",
    "Today I pair that with full-stack development in TypeScript, React and Next.js. You get one person who can shape the architecture, build the feature and prove it works — fewer handoffs, and fewer gaps between what was intended and what gets delivered.",
    "The goal never changes: reduce what can go wrong, and leave you with software that stays cheap to change and safe to build on long after handover.",
  ],
  highlights: [
    { value: "10+ yrs", label: "across testing & delivery" },
    { value: "Build + prove", label: "features that work, with evidence" },
    { value: "Designed to last", label: "software that stays cheap to change" },
  ],
};

export const about = aboutSchema.parse(data);
