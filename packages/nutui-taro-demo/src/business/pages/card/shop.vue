<template>
  <nut-card
    :img-url="state.imgUrl"
    :title="state.title"
    :price="state.price"
    :vip-price="state.vipPrice"
    :shop-desc="state.shopDesc"
    :delivery="state.delivery"
    :shop-name="state.shopName"
  >
    <template #shop-tag>
      <div>自定义店铺介绍</div>
    </template>
    <template #price>
      <span>询价</span>
    </template>
    <template #origin>
      <img
        class="card-tag"
        src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
        alt=""
      />
    </template>
  </nut-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const state = ref({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  price: '388',
  vipPrice: '378',
  shopDesc: '自营',
  delivery: '厂商配送',
  shopName: '阳澄湖大闸蟹自营店>'
})
</script>
<style>
.card-tag {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 2px;
  height: 14px;
}
</style>
