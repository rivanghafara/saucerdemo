import {ProductPage} from "../pages/ProductPage";
import {LoginPage} from "../pages/LoginPage";
import {expect, test} from "@playwright/test";
import {CartPage} from "../pages/CartPage";
import {CheckoutPage} from "../pages/CheckoutPage";
import {OverviewPage} from "../pages/OverviewPage";
import {CheckoutCompletePage} from "../pages/CheckoutCompletePage";


let loginPage: LoginPage;
let productPage: ProductPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let overviewPage: OverviewPage;
let checkoutCompletePage: CheckoutCompletePage

test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page)
    productPage = new ProductPage(page)
    cartPage = new CartPage(page)
    checkoutPage = new CheckoutPage(page)
    overviewPage = new OverviewPage(page)
    checkoutCompletePage = new CheckoutCompletePage(page)

    await loginPage.goto()
    await loginPage.validateLoginPageIsLoaded()
    await loginPage.login('standard_user', 'secret_sauce')
    await expect(page).toHaveURL(/.*\/inventory\.html/);
})

test('Add 2 items to cart', async ({ page }) => {
    const numOfItems: number = 2;

    await productPage.validateProductPageIsLoaded()
    await productPage.addNItems(numOfItems)
    await expect(productPage.cartBadge).toHaveText(numOfItems.toString());
})

test('Add 3 items to cart', async ({ page }) => {
    const numOfItems: number = 3;

    await productPage.validateProductPageIsLoaded()
    await productPage.addNItems(numOfItems)
    await expect(productPage.cartBadge).toHaveText(numOfItems.toString());
})

test('Add 4 items to cart', async ({ page }) => {
    const numOfItems: number = 4;

    await productPage.validateProductPageIsLoaded()
    await productPage.addNItems(numOfItems)
    await expect(productPage.cartBadge).toHaveText(numOfItems.toString());
})

test('Successfully making a purchase without any item', async ({ page }) => {
    await productPage.addRandomItems()
    await productPage.goToCart()
    await expect(page).toHaveURL(/.*\/cart\.html/);
    await cartPage.removeFirstItem()
    await cartPage.checkingOut()
    await expect(page).toHaveURL(/.*\/checkout-step-one\.html/);
    await checkoutPage.inputInformation("John", "Maven", "12345")
    await expect(page).toHaveURL(/.*\/checkout-step-two\.html/);
    await expect(overviewPage.totalSum).toContainText("$0.00")
    await overviewPage.finish()
    await expect(page).toHaveURL(/.*\/checkout-complete\.html/);
    await expect(checkoutCompletePage.thankYouMessage).toHaveText('Thank you for your order!')
})