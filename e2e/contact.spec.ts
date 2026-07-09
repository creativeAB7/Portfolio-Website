import { expect, test } from "@playwright/test";

test.describe("Contact section", () => {
  test("renders the contact form", async ({ page }) => {
    await page.goto("/");
    const contact = page.locator("#contact");
    await expect(
      contact.getByRole("heading", { name: /let's work together/i }),
    ).toBeVisible();
    await expect(contact.getByLabel("Name", { exact: true })).toBeVisible();
    await expect(contact.getByLabel("Message", { exact: true })).toBeVisible();
  });

  test("surfaces validation errors on empty submit", async ({ page }) => {
    await page.goto("/");
    await page
      .locator("#contact")
      .getByRole("button", { name: /send message/i })
      .click();
    await expect(page.getByText(/please enter your name/i)).toBeVisible();
  });
});
