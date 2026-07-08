import { certificationsSchema, type CertificationsContent } from "./schema";

// Add real certifications only (name, issuer, date, and credential URL where
// available). `items` is empty until those details are provided.
const data: CertificationsContent = {
  eyebrow: "Certifications",
  title: "Certifications",
  description: "Professional certifications and credentials.",
  items: [],
};

export const certifications = certificationsSchema.parse(data);
