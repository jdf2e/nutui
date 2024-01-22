<template>
  <nut-menu>
    <nut-menu-item v-model="val1" :options="options1" />
    <nut-menu-item v-model="val2" :options="options2" @change="onChange" />
  </nut-menu>
</template>

<script setup>
import { ref } from 'vue';
const val1 = ref(0);
const val2 = ref('a');
const options1 = ref([
  { text: '全部商品', value: 0 },
  { text: '新款商品', value: 1 },
  { text: '活动商品', value: 2 }
]);
const options2 = ref([
  { text: '默认排序', value: 'a' },
  { text: '好评排序', value: 'b' },
  { text: '销量排序', value: 'c' }
]);

const onChange = (val) => {
  console.log('val', val);
};
</script>
