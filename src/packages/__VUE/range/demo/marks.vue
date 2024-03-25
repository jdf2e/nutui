<template>
  <div style="height: 80px">
    <nut-range v-model="val1" :marks="marks" hidden-range @change="change1"></nut-range>
  </div>
  <div style="height: 80px">
    <nut-range v-model="val2" range :marks="marks" hidden-range @change="change2"></nut-range>
  </div>
  <div class="range-demo-vertical">
    <div style="height: 100%">
      <nut-range v-model="val3" vertical :marks="marks" hidden-range @change="change1"></nut-range>
    </div>
    <div style="height: 100%">
      <nut-range v-model="val4" range vertical :marks="marks" hidden-range @change="change2"></nut-range>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val1 = ref(60)
const val2 = ref([20, 80])
const val3 = ref(60)
const val4 = ref([20, 80])
const marks = ref({
  0: 0,
  20: 20,
  40: 40,
  60: 60,
  80: 80,
  100: 100
})
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
