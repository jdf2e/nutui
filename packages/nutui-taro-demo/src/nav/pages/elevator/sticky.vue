<template>
  <nut-elevator :index-list="data" is-sticky :height="220"></nut-elevator>
</template>
<script setup lang="ts">
import { ref } from 'vue';
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
    title: 'C',
    list: [
      {
        name: '重庆',
        id: 3
      }
    ]
  },
  {
    title: 'F',
    list: [
      {
        name: '福建',
        id: 4
      }
    ]
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 5
      },
      {
        name: '广东',
        id: 6
      },
      {
        name: '甘肃',
        id: 7
      },
      {
        name: '贵州',
        id: 8
      }
    ]
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 9
      },
      {
        name: '湖北',
        id: 10
      },
      {
        name: '海南',
        id: 11
      },
      {
        name: '河北',
        id: 12
      },
      {
        name: '河南',
        id: 13
      },
      {
        name: '黑龙江',
        id: 14
      }
    ]
  },
  {
    title: 'J',
    list: [
      {
        name: '吉林',
        id: 15
      },
      {
        name: '江苏',
        id: 16
      },
      {
        name: '江西',
        id: 17
      }
    ]
  },
  {
    title: 'L',
    list: [
      {
        name: '辽宁',
        id: 18
      }
    ]
  }
]);
</script>
