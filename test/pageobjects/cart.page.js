import { $ } from '@wdio/globals';

class CartPage {
  get title() {
    return $('.title');
  }

  get cartItem() {
    return $('.cart_item');
  }

  get itemName() {
    return $('.inventory_item_name');
  }

  get checkoutButton() {
    return $('[data-test="checkout"]');
  }

  get removeBackpackButton() {
    return $('[data-test="remove-sauce-labs-backpack"]');
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}

export default new CartPage();
