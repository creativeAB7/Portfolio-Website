import { faqSchema, type FaqContent } from "./schema";

// DRAFT answers — review and adjust to match how you actually work before the
// FAQ section ships.
const data: FaqContent = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
  description: "A few things people often ask before we work together.",
  items: [
    {
      question: "What kind of work do you take on?",
      answer:
        "Freelance and consulting engagements across QA automation, software testing, and web development — from setting up a test framework to building and shipping a web application.",
    },
    {
      question: "Do you work remotely?",
      answer:
        "Yes. I work remotely with distributed teams and adapt to your tools, stack, and ways of working.",
    },
    {
      question: "Can you work within our existing stack and processes?",
      answer:
        "Absolutely. I'm comfortable joining established Agile teams, CI pipelines, and toolchains, and I follow your conventions rather than imposing my own.",
    },
    {
      question: "How do you structure engagements?",
      answer:
        "Typically on a day rate or a fixed project scope, depending on what suits the work. Get in touch and we'll find the right fit.",
    },
  ],
};

export const faq = faqSchema.parse(data);
