import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import type { Project } from "@/content";

/** "Related projects" block shown at the foot of a case study. */
export function RelatedProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <section
      aria-labelledby="related-projects-heading"
      className="mt-16 border-t bg-muted/30 py-16"
    >
      <Container>
        <h2
          id="related-projects-heading"
          className="font-heading text-2xl font-bold tracking-tight"
        >
          Related projects
        </h2>
        <div className="mt-8">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </section>
  );
}
