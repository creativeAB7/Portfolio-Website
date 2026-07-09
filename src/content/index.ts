/**
 * Content barrel — import site content from a single place:
 *   import { about, services, technologies } from "@/content";
 *
 * Schemas and inferred types are re-exported too, so presentation components
 * can type their props against the content model.
 */
export { hero } from "./hero";
export { about } from "./about";
export { services } from "./services";
export { technologies } from "./technologies";
export { workProcess } from "./process";
export {
  projects,
  projectsSection,
  getAllProjects,
  getFeaturedProjects,
  getProjectBySlug,
  getRelatedProjects,
} from "./projects";
export { certifications } from "./certifications";
export { testimonials } from "./testimonials";
export { faq } from "./faq";
export { contact } from "./contact";
export * from "./schema";
