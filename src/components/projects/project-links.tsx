import type { ComponentType } from "react";
import { ExternalLink, SquareArrowOutUpRight } from "lucide-react";

import { GitHubIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import type { ProjectLink } from "@/content";
import { cn } from "@/lib/utils";

type IconType = ComponentType<{ className?: string }>;

function iconForType(type: ProjectLink["type"]): IconType {
  switch (type) {
    case "repo":
      return GitHubIcon;
    case "demo":
      return SquareArrowOutUpRight;
    default:
      return ExternalLink;
  }
}

/** Renders a project's external links (repo, live demo, etc.) as buttons. */
export function ProjectLinks({
  links,
  className,
}: {
  links: ProjectLink[];
  className?: string;
}) {
  if (links.length === 0) return null;

  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      {links.map((link) => {
        const Icon = iconForType(link.type);
        return (
          <Button key={link.href} asChild variant="outline" size="sm">
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <Icon className="size-4" />
              {link.label}
            </a>
          </Button>
        );
      })}
    </div>
  );
}
