import { Locator, Page } from "@playwright/test";
import { expectElement } from "e2e/keywords/verification/expectElement";
import { expectUrl } from "e2e/keywords/verification/expectUrl";

export abstract class AssertOperator {
  private static page: Page;

  public static setPage(page: Page): void {
    AssertOperator.page = page;
  }

  public static element(locator: Locator) {
    return expectElement(locator);
  }

  public static expectUrl() {
    return expectUrl(this.page);
  }
}
