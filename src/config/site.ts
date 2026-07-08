/**
 * Central site configuration — the single source of truth for identity,
 * navigation, and social links. Keeping this here (rather than scattered
 * through components) makes the site easy to rebrand and keeps SEO metadata
 * consistent.
 *
 * TODO(akeem): replace the placeholder tagline, email, and social handles
 * with your real details before going to production.
 */
export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Akeem Baker",
  /** Short role label used in headers and structured data. */
  role: "QA Automation & Software Engineer",
  /** Default <title> and the base for the title template. */
  title: "Akeem Baker — QA Automation & Software Engineer",
  /** Default meta description; keep under ~160 characters. */
  description:
    "Quality-focused software engineer specialising in test automation, software testing, and modern web development. Available for freelance and consulting work.",
  /**
   * Canonical production URL. Set NEXT_PUBLIC_SITE_URL in the environment
   * (e.g. your Vercel domain). Falls back to localhost for development.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_GB",
  links: {
    github: "https://github.com/your-handle", // TODO: real GitHub URL
    linkedin: "https://www.linkedin.com/in/your-handle", // TODO: real LinkedIn URL
    email: "hello@example.com", // TODO: real contact email
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Primary in-page navigation (anchors to homepage sections). */
export const mainNav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
