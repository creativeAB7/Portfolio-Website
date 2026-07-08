import { testimonialsSchema, type TestimonialsContent } from "./schema";

// Only real, attributable testimonials belong here. `items` is empty until
// those are available — no invented quotes.
const data: TestimonialsContent = {
  eyebrow: "Testimonials",
  title: "What clients say",
  description: "Feedback from people I've worked with.",
  items: [],
};

export const testimonials = testimonialsSchema.parse(data);
