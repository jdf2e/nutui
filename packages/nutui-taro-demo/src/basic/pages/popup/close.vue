<template>
  <nut-cell title="Closeable" is-link @click="show1 = true"></nut-cell>
  <nut-popup v-model:visible="show1" position="bottom" closeable :style="{ height: '20%' }"></nut-popup>

  <nut-cell title="Close Icon Position" is-link @click="show2 = true"></nut-cell>
  <nut-popup
    v-model:visible="show2"
    position="bottom"
    closeable
    close-icon-position="top-left"
    :style="{ height: '20%' }"
  ></nut-popup>

  <nut-cell title="Close Icon Slot" is-link @click="show3 = true"></nut-cell>
  <nut-popup v-model:visible="show3" position="bottom" closeable :style="{ height: '20%' }">
    <template #close-icon>
      <Heart></Heart>
    </template>
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue'
import { Heart } from '@nutui/icons-vue'
const show1 = ref(false)
const show2 = ref(false)
const show3 = ref(false)
</script>
