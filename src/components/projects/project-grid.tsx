import type { Project } from "@/content";
import { ProjectCard } from "./project-card";
import { ProjectsEmptyState } from "./projects-empty-state";

/**
 * Responsive project grid. Renders the empty state when there are no projects,
 * so every consumer handles emptiness for free.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return <ProjectsEmptyState />;
  }

  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <li key={project.slug} className="flex">
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}
