<template>
  <nut-tabs v-model="tabValue">
    <nut-tab-pane title="empty" pane-key="0">
      <nut-empty image="empty" description="empty"></nut-empty>
    </nut-tab-pane>
    <nut-tab-pane title="error" pane-key="1">
      <nut-empty image="error" description="error"></nut-empty>
    </nut-tab-pane>
    <nut-tab-pane title="network" pane-key="2">
      <nut-empty image="network" description="network"></nut-empty>
    </nut-tab-pane>
  </nut-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const tabValue = ref('0');
</script>
