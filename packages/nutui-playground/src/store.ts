import { StoreOptions, File, ReplStore, compileFile } from '@vue/repl'
import { ref, computed } from 'vue'

const style = ref('https://cdn.jsdelivr.net/npm/@nutui/nutui@latest/dist/style.css')

const appFileCode = `
<script setup lang="ts">
import { showToast } from '@nutui/nutui'
import { Dongdong } from '@nutui/icons-vue'
const show = () => {
  showToast.text('Hello, NutUI!')
};
</script>
<template>
  <nut-cell title="Click to show Toast" is-link @click="show">
    <template #link>
      <Dongdong />
    </template>
  </nut-cell>
</template>
`.trim()

const CONTAINER_FILE = 'src/Container.vue'
const APP_FILE = 'src/App.vue'
const INSTALL_FILE = 'src/install-nutui.js'
const IMPORTMAP_FILE = 'import-map.json'
const TSCONFIG_FILE = 'tsconfig.json'

const containerCode = `\
<script setup>
import App from './App.vue'
import '@nutui/touch-emulator'
import {installNutUI} from './install-nutui.js'

installNutUI()
</script>

<template>
  <App />
</template>
`
const installCode = computed(
  () => `import NutUI from '@nutui/nutui'
import { getCurrentInstance } from 'vue'

const appendStyle = () => {
  return new Promise((resolve, reject) => {
    const style = document.createElement('style')
    style.innerHTML = '* { margin: 0; padding: 0; }'
    document.body.appendChild(style)

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${style.value}'
    link.onload = resolve
    link.onerror = reject
    document.body.appendChild(link)
  })
}
await appendStyle()

export const installNutUI = () => {
  const { parent } = window
  const instance = getCurrentInstance()
  instance.appContext.app.use(NutUI)
}
`
)

const utoa = (data: string) => {
  return btoa(unescape(encodeURIComponent(data)))
}

const atou = (b64: string) => {
  return decodeURIComponent(escape(atob(b64)))
}

// 不允许修改的文件，不通过 URL 传递
const filterFiles = [IMPORTMAP_FILE, CONTAINER_FILE, INSTALL_FILE]
export class NutUIStore extends ReplStore {
  constructor(storeOptions?: StoreOptions, hash?: string) {
    super(storeOptions)
    if (hash) {
      const saved = JSON.parse(atou(hash))
      for (const filename in saved) {
        const newName = filename.startsWith('src/') ? filename : `src/${filename}`
        if (!filterFiles.includes(newName)) {
          this.addFile(new File(newName, saved[filename]))
        }
      }
    } else {
      const main = new File(APP_FILE, appFileCode, false)
      this.addFile(main)
    }

    const container = new File(CONTAINER_FILE, containerCode, true)
    this.addFile(container)
    const install = new File(INSTALL_FILE, installCode.value, true)
    this.addFile(install)

    this.state.mainFile = CONTAINER_FILE
    this.setActive(APP_FILE)
  }
  serialize() {
    const files = this.getFiles()
    delete files[IMPORTMAP_FILE]
    delete files[TSCONFIG_FILE]
    delete files[CONTAINER_FILE.replace('src/', '')]
    delete files[INSTALL_FILE.replace('src/', '')]
    return '#' + utoa(JSON.stringify(files))
  }
  setNutUIVersion(v: string) {
    style.value = `https://cdn.jsdelivr.net/npm/@nutui/nutui@${v}/dist/style.css`
    const install = new File(INSTALL_FILE, installCode.value, true)
    this.addFile(install)
    compileFile(this, install).then((errs) => this.state.errors.push(...errs))
    this.setImportMap({
      imports: {
        '@nutui/nutui': `https://cdn.jsdelivr.net/npm/@nutui/nutui@${v}/dist/nutui.js`,
        '@nutui/icons-vue': 'https://cdn.jsdelivr.net/npm/@nutui/icons-vue@latest/dist/lib/index.mjs',
        '@nutui/touch-emulator': 'https://cdn.jsdelivr.net/npm/@nutui/touch-emulator',
        // compatible with Functional Component style import
        '@nutui/nutui/dist/packages/toast/style': './style.js',
        '@nutui/nutui/dist/packages/dialog/style': './style.js',
        '@nutui/nutui/dist/packages/imagepreview/style': './style.js',
        '@nutui/nutui/dist/packages/notify/style': './style.js'
      }
    })
  }
}
