<template>
  <nut-progress
    :percentage="30"
    stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
    status="active"
  />
  <nut-progress :percentage="50" status="icon" />
  <nut-progress
    :percentage="100"
    stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
    stroke-width="15"
    status="icon"
  >
    <template #icon-name>
      <Issue color="red" width="15px" height="15px"></Issue>
    </template>
  </nut-progress>
</template>
<script setup lang="ts">
import { Issue } from '@nutui/icons-vue';
</script>
