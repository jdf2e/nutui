<template>
  <nut-table :columns="columns" :data="data"></nut-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const columns = ref([
  {
    title: '姓名',
    key: 'name',
    align: 'left'
  },
  {
    title: '性别',
    key: 'sex',
    align: 'center'
  },
  {
    title: '学历',
    key: 'record',
    align: 'right'
  }
])
const data = ref([
  {
    name: 'Tom',
    sex: '男',
    record: '小学'
  },
  {
    name: 'Lucy',
    sex: '女',
    record: '本科'
  },
  {
    name: 'Jack',
    sex: '男',
    record: '高中'
  }
])
</script>
