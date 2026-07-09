import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Projects index", () => {
  test("renders the heading and at least one case study", async ({ page }) => {
    await page.goto("/projects");
    await expect(
      page.getByRole("heading", { level: 1, name: /selected work/i }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /this website/i }),
    ).toBeVisible();
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
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /content-driven consulting platform/i,
      }),
    ).toBeVisible();
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
