<template>
  <nut-switch v-model="checked" @change="change" />
  <nut-swipe ref="swipeRef">
    <nut-cell title="Click Switch to Swipe"></nut-cell>
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger">Button</nut-button>
    </template>
  </nut-swipe>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const swipeRef = ref()
const checked = ref(false)
const change = (value: boolean) => {
  if (value) {
    swipeRef.value?.open('left')
  } else {
    swipeRef.value?.close()
  }
}
</script>
