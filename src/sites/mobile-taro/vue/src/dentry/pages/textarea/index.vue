<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-textarea v-model="value" />
    <h2>显示字数统计</h2>
    <nut-textarea v-model="value2" limit-show max-length="20" />
    <h2>高度自定义，拉伸</h2>
    <nut-textarea v-model="value3" autosize />
    <h2>只读状态</h2>
    <nut-textarea readonly model-value="textarea只读状态" />
    <h2>禁用</h2>
    <nut-textarea disabled model-value="textarea禁用状态" limit-show max-length="20" />
    <h2>自动获取焦点</h2>
    <nut-textarea autofocus v-model="value4" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';

export default {
  props: {},

  setup() {
    const value = ref('');
    const value2 = ref('');
    const value3 = ref('');
    const value4 = ref('');

    return {
      value,
      value2,
      value3,
      value4
    };
  }
};
</script>

<style lang="scss"></style>
