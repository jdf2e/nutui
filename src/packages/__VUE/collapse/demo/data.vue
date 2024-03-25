<template>
  <nut-collapse v-model="val" @change="change">
    <nut-collapse-item name="name1" title="Title 1"> Content 1 </nut-collapse-item>
    <nut-collapse-item name="name2" title="Title 2"> Content 2 </nut-collapse-item>
    <nut-collapse-item name="name3" title="Title 3"> Content 3 </nut-collapse-item>
  </nut-collapse>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(['name2', 'name3'])
const change = (modelValue: string[], name: string, status: boolean) => {
  console.log(modelValue, name, status)
}
</script>
