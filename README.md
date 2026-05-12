# Test-task-Junior-QA

Automation testing project using WebdriverIO and Mocha.

## Tech Stack

- WebdriverIO
- Mocha
- ChromeDriver
- JavaScript (ES6)

## Test Coverage

### Main Tests
- Login with valid credentials
- Add product to cart
- Complete checkout flow
- Validate successful order creation

### Optional Tests
- Remove product from cart
- Validation error when First Name is empty
- Validation error when Last Name is empty
- Validation error when Postal Code is empty

### Run all tests
- npx wdio run ./wdio.conf.js

### Run specific spec
npx wdio run ./wdio.conf.js --spec ./test/specs/checkout.e2e.js

## Project Structure

```bash
test/
 ├── pageobjects/
 ├── specs/

 