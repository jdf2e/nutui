<template>
  <nut-space>
    <nut-popover v-model:visible="show1" :list="list" location="bottom-start" @choose="choose">
      <template #reference>
        <nut-button type="primary" shape="square"> Light </nut-button>
      </template>
    </nut-popover>
    <nut-popover v-model:visible="show2" :list="list" theme="dark" location="bottom-start">
      <template #reference>
        <nut-button type="primary" shape="square"> Dark </nut-button>
      </template>
    </nut-popover>
  </nut-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show1 = ref(false)
const show2 = ref(false)
const list = ref([
  {
    name: 'option1'
  },
  {
    name: 'option2'
  },
  {
    name: 'option3'
  }
])
const choose = (item: unknown, index: number) => {
  console.log(item, index)
}
</script>

<style>
.nut-popover-content {
  width: 100px;
}
</style>
