import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowLeft,
  Briefcase,
  CalendarDays,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { CaseStudyBody } from "@/components/projects/case-study-blocks";
import { ProjectLinks } from "@/components/projects/project-links";
import { RelatedProjects } from "@/components/projects/related-projects";
import { Badge } from "@/components/ui/badge";
import type { Project, ProjectStatus } from "@/content";
import { categoryLabel } from "./project-labels";

const statusLabels: Record<ProjectStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  archived: "Archived",
};

type MetaItem = { icon: LucideIcon; label: string; value: string };

/**
 * The case-study template. Presentation-only: it takes a fully-typed project
 * and its related projects, and renders header, meta, cover, the block-driven
 * body, tags, and related work. Works for any project regardless of which
 * sections it includes.
 */
export function CaseStudy({
  project,
  related,
}: {
  project: Project;
  related: Project[];
}) {
  const meta: MetaItem[] = [];
  if (project.phase)
    meta.push({ icon: Activity, label: "Status", value: project.phase });
  if (project.role)
    meta.push({ icon: Briefcase, label: "Role", value: project.role });
  if (project.timeframe)
    meta.push({
      icon: CalendarDays,
      label: "Timeframe",
      value: project.timeframe,
    });
  if (project.client)
    meta.push({ icon: Users, label: "Client", value: project.client });

  return (
    <article className="py-12 sm:py-16">
      <Container>
        <Link
          href="/projects"
          className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          All projects
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{categoryLabel(project.category)}</Badge>
            {project.status && project.status !== "completed" && (
              <Badge variant="outline">{statusLabels[project.status]}</Badge>
            )}
          </div>

          <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-pretty text-muted-foreground">
            {project.summary}
          </p>

          {meta.length > 0 && (
            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              {meta.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 text-sm">
                  <Icon
                    className="size-4 shrink-0 text-muted-foreground"
                    aria-hidden
                  />
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="text-muted-foreground">{label}: </span>
                    <span className="font-medium">{value}</span>
                  </dd>
                </div>
              ))}
            </dl>
          )}

          <ProjectLinks links={project.links} className="mt-6" />
        </header>

        {project.cover && (
          <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-xl bg-muted ring-1 ring-foreground/10">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1152px) 1152px, 100vw"
            />
          </div>
        )}

        {project.body.length > 0 && (
          <div className="mt-12 max-w-3xl">
            <CaseStudyBody blocks={project.body} />
          </div>
        )}

        {project.tags.length > 0 && (
          <div className="mt-12 max-w-3xl">
            <h2 className="mb-3 text-sm font-semibold tracking-wider text-muted-foreground uppercase">
              Tags
            </h2>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>

      <RelatedProjects projects={related} />
    </article>
  );
}
