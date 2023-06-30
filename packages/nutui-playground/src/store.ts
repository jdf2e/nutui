import { StoreOptions, File, ReplStore } from '@vue/repl';

const style = 'https://cdn.jsdelivr.net/npm/@nutui/nutui/dist/style.css';

const mainFile = `
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
`.trim();

const CONTAINER_FILE = 'Container.vue';
const MAIN_FILE = 'App.vue';
const INSTALL_FILE = 'install-nutui.js';
const IMPORTMAP_FILE = 'import-map.json';

const containerCode = `\
<script setup>
import App from './App.vue'
import '@nutui/touch-emulator'
import {installNutUI} from './${INSTALL_FILE}'

installNutUI()
</script>

<template>
  <App />
</template>
`;
const installCode = `
import NutUI from '@nutui/nutui'
import { getCurrentInstance } from 'vue'

const appendStyle = () => {
  return new Promise((resolve, reject) => {
    const style = document.createElement('style')
    style.innerHTML = '* { margin: 0; padding: 0; }'
    document.body.appendChild(style)

    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '${style}'
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
`;

const utoa = (data: string) => {
  return btoa(unescape(encodeURIComponent(data)));
};

const atou = (b64: string) => {
  return decodeURIComponent(escape(atob(b64)));
};

// 不允许修改的文件，不通过 URL 传递
const filterFiles = [IMPORTMAP_FILE, CONTAINER_FILE, INSTALL_FILE];
export class NutUIStore extends ReplStore {
  constructor(storeOptions?: StoreOptions, hash?: string) {
    super(storeOptions);
    if (hash) {
      const saved = JSON.parse(atou(hash));
      for (const filename in saved) {
        if (!filterFiles.includes(filename)) {
          this.addFile(new File(filename, saved[filename]));
        }
      }
    } else {
      const main = new File(MAIN_FILE, mainFile, false);
      this.addFile(main);
    }

    const container = new File(CONTAINER_FILE, containerCode, true);
    this.addFile(container);
    const install = new File(INSTALL_FILE, installCode, true);
    this.addFile(install);

    this.state.mainFile = CONTAINER_FILE;
    this.setActive(MAIN_FILE);
  }
  serialize() {
    const files = this.getFiles();
    delete files[IMPORTMAP_FILE];
    delete files[CONTAINER_FILE];
    delete files[INSTALL_FILE];
    return '#' + utoa(JSON.stringify(files));
  }
}
