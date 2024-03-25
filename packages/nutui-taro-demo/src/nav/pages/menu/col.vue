<template>
  <nut-menu>
    <nut-menu-item v-model="val" :cols="2" :options="options" />
  </nut-menu>
</template>

<script setup>
import { ref } from 'vue'
const val = ref(0)
const options = ref([
  { text: '全部商品', value: 0 },
  { text: '家庭清洁/纸品', value: 1 },
  { text: '个人护理', value: 2 },
  { text: '美妆护肤', value: 3 },
  { text: '食品饮料', value: 4 },
  { text: '家用电器', value: 5 },
  { text: '母婴', value: 6 },
  { text: '数码', value: 7 },
  { text: '电脑、办公', value: 8 },
  { text: '运动户外', value: 9 },
  { text: '厨具', value: 10 },
  { text: '医疗保健', value: 11 },
  { text: '酒类', value: 12 },
  { text: '生鲜', value: 13 },
  { text: '家具', value: 14 },
  { text: '传统滋补', value: 15 },
  { text: '汽车用品', value: 16 },
  { text: '家居日用', value: 17 }
])
</script>
