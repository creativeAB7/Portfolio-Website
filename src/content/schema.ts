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

/* ------------------------------------------------- Case-study blocks - */

/**
 * A case study's body is an ordered list of typed "blocks". New section types
 * are added by adding a variant to `caseStudyBlockSchema` and a matching
 * renderer in the UI block registry — the case-study template, routes, and
 * layouts never need to change. This is what lets a project of any size or
 * shape be expressed by composing blocks in any order.
 */

const blockTitle = z.string().min(1).optional();

/** Titled paragraphs — Overview, Background, Problem, Process, Lessons, etc. */
export const proseBlockSchema = z.object({
  type: z.literal("prose"),
  title: blockTitle,
  body: z.array(z.string().min(1)).min(1),
});

/** A simple list — Objectives, responsibilities, etc. */
export const listBlockSchema = z.object({
  type: z.literal("list"),
  title: blockTitle,
  style: z.enum(["bullet", "check", "number"]).optional(),
  items: z.array(z.string().min(1)).min(1),
});

/** Titled items with optional descriptions — Key Features. */
export const featureListBlockSchema = z.object({
  type: z.literal("featureList"),
  title: blockTitle,
  items: z
    .array(
      z.object({
        title: z.string().min(1),
        description: z.string().min(1).optional(),
      }),
    )
    .min(1),
});

/** Grouped technologies — reuses the shared technology-group shape. */
export const techStackBlockSchema = z.object({
  type: z.literal("techStack"),
  title: blockTitle,
  groups: z.array(technologyGroupSchema).min(1),
});

/** Architecture & technical decisions — decision, rationale, alternatives. */
export const decisionsBlockSchema = z.object({
  type: z.literal("decisions"),
  title: blockTitle,
  items: z
    .array(
      z.object({
        decision: z.string().min(1),
        rationale: z.string().min(1),
        alternatives: z.string().min(1).optional(),
      }),
    )
    .min(1),
});

/** Outcome metrics — Results & business outcome. */
export const metricsBlockSchema = z.object({
  type: z.literal("metrics"),
  title: blockTitle,
  items: z
    .array(
      z.object({
        value: z.string().min(1),
        label: z.string().min(1),
      }),
    )
    .min(1),
});

export const galleryImageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
});
/** Screenshots / media gallery. */
export const galleryBlockSchema = z.object({
  type: z.literal("gallery"),
  title: blockTitle,
  items: z.array(galleryImageSchema).min(1),
});

/** A pulled-out quote or testimonial within a case study. */
export const quoteBlockSchema = z.object({
  type: z.literal("quote"),
  quote: z.string().min(1),
  attribution: z.string().min(1).optional(),
});

export const caseStudyBlockSchema = z.discriminatedUnion("type", [
  proseBlockSchema,
  listBlockSchema,
  featureListBlockSchema,
  techStackBlockSchema,
  decisionsBlockSchema,
  metricsBlockSchema,
  galleryBlockSchema,
  quoteBlockSchema,
]);
export type CaseStudyBlock = z.infer<typeof caseStudyBlockSchema>;
export type CaseStudyBlockType = CaseStudyBlock["type"];
export type GalleryImage = z.infer<typeof galleryImageSchema>;

/* --------------------------------------------------------------- Projects - */

/** Broad on purpose so any future work fits without new categories. */
export const projectCategories = [
  "personal",
  "freelance",
  "commercial",
  "open-source",
  "experiment",
  "internal-tool",
  "proof-of-concept",
] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const projectStatuses = [
  "completed",
  "in-progress",
  "archived",
] as const;
export type ProjectStatus = (typeof projectStatuses)[number];

export const projectLinkSchema = z.object({
  label: z.string().min(1),
  href: z.url(),
  type: z.enum(["repo", "demo", "external"]).optional(),
});
export type ProjectLink = z.infer<typeof projectLinkSchema>;

/** Shared image reference: a path/URL plus required alt text. */
export const imageSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
});
export type ImageRef = z.infer<typeof imageSchema>;

const projectSlug = z
  .string()
  .regex(/^[a-z0-9-]+$/, "slug must be kebab-case (a-z, 0-9, hyphens)");

/**
 * A single project / case study: structural metadata (used by the grid,
 * header, and SEO) plus an ordered `body` of case-study blocks.
 */
export const projectSchema = z.object({
  slug: projectSlug,
  title: z.string().min(1),
  /** One-line summary used on cards and as the meta description. */
  summary: z.string().min(1),
  category: z.enum(projectCategories),
  status: z.enum(projectStatuses).optional(),
  role: z.string().min(1).optional(),
  timeframe: z.string().min(1).optional(),
  client: z.string().min(1).optional(),
  /** Tech/skill tags shown on cards and used for future filtering. */
  tags: z.array(z.string().min(1)),
  cover: imageSchema.optional(),
  featured: z.boolean(),
  /** Optional manual sort weight (lower sorts earlier). */
  order: z.number().int().optional(),
  links: z.array(projectLinkSchema),
  /** Slugs of related projects (resolved at read time; missing ones ignored). */
  related: z.array(projectSlug),
  /** Ordered case-study sections. */
  body: z.array(caseStudyBlockSchema),
});
export type Project = z.infer<typeof projectSchema>;

/** Heading for the Projects section (homepage + /projects index). */
export const projectsSectionSchema = z.object({ ...sectionMetaShape });
export type ProjectsSection = z.infer<typeof projectsSectionSchema>;

/* --------------------------------------------------------- Certifications - */

export const certificationItemSchema = z.object({
  name: z.string().min(1),
  issuer: z.string().min(1),
  issueDate: z.string().min(1),
  expiryDate: z.string().min(1).optional(),
  credentialId: z.string().min(1).optional(),
  credentialUrl: z.url().optional(),
  skills: z.array(z.string().min(1)).optional(),
  category: z.string().min(1).optional(),
  /** Issuer badge / logo image. */
  badge: imageSchema.optional(),
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
  avatar: imageSchema.optional(),
  date: z.string().min(1).optional(),
  /** Slug of a related project this testimonial refers to. */
  project: projectSlug.optional(),
  skills: z.array(z.string().min(1)).optional(),
  rating: z.number().int().min(1).max(5).optional(),
  verificationUrl: z.url().optional(),
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
  /** Optional grouping label for future categorised FAQs. */
  category: z.string().min(1).optional(),
});
export const faqSchema = z.object({
  ...sectionMetaShape,
  items: z.array(faqItemSchema).min(1),
});
export type FaqItem = z.infer<typeof faqItemSchema>;
export type FaqContent = z.infer<typeof faqSchema>;

/* ---------------------------------------------------------------- Contact - */

export const contactSchema = z.object({
  ...sectionMetaShape,
  /** Short availability / preferred-contact line. */
  availability: z.string().min(1),
  /** Expected response-time copy. */
  responseTime: z.string().min(1),
});
export type ContactContent = z.infer<typeof contactSchema>;
