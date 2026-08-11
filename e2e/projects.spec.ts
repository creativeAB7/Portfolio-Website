import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Projects index", () => {
  test("renders the heading and at least one case study", async ({ page }) => {
    await page.goto("/projects");

    // Assert structure rather than marketing copy. Matching exact headings
    // here means routine content edits fail the suite without anything
    // actually being broken — which trains people to ignore red builds.
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).not.toBeEmpty();

    const caseStudyLinks = page.locator('a[href^="/projects/"]');
    expect(await caseStudyLinks.count()).toBeGreaterThan(0);
    await expect(caseStudyLinks.first()).toBeVisible();
  });

  test("has no detectable WCAG A/AA accessibility violations", async ({
    page,
  }) => {
    await page.goto("/projects");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test("a case study renders and is accessible", async ({ page }) => {
    await page.goto("/projects/portfolio-website");

    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).not.toBeEmpty();
    // A case study must actually render body sections, not just a title.
    expect(await page.locator("article h2").count()).toBeGreaterThan(0);

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
