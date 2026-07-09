import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { Button } from "@/components/ui/button";
import {
  getAllProjects,
  getFeaturedProjects,
  projectsSection,
} from "@/content";

/**
 * Homepage Projects section. Shows featured projects (falling back to the most
 * recent), with a "view all" link when there are more than are shown. Empty
 * state is handled by ProjectGrid.
 */
export function Projects() {
  const all = getAllProjects();
  const featured = getFeaturedProjects();
  const display = (featured.length > 0 ? featured : all).slice(0, 3);

  return (
    <Section
      id="projects"
      eyebrow={projectsSection.eyebrow}
      title={projectsSection.title}
      description={projectsSection.description}
      className="bg-muted/30"
    >
      <ProjectGrid projects={display} />

      {all.length > display.length && (
        <div className="mt-10 text-center">
          <Button asChild variant="outline">
            <Link href="/projects">
              View all projects
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </Section>
  );
}
