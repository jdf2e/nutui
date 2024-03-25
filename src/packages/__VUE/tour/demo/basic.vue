<template>
  <nut-cell title="点击试试">
    <template #link>
      <nut-switch id="tour1" v-model="val" @click="show = true" />
    </template>
  </nut-cell>
  <nut-tour v-model="show" :steps="steps" type="tile" location="bottom-end"></nut-tour>
</template>
<script setup>
import { ref } from 'vue'
const val = ref(false)
const show = ref(false)
const steps = ref([
  {
    content: '京东风格的轻量级移动端组件库',
    target: 'tour1'
  }
])
</script>
