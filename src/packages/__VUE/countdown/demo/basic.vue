<template>
  <nut-countdown :start-time="start" :end-time="end"></nut-countdown>
</template>

<script setup>
const start = Date.now();
const end = Date.now() + 60 * 1000;
</script>
