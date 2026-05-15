import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout test', () => {
	beforeEach(async () => {
		await loginPage.openLoginPage();
		await loginPage.loginAsUser();
	});

	it('TC-8: should complete valid checkout', async () => {
		await inventoryPage.addBackpackToCart();
		await expect(inventoryPage.cartBadge).toHaveText('1');

		await inventoryPage.openCart();

		await expect(cartPage.title).toHaveText('Your Cart');
		await expect(cartPage.cartItem).toBeDisplayed();
		await expect(cartPage.itemName).toHaveText('Sauce Labs Backpack');

		await cartPage.proceedToCheckout();

		await expect(checkoutPage.firstNameInput).toBeDisplayed();

		await checkoutPage.fillCheckoutForm('Anastasiia', 'Test', '12345');

		await expect(browser).toHaveUrl(expect.stringContaining('checkout-step-two'));
		await expect(checkoutPage.overviewItem).toBeDisplayed();
		await expect(checkoutPage.itemTotal).toHaveText(expect.stringContaining('29.99'));

		await checkoutPage.finishOrder();

		await expect(browser).toHaveUrl(expect.stringContaining('checkout-complete'));
		await expect(checkoutPage.completeHeader).toHaveText('Thank you for your order!');

		await checkoutPage.returnToProductsPage();

		await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
		await expect(inventoryPage.title).toHaveText('Products');
		await expect(inventoryPage.cartBadge).not.toBeExisting();
	});
});
