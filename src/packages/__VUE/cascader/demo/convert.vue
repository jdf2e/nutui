<template>
  <nut-cell title="选择地址" :desc="value.toString() || '请选择地址'" @click="visible = true"> </nut-cell>
  <nut-cascader
    v-model:visible="visible"
    v-model="value"
    title="选择地址"
    :options="options"
    :convert-config="convertConfig"
    @change="change"
    @path-change="pathChange"
  ></nut-cascader>
</template>
<script setup>
import { ref } from 'vue'
const visible = ref(false)
const value = ref(['广东省', '广州市'])
const convertConfig = ref({
  topId: null,
  idKey: 'id',
  pidKey: 'pid',
  sortKey: ''
})
const options = ref([
  { value: '北京', text: '北京', id: 1, pid: null },
  { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
  { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
  { value: '广东省', text: '广东省', id: 2, pid: null },
  { value: '广州市', text: '广州市', id: 21, pid: 2 }
])
const change = (...args) => {
  console.log('change', ...args)
}
const pathChange = (...args) => {
  console.log('pathChange', ...args)
}
</script>
