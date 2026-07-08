import { FolderOpen } from "lucide-react";

import { EmptyState } from "@/components/empty-state";

/** Shown by ProjectGrid when there are no projects yet. */
export function ProjectsEmptyState() {
  return (
    <EmptyState
      icon={FolderOpen}
      title="Case studies coming soon"
      description="Detailed case studies of my work are on the way. In the meantime, feel free to reach out to discuss what I've been building."
      action={{ label: "Get in touch", href: "/#contact" }}
    />
  );
}
