<template>
  <nut-cell title="click" :desc="val" @click="click"></nut-cell>
  <nut-action-sheet
    v-model:visible="show"
    title="Title"
    :menu-items="menuItems"
    cancel-txt="Cancel"
    description="Description"
    @choose="choose"
  />
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const val = ref('')
const menuItems = [
  {
    name: 'A'
  },
  {
    name: 'B'
  },
  {
    name: 'C',
    color: 'red',
    subname: 'desc'
  }
]
const click = () => {
  show.value = true
}
const choose = (item) => {
  val.value = item.name
}
</script>
