<template>
  <nut-animate type="slide-right" :show="show1">
    <nut-button type="primary" @click="click1">Once</nut-button>
  </nut-animate>
  <br />
  <nut-animate type="slide-right" :show="show2">
    <nut-button type="primary" @click="click2">Times</nut-button>
  </nut-animate>
</template>
<script setup lang="ts">
import { ref, nextTick } from 'vue'
const show1 = ref(false)
const click1 = () => {
  show1.value = true
}
const show2 = ref(false)
const click2 = () => {
  show2.value = true
  nextTick(() => {
    show2.value = false
  })
}
</script>
