import { Page } from "@playwright/test";

export async function toggleSidebar(page: Page, state: "open" | "closed"): Promise<void> {
  const toggleState = await getToggleState(page);

  if (state === "open" && toggleState === "hidden") {
    await page.locator('[id="sidebar-toggle-copy"]').click();
  } else if (state === "closed" && toggleState === "visible") {
    await page.locator('[id="sidebar"]').click();
  } else {
    return;
  }
}

async function getToggleState(page: Page) {
  const sidebarClass = await page.locator('[id="sidebar"]').getAttribute("class");

  if (sidebarClass.includes("hidden")) {
    return "hidden";
  } else {
    return "visible";
  }
}
