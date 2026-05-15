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

  async removeBackpackFromCart() {
    await this.removeBackpackButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export default new CartPage();
