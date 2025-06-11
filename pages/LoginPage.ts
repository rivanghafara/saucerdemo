import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class LoginPage extends BasePage {
    readonly usernameTextField: Locator;
    readonly passwordTextField: Locator;
    readonly loginButton: Locator;
    readonly loginLogo: Locator;


    constructor(page: Page) {
        super(page);
        this.usernameTextField = page.locator("[data-test='username']")
        this.passwordTextField = page.locator("[data-test='password']")
        this.loginButton = page.locator("[id='login-button']")
        this.loginLogo = page.locator("[class='login_logo']");
    }

    async goto() {
        await this.page.goto("/")
    }

    async login(username: string, password: string) {
        await this.usernameTextField.fill(username);
        await this.passwordTextField.fill(password);
        await this.loginButton.click();
    }

    async validateLoginPageIsLoaded() {
        await expect(this.usernameTextField).toBeVisible();
        await expect(this.passwordTextField).toBeVisible();
        await expect(this.loginButton).toBeVisible();
        await expect(this.loginLogo).toBeVisible();
    }
}