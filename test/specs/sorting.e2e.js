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

	it('TC-6.1: should sort products by name from Z to A', async () => {
		await InventoryPage.sortBy('za');

		const names = await InventoryPage.getProductNamesText();
		const sortedNames = [...names].sort().reverse();

		expect(names).toEqual(sortedNames);
	});

	it('TC-6.2: should sort products by price from low to high', async () => {
		await InventoryPage.sortBy('lohi');

		const prices = await InventoryPage.getProductPricesNumber();
		const sortedPrices = [...prices].sort((a, b) => a - b);

		expect(prices).toEqual(sortedPrices);
	});

	it('TC-6.3: should sort products by price from high to low', async () => {
		await InventoryPage.sortBy('hilo');

		const prices = await InventoryPage.getProductPricesNumber();
		const sortedPrices = [...prices].sort((a, b) => b - a);

		expect(prices).toEqual(sortedPrices);
	});
});
