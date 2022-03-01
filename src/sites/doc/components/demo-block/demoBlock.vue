<template>
  <div class="online-code" ref="onlineCode">
    <slot></slot>
    <div class="online-part">
      <template v-if="codeType === 'vue'">
        <a class="list" :href="jumpHref1" target="_blank">
          <img
            class="online-icon"
            src="https://img11.360buyimg.com/imagetools/jfs/t1/159023/13/28499/5084/620f4c48E244573d5/28bfddee9718336e.png"
          />
          <div class="online-tips">codesandbox</div>
        </a>
      </template>
      <a class="list" :href="jumpHref" target="_blank">
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
<script>
import { ref, getCurrentInstance, onMounted, computed } from 'vue';
import { compressText, copyCodeHtml, decompressText } from './basedUtil';

import { getParameters } from 'codesandbox/lib/api/define';
import codesandboxPackage from './demoCodePackage.json'; // 引入josn文件
import codesandboxtsconfig from './demoCodetsconfig.json'; // 引入ts文件
import codesandboxNode from './demoCodetsconfig.json'; // 引入ts文件

export default {
  setup(props, ctx) {
    const sourceMainReactJsStr = `//import VConsole from "vconsole";
//var vConsole = new VConsole();
import React from "react";
import ReactDOM from "react-dom";
import '@nutui/nutui-react/dist/style.css'
import App from "./app.jsx";
import "./app.scss";
ReactDOM.render(
  <App/>,
  document.getElementById("app")
);`;
    const sourceMainJsStr = `//import VConsole from "vconsole";
//var vConsole = new VConsole();
import { createApp } from "vue";
import App from "./app.vue";
import NutUI from "@nutui/nutui";
import "./app.scss";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount("#app");`;

    const MainJsStr = `import { createApp } from "vue";
import App from "./App.vue";
import NutUI from "@nutui/nutui";
import "@nutui/nutui/dist/style.css";
createApp(App).use(NutUI).mount("#app");`;

    const codesandboxHtml = `<!DOCTYPE html> 
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
</html>`;

    const codesandboxVite = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
});`;

    const onlineCode = ref(null);
    const codeType = ref(``);
    const sourceMainJs = compressText(sourceMainJsStr);
    const mainJs = ref(sourceMainJs);

    const sourceMainReactJs = compressText(sourceMainReactJsStr);
    const mainReactJs = ref(sourceMainReactJs);

    const jumpHref = ref(``);
    const jumpHref1 = ref(``);
    onMounted(() => {
      const sourceValue = decompressText(onlineCode.value.dataset.value);
      codeType.value = onlineCode.value.dataset.type;
      const parameters = getParameters({
        files: {
          'package.json': {
            content: codesandboxPackage
          },
          'tsconfig.json': {
            content: codesandboxtsconfig
          },
          'tsconfig.node.json': {
            content: codesandboxNode
          },
          'vite.config.ts': {
            content: codesandboxVite
          },
          'index.html': {
            content: codesandboxHtml
          },
          'src/main.ts': {
            content: MainJsStr
          },
          'src/App.vue': {
            content: sourceValue
          }
        }
      });

      // const query = 'resolutionWidth=414&resolutionHeight=736';
      const query = 'file=/src/App.vue';

      if (codeType === 'react') {
        jumpHref.value = `https://codehouse.jd.com/?source=share&type=react&mainJs=${mainReactJs.value}&appValue=${onlineCode.value.dataset.value}&scssValue=`;
      } else {
        jumpHref1.value = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}&query=${query}&resolutionHeight=736`;
        jumpHref.value = `https://codehouse.jd.com/?source=share&type=vue&mainJs=${mainJs.value}&appValue=${onlineCode.value.dataset.value}&scssValue=`;
      }
    });
    const copyCode = () => {
      const sourceValue = decompressText(onlineCode.value.dataset.value);
      copyCodeHtml(sourceValue, () => {
        alert('复制成功');
      });
    };
    return {
      jumpHref,
      jumpHref1,
      onlineCode,
      copyCode,
      codeType
    };
  }
};
</script>
