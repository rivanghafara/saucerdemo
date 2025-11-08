import { test as base } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";
import { ProductPage } from "../../pages/ProductPage";

type ProductFixtures = {
	productPage: ProductPage;
	loginHelper: {
		login: (username: string, password: string) => Promise<void>;
	};
};

export const productTest = base.extend<ProductFixtures>({
	loginHelper: async ({ page }, use) => {
		const loginPage = new LoginPage(page);
		await use({
			login: async (username: string, password: string) => {
				await loginPage.goto();
				await loginPage.login(username, password);
			},
		});
	},

	productPage: async ({ page }, use) => {
		await use(new ProductPage(page));
	},
});

export { expect } from "@playwright/test";
