<template>
  <nut-popover v-model:visible="show" :list="list" theme="dark" bg-color="#f00" @choose="choose">
    <template #reference>
      <nut-button type="primary" shape="square"> Light </nut-button>
    </template>
  </nut-popover>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
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
]);
const choose = (item: unknown, index: number) => {
  console.log(item, index);
};
</script>

<style>
.nut-popover-content {
  width: 100px;
}
</style>
