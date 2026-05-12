import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';

describe('Cart tests', () => {
	it('TC-5: should save product in cart after logout and login again', async () => {
		await LoginPage.open();
		await LoginPage.login('standard_user', 'secret_sauce');

		await InventoryPage.addBackpackToCart();
		await expect(InventoryPage.cartBadge).toHaveText('1');

		await InventoryPage.openMenu();
		await expect(InventoryPage.logoutLink).toBeDisplayed();

		await InventoryPage.logout();

		await expect(LoginPage.usernameInput).toBeDisplayed();
		await expect(LoginPage.passwordInput).toBeDisplayed();

		await LoginPage.login('standard_user', 'secret_sauce');

		await expect(InventoryPage.title).toHaveText('Products');
		await expect(InventoryPage.cartBadge).toHaveText('1');

		await InventoryPage.openCart();

		await expect(CartPage.title).toHaveText('Your Cart');
		await expect(CartPage.cartItem).toBeDisplayed();
		await expect(CartPage.itemName).toHaveText('Sauce Labs Backpack');
	});
});
