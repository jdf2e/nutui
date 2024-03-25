<template>
  <nut-space align="baseline">
    <nut-circle-progress :progress="val"></nut-circle-progress>
    <nut-button @click="reduce">-10</nut-button>
    <nut-button @click="add">+10</nut-button>
  </nut-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(30)
const add = () => {
  val.value = Math.min(100, val.value + 10)
}
const reduce = () => {
  val.value = Math.max(0, val.value - 10)
}
</script>
