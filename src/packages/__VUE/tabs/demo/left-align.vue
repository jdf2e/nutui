<template>
  <nut-tabs v-model="value" align="left">
    <nut-tab-pane title="Tab 1" pane-key="1"> Content 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="2"> Content 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="3"> Content 3 </nut-tab-pane>
  </nut-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref('1')
</script>
