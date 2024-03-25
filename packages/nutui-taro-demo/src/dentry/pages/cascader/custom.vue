<template>
  <nut-cell title="选择地址" :desc="value.toString() || '请选择地址'" @click="visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="visible"
    v-model="value"
    title="选择地址"
    text-key="text"
    value-key="text"
    children-key="items"
    :options="options"
    @change="change"
    @path-change="pathChange"
  ></nut-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const value = ref(['福建', '福州', '台江区'])
const options = ref([
  {
    text: '浙江',
    items: [
      {
        text: '杭州',
        disabled: true,
        items: [{ text: '西湖区' }, { text: '余杭区' }]
      },
      {
        text: '温州',
        items: [{ text: '鹿城区' }, { text: '瓯海区' }]
      }
    ]
  },
  {
    text: '福建',
    items: [
      {
        text: '福州',
        items: [{ text: '鼓楼区' }, { text: '台江区' }]
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
