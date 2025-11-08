import { test as base } from "@playwright/test";
import { CartPage } from "../../pages/CartPage";

type CartFixtures = {
	cartPage: CartPage;
};

export const cartTest = base.extend<CartFixtures>({
	cartPage: async ({ page }, use) => {
		await use(new CartPage(page));
	},
});

export { expect } from "@playwright/test";
