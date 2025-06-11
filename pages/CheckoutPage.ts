import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class CheckoutPage extends BasePage {
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
        super(page)
        this.firstName = page.locator("[data-test='firstName']")
        this.lastName = page.locator("[data-test='lastName']")
        this.zipCode = page.locator("[data-test='postalCode']")
        this.continueButton = page.locator(".cart_button");
    }

    async inputInformation(firstName: string, lastName: string, zipCode: string) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continueButton.click();
    }
}