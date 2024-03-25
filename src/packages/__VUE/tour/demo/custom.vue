<template>
  <nut-cell title="点击试试">
    <template #link>
      <nut-switch id="tour2" v-model="val" @click="show = true" />
    </template>
  </nut-cell>

  <nut-tour
    v-model="show"
    :steps="steps"
    location="bottom-end"
    type="tile"
    bg-color="#f00"
    theme="dark"
    :offset="[0, 0]"
    :mask-width="50"
    :mask-height="50"
  ></nut-tour>
</template>

<script setup>
import { ref } from 'vue'
const val = ref(false)
const show = ref(false)
const steps = ref([
  {
    content: '京东风格的轻量级移动端组件库',
    target: 'tour2'
  }
])
</script>
