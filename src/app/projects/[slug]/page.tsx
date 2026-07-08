import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudy } from "@/components/projects/case-study";
import { siteConfig } from "@/config/site";
import {
  getAllProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "@/content";

// Only pre-known project slugs are served; unknown slugs 404 (static-first).
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.cover
        ? [{ url: project.cover.src, alt: project.cover.alt }]
        : undefined,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug);

  return <CaseStudy project={project} related={related} />;
}
