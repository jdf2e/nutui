<template>
  <nut-cell title="idcard" @click="show = true"></nut-cell>
  <nut-number-keyboard
    v-model:visible="show"
    overlay
    :custom-key="customKey"
    @input="onInput"
    @blur="show = false"
    @close="show = false"
  >
  </nut-number-keyboard>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const customKey = ref(['X'])
const onInput = (val: string) => {
  console.log(val)
}
</script>
