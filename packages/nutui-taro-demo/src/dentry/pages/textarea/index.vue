<template>
  <Demo class="full">
    <h2>基础用法</h2>
    <nut-textarea v-model="value" />
    <h2>显示字数统计</h2>
    <nut-textarea v-model="value2" limit-show max-length="20" />
    <h2>高度自定义，拉伸</h2>
    <nut-textarea v-model="value3" autosize />
    <h2>只读、禁用</h2>
    <nut-textarea readonly model-value="textarea 只读状态" />
    <nut-textarea disabled model-value="textarea 禁用状态" />
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref('');
const value2 = ref('');
const value3 = ref('');
</script>

<style lang="scss">
.nut-textarea__textarea__readonly {
  background-color: #f9f9f9;
}
.nut-textarea--disabled {
  textarea {
    padding: 5px 10px;
    height: 30px;
    background-color: #f9f9f9;
  }
}
</style>
