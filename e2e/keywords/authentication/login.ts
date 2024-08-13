import { Page } from "@playwright/test";

export async function login(page: Page, userName: string, password: string): Promise<void> {
  await page.locator('[class="ml-1"]').fill(userName);
  await page.locator('[class="ml-2"]').fill(password);
  await page.locator("button", { hasText: "Login" }).click();
}
