# QuickSwap Default Token List

[![NPM Version](https://img.shields.io/npm/v/quickswap-default-token-list.svg)](https://www.npmjs.com/package/quickswap-default-token-list)

## Overview

This repository contains the definitive default token list used across the QuickSwap ecosystem and is published as an [NPM package](https://www.npmjs.com/package/quickswap-default-token-list).

The primary goal is to provide a source of token information for dApps, wallets, and developers interacting with QuickSwap.

## Installation

You can install the package via NPM:

```bash
npm install quickswap-default-token-list
```

## Usage

Once installed, you can import the JSON token list directly into your project.

**JavaScript / TypeScript Example:**

```javascript
import tokenList from 'quickswap-default-token-list';
// or if you are using CommonJS
// const tokenList = require('quickswap-default-token-list');

console.log(tokenList.tokens);

// Example: Find a token by its symbol
const wmatic = tokenList.tokens.find(token => token.symbol === 'WMATIC');
console.log(wmatic);
```

The list is structured by networks. You can find tokens for Polygon PoS, zkEVM, and other supported chains inside the `src/tokens/` directory. The build process aggregates them into a single file.

## Contributing: Adding a Token

We welcome contributions to expand the token list. To maintain quality and security, please follow these steps:

1. **Do Not Create a Pull Request Directly:** All token additions or updates must start with an issue.
2. **File an Issue:** Use the [**Token Request template**](https://github.com/QuickSwap/quickswap-default-token-list/issues/new?assignees=&labels=token+request&template=token-request.md&title=Add+%7BTOKEN_SYMBOL%7D%3A+%7BTOKEN_NAME%7D) to submit your token. Please provide all the required information.
3. **Review Process:** The team will review the issue. Please be patient, as this process takes time.

**Disclaimer:** Filing an issue does not guarantee that a token will be added to the list. The QuickSwap team reserves the right to accept or reject any token request at its discretion.

## Development & Automation

This repository is configured with GitHub Actions for CI/CD.

### Local Development

1. **Clone the repository:**

    ```bash
    git clone https://github.com/QuickSwap/quickswap-default-token-list.git
    cd quickswap-default-token-list
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run tests:**
    Tests validate the integrity of the token lists (e.g., schema compliance, no duplicate entries).

    ```bash
    npm test
    ```

4. **Build the list:**
    This command generates the final `quickswap-default.tokenlist.json` file in the `build/` directory.

    ```bash
    npm run build
    ```

### Publishing

Publishing to NPM is handled automatically via the [Publish workflow](.github/workflows/publish.yaml) and is triggered manually by maintainers.

## License

This project is licensed under the [GPL-3.0-or-later](LICENSE).
