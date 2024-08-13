import { Page } from "@playwright/test";
import { SidebarIds } from "e2e/selectors/sidebar";

export async function toggleSidebar(page: Page, state: "open" | "closed"): Promise<void> {
  const toggleState = await getToggleState(page);

  if (state === "open" && toggleState === "hidden") {
    await page.locator(SidebarIds.CollapsedSidebarToggle).click();
  } else if (state === "closed" && toggleState === "visible") {
    await page.locator(SidebarIds.ExpandedSidebarToggle).click();
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
