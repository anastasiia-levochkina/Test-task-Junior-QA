class InventoryPage {
  get title() {
    return $('.title');
  }

  get cartLink() {
    return $('.shopping_cart_link');
  }

  get cartBadge() {
    return $('.shopping_cart_badge');
  }

  get addBackpackButton() {
    return $('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  get burgerButton() {
    return $('#react-burger-menu-btn');
  }

  get logoutLink() {
    return $('#logout_sidebar_link');
  }

  get menuItems() {
    return $$('.bm-item.menu-item');
  }

  get sortDropdown() {
    return $('[data-test="product-sort-container"]');
  }

  get productNames() {
    return $$('.inventory_item_name');
  }

  get productPrices() {
    return $$('.inventory_item_price');
  }

  get twitterLink() {
    return $('[data-test="social-twitter"]');
  }

  get facebookLink() {
    return $('[data-test="social-facebook"]');
  }

  get linkedinLink() {
    return $('[data-test="social-linkedin"]');
  }

  async openTwitterLink() {
    await this.twitterLink.scrollIntoView();
    await this.twitterLink.click();
  }

  async openFacebookLink() {
    await this.facebookLink.scrollIntoView();
    await this.facebookLink.click();
  }

  async openLinkedinLink() {
    await this.linkedinLink.scrollIntoView();
    await this.linkedinLink.click();
  }

  async addBackpackToCart() {
    await this.addBackpackButton.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async openBurgerMenu() {
    await this.burgerButton.click();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async resetAppState() {
    const menuButton = $('#react-burger-menu-btn');
    const resetLink = $('#reset_sidebar_link');
    const closeButton = $('#react-burger-cross-btn');

    await menuButton.waitForClickable();
    await menuButton.click();

    await resetLink.waitForClickable();
    await resetLink.click();

    await closeButton.waitForClickable();
    await closeButton.click();
  }

  async prepareCleanCartState() {
    await this.resetAppState();
    await browser.url('/inventory.html');

    const removeButton = $('[data-test="remove-sauce-labs-backpack"]');

    if (await removeButton.isExisting()) {
      await removeButton.click();
    }
  }

  async selectSortingOption(value) {
    await this.sortDropdown.selectByAttribute('value', value);
  }

  async getProductNames() {
    const items = await $$('.inventory_item_name');

    const names = [];

    for (const item of items) {
      names.push(await item.getText());
    }

    return names;
  }

  async getProductPrices() {
    const items = await $$('.inventory_item_price');

    const prices = [];

    for (const item of items) {
      const priceText = await item.getText();
      prices.push(Number(priceText.replace('$', '')));
    }

    return prices;
  }
}

export default new InventoryPage();