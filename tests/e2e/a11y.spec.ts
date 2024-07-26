import test, { expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// https://playwright.dev/docs/accessibility-testing
test("homepage has no accessibility issues", async ({ page }) => {
  await page.goto("/");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("contact page has no accessibility issues", async ({ page }) => {
  await page.goto("/contact");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("about page has no accessibility issues", async ({ page }) => {
  await page.goto("/about");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("blog page has no accessibility issues", async ({ page }) => {
  await page.goto("/blog");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test("blog post page has no accessibility issues", async ({ page }) => {
  await page.goto(
    "/blog/the-best-tech-stack-for-2024-self-hosting-and-3-years-at-gfinity-2023-review"
  );

  const accessibilityScanResults = await new AxeBuilder({ page })
    .exclude(".utterances-frame")
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);

  await page.goto(
    "/blog/understanding-lexical-scope-and-closures-in-3-minutes"
  );

  const accessibilityScanResults2 = await new AxeBuilder({ page })
    .exclude(".utterances-frame")
    .analyze();

  expect(accessibilityScanResults2.violations).toEqual([]);

  await page.goto(
    "/blog/how-to-build-accessible-hidden-navigation-menus-on-the-web"
  );

  const accessibilityScanResults3 = await new AxeBuilder({ page })
    .exclude(".utterances-frame")
    .analyze();

  expect(accessibilityScanResults3.violations).toEqual([]);

  await page.goto(
    "/blog/how-to-improve-core-web-vitals-a-complete-guide-for-developers"
  );

  const accessibilityScanResults4 = await new AxeBuilder({ page })
    .exclude(".utterances-frame")
    .analyze();

  expect(accessibilityScanResults4.violations).toEqual([]);
});
