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
    // @typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    // eslint-plugin-vue
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true
      }
    ],
    'vue/no-v-html': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    // will be removed someday
    'vue/attributes-order': 'off',
    'vue/attribute-hyphenation': 'off'
  }
};
