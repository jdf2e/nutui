<template>
  <nut-table :columns="columns" :data="data"></nut-table>
</template>
<script setup lang="ts">
import { ref, h } from 'vue'
import { Dongdong } from '@nutui/icons-vue-taro'
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
    title: '操作',
    key: 'render'
  }
])

const data = ref([
  {
    name: 'Tom',
    sex: '男',
    record: '小学',
    render: () => {
      return h(
        'button',
        {
          onClick: () => {
            console.log('hello')
          }
        },
        'Hello'
      )
    }
  },
  {
    name: 'Lucy',
    sex: '女',
    record: '本科',
    render: () => {
      return h(Dongdong, { width: '14px', height: '14px ' })
    }
  },
  {
    name: 'Jack',
    sex: '男',
    record: '高中',
    render: () => {
      return h(
        'button',
        {
          onClick: () => {
            window.open('https://www.jd.com')
          }
        },
        '打开京东'
      )
    }
  }
])
</script>
