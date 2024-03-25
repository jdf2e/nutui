<template>
  <nut-countup
    ref="countupMachineDom"
    type="machine"
    :machine-num="machineNum"
    :machine-prize-num="5"
    :machine-prize-level="prizeLevel"
    :custom-bg-img="bgImage"
    :num-width="100"
    :num-height="100"
    :during="3000"
    @scroll-end="scrollAniEnd"
  >
  </nut-countup>
  <nut-space style="margin: 10px">
    <nut-button type="danger" :disabled="startFlag" @click="startRole"> 中奖 </nut-button>
    <nut-button type="danger" :disabled="startFlag" @click="startRole2"> 不中奖 </nut-button>
  </nut-space>
</template>
<script setup>
import { ref } from 'vue'
const countupMachineDom = ref(null)
const startFlag = ref(false)
const machineNum = ref(3)
const bgImage = ref(
  'https://img10.360buyimg.com/imagetools/jfs/t1/121466/20/6784/28830/5f06e7f2Edbb8998c/9bdd9e7b24dff9fe.png'
)
const prizeLevel = ref(0)
const startRole = () => {
  prizeLevel.value = Math.floor(Math.random() * 5 + 1)
  startFlag.value = true
  countupMachineDom.value.machineLuck()
}
const startRole2 = () => {
  prizeLevel.value = -1
  startFlag.value = true
  setTimeout(() => {
    countupMachineDom.value.machineLuck()
  }, 500)
}

const scrollAniEnd = () => {
  console.log('恭喜中奖！！！')
  setTimeout(() => {
    startFlag.value = false
  }, 300)
}
</script>
