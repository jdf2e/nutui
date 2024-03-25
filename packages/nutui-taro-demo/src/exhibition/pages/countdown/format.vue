<template>
  <nut-countdown :end-time="time" format="DD 天 HH 时 mm 分 ss 秒" />
</template>

<script setup>
const time = Date.now() + 60 * 1000
</script>
