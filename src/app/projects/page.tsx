import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ProjectGrid } from "@/components/projects/project-grid";
import { getAllProjects, projectsSection } from "@/content";

export const metadata: Metadata = {
  title: "Projects",
  description: projectsSection.description,
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="py-16 sm:py-20">
      <Container>
        <header className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold tracking-wider text-brand uppercase">
            {projectsSection.eyebrow}
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {projectsSection.title}
          </h1>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            {projectsSection.description}
          </p>
        </header>

        <div className="mt-12">
          <ProjectGrid projects={projects} />
        </div>
      </Container>
    </div>
  );
}
