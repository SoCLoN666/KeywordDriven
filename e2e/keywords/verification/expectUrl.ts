import { expect, Page } from "@playwright/test";

export function expectUrl(page: Page) {
  return {
    async toBeEqual(url: string) {
      expect(page.url()).toBe(url);
    },
    async toContain(url: string) {
      expect(page.url()).toContain(url);
    },
  };
}
