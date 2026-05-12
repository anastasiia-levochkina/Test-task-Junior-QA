import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('Checkout test', () => {
	beforeEach(async () => {
		await LoginPage.open();
		await LoginPage.login('standard_user', 'secret_sauce');
	});

	it('TC-8: should complete valid checkout', async () => {
		await InventoryPage.addBackpackToCart();
		await expect(InventoryPage.cartBadge).toHaveText('1');

		await InventoryPage.openCart();

		await expect(CartPage.title).toHaveText('Your Cart');
		await expect(CartPage.cartItem).toBeDisplayed();
		await expect(CartPage.itemName).toHaveText('Sauce Labs Backpack');

		await CartPage.checkout();

		await expect(CheckoutPage.firstNameInput).toBeDisplayed();

		await CheckoutPage.fillCheckoutInfo('Anastasiia', 'Test', '12345');

		await expect(browser).toHaveUrl(expect.stringContaining('checkout-step-two'));
		await expect(CheckoutPage.overviewItem).toBeDisplayed();
		await expect(CheckoutPage.itemTotal).toHaveText(expect.stringContaining('29.99'));

		await CheckoutPage.finishOrder();

		await expect(browser).toHaveUrl(expect.stringContaining('checkout-complete'));
		await expect(CheckoutPage.completeHeader).toHaveText('Thank you for your order!');

		await CheckoutPage.backHome();

		await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
		await expect(InventoryPage.title).toHaveText('Products');
		await expect(InventoryPage.cartBadge).not.toBeExisting();
	});
});
