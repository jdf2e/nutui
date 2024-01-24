<template>
  <nut-cell title="选择地址" :desc="demo3.value.toString() || '请选择地址'" @click="demo3.visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="demo3.visible"
    v-model="demo3.value"
    title="选择地址"
    lazy
    :lazy-load="demo3.lazyLoad"
    @change="events.change"
    @path-change="events.pathChange"
  ></nut-cascader>
</template>

<script setup>
import { reactive } from 'vue';
const demo3 = reactive({
  visible: false,
  value: ['A0', 'A12', 'A23', 'A32'],
  lazyLoad(node, resolve) {
    setTimeout(() => {
      // root表示第一层数据
      if (node.root) {
        resolve([
          { value: 'A0', text: 'A0' },
          { value: 'B0', text: 'B0' },
          { value: 'C0', text: 'C0' }
        ]);
      } else {
        const { value, level } = node;
        const text = value.substring(0, 1);
        const value1 = `${text}${level + 1}1`;
        const value2 = `${text}${level + 1}2`;
        const value3 = `${text}${level + 1}3`;
        resolve([
          { value: value1, text: value1, leaf: level >= 6 },
          { value: value2, text: value2, leaf: level >= 6 },
          { value: value3, text: value3, leaf: level >= 6 }
        ]);
      }
    }, 2000);
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
