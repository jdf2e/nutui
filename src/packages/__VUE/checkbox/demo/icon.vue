<template>
  <nut-cell>
    <nut-checkbox v-model="val">
      Icon
      <template #icon> <Checklist /> </template>
      <template #checkedIcon> <Checklist color="red" /> </template>
    </nut-checkbox>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue';
import { Checklist } from '@nutui/icons-vue';
const val = ref(false);
</script>
