import { test as base } from "@playwright/test";
import { OverviewPage } from "../../pages/OverviewPage";

type OverviewFixture = {
	overviewPage: OverviewPage;
};

export const overviewTest = base.extend<OverviewFixture>({
	overviewPage: async ({ page }, use) => {
		await use(new OverviewPage(page));
	},
});

export { expect } from "@playwright/test";
