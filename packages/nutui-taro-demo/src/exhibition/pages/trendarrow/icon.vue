<template>
  <nut-cell>
    <nut-trend-arrow :rate="10.2365">
      <template #up-icon>
        <Success color="blue" width="18" height="18" />
      </template>
    </nut-trend-arrow>
    <nut-trend-arrow :rate="-10.2365">
      <template #down-icon>
        <Failure color="red" />
      </template>
    </nut-trend-arrow>
  </nut-cell>
</template>
<script setup lang="ts">
import { Success, Failure } from '@nutui/icons-vue-taro'
</script>
