<template>
  <nut-avatar @click="click"><My /></nut-avatar>
</template>
<script setup lang="ts">
import { My } from '@nutui/icons-vue-taro';
const click = () => {
  console.log('click');
};
</script>
