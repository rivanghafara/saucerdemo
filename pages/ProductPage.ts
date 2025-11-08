import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage {
	readonly productHeader: Locator;
	readonly addItemButton: Locator;
	readonly cartBadge: Locator;

	constructor(page: Page) {
		super(page);
		this.productHeader = page.locator("[class='header_secondary_container']");
		this.addItemButton = page.locator(".btn_inventory");
		this.cartBadge = page.locator(".shopping_cart_badge");
	}

	async validateProductPageIsLoaded() {
		await expect(this.productHeader).toBeVisible();
	}

	async addNItems(n: number) {
		for (let i: number = 0; i < n; i++) {
			await this.addItemButton.nth(i).click();
			await expect(this.addItemButton.nth(i)).toHaveText("Remove");
		}
	}

	async addRandomItems() {
		const totalItems: number = await this.addItemButton.count();
		const randomItem: number = Math.floor(Math.random() * totalItems);

		await this.addItemButton
			.nth(randomItem)
			.filter({ hasText: "ADD TO CART" })
			.click();
		await expect(this.addItemButton.nth(randomItem)).toHaveText("Remove");
	}

	async goToCart() {
		await this.cartBadge.click();
	}
}
