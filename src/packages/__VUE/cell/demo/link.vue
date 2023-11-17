<template>
  <nut-cell-group title="自定义右侧箭头区域">
    <nut-cell title="Switch">
      <template #link>
        <nut-switch v-model="checked" />
      </template>
    </nut-cell>
  </nut-cell-group>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(true);
</script>
