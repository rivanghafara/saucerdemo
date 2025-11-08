import { test as base } from "@playwright/test";
import { CheckoutPage } from "../../pages/CheckoutPage";

type CheckoutFixture = {
	checkoutPage: CheckoutPage;
};

export const checkoutTest = base.extend<CheckoutFixture>({
	checkoutPage: async ({ page }, use) => {
		await use(new CheckoutPage(page));
	},
});

export { expect } from "@playwright/test";
