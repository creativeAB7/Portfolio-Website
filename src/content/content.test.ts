import { describe, expect, test } from "vitest";

import {
  about,
  certifications,
  experience,
  faq,
  projects,
  projectsSection,
  services,
  technologies,
  testimonials,
} from "@/content";

/**
 * Importing the content modules runs each schema's `.parse()`, so this file
 * failing to load already means content is invalid. These assertions add
 * explicit, readable guarantees on top of that.
 */
describe("content", () => {
  test("about has narrative copy and highlights", () => {
    expect(about.paragraphs.length).toBeGreaterThan(0);
    expect(about.highlights.length).toBeGreaterThan(0);
  });

  test("services have features and resolvable icon keys", () => {
    expect(services.items.length).toBeGreaterThan(0);
    for (const service of services.items) {
      expect(service.features.length).toBeGreaterThan(0);
    }
  });

  test("technologies are grouped with items", () => {
    expect(technologies.groups.length).toBeGreaterThan(0);
    for (const group of technologies.groups) {
      expect(group.items.length).toBeGreaterThan(0);
    }
  });

  test("experience exposes roles and skill groups", () => {
    expect(experience.roles.length).toBeGreaterThan(0);
    expect(experience.skills.length).toBeGreaterThan(0);
  });

  test("faq has question/answer pairs", () => {
    expect(faq.items.length).toBeGreaterThan(0);
  });

  test("projects is a validated collection", () => {
    expect(Array.isArray(projects)).toBe(true);
  });

  test("every section defines a heading", () => {
    const sections = [
      services,
      technologies,
      experience,
      projectsSection,
      certifications,
      testimonials,
      faq,
    ];
    for (const section of sections) {
      expect(section.eyebrow.length).toBeGreaterThan(0);
      expect(section.title.length).toBeGreaterThan(0);
      expect(section.description.length).toBeGreaterThan(0);
    }
  });
});
