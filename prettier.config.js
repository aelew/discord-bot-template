/** @type {import('prettier').Config & import("@ianvs/prettier-plugin-sort-imports").PluginConfig } */
const config = {
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
  importOrder: ['<THIRD_PARTY_MODULES>', '', '^@/', '^[../]', '^[./]'],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  trailingComma: 'none',
  singleQuote: true
};

module.exports = config;
