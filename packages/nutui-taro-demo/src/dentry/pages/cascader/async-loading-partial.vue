<template>
  <nut-cell title="选择地址" :desc="demo4.value.toString() || '请选择地址'" @click="demo4.visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="demo4.visible"
    v-model="demo4.value"
    title="选择地址"
    :options="demo4.options"
    lazy
    :lazy-load="demo4.lazyLoad"
    @change="events.change"
    @path-change="events.pathChange"
  ></nut-cascader>
</template>
<script setup>
import { reactive } from 'vue';
const demo4 = reactive({
  visible: false,
  value: [],
  options: [
    { value: 'A0', text: 'A0' },
    {
      value: 'B0',
      text: 'B0',
      children: [
        { value: 'B11', text: 'B11', leaf: true },
        { value: 'B12', text: 'B12' }
      ]
    },
    { value: 'C0', text: 'C0' }
  ],
  lazyLoad(node, resolve) {
    setTimeout(() => {
      const { value, level } = node;
      const text = value.substring(0, 1);
      const value1 = `${text}${level + 1}1`;
      const value2 = `${text}${level + 1}2`;
      resolve([
        { value: value1, text: value1, leaf: level >= 2 },
        { value: value2, text: value2, leaf: level >= 1 }
      ]);
    }, 500);
  }
});
const events = {
  change(...args) {
    console.log('change', ...args);
  },
  pathChange(...args) {
    console.log('pathChange', ...args);
  }
};
</script>
