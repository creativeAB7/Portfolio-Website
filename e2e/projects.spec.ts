import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Projects index", () => {
  test("renders the heading and the empty state", async ({ page }) => {
    await page.goto("/projects");
    await expect(
      page.getByRole("heading", { level: 1, name: /selected work/i }),
    ).toBeVisible();
    await expect(page.getByText(/case studies coming soon/i)).toBeVisible();
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
});
