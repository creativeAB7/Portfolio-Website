/**
 * Central site configuration — the single source of truth for identity,
 * navigation, and social links. Keeping this here (rather than scattered
 * through components) makes the site easy to rebrand and keeps SEO metadata
 * consistent.
 *
 * Identity and social links are live. The only remaining placeholder is
 * `links.booking` — unused while the primary CTA points at #contact.
 */
export type NavItem = {
  label: string;
  href: string;
};

export const siteConfig = {
  name: "Akeem Baker",
  /** Short role label used in headers and structured data. */
  role: "Quality Engineer",
  /** Default <title> and the base for the title template. */
  title: "Akeem Baker — Quality Engineer",
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
    github: "https://github.com/creativeAB7",
    linkedin: "https://www.linkedin.com/in/akeem-baker-10674b158/",
    email: "hello@akeembaker.com",
    /** Not yet live — the primary CTA points at #contact until this exists. */
    booking: "https://cal.com/your-handle", // TODO: real booking link (Cal.com / Calendly)
  },
} as const;

export type SiteConfig = typeof siteConfig;

/**
 * Primary navigation. Hrefs are root-relative (`/#about`, not `#about`) so the
 * links work from every page — a bare anchor on `/projects/[slug]` points at a
 * section that doesn't exist there and silently does nothing. On the homepage
 * these still scroll rather than reload.
 */
export const mainNav: NavItem[] = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#projects" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];
