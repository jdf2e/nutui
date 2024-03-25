<template>
  <nut-countup
    :custom-change-num="customNumber"
    :custom-bg-img="bgImage"
    :custom-spac-num="11"
    :num-width="33"
    :num-height="47"
    :during="5000"
  >
  </nut-countup>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const customNumber = ref(618)
const bgImage = ref(
  'https://img10.360buyimg.com/imagetools/jfs/t1/133024/3/2251/2646/5ee7549aE8dc02d7e/de6901b6c72db396.png'
)
onMounted(() => {
  setInterval(() => {
    customNumber.value = Math.floor(Math.random() * (700 - 100 + 1) + 100)
  }, 5000)
})
</script>
