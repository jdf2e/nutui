<template>
  <nut-card
    :img-url="state.imgUrl"
    :title="state.title"
    :price="state.price"
    :vip-price="state.vipPrice"
    :shop-desc="state.shopDesc"
    :delivery="state.delivery"
    :shop-name="state.shopName"
  ></nut-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const state = ref({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
});
</script>
