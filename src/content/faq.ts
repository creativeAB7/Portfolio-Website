import { faqSchema, type FaqContent } from "./schema";

// DRAFT answers — written in the site owner's voice and aimed at the questions
// real clients ask before making contact. Review and adjust before launch.
const data: FaqContent = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  description:
    "The things clients usually want to know before we work together.",
  items: [
    {
      question: "What services do you offer?",
      answer:
        "QA automation and test strategy, hands-on software testing (functional, regression, and UAT), modern web development, and AI-assisted delivery — from setting up a test framework to building and shipping a web application.",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "Playwright, Selenium, and TestComplete for automation; C#, TypeScript, JavaScript, and SQL day to day; Next.js, React, and Tailwind CSS for the web; and Azure DevOps and Git for delivery.",
    },
    {
      question: "Can you work with an existing codebase?",
      answer:
        "Yes. I'm comfortable joining established codebases, CI pipelines, and Agile teams, and I follow your conventions rather than imposing my own.",
    },
    {
      question: "Do you write automated tests?",
      answer:
        "Always — it's my core discipline. I build maintainable automated tests (unit, integration, and end-to-end, including accessibility checks) and wire them into CI so regressions are caught before release.",
    },
    {
      question: "How do you approach quality assurance?",
      answer:
        "Risk-based and pragmatic: I focus coverage where it matters most, shift testing left in the delivery cycle, combine automation with targeted exploratory testing, and report clearly so the team can make informed release decisions.",
    },
    {
      question: "What does your development process look like?",
      answer:
        "Understand the requirements, agree a concise plan, build in small reviewable increments, test continuously, and deliver working software — adapting to your existing Agile or Scrum rhythm.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes. Beyond initial delivery I can provide ongoing maintenance, test-suite upkeep, and retainer-based support to keep things running smoothly.",
    },
    {
      question: "How do we get started?",
      answer:
        "Get in touch with a short description of what you're working on. We'll have a quick call to scope the work and agree the best way to collaborate.",
    },
  ],
};

export const faq = faqSchema.parse(data);
