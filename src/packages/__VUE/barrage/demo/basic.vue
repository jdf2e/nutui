<template>
  <div style="position: relative; height: 150px">
    <nut-barrage ref="barrageRef" :danmu="list"></nut-barrage>
  </div>
  <div class="test">
    <nut-button @click="add">随机添加</nut-button>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const barrageRef = ref()
const list = ref(['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-'])
const add = () => {
  const n = Math.random()
  barrageRef.value.add('随机——' + String(n).substr(2, 10))
}
</script>
