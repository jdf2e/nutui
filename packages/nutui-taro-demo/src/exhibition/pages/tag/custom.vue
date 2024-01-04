<template>
  <nut-space>
    <nut-tag plain type="primary"> plain </nut-tag>
    <nut-tag round type="primary"> round </nut-tag>
    <nut-tag mark type="primary"> mark </nut-tag>
    <nut-tag v-if="show" closeable type="primary" @close="close"> close </nut-tag>
  </nut-space>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(true);
const close = () => {
  show.value = false;
};
</script>
