import {LoginPage} from "../pages/LoginPage";
import {expect, test} from "@playwright/test";

let loginPage: LoginPage;

test("Login with valid credentials", async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.validateLoginPageIsLoaded()
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/.*\/inventory\.html/);
})