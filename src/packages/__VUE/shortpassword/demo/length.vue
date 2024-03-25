<template>
  <nut-cell title="Length" is-link @click="visible = true"></nut-cell>
  <nut-short-password
    v-model="value"
    v-model:visible="visible"
    :length="4"
    @focus="showKeyboard = true"
    @complete="complete"
  >
  </nut-short-password>
  <nut-number-keyboard v-model="value" v-model:visible="showKeyboard" @blur="showKeyboard = false">
  </nut-number-keyboard>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const showKeyboard = ref(false)
const value = ref('')
const complete = (value) => {
  console.log(value)
}
</script>
