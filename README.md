# Test-task-Junior-QA

Automation testing project using WebdriverIO and Mocha.

## Environment Variables

Project uses `.env` for runtime test data.

Required variables:
- `BASE_URL` - application URL
- `E2E_LOGIN` - valid username
- `E2E_PASSWORD` - valid password

Optional variables used by negative login scenarios:
- `E2E_WRONG_PASSWORD`
- `E2E_LOCKED_LOGIN`

Example is available in `.env.example`.

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

 