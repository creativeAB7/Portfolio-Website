import { aboutSchema, type About } from "./schema";

const data: About = {
  eyebrow: "About",
  title: "Most engineers can build it. I make sure it works.",
  lead: "I'm Akeem Baker — a software engineer with a decade in QA and test automation. That background is exactly why I'm a lower-risk choice to build your software.",
  paragraphs: [
    "After ten years leading quality across functional, regression, and UAT testing — and building automation in Playwright, Selenium, and TestComplete — I understand how software breaks. That's what makes the way I build it different.",
    "Today I combine that testing depth with full-stack development in TypeScript, React, and Next.js. You get one person who can design, build, and prove a feature end to end — fewer handoffs, fewer surprises, and delivery you can rely on.",
    "Whether I'm writing tests or shipping product, the goal is the same: reduce the risk in your project and give you confidence it's been done properly.",
  ],
  highlights: [
    { value: "10+ yrs", label: "in software quality" },
    { value: "Build + prove", label: "features that actually work" },
    { value: "Lower risk", label: "delivery you can trust" },
  ],
};

export const about = aboutSchema.parse(data);
