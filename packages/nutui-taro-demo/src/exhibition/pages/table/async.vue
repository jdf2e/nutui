<template>
  <nut-table :columns="columns" :data="data">
    <template #nodata>Loading...</template>
  </nut-table>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
const columns = ref([
  {
    title: '姓名',
    key: 'name'
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
    key: 'age'
  },
  {
    title: '地址',
    key: 'address'
  }
])

const data = ref<Array<any>>([])
onMounted(() => {
  setTimeout(() => {
    data.value = [
      {
        address: '北京',
        name: 'Tom',
        sex: '男',
        record: '小学',
        age: 13
      },
      {
        record: '本科',
        name: 'Lucy',
        sex: '女',
        age: 34,
        address: '上海'
      },
      {
        name: 'Jack',
        sex: '男',
        record: '高中',
        age: 4,
        address: '杭州'
      }
    ]
  }, 5000)
})
</script>
