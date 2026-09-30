import { aboutSchema, type About } from "./schema";

const data: About = {
  eyebrow: "About",
  title: "Knowing how software breaks changes how you build it.",
  lead: "I'm Akeem Baker — a Quality Engineer. That understanding is what shapes the architecture I choose, the trade-offs I make, and the software I hand over.",
  // Two paragraphs, not three: the old closing line restated the lead and the
  // highlights, so its substance ("cheap to change long after handover") moved
  // into the second paragraph instead of occupying a block of its own.
  paragraphs: [
    "Across functional, regression and UAT testing — and automation built in Playwright, Selenium and TestComplete — I watched the same failures repeat: unclear boundaries, hidden coupling, and decisions made by default rather than on purpose. Those are the patterns I now design against, before anything is written.",
    "Today I pair that with full-stack development in TypeScript, React and Next.js — one person who can shape the architecture, build the feature and prove it works. Fewer handoffs, fewer gaps between what was intended and what ships, and software that stays cheap to change long after handover.",
    "Most of that work starts inside something that already exists. I'm comfortable joining an established codebase, CI pipeline and Agile team, and I follow your conventions rather than importing my own.",
  ],
  highlights: [
    { value: "10+ yrs", label: "across testing & delivery" },
    { value: "Build + prove", label: "features that work, with evidence" },
    { value: "Designed to last", label: "software that stays cheap to change" },
  ],
};

export const about = aboutSchema.parse(data);
