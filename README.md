# @quickswap-defi/token-list

[![npm version](https://img.shields.io/npm/v/@quickswap-defi/token-list.svg)](https://www.npmjs.com/package/@quickswap-defi/token-list)
[![npm downloads](https://img.shields.io/npm/dm/@quickswap-defi/token-list.svg)](https://www.npmjs.com/package/@quickswap-defi/token-list)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL%203.0-blue.svg)](https://opensource.org/licenses/GPL-3.0)
[![Security](https://img.shields.io/badge/provenance-verified-brightgreen)](https://docs.npmjs.com/generating-provenance-statements)

Official QuickSwap token list for multi-chain DeFi applications. Includes curated token metadata for Polygon, Base, zkEVM, and other supported networks.

---

## 🚨 Migration Notice

**Former package name:** `quickswap-token-lists` (deprecated)  
**New package name:** `@quickswap-defi/token-list`

---

## Installation

```bash
# npm
npm install @quickswap-defi/token-list

# pnpm
pnpm add @quickswap-defi/token-list

# yarn
yarn add @quickswap-defi/token-list
```

## Usage

```typescript
import tokenList from '@quickswap-defi/token-list';

// Access token list data
console.log(tokenList.name);     // "Quickswap Default List"
console.log(tokenList.version);  // { major: 2, minor: 0, patch: 0 }
console.log(tokenList.tokens);   // Array of token metadata

// Filter tokens by chain
const polygonTokens = tokenList.tokens.filter(
  token => token.chainId === 137
);

// Find specific token
const usdc = tokenList.tokens.find(
  token => token.symbol === 'USDC' && token.chainId === 137
);
```

## Token Listing Process

> ⚠️ **IMPORTANT**: Token listing is NOT automatic. We DO NOT accept external Pull Requests or Issues for token listings without prior Business Development approval.

### Listing Requirements

To ensure the quality and safety of our list, your token **MUST** meet ALL of these criteria:

1. **Total Value Locked (TVL):** Minimum $100k USD
2. **Security Audit:** Valid third-party security audit report
3. **Trading Volume:** Consistent daily volume demonstrating real usage
4. **Token Verification:** Verified contract on blockchain explorer
5. **Project Legitimacy:** Active community, clear documentation, and transparent governance

### How to Request a Listing

You must contact our BD team directly to initiate the process. Do not open a GitHub Issue.

* **Telegram:** [QuickSwap Official Community](https://t.me/+OQ-H4hjc-BU5ZmRl)

* **Only after BD approval**, our technical team will provide instructions on how to submit your token metadata.
* **Unsolicited PRs will be closed immediately.**

---

## Supported Networks

| Network | Chain ID |
|---------|----------|
| Polygon | 137 |
| Ethereum | 1 |
| Base | 8453 |
| Polygon zkEVM | 1101 |
| Manta | 169 |
| IMX | 13371 |
| X1 | 195 |
| Dogechain | 2000 |
| And more... | See `src/tokens/` |

## Development (Maintainers Only)

### Prerequisites

* Node.js >= 18
* npm >= 8

### Setup

```bash
# Install dependencies
npm ci

# Run tests
npm test

# Build token list
npm run build

# Output: build/quickswap-default.tokenlist.json
```

## Security

### NPM Provenance

All published versions include [NPM Provenance](https://docs.npmjs.com/generating-provenance-statements) for supply chain security.

**Verify authenticity:**

```bash
npm view @quickswap-defi/token-list --json | jq '.provenance'
```

**Manual publish:**

```bash
# Bump version
npm version patch  # or minor/major

# Publish with provenance
npm publish --access public --provenance
```

## License

GPL-3.0-or-later - See [LICENSE](./LICENSE)

## Links

* **NPM Package:** <https://www.npmjs.com/package/@quickswap-defi/token-list>
* **GitHub:** <https://github.com/QuickSwap/quickswap-default-token-list>
* **QuickSwap:** <https://quickswap.exchange>
* **Discord:** <https://discord.com/invite/cSbHcjBSWM>
* **Twitter:** <https://twitter.com/QuickswapDEX>

**Maintained by:** [QuickSwap Team](https://quickswap.exchange)
