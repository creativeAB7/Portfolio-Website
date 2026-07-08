import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { projectSchema, type CaseStudyBlockType } from "@/content";
import { exampleProject } from "@/test/fixtures/example-project";
import { CaseStudyBody } from "./case-study-blocks";

describe("case-study system", () => {
  test("the fixture is a valid project (schema supports every section type)", () => {
    expect(() => projectSchema.parse(exampleProject)).not.toThrow();
  });

  test("the fixture exercises all block types", () => {
    const present = new Set(exampleProject.body.map((block) => block.type));
    const allBlockTypes: CaseStudyBlockType[] = [
      "prose",
      "list",
      "featureList",
      "techStack",
      "decisions",
      "metrics",
      "gallery",
      "quote",
    ];
    for (const type of allBlockTypes) {
      expect(present.has(type)).toBe(true);
    }
  });

  test("the block renderer renders content from each block type", () => {
    render(<CaseStudyBody blocks={exampleProject.body} />);

    // prose
    expect(
      screen.getByText(/end-to-end testing platform/i),
    ).toBeInTheDocument();
    // list (objective)
    expect(
      screen.getByText(/cut regression time from days to hours/i),
    ).toBeInTheDocument();
    // techStack
    expect(screen.getByText("Azure DevOps")).toBeInTheDocument();
    // decisions
    expect(
      screen.getByText(/adopt playwright for end-to-end testing/i),
    ).toBeInTheDocument();
    // featureList
    expect(screen.getByText(/parallel test execution/i)).toBeInTheDocument();
    // metrics
    expect(screen.getByText("70%")).toBeInTheDocument();
    // gallery (image alt + caption)
    expect(
      screen.getByRole("img", { name: /reporting dashboard/i }),
    ).toBeInTheDocument();
    // quote
    expect(
      screen.getByText(/proves the case-study template renders every block/i),
    ).toBeInTheDocument();
  });

  test("heading blocks render as level-2 headings", () => {
    render(<CaseStudyBody blocks={exampleProject.body} />);
    expect(
      screen.getByRole("heading", { level: 2, name: "Overview" }),
    ).toBeInTheDocument();
  });
});
