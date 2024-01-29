<template>
  <nut-picker v-model="val" :columns="columns" :title="String(val)" @confirm="confirm" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref(['Beijing']);
const columns = ref([
  { text: '南京', value: 'Nanjing' },
  { text: '无锡', value: 'Wuxi' },
  { text: '海北', value: 'Haibei' },
  { text: '北京', value: 'Beijing' },
  { text: '连云港', value: 'Lianyungang' },
  { text: '长沙', value: 'Changsha' },
  { text: '武汉', value: 'Wuhan' }
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue[0], selectedOptions[0]);
};
</script>
