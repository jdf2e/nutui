<template>
  <nut-tabs v-model="value" direction="vertical" title-scroll style="height: 200px">
    <nut-tab-pane v-for="item in list" :key="item" :title="`Tab ${item}`" :pane-key="item">
      Content {{ item }}
    </nut-tab-pane>
  </nut-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref('1');
const list = new Array(10).fill(0).map((_, index) => index + 1);
</script>
