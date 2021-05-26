<template>
  <view :class="classes" v-html="priceShow"> </view>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('price');

export default create({
  props: {
    price: {
      type: [Number, String],
      default: 0
    },
    needSymbol: {
      type: Boolean,
      default: true
    },
    symbol: {
      type: String,
      default: '&yen;'
    },
    decimalDigits: {
      type: Number,
      default: 2
    },
    thousands: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const priceShow = computed(() => {
      const symbol = props.needSymbol
        ? `<view class="${componentName}--symbol">${props.symbol}</view>`
        : '';
      return symbol + formatToHump(props.price);
    });
    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });

    const checkPoint = (price: string | number) => {
      return String(price).indexOf('.') > 0;
    };
    const formatThousands = (num: string | number) => {
      if (props.thousands) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      } else {
        return num;
      }
    };
    const formatDecimal = (decimalNum: string | number) => {
      const result = '0.' + decimalNum;
      const resultFixed = Number(result).toFixed(props.decimalDigits);
      return String(resultFixed).substring(2, resultFixed.length);
    };

    const renderPrice = (price: string[] | string) => {
      return `<view class="${componentName}--big">${formatThousands(
        typeof price === 'string' ? price : price[0]
      )}</view><view class="${componentName}--point">.</view><view class="${componentName}--small">${formatDecimal(
        typeof price === 'string' ? 0 : price[1]
      )}</view>`;
    };

    const formatToHump = (price: string | number) => {
      if (Number(price) == 0) {
        return 0;
      }
      if (checkPoint(price)) {
        price = Number(price).toFixed(props.decimalDigits);
        return renderPrice(price.split('.'));
      } else {
        return renderPrice(price.toString());
      }
    };
    return {
      priceShow,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
