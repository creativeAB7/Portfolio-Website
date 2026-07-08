import { technologiesSchema, type TechnologiesContent } from "./schema";

const data: TechnologiesContent = {
  eyebrow: "Technologies",
  title: "Tools I work with",
  description:
    "The stack I reach for to build and test modern web applications.",
  groups: [
    {
      category: "Test Automation",
      items: ["Playwright", "Selenium", "TestComplete", "API Testing"],
    },
    {
      category: "Languages & Data",
      items: ["C#", "TypeScript", "JavaScript", "SQL"],
    },
    {
      category: "Web",
      items: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    },
    {
      category: "Delivery & Tooling",
      items: ["Azure DevOps", "Git", "CI/CD", "Agile & Scrum"],
    },
  ],
};

export const technologies = technologiesSchema.parse(data);
