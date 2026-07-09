import { contactSchema, type ContactContent } from "./schema";

const data: ContactContent = {
  eyebrow: "Contact",
  title: "Let's reduce the risk in your next project",
  description:
    "Whether you have a defined project or just want to talk an idea through, I'll help you figure out the right approach — no obligation, no hard sell.",
  availability: "Currently available for freelance and consulting work.",
  responseTime: "I usually reply within 1–2 business days.",
};

export const contact = contactSchema.parse(data);
