<template>
  <nut-radio-group v-model="val">
    <nut-radio label="1">
      Option 1
      <template #icon><Checklist /></template>
      <template #checkedIcon><Checklist color="red" /></template>
    </nut-radio>
    <nut-radio label="2">
      Option 2
      <template #icon><Checklist /></template>
      <template #checkedIcon><Checklist color="red" /></template>
    </nut-radio>
  </nut-radio-group>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Checklist } from '@nutui/icons-vue'
const val = ref('1')
</script>
