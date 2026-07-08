import type { ProjectCategory } from "@/content";

/** Human-readable labels for project category enum values. */
const categoryLabels: Record<ProjectCategory, string> = {
  personal: "Personal",
  freelance: "Freelance",
  commercial: "Commercial",
  "open-source": "Open source",
  experiment: "Experiment",
  "internal-tool": "Internal tool",
  "proof-of-concept": "Proof of concept",
};

export function categoryLabel(category: ProjectCategory): string {
  return categoryLabels[category];
}
