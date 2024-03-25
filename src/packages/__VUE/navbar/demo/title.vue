<template>
  <nut-navbar left-show>
    <template #content> Content </template>
  </nut-navbar>
  <nut-navbar left-show title="Title" title-icon>
    <template #title-icon>
      <Cart2 />
    </template>
  </nut-navbar>
</template>
<script setup lang="ts">
import { Cart2 } from '@nutui/icons-vue'
</script>
