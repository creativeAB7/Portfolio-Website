import { z } from "zod";

/**
 * Content schemas — the single source of truth for the *shape* of every piece
 * of site content. Data files (`about.ts`, `services.ts`, …) validate their
 * data against these with `.parse()` at import time, so malformed content fails
 * the build instead of shipping broken. TypeScript types are inferred from the
 * schemas so authoring and consumption stay in sync automatically.
 *
 * Each section exports a single object bundling its heading (eyebrow/title/
 * description) with its data, so presentation components contain no hard-coded
 * copy. Content stores presentation-agnostic values only (strings, enums);
 * icons/components are resolved in the UI layer from string keys, keeping this
 * data serializable and ready for reuse or a future CMS.
 */

/** Shared heading fields for a titled content section. */
const sectionMetaShape = {
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
};

/* ------------------------------------------------------------------ About - */

export const aboutSchema = z.object({
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  lead: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
  highlights: z
    .array(
      z.object({
        value: z.string().min(1),
        label: z.string().min(1),
      }),
    )
    .min(1),
});
export type About = z.infer<typeof aboutSchema>;

/* --------------------------------------------------------------- Services - */

/** Semantic icon keys; the UI maps these to concrete icon components. */
export const serviceIconKeys = [
  "test-automation",
  "qa-strategy",
  "software-testing",
  "web-development",
  "ai-assisted",
] as const;
export type ServiceIconKey = (typeof serviceIconKeys)[number];

export const serviceItemSchema = z.object({
  icon: z.enum(serviceIconKeys),
  title: z.string().min(1),
  description: z.string().min(1),
  features: z.array(z.string().min(1)).min(1),
});
export const servicesSchema = z.object({
  ...sectionMetaShape,
  items: z.array(serviceItemSchema).min(1),
});
export type ServiceItem = z.infer<typeof serviceItemSchema>;
export type ServicesContent = z.infer<typeof servicesSchema>;

/* ----------------------------------------------------------- Technologies - */

export const technologyGroupSchema = z.object({
  category: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),
});
export const technologiesSchema = z.object({
  ...sectionMetaShape,
  groups: z.array(technologyGroupSchema).min(1),
});
export type TechnologyGroup = z.infer<typeof technologyGroupSchema>;
export type TechnologiesContent = z.infer<typeof technologiesSchema>;

/* ------------------------------------------------- Experience & Skills - */

export const experienceRoleSchema = z.object({
  role: z.string().min(1),
  company: z.string().min(1),
  period: z.string().min(1),
  summary: z.string().min(1).optional(),
  highlights: z.array(z.string().min(1)).min(1),
});
export const skillGroupSchema = z.object({
  group: z.string().min(1),
  items: z.array(z.string().min(1)).min(1),
});
export const experienceSchema = z.object({
  ...sectionMetaShape,
  roles: z.array(experienceRoleSchema).min(1),
  skills: z.array(skillGroupSchema).min(1),
});
export type ExperienceRole = z.infer<typeof experienceRoleSchema>;
export type SkillGroup = z.infer<typeof skillGroupSchema>;
export type ExperienceContent = z.infer<typeof experienceSchema>;

/* --------------------------------------------------------------- Projects - */

export const projectLinkSchema = z.object({
  label: z.string().min(1),
  href: z.url(),
});
export const projectItemSchema = z.object({
  slug: z
    .string()
    .regex(/^[a-z0-9-]+$/, "slug must be kebab-case (a-z, 0-9, hyphens)"),
  title: z.string().min(1),
  summary: z.string().min(1),
  /** Case-study body: the problem, the approach taken, and the outcome. */
  problem: z.string().min(1),
  approach: z.string().min(1),
  outcome: z.string().min(1),
  tags: z.array(z.string().min(1)),
  links: z.array(projectLinkSchema),
  featured: z.boolean(),
});
export const projectsSchema = z.object({
  ...sectionMetaShape,
  items: z.array(projectItemSchema),
});
export type ProjectItem = z.infer<typeof projectItemSchema>;
export type ProjectLink = z.infer<typeof projectLinkSchema>;
export type ProjectsContent = z.infer<typeof projectsSchema>;

/* --------------------------------------------------------- Certifications - */

export const certificationItemSchema = z.object({
  name: z.string().min(1),
  issuer: z.string().min(1),
  date: z.string().min(1),
  credentialUrl: z.url().optional(),
});
export const certificationsSchema = z.object({
  ...sectionMetaShape,
  items: z.array(certificationItemSchema),
});
export type CertificationItem = z.infer<typeof certificationItemSchema>;
export type CertificationsContent = z.infer<typeof certificationsSchema>;

/* ----------------------------------------------------------- Testimonials - */

export const testimonialItemSchema = z.object({
  quote: z.string().min(1),
  author: z.string().min(1),
  role: z.string().min(1).optional(),
  company: z.string().min(1).optional(),
});
export const testimonialsSchema = z.object({
  ...sectionMetaShape,
  items: z.array(testimonialItemSchema),
});
export type TestimonialItem = z.infer<typeof testimonialItemSchema>;
export type TestimonialsContent = z.infer<typeof testimonialsSchema>;

/* -------------------------------------------------------------------- FAQ - */

export const faqItemSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});
export const faqSchema = z.object({
  ...sectionMetaShape,
  items: z.array(faqItemSchema).min(1),
});
export type FaqItem = z.infer<typeof faqItemSchema>;
export type FaqContent = z.infer<typeof faqSchema>;
