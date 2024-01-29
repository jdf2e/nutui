<template>
  <nut-picker
    :columns="columns"
    title="城市选择"
    :field-names="{
      text: 'name',
      value: 'code',
      children: 'list'
    }"
    @confirm="confirm"
  />
</template>
<script setup>
import { ref } from 'vue';
const columns = ref([
  {
    name: '江苏',
    code: 'Jiangsu',
    list: [
      {
        name: '南京',
        code: 'Nanjing',
        list: [
          { name: '栖霞区', code: 'Qixia' },
          { name: '鼓楼区', code: 'Gulou' }
        ]
      },
      {
        name: '苏州',
        code: 'Suzhou',
        list: [
          { name: '姑苏区', code: 'Gusu' },
          { name: '吴江区', code: 'Wujiang' }
        ]
      }
    ]
  }
]);

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue, selectedOptions);
};
</script>
