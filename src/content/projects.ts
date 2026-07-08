import { projectsSchema, type ProjectsContent } from "./schema";

// Case studies are built out in a later milestone. `items` is intentionally
// empty for now — no placeholder projects. The schema still guarantees the
// shape of entries when they're added (problem → approach → outcome).
const data: ProjectsContent = {
  eyebrow: "Work",
  title: "Selected work & case studies",
  description:
    "Real problems, the approach I took, and the outcomes delivered.",
  items: [],
};

export const projects = projectsSchema.parse(data);
