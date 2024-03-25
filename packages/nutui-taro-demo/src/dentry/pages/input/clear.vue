<template>
  <nut-input v-model="val1" placeholder="Clearable" clearable />
  <nut-input v-model="val2" placeholder="Clear Slot" clearable show-clear-icon>
    <template #clear>
      <Close size="12" @click="onClick"></Close>
    </template>
  </nut-input>
</template>
<script setup>
import { ref } from 'vue'
import { Close } from '@nutui/icons-vue-taro'
const val1 = ref('')
const val2 = ref('')
const onClick = () => {
  val2.value = ''
}
</script>
