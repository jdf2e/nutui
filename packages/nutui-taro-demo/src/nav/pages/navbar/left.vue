<template>
  <nut-navbar title="Title" left-show @click-back="onClick"></nut-navbar>
  <nut-navbar title="Title" left-show @click-back="onClick">
    <template #left>
      <div>Back</div>
    </template>
  </nut-navbar>
</template>
<script setup lang="ts">
const onClick = () => {
  console.log('[Navbar]: on click back')
}
</script>
