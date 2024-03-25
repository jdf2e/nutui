<template>
  <nut-input-number v-model="val">
    <template #left-icon>
      <Left />
    </template>
    <template #right-icon>
      <Right />
    </template>
  </nut-input-number>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Left, Right } from '@nutui/icons-vue'
const val = ref(1)
</script>
