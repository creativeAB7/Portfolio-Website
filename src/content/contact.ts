import { contactSchema, type ContactContent } from "./schema";

const data: ContactContent = {
  eyebrow: "Contact",
  title: "Let's reduce the risk in your next project",
  description:
    "Send me a short description of what you're working on and we'll scope it on a quick call — whether that's a defined project or just an idea you want to talk through. No obligation, no hard sell.",
  availability: "Currently available for freelance and consulting work.",
};

export const contact = contactSchema.parse(data);
