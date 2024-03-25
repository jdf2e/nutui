<template>
  <nut-popover v-model:visible="show" location="right">
    <template #reference>
      <nut-button type="primary" shape="square"> Content </nut-button>
    </template>

    <template #content>
      <div> Custom Content Custom Content </div>
      <div> Custom Content Custom Content </div>
    </template>
  </nut-popover>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>

<style>
.nut-popover-content {
  width: 100px;
}
</style>
