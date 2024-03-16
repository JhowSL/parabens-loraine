module.exports = {
  semi: false,
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'all',
  jsxSingleQuote: false,
  tabWidth: 2,
  endOfLine: 'auto',
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  overrides: [
    {
      files: '*.css',
      options: {
        singleQuote: true,
        tabWidth: 2,
      },
    },
    {
      files: '*.json',
      options: {
        tabWidth: 2,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        semi: false,
        singleQuote: true,
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {
        semi: false,
        singleQuote: true,
      },
    },
    {
      files: '*.md',
      options: {
        tabWidth: 2,
        printWidth: 80,
        proseWrap: 'always',
      },
    },
  ],
}
