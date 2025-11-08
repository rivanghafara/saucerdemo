import { mergeTests } from "@playwright/test";
import { loginTest } from "../login.fixtures";
import { productTest } from "../product.fixtures";
import { cartTest } from "../cart.fixtures";
import { checkoutTest } from "../checkout.fixtures";
import { overviewTest } from "../overview.fixtures";
import { checkoutCompleteTest } from "../checkoutComplete.fixtures";

export const e2ePurchaseTest = mergeTests(
	loginTest,
	productTest,
	cartTest,
	checkoutTest,
	overviewTest,
	checkoutCompleteTest
);

export { expect } from "@playwright/test";
