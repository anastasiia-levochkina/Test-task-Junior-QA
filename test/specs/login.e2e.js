import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Login tests', () => {
	beforeEach(async () => {
		await LoginPage.open();
	});

	it('TC-1: should login with valid credentials', async () => {
		await LoginPage.usernameInput.setValue('standard_user');
		await expect(LoginPage.usernameInput).toHaveValue('standard_user');

		await LoginPage.passwordInput.setValue('secret_sauce');
		await expect(LoginPage.passwordInput).toHaveAttribute('type', 'password');

		await LoginPage.loginButton.click();

		await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
		await expect(InventoryPage.title).toHaveText('Products');
		await expect(InventoryPage.cartLink).toBeDisplayed();
	});

	it('TC-2: should show error for invalid password', async () => {
		await LoginPage.usernameInput.setValue('standard_user');
		await LoginPage.passwordInput.setValue('wrong_password');
		await LoginPage.loginButton.click();

		await expect(LoginPage.errorMessage).toBeDisplayed();
		await expect(LoginPage.errorMessage).toHaveText(
			expect.stringContaining('Username and password do not match')
		);
	});

	it('TC-3: should show error for locked out user', async () => {
		await LoginPage.usernameInput.setValue('locked_out_user');
		await LoginPage.passwordInput.setValue('secret_sauce');
		await LoginPage.loginButton.click();

		await expect(LoginPage.errorMessage).toBeDisplayed();
		await expect(LoginPage.errorMessage).toHaveText(
			expect.stringContaining('Sorry, this user has been locked out')
		);
	});
});
