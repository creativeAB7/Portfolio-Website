import Link from "next/link";
import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { mainNav, siteConfig } from "@/config/site";
import { contact, getAllProjects } from "@/content";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
] as const;

const columnHeading =
  "text-sm font-semibold tracking-wider text-muted-foreground uppercase";
const footerLink =
  "text-sm text-muted-foreground transition-colors hover:text-foreground";

/**
 * Site footer. Deliberately more than a copyright line: someone who has read to
 * the bottom is engaged, so this is the page's second conversion point — it
 * repeats the contact route, and links directly to each case study rather than
 * only to the index (better for discovery, and it deep-links every page to the
 * work). All content is derived from `siteConfig`, `mainNav`, the project
 * registry, and the contact content, so nothing here needs editing when those
 * change.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();
  const projects = getAllProjects();

  return (
    <footer className="border-t bg-muted/20">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              aria-label={`${siteConfig.name} — home`}
            >
              <Logo className="h-6 w-auto text-brand" />
              <span className="font-heading font-bold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-3 text-sm text-pretty text-muted-foreground">
              {siteConfig.role} — {contact.availability.toLowerCase()}
            </p>
          </div>

          <nav aria-labelledby="footer-explore">
            <h2 id="footer-explore" className={columnHeading}>
              Explore
            </h2>
            <ul className="mt-3 space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-labelledby="footer-work">
            <h2 id="footer-work" className={columnHeading}>
              Case studies
            </h2>
            <ul className="mt-3 space-y-2">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className={footerLink}
                  >
                    {project.shortTitle ?? project.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/projects" className={footerLink}>
                  All work
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className={columnHeading}>Get in touch</h2>
            <a
              href={`mailto:${siteConfig.links.email}`}
              className="mt-3 block text-sm font-medium break-all transition-colors hover:text-brand"
            >
              {siteConfig.links.email}
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              {contact.responseTime}
            </p>
            <nav aria-label="Social links" className="-ml-2 flex items-center">
              {socials.map(({ label, href, icon: Icon }) => {
                const isExternal = href.startsWith("http");
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mt-2 inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    <Icon className="size-5" />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          {/* The site argues its claims are checkable; linking the source
              from every page is what makes that more than an assertion. */}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={footerLink}
          >
            This site is open source
          </a>
        </div>
      </Container>
    </footer>
  );
}
