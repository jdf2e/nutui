<template>
  <div ref="container" style="height: 150px; background: pink">
    <nut-sticky top="57" :container="container">
      <div style="display: flex; justify-content: flex-end">
        <nut-button type="info">Button</nut-button>
      </div>
    </nut-sticky>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const container = ref<any>(null)
</script>
