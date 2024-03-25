<template>
  <nut-elevator :index-list="data" :height="220" accept-key="num"></nut-elevator>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const data = ref([
  {
    num: '一',
    list: [
      {
        name: '北京',
        id: 1
      },
      {
        name: '上海',
        id: 2
      },
      {
        name: '深圳',
        id: 3
      },
      {
        name: '广州',
        id: 4
      },
      {
        name: '杭州',
        id: 5
      }
    ]
  },
  {
    num: '二',
    list: [
      {
        name: '成都',
        id: 6
      },
      {
        name: '西安',
        id: 7
      },
      {
        name: '天津',
        id: 8
      },
      {
        name: '武汉',
        id: 9
      },
      {
        name: '长沙',
        id: 10
      },
      {
        name: '重庆',
        id: 11
      },
      {
        name: '苏州',
        id: 12
      },
      {
        name: '南京',
        id: 13
      }
    ]
  },
  {
    num: '三',
    list: [
      {
        name: '西宁',
        id: 14
      },
      {
        name: '兰州',
        id: 15
      },
      {
        name: '石家庄',
        id: 16
      },
      {
        name: '秦皇岛',
        id: 17
      },
      {
        name: '大连',
        id: 18
      },
      {
        name: '哈尔滨',
        id: 19
      },
      {
        name: '长春',
        id: 20
      },
      {
        name: '太原',
        id: 21
      }
    ]
  }
])
</script>
