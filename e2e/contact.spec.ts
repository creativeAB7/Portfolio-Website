import { expect, test } from "@playwright/test";

test.describe("Contact section", () => {
  test("renders the contact form", async ({ page }) => {
    await page.goto("/");
    const contact = page.locator("#contact");
    // The form's controls and behaviour are the contract worth asserting;
    // the section's headline copy is free to change.
    await expect(contact.getByRole("heading").first()).toBeVisible();
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
