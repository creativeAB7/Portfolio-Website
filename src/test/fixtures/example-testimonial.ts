import type { TestimonialItem } from "@/content";

/**
 * TEST FIXTURE — not shipped. Exercises every testimonial field so tests can
 * prove the schema and card support the full shape.
 */
export const exampleTestimonial: TestimonialItem = {
  quote:
    "Akeem raised our release confidence dramatically and left the test suite in great shape.",
  author: "Jordan Rivera (fixture)",
  role: "Engineering Lead",
  company: "Example Co",
  avatar: { src: "/testimonials/jordan.png", alt: "Jordan Rivera" },
  date: "March 2024",
  project: "example-case-study",
  skills: ["Test Automation", "Playwright", "CI/CD"],
  rating: 5,
  verificationUrl: "https://example.com/verify",
};
