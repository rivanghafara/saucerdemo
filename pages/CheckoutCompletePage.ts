import {Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class CheckoutCompletePage extends BasePage{
    readonly thankYouMessage: Locator

    constructor(page: Page) {
        super(page)
        this.thankYouMessage = page.locator('.complete-header')
    }
}