import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

// Smoke coverage proving the E2E + accessibility stack works. The full suite
// (navigation, contact form, per-section a11y, visual checks) comes later.
test.describe("Home page", () => {
  test("renders the hero heading", async ({ page }) => {
    await page.goto("/");
    // Structural, not copy-coupled: the contract is "the hero renders a
    // visible h1", which stays true across messaging changes.
    const heading = page.getByRole("heading", { level: 1 });
    await expect(heading).toBeVisible();
    await expect(heading).not.toBeEmpty();
  });

  test("has no detectable WCAG A/AA accessibility violations", async ({
    page,
  }) => {
    await page.goto("/");
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
});
