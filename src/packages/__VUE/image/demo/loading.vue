<template>
  <nut-space>
    <nut-image width="100" height="100" show-loading></nut-image>
    <nut-image width="100" height="100" show-loading>
      <template #loading>
        <Loading width="16" height="16"></Loading>
      </template>
    </nut-image>
  </nut-space>
</template>
<script setup lang="ts">
import { Loading } from '@nutui/icons-vue'
</script>
