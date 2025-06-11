import {expect, Locator, Page} from "@playwright/test";
import {BasePage} from "./BasePage";

export class OverviewPage extends BasePage{
    readonly totalSum: Locator
    readonly finishButton: Locator


    constructor(page: Page) {
        super(page);
        this.totalSum = page.locator('.summary_total_label')
        this.finishButton = page.locator('.cart_button')
    }

    async finish() {
        await this.finishButton.click();
    }
}