<template>
  <nut-cell title="click" :desc="val" @click="click"></nut-cell>
  <nut-action-sheet v-model:visible="show" :menu-items="menuItems" @choose="choose" />
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const val = ref('')
const menuItems = [
  {
    name: 'Default'
  },
  {
    name: 'Disabled',
    disable: true
  },
  {
    name: 'Color',
    color: 'red'
  }
]
const click = () => {
  show.value = true
}
const choose = (item) => {
  val.value = item.name
}
</script>
