import Page from './page.js';

class LoginPage extends Page {
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get errorMessage() {
        return $('[data-test="error"]');
    }

    openLoginPage() {
        return this.open('/');
    }

    async enterUsername(username) {
        await this.usernameInput.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async loginAsUser(
        username = process.env.E2E_LOGIN,
        password = process.env.E2E_PASSWORD
    ) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }
}

export default new LoginPage();
