<template>
  <nut-cell title="Round" is-link @click="show = true"></nut-cell>
  <nut-popup v-model:visible="show" position="bottom" closeable round :style="{ height: '30%' }"></nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
</script>
