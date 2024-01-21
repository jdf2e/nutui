<template>
  <nut-countdown :end-time="time" millisecond format="HH:mm:ss:SS" />
</template>

<script setup>
const time = Date.now() + 60 * 1000;
</script>
