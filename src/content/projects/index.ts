import {
  projectSchema,
  projectsSectionSchema,
  type Project,
  type ProjectsSection,
} from "../schema";
import { landlordApp } from "./landlord-app";
import { portfolioWebsite } from "./portfolio-website";

/**
 * Project registry.
 *
 * Adding a project is a pure content change: create `./<slug>.ts` exporting a
 * validated `Project`, import it here, and add it to `entries`. No routing, UI,
 * or layout changes are required — the grid and case-study template are driven
 * entirely by this data.
 *
 * e.g.
 *   import { acmeQaPlatform } from "./acme-qa-platform";
 *   const entries: Project[] = [acmeQaPlatform];
 */
const entries: Project[] = [landlordApp, portfolioWebsite];

/** Heading for the Projects section (homepage + /projects index). */
export const projectsSection: ProjectsSection = projectsSectionSchema.parse({
  eyebrow: "Work",
  title: "Selected work & case studies",
  description:
    "In-depth case studies of selected projects — the problems, the engineering decisions I made, and the outcomes delivered.",
});

// Validate every entry and guard against duplicate slugs at load time.
const validated: Project[] = entries.map((entry) => projectSchema.parse(entry));

const seen = new Set<string>();
for (const project of validated) {
  if (seen.has(project.slug)) {
    throw new Error(`Duplicate project slug: "${project.slug}"`);
  }
  seen.add(project.slug);
}

/** Sort order: featured first, then explicit `order`, then title. */
function byDisplayOrder(a: Project, b: Project): number {
  if (a.featured !== b.featured) return a.featured ? -1 : 1;
  const ao = a.order ?? Number.POSITIVE_INFINITY;
  const bo = b.order ?? Number.POSITIVE_INFINITY;
  if (ao !== bo) return ao - bo;
  return a.title.localeCompare(b.title);
}

/** All projects, sorted for display. */
export const projects: Project[] = [...validated].sort(byDisplayOrder);

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/**
 * Related projects for a slug: explicit `related` entries first (missing slugs
 * are ignored), then topped up with other projects, excluding the current one.
 */
export function getRelatedProjects(slug: string, limit = 2): Project[] {
  const current = getProjectBySlug(slug);
  if (!current) return [];

  const explicit = current.related
    .map((relatedSlug) => getProjectBySlug(relatedSlug))
    .filter(
      (project): project is Project =>
        project !== undefined && project.slug !== slug,
    );

  if (explicit.length >= limit) return explicit.slice(0, limit);

  const fillers = projects.filter(
    (project) =>
      project.slug !== slug &&
      !explicit.some((existing) => existing.slug === project.slug),
  );

  return [...explicit, ...fillers].slice(0, limit);
}
