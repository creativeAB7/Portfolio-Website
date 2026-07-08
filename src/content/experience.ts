import { experienceSchema, type ExperienceContent } from "./schema";

// NOTE: employer names and dates in `roles` are placeholders — replace with
// your real role history before launch. The responsibilities and the whole
// `skills` list reflect genuine experience and can stay.
const data: ExperienceContent = {
  eyebrow: "Experience",
  title: "Experience & skills",
  description:
    "Ten years across QA, test automation, and delivery — and the competencies I bring to a team.",
  roles: [
    {
      role: "Senior QA Automation Engineer",
      company: "Company name",
      period: "2021 — Present",
      summary:
        "Leading test automation and quality strategy across web products.",
      highlights: [
        "Own the test automation strategy and Playwright/Selenium frameworks, integrated into Azure DevOps CI.",
        "Mentor QA engineers and embed quality practices across Agile delivery teams.",
        "Drive functional, regression, and UAT coverage for critical releases.",
      ],
    },
    {
      role: "QA Automation Engineer",
      company: "Company name",
      period: "2017 — 2021",
      highlights: [
        "Built and maintained automated regression suites, reducing manual effort and release risk.",
        "Introduced API testing to widen coverage below the UI.",
        "Partnered with developers to shift testing left in the delivery cycle.",
      ],
    },
    {
      role: "Software Test Analyst",
      company: "Company name",
      period: "2014 — 2017",
      highlights: [
        "Delivered functional and regression testing across web applications.",
        "Authored clear, reproducible test cases and defect reports.",
        "Supported UAT with business stakeholders through to sign-off.",
      ],
    },
  ],
  skills: [
    {
      group: "Quality Engineering",
      items: [
        "Test Automation Strategy",
        "Framework Design",
        "CI/CD Integration",
      ],
    },
    {
      group: "Testing Disciplines",
      items: ["Functional & Regression", "API Testing", "UAT"],
    },
    {
      group: "Leadership & Delivery",
      items: [
        "Test Leadership & Mentoring",
        "Agile & Scrum",
        "Stakeholder Communication",
      ],
    },
  ],
};

export const experience = experienceSchema.parse(data);
