<template>
  <nut-steps :current="current" @click-step="onClickStep">
    <nut-step title="未开始">1</nut-step>
    <nut-step title="进行中">2</nut-step>
    <nut-step title="已完成">3</nut-step>
  </nut-steps>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const current = ref(1);
const onClickStep = (index: number) => {
  console.log(index);
  current.value = index;
};
</script>
