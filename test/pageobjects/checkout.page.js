class CheckoutPage {
  get firstNameInput() {
    return $('[data-test="firstName"]');
  }

  get lastNameInput() {
    return $('[data-test="lastName"]');
  }

  get postalCodeInput() {
    return $('[data-test="postalCode"]');
  }

  get continueButton() {
    return $('[data-test="continue"]');
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }

  get overviewItem() {
    return $('.cart_item');
  }

  get itemTotal() {
    return $('.summary_subtotal_label');
  }

  get finishButton() {
    return $('[data-test="finish"]');
  }

  get completeHeader() {
    return $('.complete-header');
  }

  get backHomeButton() {
    return $('[data-test="back-to-products"]');
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.firstNameInput.setValue(firstName);
    await this.lastNameInput.setValue(lastName);
    await this.postalCodeInput.setValue(postalCode);
    await this.continueButton.click();
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async finishOrder() {
    await this.finishButton.click();
  }

  async returnToProductsPage() {
    await this.backHomeButton.click();
  }
}

export default new CheckoutPage();