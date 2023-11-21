<template>
  <view class="nut-sku-header">
    <img class="nut-sku-header-img" :src="goods.imagePath" />
    <view class="nut-sku-header-right">
      <template v-if="getSlots('sku-header-price')">
        <slot name="sku-header-price"></slot>
      </template>
      <nut-price v-else :price="goods.price" :need-symbol="true" :thousands="false"> </nut-price>

      <template v-if="getSlots('sku-header-extra')">
        <slot name="sku-header-extra"></slot>
      </template>
      <view v-if="goods.skuId && !getSlots('sku-header-extra')" class="nut-sku-header-right-extra"
        >{{ translate('skuId') }}&nbsp;:&nbsp;{{ goods.skuId }}</view
      >
    </view>
  </view>
</template>
<script lang="ts">
import NutPrice from '../../price/index.taro.vue';
import { createComponent } from '@/packages/utils/create';
import { useLocale } from '@/packages/utils';
const { create } = createComponent('sku-header');

const cN = 'NutSkuHeader';

export default create({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  components: {
    NutPrice
  },
  setup(props, { slots }) {
    const translate = useLocale(cN);
    const getSlots = (name: string) => slots[name];

    return {
      getSlots,
      translate
    };
  }
});
</script>
