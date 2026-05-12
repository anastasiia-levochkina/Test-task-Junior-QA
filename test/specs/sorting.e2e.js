import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting tests', () => {
	beforeEach(async () => {
		await LoginPage.open();
		await LoginPage.login('standard_user', 'secret_sauce');
	});

	it('TC-6: should sort products by name from A to Z', async () => {
		await InventoryPage.sortBy('az');

		const names = await InventoryPage.getProductNamesText();
		const sortedNames = [...names].sort();

		expect(names).toEqual(sortedNames);
	});
});
