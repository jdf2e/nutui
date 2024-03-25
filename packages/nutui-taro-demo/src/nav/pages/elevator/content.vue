<template>
  <nut-elevator :index-list="data" :height="260">
    <template #default="{ item }">
      <div style="display: flex; flex-direction: row; align-items: center">
        <Locationg3 size="12"></Locationg3>
        <div style="margin-left: 15px">{{ item.name }}</div>
      </div>
    </template>
  </nut-elevator>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Locationg3 } from '@nutui/icons-vue-taro'
const data = ref([
  {
    title: 'A',
    list: [
      {
        name: '安徽',
        id: 1
      }
    ]
  },
  {
    title: 'B',
    list: [
      {
        name: '北京',
        id: 2
      }
    ]
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 3
      },
      {
        name: '广东',
        id: 4
      }
    ]
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 5
      },
      {
        name: '湖北',
        id: 6
      }
    ]
  }
])
</script>
