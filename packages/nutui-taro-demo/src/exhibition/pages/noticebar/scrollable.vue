<template>
  <nut-noticebar :text="text1" />
  <nut-noticebar :text="text1" scrollable />
  <nut-noticebar :text="text2" :scrollable="false" />
</template>

<script setup>
import { ref } from 'vue';
const text1 = ref('NutUI 是京东风格的移动端组件库');
const text2 = ref(
  'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
);
</script>
