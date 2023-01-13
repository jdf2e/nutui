<template>
  <view class="nut-sku-header">
    <!-- <img :src="goods.imagePath" /> -->
    <image class="nut-sku-header-img" :src="goods.imagePath" v-if="ENV != ENV_TYPE.WEB" />
    <img class="nut-sku-header-img" :src="goods.imagePath" v-else />

    <view class="nut-sku-header-right">
      <template v-if="getSlots('sku-header-price')">
        <slot name="sku-header-price"></slot>
      </template>
      <nut-price v-else :price="goods.price" :needSymbol="true" :thousands="false"> </nut-price>

      <template v-if="getSlots('sku-header-extra')">
        <slot name="sku-header-extra"></slot>
      </template>
      <view class="nut-sku-header-right-extra" v-if="goods.skuId && !getSlots('sku-header-extra')"
        >{{ translate('skuId') }}&nbsp;:&nbsp;{{ goods.skuId }}</view
      >
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('sku-header');
import Taro from '@tarojs/taro';

export default create({
  props: {
    goods: {
      type: Object,
      default: {}
    }
  },
  emits: [],

  setup(props: any, { emit, slots }) {
    const getSlots = (name: string) => slots[name];

    const state = reactive({
      ENV: Taro.getEnv(),
      ENV_TYPE: Taro.ENV_TYPE
    });

    return {
      getSlots,
      translate,
      ...toRefs(state)
    };
  }
});
</script>
