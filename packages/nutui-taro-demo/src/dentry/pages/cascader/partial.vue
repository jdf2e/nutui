<template>
  <nut-cell title="选择地址" :desc="value.toString() || '请选择地址'" @click="visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="visible"
    v-model="value"
    title="选择地址"
    :options="options"
    lazy
    :lazy-load="lazyLoad"
    @change="change"
    @path-change="pathChange"
  ></nut-cascader>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const value = ref([])
const options = ref([
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
])
const lazyLoad = (node, resolve) => {
  setTimeout(() => {
    const { value, level } = node
    const text = value.substring(0, 1)
    const value1 = `${text}${level + 1}1`
    const value2 = `${text}${level + 1}2`
    resolve([
      { value: value1, text: value1, leaf: level >= 2 },
      { value: value2, text: value2, leaf: level >= 1 }
    ])
  }, 500)
}
const change = (...args) => {
  console.log('change', ...args)
}
const pathChange = (...args) => {
  console.log('pathChange', ...args)
}
</script>
