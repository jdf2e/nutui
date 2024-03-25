<template>
  <nut-button id="pop-target" type="primary" shape="square" @click="show = true"> Target </nut-button>
  <nut-popover v-model:visible="show" target-id="pop-target" :list="list" location="top-start"></nut-popover>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)

const list = ref([{ name: 'option1' }, { name: 'option2' }, { name: 'option3' }])
</script>

<style>
.nut-popover-content {
  width: 100px;
}
</style>
