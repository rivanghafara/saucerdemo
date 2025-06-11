# Playwright with Javascript

## Installation

Make sure Node.js is installed the machine

```bash
# Using npm
npm install
```

## Usage

```bash
# Install all browsers
npx playwright install
```

## Running

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/Login.spec.ts
npx playwright test tests/Playwright.spec.ts

# Run tests in headed mode
npx playwright test --headed

# Run all tests using specific browser
npx playwright test --project=chromium

# Run with UI mode
npx playwright test --ui
```

## Reporting
```bash
# Serving local HTML report
npx playwright show-report
```

## Configuration
This project uses `baseURL` in `playwright.config.ts`:
```typescript
use: {
  baseURL: 'https://www.saucedemo.com/v1',
}
```