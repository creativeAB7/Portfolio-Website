import { siteConfig } from "@/config/site";

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
