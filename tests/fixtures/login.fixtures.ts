import { test as base } from "@playwright/test";
import { LoginPage } from "../../pages/LoginPage";

type LoginFixtures = {
	loginPage: LoginPage;
};

export const loginTest = base.extend<LoginFixtures>({
	loginPage: async ({ page }, use) => {
		await use(new LoginPage(page));
	},
});

export { expect } from "@playwright/test";
