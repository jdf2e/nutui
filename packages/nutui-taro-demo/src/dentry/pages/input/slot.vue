<template>
  <nut-input v-model="val" placeholder="Slot" clearable>
    <template #left>
      <Ask></Ask>
    </template>
    <template #right>
      <nut-button type="primary" size="small">Button</nut-button>
    </template>
  </nut-input>
</template>
<script setup>
import { ref } from 'vue'
import { Ask } from '@nutui/icons-vue-taro'
const val = ref('')
</script>
