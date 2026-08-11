import { expect, test } from "@playwright/test";

/**
 * Guards a real defect: primary nav and the persistent CTA used bare anchors
 * ("#about"), which silently did nothing on `/projects/*` because those
 * sections only exist on the homepage. Root-relative hrefs ("/#about") fix it,
 * and these tests stop it regressing.
 */
test.describe("Cross-page navigation", () => {
  test("primary nav reaches homepage sections from a sub-page", async ({
    page,
  }) => {
    await page.goto("/projects/portfolio-website");

    await page
      .getByRole("navigation", { name: "Primary" })
      .getByRole("link", { name: "About" })
      .click();

    await page.waitForURL(/\/#about$/);
    await expect(page.locator("#about")).toBeVisible();
  });

  test("the persistent CTA reaches the contact form from a sub-page", async ({
    page,
  }) => {
    await page.goto("/projects/portfolio-website");

    await page.getByRole("link", { name: "Get in touch" }).first().click();

    await page.waitForURL(/\/#contact$/);
    await expect(page.locator("#contact")).toBeVisible();
  });

  test("the footer links to each case study", async ({ page }) => {
    await page.goto("/");
    const footer = page.getByRole("contentinfo");

    const caseStudyLinks = footer.locator('a[href^="/projects/"]');
    expect(await caseStudyLinks.count()).toBeGreaterThan(0);

    await caseStudyLinks.first().click();
    await page.waitForURL(/\/projects\/.+/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });
});
