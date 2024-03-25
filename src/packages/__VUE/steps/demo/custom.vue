<template>
  <nut-steps :current="2">
    <nut-step title="未开始">
      <template #icon><Service /></template>
    </nut-step>
    <nut-step title="进行中">
      <template #icon><People /></template>
    </nut-step>
    <nut-step title="已完成">
      <template #icon><Location2 /></template>
    </nut-step>
  </nut-steps>
</template>
<script setup lang="ts">
import { Service, People, Location2 } from '@nutui/icons-vue'
</script>
