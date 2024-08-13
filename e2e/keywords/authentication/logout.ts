import { Page } from "@playwright/test";

export async function logout(page: Page): Promise<void> {
  await page.evaluate(() => {
    localStorage.clear();
  });

  await page.reload();
}
