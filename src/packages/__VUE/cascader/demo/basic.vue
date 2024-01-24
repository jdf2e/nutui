<template>
  <nut-cell title="选择地址" :desc="demo1.value.toString() || '请选择地址'" @click="demo1.visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="demo1.visible"
    v-model="demo1.value"
    title="选择地址"
    :options="demo1.options"
    @change="events.change"
    @path-change="events.pathChange"
  ></nut-cascader>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
const demo1 = reactive({
  visible: false,
  value: ['湖南'],
  options: [
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
