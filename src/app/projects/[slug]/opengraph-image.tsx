import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";
import { getAllProjects, getProjectBySlug } from "@/content";

export const alt = "Project case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

/** Per-project social share image, generated from the project's own content. */
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  const title = project?.title ?? "Case study";
  const summary = project?.summary ?? "";

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#0a0a0a",
        color: "#fafafa",
        padding: "80px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div
          style={{
            width: 22,
            height: 22,
            borderRadius: 9999,
            background: "#3b82f6",
          }}
        />
        <div style={{ fontSize: 28, color: "#a1a1aa" }}>
          {`${siteConfig.name} · Case study`}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.05 }}>
          {title}
        </div>
        {summary && (
          <div style={{ fontSize: 30, color: "#a1a1aa", lineHeight: 1.3 }}>
            {summary}
          </div>
        )}
      </div>

      <div style={{ fontSize: 26, color: "#71717a" }}>
        {siteConfig.url.replace(/^https?:\/\//, "")}
      </div>
    </div>,
    { ...size },
  );
}
