import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Logout test', () => {
	beforeEach(async () => {
		await loginPage.openLoginPage();
		await loginPage.loginAsUser();
	});

	it('TC-4: should logout successfully', async () => {
		await expect(inventoryPage.title).toHaveText('Products');

		await inventoryPage.openBurgerMenu();

		await expect(inventoryPage.logoutLink).toBeDisplayed();

		const menuItems = await inventoryPage.menuItems;
		await expect(menuItems).toBeElementsArrayOfSize(4);

		await inventoryPage.logout();

		await expect(loginPage.usernameInput).toBeDisplayed();
		await expect(loginPage.passwordInput).toBeDisplayed();
		await expect(loginPage.usernameInput).toHaveValue('');
		await expect(loginPage.passwordInput).toHaveValue('');
	});
});
