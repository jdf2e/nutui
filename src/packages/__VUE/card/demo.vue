<template>
  <view class="demo">
    <h2>{{ translate('basic') }}</h2>
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
    <h2>{{ translate('customProduct') }}</h2>
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
          <span class="word">{{ translate('customPro1') }}</span>
          <span class="word">{{ translate('customPro2') }}</span>
          <span class="word">{{ translate('customPro3') }}</span>
        </div>
      </template>
    </nut-card>
    <h2>{{ translate('customShop') }}</h2>
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
        <div>{{ translate('customShop') }}</div>
      </template>
      <template #price>
        <span>询价</span>
      </template>
      <template #origin>
        <img
          class="tag"
          src="https://img11.360buyimg.com/jdphoto/s58x28_jfs/t9451/359/415622649/15318/b0943e5d/59a78495N3bd2a9f8.png"
          alt=""
        />
      </template>
    </nut-card>
    <h2>{{ translate('customFooter') }}</h2>
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
        <div class="customize">{{ translate('customContent') }}</div>
      </template>
    </nut-card>
  </view>
</template>

<script lang="ts">
import { computed, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('card');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      customProduct: '自定义商品标签',
      customPro1: '活鲜',
      customPro2: '礼盒',
      customPro3: '国产',
      title: '【活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
      customShop: '自定义店铺介绍',
      customFooter: '自定义右下角内容',
      customContent: '自定义',
      desc: '自营',
      delivery: '厂商配送',
      shopName: '阳澄湖大闸蟹自营店>'
    },
    'en-US': {
      basic: 'Basic Usage',
      customProduct: 'Custom prolist',
      customPro1: 'tag',
      customPro2: 'tag',
      customPro3: 'tag',
      title: 'title',
      customShop: 'Custom Content',
      customFooter: 'Customize bottom right content',
      customContent: 'custom',
      desc: 'desc',
      delivery: 'delivery',
      shopName: 'shopName>'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const state = reactive({
      imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
      title: computed(() => translate('title')),
      price: '388',
      vipPrice: '378',
      shopDesc: computed(() => translate('desc')),
      delivery: computed(() => translate('delivery')),
      shopName: computed(() => translate('shopName'))
    });
    return {
      state,
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
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
}
.customize {
  font-size: 12px;
}
</style>
