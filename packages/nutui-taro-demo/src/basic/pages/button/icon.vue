<template>
  <nut-button shape="square" plain type="primary">
    <template #icon>
      <StarFill />
    </template>
  </nut-button>
  <nut-button shape="square" type="primary">
    <template #icon>
      <Star />
    </template>
    Star
  </nut-button>
</template>
<script setup lang="ts">
import { StarFill, Star } from '@nutui/icons-vue-taro'
</script>
