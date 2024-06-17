import { test, expect } from "@playwright/test";

test("homepage loads correctly", async ({ page }) => {
  const response = await page.request.get("/");

  // Expect a title "to contain" a substring.
  await expect(response).toBeOK();
});
