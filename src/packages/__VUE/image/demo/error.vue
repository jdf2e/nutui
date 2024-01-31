<template>
  <nut-space>
    <nut-image src="https://x" width="100" height="100" show-error></nut-image>
    <nut-image src="https://x" width="100" height="100" show-loading>
      <template #loading>
        <Loading width="16" height="16"></Loading>
      </template>
      <template #error>
        <CircleClose width="16px" height="16px" name="circleClose"></CircleClose>
      </template>
    </nut-image>
  </nut-space>
</template>
<script setup lang="ts">
import { Loading, CircleClose } from '@nutui/icons-vue';
</script>
