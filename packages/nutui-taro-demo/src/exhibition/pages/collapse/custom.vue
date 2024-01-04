<template>
  <nut-collapse>
    <nut-collapse-item name="name1" title="Title 1">
      <template #icon> <Notice /> </template>
      Content 1
    </nut-collapse-item>
    <nut-collapse-item name="name2" title="Title 2" :icon="Follow"> Content 2 </nut-collapse-item>
  </nut-collapse>
</template>
<script setup lang="ts">
import { Notice, Follow } from '@nutui/icons-vue-taro';
</script>
