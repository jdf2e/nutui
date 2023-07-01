<script setup lang="ts">
import Header from './Header.vue';
import { Repl } from '@vue/repl';
import CodeMirror from '@vue/repl/codemirror-editor';
import { watchEffect } from 'vue';
import { NutUIStore } from './store';

const setVH = () => {
  document.documentElement.style.setProperty('--vh', window.innerHeight + `px`);
};
window.addEventListener('resize', setVH);
setVH();

const hash = location.hash.slice(1);

const store = new NutUIStore(
  {
    defaultVueRuntimeURL: 'https://cdn.jsdelivr.net/npm/@vue/runtime-dom/dist/runtime-dom.esm-browser.js'
  },
  hash
);

store.setImportMap({
  imports: {
    '@nutui/nutui': 'https://cdn.jsdelivr.net/npm/@nutui/nutui/dist/nutui.js',
    '@nutui/icons-vue': 'https://cdn.jsdelivr.net/npm/@nutui/icons-vue/dist/lib/index.mjs',
    '@nutui/touch-emulator': 'https://cdn.jsdelivr.net/npm/@nutui/touch-emulator',
    // compatible with Functional Component style import
    '@nutui/nutui/dist/packages/toast/style': './style.js',
    '@nutui/nutui/dist/packages/dialog/style': './style.js',
    '@nutui/nutui/dist/packages/imagepreview/style': './style.js',
    '@nutui/nutui/dist/packages/notify/style': './style.js'
  }
});

// persist state
watchEffect(() => {
  const newHash = store.serialize();
  history.replaceState({}, '', newHash);
});
</script>

<template>
  <Header :store="store" />
  <Repl
    @keydown.ctrl.s.prevent
    @keydown.meta.s.prevent
    :editor="CodeMirror"
    :store="store"
    :showImportMap="false"
    :showTsConfig="false"
  />
</template>

<style>
.dark {
  color-scheme: dark;
}

body {
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  margin: 0;
  --base: #444;
  --nav-height: 50px;
}

.vue-repl {
  --color-branding: #ff2f2b !important;
  --color-branding-dark: #ff2f2b !important;
  height: calc(var(--vh) - var(--nav-height));
}

button {
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0;
  background-color: transparent;
}
</style>
