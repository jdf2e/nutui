<template>
  <nut-navbar title="Title" desc="Share" @click-right="onClick"></nut-navbar>
  <nut-navbar title="Title" @click-right="onClick">
    <template #right>
      <ShareN width="16px"></ShareN>
    </template>
  </nut-navbar>
</template>
<script setup lang="ts">
import { ShareN } from '@nutui/icons-vue-taro'
const onClick = () => {
  console.log('[Navbar]: on click right')
}
</script>
