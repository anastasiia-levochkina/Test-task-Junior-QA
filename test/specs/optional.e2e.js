import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Optional tests', () => {
  beforeEach(async () => {
    await loginPage.openLoginPage();
    await loginPage.loginAsUser();
  });

  it('TC-9: should remove product from cart', async () => {
    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.openCart();
    await cartPage.removeBackpackFromCart();

    await expect(cartPage.cartItem).not.toBeDisplayed();
    await expect(inventoryPage.cartBadge).not.toExist();
  });

  it('TC-10: should show validation error when first name is missing', async () => {
    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm('', 'Test', '12345');
    await checkoutPage.clickContinueButton();

    await expect(checkoutPage.errorMessage).toBeDisplayed();
    await expect(checkoutPage.errorMessage).toHaveText(
      expect.stringContaining('First Name is required')
    );
  });

  it('TC-11: should show validation error when last name is missing', async () => {
    await inventoryPage.prepareCleanCartState();

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm('Anastasiia', '', '12345');
    await checkoutPage.clickContinueButton();

    await expect(checkoutPage.errorMessage).toBeDisplayed();
    await expect(checkoutPage.errorMessage).toHaveText(
      expect.stringContaining('Last Name is required')
    );
  });

  it('TC-12: should show validation error when postal code is missing', async () => {
    await inventoryPage.prepareCleanCartState();

    await inventoryPage.addBackpackToCart();
    await inventoryPage.openCart();

    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutForm('Anastasiia', 'Test', '');
    await checkoutPage.clickContinueButton();

    await expect(checkoutPage.errorMessage).toBeDisplayed();
    await expect(checkoutPage.errorMessage).toHaveText(
      expect.stringContaining('Postal Code is required')
    );
  });
});