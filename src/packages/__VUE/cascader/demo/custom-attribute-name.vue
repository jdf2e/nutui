<template>
  <nut-cell title="选择地址" :desc="demo2.value.toString() || '请选择地址'" @click="demo2.visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="demo2.visible"
    v-model="demo2.value"
    title="选择地址"
    text-key="text"
    value-key="text"
    children-key="items"
    :options="demo2.options"
    @change="events.change"
    @path-change="events.pathChange"
  ></nut-cascader>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const demo2 = reactive({
  visible: false,
  value: ['福建', '福州', '台江区'],
  options: [
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
  ]
});
const events = {
  change(...args: any[]) {
    console.log('change', ...args);
  },
  pathChange(...args: any[]) {
    console.log('pathChange', ...args);
  }
};
</script>
