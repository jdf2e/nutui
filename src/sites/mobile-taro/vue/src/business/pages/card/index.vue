<template>
  <view class="demo">
    <h2>默认用法</h2>
    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
    </nut-card>
    <h2>自定义商品标签</h2>
    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
      <template #prolist>
        <div class="search_prolist_attr">
          <span class="word">活鲜</span>
          <span class="word">礼盒</span>
          <span class="word">国产</span>
        </div>
      </template>
    </nut-card>
    <h2>价格后自定义标签</h2>
    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
      <template #prolist>
        <div class="search_prolist_attr">
          <span class="word">活鲜</span>
          <span class="word">礼盒</span>
          <span class="word">国产</span>
        </div>
      </template>
      <template #tag>
        <img
          class="tag"
          src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
          alt=""
        />
      </template>
    </nut-card>
    <h2>商家介绍自定义</h2>
    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
      <template #shop-tag>
        <div>这里是自定义区域</div>
      </template>
    </nut-card>
    <h2>自定义右下角内容</h2>
    <nut-card
      :img-url="state.imgUrl"
      :title="state.title"
      :price="state.price"
      :vipPrice="state.vipPrice"
      :shopDesc="state.shopDesc"
      :delivery="state.delivery"
      :shopName="state.shopName"
    >
      <template #footer>
        <div class="customize">自定义</div>
      </template>
    </nut-card>
  </view>
</template>

<script lang="ts">
import { reactive } from '@vue/reactivity';

export default {
  setup() {
    const state = reactive({
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      price: '388',
      vipPrice: '378',
      shopDesc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>'
    });
    return {
      state
    };
  }
};
</script>

<style lang="scss">
.search_prolist_attr {
  margin: 3px 0 1px;
  height: 15px;
  overflow: hidden;
  > span {
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
}
.tag {
  display: inline-block;
  vertical-align: middle;
  margin-right: 5px;
  margin-left: 2px;
  height: 14px;
  width: 28px;
}
.customize {
  font-size: 12px;
}
</style>
