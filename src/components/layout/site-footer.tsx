import { Mail } from "lucide-react";

import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/config/site";

const socials = [
  { label: "GitHub", href: siteConfig.links.github, icon: GitHubIcon },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${siteConfig.links.email}`, icon: Mail },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 py-10 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {siteConfig.name}. All rights reserved.
          </p>
          <nav aria-label="Social links" className="flex items-center gap-1">
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
                  className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                >
                  <Icon className="size-5" />
                </a>
              );
            })}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
