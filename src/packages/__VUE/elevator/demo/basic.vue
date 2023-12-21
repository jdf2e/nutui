<template>
  <nut-elevator :index-list="data" :height="260" @click-item="clickItem" @click-index="clickIndex" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const data = ref([
  {
    title: 'A',
    list: [{ name: '安徽', id: 1 }]
  },
  {
    title: 'B',
    list: [{ name: '北京', id: 2 }]
  },
  {
    title: 'G',
    list: [
      { name: '广西', id: 3 },
      { name: '广东', id: 4 }
    ]
  },
  {
    title: 'H',
    list: [
      { name: '湖南', id: 5 },
      { name: '湖北', id: 6 }
    ]
  }
]);

const clickItem = (key: string, item: any) => {
  console.log(key, item);
};

const clickIndex = (key: string) => {
  console.log(key);
};
</script>
