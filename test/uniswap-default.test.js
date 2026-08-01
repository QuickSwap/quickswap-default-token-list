const packageJson = require('../package.json');
const { expect } = require('chai');
const { getAddress } = require('@ethersproject/address');
const Ajv = require('ajv');
const schema = require('@uniswap/token-lists/src/tokenlist.schema.json');
const buildList = require('../src/buildList');

const ajv = new Ajv({ allErrors: true, format: 'full' });
const validate = ajv.compile(schema);
// Local list-level cap, kept in addition to the schema check: the schema
// dependency resolves to a package outside this repo, so a widened upstream
// maxLength would silently loosen this assertion too. This value must never
// be raised without confirming it against the schema the app enforces.
const LIST_NAME_MAX_LENGTH = 20;

describe('buildList', () => {
  const defaultTokenList = buildList();

  it('conforms to the token list schema', () => {
    const valid = validate(defaultTokenList);
    expect(valid, ajv.errorsText(validate.errors, { separator: '\n' })).to.equal(true);
  });

  it('list name does not exceed the schema-enforced maximum length', () => {
    expect(defaultTokenList.name.length).to.be.at.most(LIST_NAME_MAX_LENGTH);
  });

  it('contains no duplicate addresses', () => {
    const map = {};
    for (let token of defaultTokenList.tokens) {
      const key = `${token.chainId}-${token.address}`;
      expect(typeof map[ key ])
        .to.equal('undefined');
      map[ key ] = true;
    }
  });

  it('contains no duplicate symbols', () => {
    const map = {};
    for (let token of defaultTokenList.tokens) {
      const key = `${token.chainId}-${token.symbol.toLowerCase()}`;
      expect(typeof map[ key ])
        .to.equal('undefined');
      map[ key ] = true;
    }
  })

  it('contains no duplicate names', () => {
    const map = {};
    for (let token of defaultTokenList.tokens) {
      const key = `${token.chainId}-${token.name.toLowerCase()}`;
      expect(typeof map[ key ])
        .to.equal('undefined', `duplicate name: ${token.name}`);
      map[ key ] = true;
    }
  })

  it('all addresses are valid and checksummed', () => {
    for (let token of defaultTokenList.tokens) {
      expect(getAddress(token.address)).to.eq(token.address);
    }
  });

  it('version matches package.json', () => {
    expect(packageJson.version).to.match(/^\d+\.\d+\.\d+$/);
    expect(packageJson.version).to.equal(`${defaultTokenList.version.major}.${defaultTokenList.version.minor}.${defaultTokenList.version.patch}`);
  });
});