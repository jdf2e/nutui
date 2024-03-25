<template>
  <nut-cell title="rightColumn" @click="show = true"></nut-cell>
  <nut-number-keyboard
    v-model:visible="show"
    type="rightColumn"
    overlay
    :custom-key="customKey"
    confirm-text="支付"
    @input="onInput"
    @blur="show = false"
    @close="show = false"
  >
  </nut-number-keyboard>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
const customKey = ref(['.'])
const onInput = (val: string) => {
  console.log(val)
}
</script>
