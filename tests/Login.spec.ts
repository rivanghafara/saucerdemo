import { mergeTests } from "@playwright/test";
import { loginTest, expect } from "./fixtures/login.fixtures";

const test = mergeTests(loginTest);

test("Login with valid credentials", async ({ loginPage, page }) => {
	await loginPage.goto();
	await loginPage.validateLoginPageIsLoaded();
	await loginPage.login("standard_user", "secret_sauce");
	await expect(page).toHaveURL(/.*\/inventory\.html/);
});
