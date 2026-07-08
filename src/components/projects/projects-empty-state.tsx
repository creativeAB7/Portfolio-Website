import Link from "next/link";
import { FolderOpen } from "lucide-react";

import { Button } from "@/components/ui/button";

/**
 * Shown by ProjectGrid when there are no projects yet. Keeps the section
 * looking intentional rather than broken while the registry is empty.
 */
export function ProjectsEmptyState() {
  return (
    <div className="mx-auto max-w-xl rounded-xl border border-dashed border-border p-10 text-center">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-muted">
        <FolderOpen className="size-6 text-muted-foreground" aria-hidden />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold">
        Case studies coming soon
      </h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
        Detailed case studies of my work are on the way. In the meantime, feel
        free to reach out to discuss what I&apos;ve been building.
      </p>
      <Button asChild className="mt-6">
        <Link href="/#contact">Get in touch</Link>
      </Button>
    </div>
  );
}
