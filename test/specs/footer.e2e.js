import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Footer links tests', () => {
	beforeEach(async () => {
		await LoginPage.open();
		await LoginPage.login('standard_user', 'secret_sauce');
	});

	it('TC-7: should open Twitter link in new tab', async () => {
		await InventoryPage.twitterLink.scrollIntoView();
		await InventoryPage.twitterLink.click();

		const handles = await browser.getWindowHandles();
		await browser.switchToWindow(handles[1]);

		await expect(browser).toHaveUrl(expect.stringContaining('x.com'));

		await browser.closeWindow();
		await browser.switchToWindow(handles[0]);
	});

	it('TC-7: should open Facebook link in new tab', async () => {
		await InventoryPage.facebookLink.scrollIntoView();
		await InventoryPage.facebookLink.click();

		const handles = await browser.getWindowHandles();
		await browser.switchToWindow(handles[1]);

		await expect(browser).toHaveUrl(expect.stringContaining('facebook.com'));

		await browser.closeWindow();
		await browser.switchToWindow(handles[0]);
	});

	it('TC-7: should open Linkedin link in new tab', async () => {
		await InventoryPage.linkedinLink.scrollIntoView();
		await InventoryPage.linkedinLink.click();

		const handles = await browser.getWindowHandles();
		await browser.switchToWindow(handles[1]);

		await expect(browser).toHaveUrl(expect.stringContaining('linkedin.com'));

		await browser.closeWindow();
		await browser.switchToWindow(handles[0]);
	});
});
