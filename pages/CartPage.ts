import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
	readonly removeItemButton: Locator;
	readonly checkoutButton: Locator;
	readonly cartBadge: Locator;

	constructor(page: Page) {
		super(page);
		this.removeItemButton = page.locator(".cart_button");
		this.checkoutButton = page.locator(".checkout_button");
		this.cartBadge = page.locator(".shopping_cart_badge");
	}

	async removeFirstItem() {
		await this.removeItemButton.click();
	}

	async checkingOut() {
		await this.checkoutButton.click();
	}
}
