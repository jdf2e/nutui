<template>
  <nut-picker v-if="columns.length" v-model="value" :columns="columns" title="城市选择" @confirm="confirm"></nut-picker>
</template>
<script setup>
import { ref, onMounted } from 'vue';
const columns = ref([]);
const value = ref([]);
onMounted(() => {
  setTimeout(() => {
    columns.value = [
      {
        text: '江苏',
        value: 'Jiangsu',
        children: [
          {
            text: '南京',
            value: 'Nanjing',
            children: [
              { text: '栖霞区', value: 'Qixia' },
              { text: '鼓楼区', value: 'Gulou' }
            ]
          },
          {
            text: '苏州',
            value: 'Suzhou',
            children: [
              { text: '姑苏区', value: 'Gusu' },
              { text: '吴江区', value: 'Wujiang' }
            ]
          }
        ]
      },
      {
        text: '北京',
        value: 'Beijing',
        children: [
          {
            text: '大兴',
            value: 'Daxing',
            children: [
              { text: '经海路', value: 'Jinghai' },
              { text: '科创路', value: 'Kechuang' }
            ]
          },
          {
            text: '海淀',
            value: 'Haidian',
            children: [
              { text: '中关村', value: 'Zhongguancun' },
              { text: '苏州桥', value: 'Suzhouqiao' }
            ]
          }
        ]
      }
    ];
  }, 500);
});

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue, selectedOptions);
};
</script>
