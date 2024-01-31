<template>
  <nut-space>
    <nut-circle-progress :progress="50" color="red" />
    <nut-circle-progress :progress="100" :color="gradientColor" />
  </nut-space>
</template>
<script setup lang="ts">
const gradientColor = {
  '0%': '#FF5E5E',
  '100%': '#FFA062'
};
</script>
