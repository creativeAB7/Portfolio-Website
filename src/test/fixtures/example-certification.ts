import type { CertificationItem } from "@/content";

/**
 * TEST FIXTURE — not shipped. Exercises every certification field so tests can
 * prove the schema and card support the full shape.
 */
export const exampleCertification: CertificationItem = {
  name: "Example Professional Certification",
  issuer: "Example Certification Body",
  issueDate: "2022",
  expiryDate: "2025",
  credentialId: "EX-123456",
  credentialUrl: "https://example.com/credential",
  skills: ["Test Design", "Test Management"],
  category: "Testing",
  badge: { src: "/certifications/example.png", alt: "Example badge" },
};
