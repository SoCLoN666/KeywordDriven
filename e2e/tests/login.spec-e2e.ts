import { test } from "@playwright/test";
import { ActionOperator } from "e2e/keyword-operators/action-keyword-operator";
import { AssertOperator } from "e2e/keyword-operators/assert-keyword-operator";
import { LoginPageIds } from "e2e/selectors/login-page";

test.describe("login page tests", () => {
  test("user should be able to login", async ({ page }) => {
    ActionOperator.setPage(page);
    AssertOperator.setPage(page);

    await ActionOperator.openApp("load");
    await ActionOperator.login();
    AssertOperator.expectUrl().toBeEqual("https://recipe-application-pearl.vercel.app/all-recipies");
  });

  test("user should be able to logout", async ({ page }) => {
    ActionOperator.setPage(page);
    AssertOperator.setPage(page);

    await ActionOperator.openApp("load");
    const loginUsername = page.locator(LoginPageIds.Username);

    await ActionOperator.login();

    await AssertOperator.element(loginUsername).toBeHidden();

    await ActionOperator.logout();
    await loginUsername.waitFor();

    await AssertOperator.element(loginUsername).toBeVisible();
  });
});
