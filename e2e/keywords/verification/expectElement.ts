import { expect, Locator } from "@playwright/test";

// @ts-ignore
export function expectElement(locator: Locator) {
  return {
    async toBeVisible() {
      await expect(locator).toBeVisible();
    },
    async toBeHidden() {
      await expect(locator).toBeHidden();
    },
  };
}
