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
    <template #prolist>
      <div class="card-tag-list">
        <span class="tag">活鲜</span>
        <span class="tag">礼盒</span>
        <span class="tag">国产</span>
      </div>
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
.card-tag-list {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
}
.card-tag-list > .tag {
  float: left;
  padding: 0 5px;
  border-radius: 1px;
  font-size: 10px;
  height: 15px;
  line-height: 15px;
  color: #999;
  background-color: #f2f2f7;
  margin-right: 5px;
}
</style>
