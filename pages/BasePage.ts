import { Locator, Page } from "@playwright/test";

export class BasePage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async clickElement(locator: Locator) {
		await locator.click();
	}

	async fillText(locator: Locator, text: string) {
		await locator.fill(text);
	}

	async navigateTo(url: string) {
		await this.page.goto(url);
	}
}
