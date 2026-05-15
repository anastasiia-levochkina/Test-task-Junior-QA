import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting tests', () => {
	beforeEach(async () => {
		await loginPage.openLoginPage();
		await loginPage.loginAsUser();
	});

	it('TC-6: should sort products by name from A to Z', async () => {
		await inventoryPage.selectSortingOption('az');

		const names = await inventoryPage.getProductNames();
		const sortedNames = [...names].sort();

		expect(names).toEqual(sortedNames);
	});

	it('TC-6.1: should sort products by name from Z to A', async () => {
		await inventoryPage.selectSortingOption('za');

		const names = await inventoryPage.getProductNames();
		const sortedNames = [...names].sort().reverse();

		expect(names).toEqual(sortedNames);
	});

	it('TC-6.2: should sort products by price from low to high', async () => {
		await inventoryPage.selectSortingOption('lohi');

		const prices = await inventoryPage.getProductPrices();
		const sortedPrices = [...prices].sort((a, b) => a - b);

		expect(prices).toEqual(sortedPrices);
	});

	it('TC-6.3: should sort products by price from high to low', async () => {
		await inventoryPage.selectSortingOption('hilo');

		const prices = await inventoryPage.getProductPrices();
		const sortedPrices = [...prices].sort((a, b) => b - a);

		expect(prices).toEqual(sortedPrices);
	});
});
