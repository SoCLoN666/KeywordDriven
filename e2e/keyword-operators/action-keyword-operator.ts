import { Page } from "@playwright/test";
import { login } from "e2e/keywords/authentication/login";
import { logout } from "e2e/keywords/authentication/logout";
import { openApp } from "e2e/keywords/navigation/openApp";
import { toggleSidebar } from "e2e/keywords/navigation/toggleSidebar";

export class ActionOperator {
  private static page: Page;

  // Set the page instance
  public static setPage(page: Page) {
    ActionOperator.page = page;
  }

  public static async login(): Promise<void> {
    await login(this.page, "Oleg", "123456789a");
  }

  public static async logout(): Promise<void> {
    await logout(this.page);
  }

  public static async openApp(waitUntil: "load" | "commit") {
    await openApp(this.page, waitUntil);
  }

  public static async toggleSidebarTo(state: "open" | "closed") {
    await toggleSidebar(this.page, state);
  }
}
