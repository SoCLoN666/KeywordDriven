import { Page } from "@playwright/test";

export async function openApp(page: Page, waitUntil: "load" | "commit"): Promise<void> {
  await page.goto("https://recipe-application-pearl.vercel.app/all-recipies", { waitUntil: waitUntil });
}
