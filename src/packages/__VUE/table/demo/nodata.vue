<template>
  <nut-table :columns="columns" :data="data"></nut-table>
  <nut-table :columns="columns" :data="data">
    <template #nodata>
      <div class="no-data"> 这里是自定义展示 </div>
    </template>
  </nut-table>
</template>
<script setup lang="ts">
import { ref } from 'vue'
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
const data = ref([])
</script>
