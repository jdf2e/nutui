<template>
  <div class="nut-card">
    <div class="nut-card__left">
      <img :src="imgUrl" alt="" />
    </div>
    <div class="nut-card__right">
      <div class="nut-card__right__title">{{ title }}</div>
      <slot name="prolist"></slot>
      <div v-if="isNeedPrice" class="nut-card__right__price">
        <slot name="price">
          <nut-price :price="price"></nut-price>
        </slot>
        <slot name="origin">
          <nut-price class="nut-card__right__price__origin" :price="vipPrice"></nut-price>
        </slot>
      </div>
      <div class="nut-card__right__other">
        <slot name="shop-tag">
          <nut-tag type="danger">{{ shopDesc }}</nut-tag>
          <nut-tag plain>{{ delivery }}</nut-tag>
        </slot>
      </div>
      <div class="nut-card__right__shop">
        <div class="nut-card__right__shop__name">{{ shopName }}</div>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import NutPrice from '../price/index.vue';
import NutTag from '../tag/index.vue';
const { create } = createComponent('card');
export default create({
  components: {
    NutPrice,
    NutTag
  },
  props: {
    imgUrl: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    vipPrice: {
      type: String,
      default: ''
    },
    shopDesc: {
      type: String,
      default: ''
    },
    delivery: {
      type: String,
      default: ''
    },
    shopName: {
      type: String,
      default: ''
    },
    isNeedPrice: {
      type: Boolean,
      default: true
    }
  }
});
</script>
