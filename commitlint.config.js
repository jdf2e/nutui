const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const components = fs
  .readdirSync(path.resolve(__dirname, './src/packages/__VUE'), { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

// precomputed scope
const scopeComplete = execSync('git status --porcelain || true')
  .toString()
  .trim()
  .split('\n')
  .find((r) => r.indexOf('M  ') !== -1)
  ?.replace(/(\/)/g, '%%')
  ?.match(/src%%packages%%__VUE%%((\w|-)*)/)?.[1];

/** @type {import('cz-git').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['upd', 'chore', 'docs', 'feat', 'fix', 'test', 'refactor', 'revert', 'style', 'release']
    ]
  },
  prompt: {
    typesAppend: [{ value: 'upd', name: 'upd:  ' }],
    customScopesAlign: !scopeComplete ? 'top' : 'bottom',
    scopes: [...components],
    defaultScope: scopeComplete,
    allowCustomIssuePrefixs: false,
    allowEmptyIssuePrefixs: false
  }
};
