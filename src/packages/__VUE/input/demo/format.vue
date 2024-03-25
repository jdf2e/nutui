<template>
  <nut-input v-model="val1" placeholder="Format on Change" :formatter="formatter" format-trigger="onChange" />
  <nut-input v-model="val2" placeholder="Format on Blur" :formatter="formatter" format-trigger="onBlur" />
</template>
<script setup>
import { ref } from 'vue'
const val1 = ref('')
const val2 = ref('')
const formatter = (value) => value.replace(/\d/g, '')
</script>
