import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Footer links tests', () => {
	beforeEach(async () => {
		await loginPage.openLoginPage();
		await loginPage.loginAsUser();
	});

	it('TC-7.1: should open Twitter link in new tab', async () => {
		await inventoryPage.openTwitterLink();

		const handles = await browser.getWindowHandles();
		await browser.switchToWindow(handles[1]);

		await expect(browser).toHaveUrl(expect.stringContaining('x.com'));

		await browser.closeWindow();
		await browser.switchToWindow(handles[0]);
	});

	it('TC-7.2: should open Facebook link in new tab', async () => {
		await inventoryPage.openFacebookLink();

		const handles = await browser.getWindowHandles();
		await browser.switchToWindow(handles[1]);

		await expect(browser).toHaveUrl(expect.stringContaining('facebook.com'));

		await browser.closeWindow();
		await browser.switchToWindow(handles[0]);
	});

	it('TC-7.3: should open Linkedin link in new tab', async () => {
		await inventoryPage.openLinkedinLink();

		const handles = await browser.getWindowHandles();
		await browser.switchToWindow(handles[1]);

		await expect(browser).toHaveUrl(expect.stringContaining('linkedin.com'));

		await browser.closeWindow();
		await browser.switchToWindow(handles[0]);
	});
});
