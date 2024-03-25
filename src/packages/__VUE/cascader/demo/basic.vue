<template>
  <nut-cell title="选择地址" :desc="value.toString() || '请选择地址'" @click="visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="visible"
    v-model="value"
    title="选择地址"
    :options="options"
    @change="change"
    @path-change="pathChange"
  ></nut-cascader>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const value = ref(['湖南'])
const options = ref([
  {
    value: '浙江',
    text: '浙江',
    children: [
      {
        value: '杭州',
        text: '杭州',
        disabled: true,
        children: [
          { value: '西湖区', text: '西湖区' },
          { value: '余杭区', text: '余杭区' }
        ]
      },
      {
        value: '温州',
        text: '温州',
        children: [
          { value: '鹿城区', text: '鹿城区' },
          { value: '瓯海区', text: '瓯海区' }
        ]
      }
    ]
  },
  {
    value: '湖南',
    text: '湖南',
    disabled: true
  },
  {
    value: '福建',
    text: '福建',
    children: [
      {
        value: '福州',
        text: '福州',
        children: [
          { value: '鼓楼区', text: '鼓楼区' },
          { value: '台江区', text: '台江区' }
        ]
      }
    ]
  }
])
const change = (...args: any[]) => {
  console.log('change', ...args)
}
const pathChange = (...args: any[]) => {
  console.log('pathChange', ...args)
}
</script>
