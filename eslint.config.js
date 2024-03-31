import NutUI from '@nutui/eslint-config'
import gitignore from 'eslint-config-flat-gitignore'

export default [
  gitignore(),
  ...NutUI
]
