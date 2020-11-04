<template>
  <view :class="classes" v-html="priceShow"> </view>
</template>

<script lang="ts">
import { toRefs, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('price');

export default create({
  props: {
    // 价格
    price: {
      type: [Number, String],
      default: 0
    },
    // 符号
    needSymbol: {
      type: Boolean,
      default: true
    },
    // 小数点位数
    decimalDigits: {
      type: Number,
      default: 2
    },
    // 是否按照千分号形式显示
    thousands: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  setup(props, { slots }) {
    // setup内部只能访问这4个属性，值得注意的是props必须在上面声明才能在这里取到
    // console.log('props', props, 'slots', slots);
    const { price, needSymbol, decimalDigits, thousands } = toRefs(props);
    console.log('decimalDigits', decimalDigits.value);
    //判断是否为小数点
    const checkPoint = (price: string | number) => {
      return String(price).indexOf('.') > 0;
    };
    //千分位显示
    const formatThousands = (num: string | number) => {
      if (thousands.value) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      } else {
        return num;
      }
    };
    //根据小数位数格式化小数部分
    const formatDecimal = (decimalNum: string | number) => {
      // const decimalDigitsNum = decimalDigits.value;
      const result = '0.' + String(decimalNum);
      const resultFixed = Number(result).toFixed(decimalDigits.value);
      console.log('44', String(resultFixed));
      return String(resultFixed).substring(2, resultFixed.length);
    };
    //将数字转换成驼峰形式
    const formatToHump = (price: string | number) => {
      // price = String(price).replace('￥', '');
      if (checkPoint(price)) {
        // console.log('price', price)
        price = Number(price).toFixed(decimalDigits.value);
        if (Number(price) == 0) {
          price = 0;
          return [0];
        }
        const priceArray = price.split('.');
        console.log('num1', priceArray);
        return (
          '<span class="price-big">' +
          formatThousands(priceArray[0]) +
          '</span><span class="price-point">.</span><span class="price-small">' +
          formatDecimal(priceArray[1]) +
          '</span>'
        );
      } else {
        return (
          '<span class="price-big">' +
          formatThousands(price) +
          '</span><span class="price-point">.</span><span class="price-small">' +
          formatDecimal(0) +
          '</span>'
        );
      }
    };
    const priceShow = computed(() => {
      const symbol = needSymbol ? '<span class="price-symbol">￥</span>' : '';
      return symbol + formatToHump(price.value);
    });
    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });
    return {
      priceShow,
      checkPoint,
      formatThousands,
      formatDecimal,
      formatToHump,
      classes
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
