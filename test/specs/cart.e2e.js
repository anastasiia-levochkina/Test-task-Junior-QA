import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';

describe('Cart tests', () => {
	it('TC-5: should save product in cart after logout and login again', async () => {
		await loginPage.openLoginPage();
		await loginPage.loginAsUser();

		await inventoryPage.addBackpackToCart();
		await expect(inventoryPage.cartBadge).toHaveText('1');

		await inventoryPage.openBurgerMenu();
		await expect(inventoryPage.logoutLink).toBeDisplayed();

		await inventoryPage.logout();

		await expect(loginPage.usernameInput).toBeDisplayed();
		await expect(loginPage.passwordInput).toBeDisplayed();

		await loginPage.loginAsUser();

		await expect(inventoryPage.title).toHaveText('Products');
		await expect(inventoryPage.cartBadge).toHaveText('1');

		await inventoryPage.openCart();

		await expect(cartPage.title).toHaveText('Your Cart');
		await expect(cartPage.cartItem).toBeDisplayed();
		await expect(cartPage.itemName).toHaveText('Sauce Labs Backpack');
	});
});
