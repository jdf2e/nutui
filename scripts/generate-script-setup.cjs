#!/usr/bin/env node
const kebab = process.argv[2]
if (!kebab) {
  console.error('缺少 component 参数！')
  return
}
const path = require('path')
const fs = require('fs')

const camelize = (s) => s.replace(/-./g, (x) => x[1].toUpperCase())

let pascal = camelize(kebab).split('')
pascal[0] = pascal[0].toUpperCase()
pascal = pascal.join('')

const indexTs = `import ${pascal} from './${kebab}.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(${pascal})

export type { ${pascal}Props } from './${kebab}.vue'

export type {  } from './types'

export type ${pascal}Instance = ComponentPublicInstance & InstanceType<typeof ${pascal}>

export { ${pascal}, ${pascal} as default }
`

const indexTaroTs = `import ${pascal} from './${kebab}.taro.vue'
import type { ComponentPublicInstance } from 'vue'
import { withInstall } from '@/packages/utils'

withInstall(${pascal})

export type { ${pascal}Props } from './${kebab}.taro.vue'

export type {  } from './types'

export type ${pascal}Instance = ComponentPublicInstance & InstanceType<typeof ${pascal}>

export { ${pascal}, ${pascal} as default }
`

fs.writeFileSync(
  path.resolve(__dirname, `../src/packages/__VUE/${kebab.replace('-', '')}/index.ts`),
  indexTs,
  'utf8',
  () => {
    // console.log('')
  }
)

fs.writeFileSync(
  path.resolve(__dirname, `../src/packages/__VUE/${kebab.replace('-', '')}/index.taro.ts`),
  indexTaroTs,
  'utf8',
  () => {
    // console.log('')
  }
)
