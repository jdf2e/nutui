<template>
  <nut-cell>
    <nut-checkbox v-model="val1" icon-size="25"> size 25 </nut-checkbox>
    <nut-checkbox v-model="val2" icon-size="10"> size 10 </nut-checkbox>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue'
const val1 = ref(false)
const val2 = ref(false)
</script>
