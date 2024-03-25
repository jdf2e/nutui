<template>
  <div class="range-demo-vertical">
    <div style="height: 100%">
      <nut-range v-model="val1" vertical @change="change1"></nut-range>
    </div>
    <div style="height: 100%">
      <nut-range v-model="val2" range vertical @change="change2"></nut-range>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val1 = ref(20)
const val2 = ref([20, 80])
const change1 = (value: number) => {
  console.log(value)
}
const change2 = (value: number[]) => {
  console.log(value)
}
</script>
<style>
.range-demo-vertical {
  height: 180px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}
</style>
