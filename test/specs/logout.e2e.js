import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Logout test', () => {
	beforeEach(async () => {
		await LoginPage.open();
		await LoginPage.login('standard_user', 'secret_sauce');
	});

	it('TC-4: should logout successfully', async () => {
		await expect(InventoryPage.title).toHaveText('Products');

		await InventoryPage.openMenu();

		await expect(InventoryPage.logoutLink).toBeDisplayed();

		const menuItems = await InventoryPage.menuItems;
		await expect(menuItems).toBeElementsArrayOfSize(4);

		await InventoryPage.logout();

		await expect(LoginPage.usernameInput).toBeDisplayed();
		await expect(LoginPage.passwordInput).toBeDisplayed();
		await expect(LoginPage.usernameInput).toHaveValue('');
		await expect(LoginPage.passwordInput).toHaveValue('');
	});
});
