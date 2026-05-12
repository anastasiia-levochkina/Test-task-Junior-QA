import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('Optional tests', () => {
  beforeEach(async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
  });

  it('TC-9: should remove product from cart', async () => {
    await InventoryPage.addBackpackToCart();

    await expect(InventoryPage.cartBadge).toHaveText('1');

    await InventoryPage.openCart();
    await CartPage.removeBackpackButton.click();

    await expect(CartPage.cartItem).not.toBeDisplayed();
    await expect(InventoryPage.cartBadge).not.toExist();
  });

  it('TC-10: should show validation error when first name is missing', async () => {
    await InventoryPage.addBackpackToCart();
    await InventoryPage.openCart();

    await CartPage.checkoutButton.click();
    await CheckoutPage.fillCheckoutInfo('', 'Test', '12345');
    await CheckoutPage.continueButton.click();

    await expect(CheckoutPage.errorMessage).toBeDisplayed();
    await expect(CheckoutPage.errorMessage).toHaveText(
      expect.stringContaining('First Name is required')
    );
  });

  it('TC-11: should show validation error when last name is missing', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.resetAppState();

    await browser.url('https://www.saucedemo.com/inventory.html');

    if (!(await InventoryPage.addBackpackButton.isExisting())) {
      await CartPage.removeBackpackButton.click();
    }

    await InventoryPage.addBackpackToCart();
    await InventoryPage.openCart();

    await CartPage.checkout();
    await CheckoutPage.fillCheckoutInfo('Anastasiia', '', '12345');
    await CheckoutPage.continue();

    await expect(CheckoutPage.errorMessage).toBeDisplayed();
    await expect(CheckoutPage.errorMessage).toHaveText(
      expect.stringContaining('Last Name is required')
    );
  });

  it('TC-12: should show validation error when postal code is missing', async () => {
    await LoginPage.open();
    await LoginPage.login('standard_user', 'secret_sauce');
    await InventoryPage.resetAppState();

    await browser.url('https://www.saucedemo.com/inventory.html');

    if (!(await InventoryPage.addBackpackButton.isExisting())) {
      await CartPage.removeBackpackButton.click();
    }

    await InventoryPage.addBackpackToCart();
    await InventoryPage.openCart();

    await CartPage.checkout();
    await CheckoutPage.fillCheckoutInfo('Anastasiia', 'Test', '');
    await CheckoutPage.continue();

    await expect(CheckoutPage.errorMessage).toBeDisplayed();
    await expect(CheckoutPage.errorMessage).toHaveText(
      expect.stringContaining('Postal Code is required')
    );
  });
});