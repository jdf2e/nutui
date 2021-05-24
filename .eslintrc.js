module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'no-undef': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
  },
}
