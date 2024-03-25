<template>
  <nut-cell title="Icon Slot" desc="Description">
    <template #icon>
      <My />
    </template>
  </nut-cell>
</template>
<script setup lang="ts">
import { My } from '@nutui/icons-vue-taro'
</script>
