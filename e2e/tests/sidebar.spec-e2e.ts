import { test } from "@playwright/test";
import { ActionOperator } from "e2e/keyword-operators/action-keyword-operator";
import { AssertOperator } from "e2e/keyword-operators/assert-keyword-operator";
import { SidebarIds } from "e2e/selectors/sidebar";

test.describe.only("sidebar  tests", () => {
  test("expanded sidebar is default state", async ({ page }) => {
    ActionOperator.setPage(page);
    AssertOperator.setPage(page);

    ActionOperator.openApp("load");
    ActionOperator.login();

    const sidebar = page.locator(SidebarIds.Sidebar);

    await sidebar.waitFor();

    await AssertOperator.element(sidebar).toBeVisible();
  });

  test("user should be able to collapse sidebar", async ({ page }) => {
    ActionOperator.setPage(page);
    AssertOperator.setPage(page);

    ActionOperator.openApp("load");
    ActionOperator.login();
    ActionOperator.toggleSidebarTo("closed");

    const collapsedSidebarToggle = page.locator(SidebarIds.CollapsedSidebarToggle);

    await collapsedSidebarToggle.waitFor();

    await AssertOperator.element(collapsedSidebarToggle).toBeVisible();
  });

  test.only("user should be able to expand collapsed sidebar", async ({ page }) => {
    ActionOperator.setPage(page);
    AssertOperator.setPage(page);

    await ActionOperator.openApp("load");
    await ActionOperator.login();
    await ActionOperator.toggleSidebarTo("closed");
    await ActionOperator.toggleSidebarTo("open");

    const sidebar = page.locator(SidebarIds.Sidebar);

    await sidebar.waitFor();

    await AssertOperator.element(sidebar).toBeVisible();
  });
});
