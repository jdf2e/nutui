<!--
 * @Author: Marvin
 * @Date: 2024-01-24 16:52:56
 * @LastEditors: Marvin 454846659@qq.com
 * @LastEditTime: 2024-01-24 17:06:37
 * @FilePath: /nutui/packages/nutui-taro-demo/src/dentry/pages/cascader/async-loading.vue
 * @Description:
 * Copyright (c) 2024 by Marvin, All Rights Reserved.
-->
<template>
  <nut-cell title="选择地址" :desc="value.toString() || '请选择地址'" @click="visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="visible"
    v-model="value"
    title="选择地址"
    lazy
    :lazy-load="lazyLoad"
    @change="change"
    @path-change="pathChange"
  ></nut-cascader>
</template>

<script setup>
import { ref } from 'vue';
const visible = ref(false);
const value = ref(['A0', 'A12', 'A23', 'A32']);
const lazyLoad = (node, resolve) => {
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
};
const change = (...args) => {
  console.log('change', ...args);
};
const pathChange = (...args) => {
  console.log('pathChange', ...args);
};
</script>
