<template>
  <nut-table :columns="columns" :data="data" :summary="summary"></nut-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const summary = () => {
  return {
    value: '这是总结栏'
  }
}
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
