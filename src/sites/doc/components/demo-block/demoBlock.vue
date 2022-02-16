<template>
  <div class="online-code" ref="onlineCode">
    <slot></slot>
    <div class="online-part">
      <a class="list" :href="jumpHref1" target="_blank">
        <img
          class="online-icon"
          src="https://img13.360buyimg.com/imagetools/jfs/t1/125518/28/24027/2723/6204ae85E8bf8b7e9/af2d55aabeb6bbb6.png"
        />
        <div class="online-tips">codesandbox</div>
      </a>
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

    const onlineCode = ref(null);
    const sourceMainJs = compressText(sourceMainJsStr);
    const mainJs = ref(sourceMainJs);

    const sourceMainReactJs = compressText(sourceMainReactJsStr);
    const mainReactJs = ref(sourceMainReactJs);

    const jumpHref = ref(``);
    const jumpHref1 = ref(``);
    onMounted(() => {
      console.log('codesandboxPackage', codesandboxPackage);
      console.log('onlineCode', onlineCode.value.dataset);
      const sourceValue = decompressText(onlineCode.value.dataset.value);
      console.log('sourceValue', sourceValue);

      const parameters = getParameters({
        files: {
          'package.json': {
            content: codesandboxPackage
          },
          'src/main.js': {
            content: MainJsStr
          },
          'src/App.vue': {
            content: sourceValue
          }
        }
      });

      if (onlineCode.value.dataset.type === 'react') {
        jumpHref.value = `https://codehouse.jd.com/?source=share&type=react&mainJs=${mainReactJs.value}&appValue=${onlineCode.value.dataset.value}&scssValue=`;
      } else {
        jumpHref1.value = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
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
      copyCode
    };
  }
};
</script>
