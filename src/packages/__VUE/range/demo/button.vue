<template>
  <nut-range v-model="val" @change="change">
    <template #button>
      <div class="range-demo-button">{{ val }}</div>
    </template>
  </nut-range>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(40)
const change = (value: number) => {
  console.log(value)
}
</script>
<style>
.range-demo-button {
  width: 26px;
  color: #fff;
  font-size: 10px;
  line-height: 18px;
  text-align: center;
  background-color: #ee0a24;
  border-radius: 100px;
}
</style>
