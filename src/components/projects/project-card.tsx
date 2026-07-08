import Image from "next/image";
import Link from "next/link";
import { Layers } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import type { Project } from "@/content";
import { categoryLabel } from "./project-labels";

/**
 * Project grid card. The whole card is clickable via a stretched link on the
 * title, so the link's accessible name is just the project title while the full
 * card remains a click/tap target. Keyboard focus rings the whole card.
 */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition hover:ring-foreground/20 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
      {project.cover ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={project.cover.src}
            alt={project.cover.alt}
            fill
            className="object-cover transition duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-brand/10 to-muted">
          <Layers className="size-10 text-muted-foreground/40" aria-hidden />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2">
          <Badge variant="secondary">{categoryLabel(project.category)}</Badge>
          {project.timeframe && (
            <span className="text-xs text-muted-foreground">
              {project.timeframe}
            </span>
          )}
        </div>

        <h3 className="font-heading text-lg font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors group-hover:text-brand after:absolute after:inset-0 focus-visible:outline-none"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {project.summary}
        </p>

        {project.tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <li key={tag}>
                <Badge variant="outline" className="font-normal">
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
