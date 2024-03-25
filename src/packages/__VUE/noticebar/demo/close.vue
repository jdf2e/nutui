<template>
  <nut-noticebar :text="text" close-mode />
</template>
<script setup>
import { ref } from 'vue'
const text = ref(
  'NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。'
)
</script>
