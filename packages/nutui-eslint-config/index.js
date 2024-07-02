import pluginJs from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginTs from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'

import parserVue from 'vue-eslint-parser'
import parserTs from '@typescript-eslint/parser'

export default [
  pluginJs.configs.recommended,
  stylistic.configs.customize({
    quoteProps: 'as-needed',
    commaDangle: 'never',
    braceStyle: '1tbs'
  }),
  ...pluginTs.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'no-empty': ['error', {
        allowEmptyCatch: true
      }],
      // typescript-eslint
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', {
        caughtErrors: 'none'
      }],
      '@typescript-eslint/ban-ts-comment': 'off',
      // eslint-plugin-vue
      'vue/v-on-event-hyphenation': [
        'error',
        'always',
        {
          autofix: true
        }
      ],
      'vue/no-v-html': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/first-attribute-linebreak': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/block-order': ['error', {
        order: [['script', 'template'], 'style']
      }],
      // TODO: will be removed
      'vue/html-self-closing': 'off',
      'vue/html-closing-bracket-newline': 'off',
      'vue/singleline-html-element-content-newline': 'off'
    }
  },
  {
    languageOptions: {
      parser: parserVue,
      globals: {
        vi: true,
        NodeJS: true,
        TaroGeneral: true
      },
      parserOptions: {
        parser: parserTs,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
]
