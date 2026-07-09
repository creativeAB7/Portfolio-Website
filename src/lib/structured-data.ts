import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/content";

/** JSON-LD Person describing the site owner (rendered site-wide). */
export function personStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    jobTitle: siteConfig.role,
    description: siteConfig.description,
    email: `mailto:${siteConfig.links.email}`,
    sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
  };
}

/** JSON-LD FAQPage built from the FAQ content. */
export function faqStructuredData(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
