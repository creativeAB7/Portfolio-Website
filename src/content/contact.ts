import { contactSchema, type ContactContent } from "./schema";

const data: ContactContent = {
  eyebrow: "Contact",
  title: "Let's work together",
  description:
    "Have a project in mind, or want to talk about how I can help with quality and delivery? I'd love to hear from you.",
  availability: "Currently available for freelance and consulting work.",
  responseTime: "I usually reply within 1–2 business days.",
};

export const contact = contactSchema.parse(data);
