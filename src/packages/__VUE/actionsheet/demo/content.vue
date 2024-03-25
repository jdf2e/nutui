<template>
  <nut-cell title="click" :desc="val" @click="click"></nut-cell>
  <nut-action-sheet v-model:visible="show" title="Title">
    <div class="custom-content">Custom Content</div>
  </nut-action-sheet>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const val = ref('')
const click = () => {
  show.value = true
}
</script>
<style>
.custom-content {
  padding: 10px 10px 160px;
}
</style>
