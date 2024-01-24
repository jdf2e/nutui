<template>
  <nut-cell title="选择地址" :desc="demo5.value.toString() || '请选择地址'" @click="demo5.visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="demo5.visible"
    v-model="demo5.value"
    title="选择地址"
    :options="demo5.options"
    :convert-config="demo5.convertConfig"
    @change="events.change"
    @path-change="events.pathChange"
  ></nut-cascader>
</template>
<script setup>
import { reactive } from 'vue';
const demo5 = reactive({
  visible: false,
  value: ['广东省', '广州市'],
  convertConfig: {
    topId: null,
    idKey: 'id',
    pidKey: 'pid',
    sortKey: ''
  },
  options: [
    { value: '北京', text: '北京', id: 1, pid: null },
    { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
    { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
    { value: '广东省', text: '广东省', id: 2, pid: null },
    { value: '广州市', text: '广州市', id: 21, pid: 2 }
  ]
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
