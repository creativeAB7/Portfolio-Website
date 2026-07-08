/**
 * Content barrel — import site content from a single place:
 *   import { about, services, technologies } from "@/content";
 *
 * Schemas and inferred types are re-exported too, so presentation components
 * can type their props against the content model.
 */
export { about } from "./about";
export { services } from "./services";
export { technologies } from "./technologies";
export { experience } from "./experience";
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
export * from "./schema";
