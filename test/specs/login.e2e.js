import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

const E2E_LOGIN = process.env.E2E_LOGIN;
const E2E_PASSWORD = process.env.E2E_PASSWORD;
const E2E_WRONG_PASSWORD = process.env.E2E_WRONG_PASSWORD;
const E2E_LOCKED_LOGIN = process.env.E2E_LOCKED_LOGIN;

describe('Login tests', () => {
	beforeEach(async () => {
		await loginPage.openLoginPage();
	});

	it('TC-1: should login with valid credentials', async () => {
		await loginPage.usernameInput.setValue(E2E_LOGIN);
		await expect(loginPage.usernameInput).toHaveValue(E2E_LOGIN);

		await loginPage.passwordInput.setValue(E2E_PASSWORD);
		await expect(loginPage.passwordInput).toHaveAttribute('type', 'password');

		await loginPage.clickLoginButton();

		await expect(browser).toHaveUrl(expect.stringContaining('inventory'));
		await expect(inventoryPage.title).toHaveText('Products');
		await expect(inventoryPage.cartLink).toBeDisplayed();
	});

	it('TC-2: should show error for invalid password', async () => {
		await loginPage.usernameInput.setValue(E2E_LOGIN);
		await loginPage.passwordInput.setValue(E2E_WRONG_PASSWORD);
		await loginPage.clickLoginButton();

		await expect(loginPage.errorMessage).toBeDisplayed();
		await expect(loginPage.errorMessage).toHaveText(
			expect.stringContaining('Username and password do not match')
		);
	});

	it('TC-3: should show error for locked out user', async () => {
		await loginPage.usernameInput.setValue(E2E_LOCKED_LOGIN);
		await loginPage.passwordInput.setValue(E2E_PASSWORD);
		await loginPage.clickLoginButton();

		await expect(loginPage.errorMessage).toBeDisplayed();
		await expect(loginPage.errorMessage).toHaveText(
			expect.stringContaining('Sorry, this user has been locked out')
		);
	});
});
