<template>
  <nut-cell title="点击试试">
    <template #link>
      <nut-switch id="tour4" v-model="val" @click="show = true" />
    </template>
  </nut-cell>

  <nut-tour
    v-model="show"
    :steps="steps"
    type="tile"
    theme="dark"
    location="bottom-end"
    :offset="[8, 8]"
    :close-on-click-overlay="false"
  >
    <div class="tour-demo-custom-content">
      <div>NutUI 4.x 已发布，欢迎体验</div>
      <nut-divider direction="vertical" />
      <div @click="show = false">知道了</div>
    </div>
  </nut-tour>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const val = ref(false)
const steps = ref([
  {
    target: 'tour4'
  }
])
</script>

<style>
.tour-demo-custom-content {
  padding: 8px;
  display: flex;
  width: max-content;
  align-items: center;
}
</style>
