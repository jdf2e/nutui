module.exports = {
  extends: ['plugin:vue/base', 'eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['vue', '@typescript-eslint'],
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true
  },
  globals: {
    vi: true,
    NodeJS: true,
    TaroGeneral: true
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-unused-vars': 'error',
    // enable type: Function Object
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/no-v-html': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    // will be fixed
    'vue/attributes-order': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'no-unused-vars': 'off',
    'vue/valid-v-for': 'off',
    'no-empty': 'off'
  }
};
