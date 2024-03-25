<template>
  <div ref="onlineCode" class="online-code">
    <slot></slot>
    <div class="online-part">
      <template v-if="codeType === 'vue'">
        <a class="list" :href="playgroundUrl" target="_blank">
          <img
            class="online-icon"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/159023/13/28499/5084/620f4c48E244573d5/28bfddee9718336e.png"
          />
          <div class="online-tips">codesandbox</div>
        </a>
      </template>
      <a class="list" :href="codeSandBoxUrl" target="_blank">
        <img
          class="online-icon"
          src="https://img12.360buyimg.com/imagetools/jfs/t1/214225/34/8715/7002/61c31bf1E69324ee9/7a452063eba88be4.png"
        />
        <div class="online-tips">在线调试</div>
      </a>
      <div class="list" @click="copyCode">
        <img
          class="online-icon"
          src="https://img10.360buyimg.com/imagetools/jfs/t1/142615/10/25537/3671/61c31e6eE3ba7fb90/d1953e2b47e40e86.png"
        />
        <div class="online-tips">复制代码</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { copyCodeHtml, decompressText } from './basedUtil'
import { getParameters } from 'codesandbox/lib/api/define'
import codesandboxPackage from './package.json' // 引入josn文件
import codesandboxtsconfig from './tsconfig.json' // 引入ts文件

const APP_VUE = `import { createApp } from "vue";
import App from "./App.vue";
createApp(App).mount("#app");`

const INDEX_HTML = `<!DOCTYPE html> 
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"><\/script>
  </body>
</html>`

const VITE_CONFIG = `// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import NutUIResolver from '@nutui/nutui/dist/resolver'

export default defineConfig({
  plugins: [
    vue(),
    Components({ resolvers: [NutUIResolver()] }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@nutui/nutui/dist/styles/variables.scss";'
      }
    }
  }
})`

const onlineCode = ref<any>(null)
const codeType = ref(``)
const codeSandBoxUrl = ref(``)
const playgroundUrl = ref(``)

const utoa = (data: string) => {
  return btoa(unescape(encodeURIComponent(data)))
}

const serialize = () => {
  const files = {
    'src/App.vue': decompressText(onlineCode.value.dataset.value)
  }
  return '#' + utoa(JSON.stringify(files))
}

onMounted(() => {
  const sourceValue = decompressText(onlineCode.value.dataset.value)
  codeType.value = onlineCode.value.dataset.type
  const parameters = getParameters({
    files: {
      'package.json': {
        content: codesandboxPackage as unknown as string,
        isBinary: false
      },
      'tsconfig.json': {
        content: codesandboxtsconfig as unknown as string,
        isBinary: false
      },
      'vite.config.ts': {
        content: VITE_CONFIG,
        isBinary: false
      },
      'index.html': {
        content: INDEX_HTML,
        isBinary: false
      },
      'src/main.ts': {
        content: APP_VUE,
        isBinary: false
      },
      'src/App.vue': {
        content: sourceValue,
        isBinary: false
      }
    }
  })
  const query = 'file=/src/App.vue'
  playgroundUrl.value = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=${query}&resolutionHeight=736`
  codeSandBoxUrl.value = `https://nutui.jd.com/playground/${serialize()}`
})
const copyCode = () => {
  const sourceValue = decompressText(onlineCode.value.dataset.value)
  copyCodeHtml(sourceValue, () => {
    console.log('复制成功')
  })
}
</script>
