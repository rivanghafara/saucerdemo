import { test as base } from "@playwright/test";
import { CheckoutCompletePage } from "../../pages/CheckoutCompletePage";

type CheckoutCompleteFixture = {
	checkoutCompletePage: CheckoutCompletePage;
};

export const checkoutCompleteTest = base.extend<CheckoutCompleteFixture>({
	checkoutCompletePage: async ({ page }, use) => {
		await use(new CheckoutCompletePage(page));
	},
});

export { expect } from "@playwright/test";
