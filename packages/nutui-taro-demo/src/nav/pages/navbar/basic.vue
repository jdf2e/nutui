<template>
  <nut-navbar title="Title" @click-title="onClick"></nut-navbar>
</template>
<script setup lang="ts">
const onClick = () => {
  console.log('[Navbar]: on click title')
}
</script>
