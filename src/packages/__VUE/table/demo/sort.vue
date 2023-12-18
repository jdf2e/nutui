<template>
  <nut-table :columns="columns" :data="data" @sorter="handleSorter"></nut-table>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const columns = ref<any[]>([
  {
    title: '姓名',
    key: 'name',
    sorter: 'default'
  },
  {
    title: '性别',
    key: 'sex'
  },
  {
    title: '学历',
    key: 'record'
  },
  {
    title: '年龄',
    key: 'age',
    sorter: (row1: any, row2: any) => {
      return row1.age - row2.age;
    }
  }
]);
const data = ref([
  {
    name: 'Tom',
    sex: '男',
    record: '小学',
    age: 10
  },
  {
    name: 'Lucy',
    sex: '女',
    record: '本科',
    age: 30
  },
  {
    name: 'Jack',
    sex: '男',
    record: '高中',
    age: 4
  }
]);

const handleSorter = (item: any) => {
  console.log(`${JSON.stringify(item)}`);
};
</script>
