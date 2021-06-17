<template>
  <view :class="classes">
    <text
      v-if="needSymbol"
      class="nut-price--symbol"
      decode="true"
      v-html="showSymbol"
    ></text>
    <view class="nut-price--big">
      {{ formatThousands(price) }}
    </view>
    <view class="nut-price--point">.</view>
    <view class="nut-price--small">
      {{ formatDecimal(price) }}
    </view>
  </view>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '../../utils/create';
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
    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });
    const replaceSpecialChar = (url: string) => {
      url = url.replace(/&quot;/g, '"');
      url = url.replace(/&amp;/g, '&');
      url = url.replace(/&lt;/g, '<');
      url = url.replace(/&gt;/g, '>');
      url = url.replace(/&nbsp;/g, ' ');
      url = url.replace(/&yen;/g, '￥');
      console.log('转义字符', url);
      return url;
    };
    const showSymbol = computed(() => {
      const symbol = props.needSymbol ? replaceSpecialChar(props.symbol) : '';
      return symbol;
    });
    const checkPoint = (price: string | number) => {
      return String(price).indexOf('.') > 0;
    };

    // const formatToHump = (price: any) => {
    //   if (Number(price) == 0) {
    //     price = 0;
    //   }
    //   if (checkPoint(price)) {
    //     price = Number(price).toFixed(props.decimalDigits);
    //     price = typeof price.split('.') === 'string' ? price.split('.') : price.split('.')[0]
    //   } else {
    //     price = price.toString()
    //   }
    // };

    const formatThousands = (num: any) => {
      console.log('num', num, typeof num);
      // formatToHump(num)
      if (Number(num) == 0) {
        num = 0;
      }
      if (checkPoint(num)) {
        num = Number(num).toFixed(props.decimalDigits);
        console.log('num1', num, typeof num);
        // return rendernum(num.split('.'));
        num =
          typeof num.split('.') === 'string'
            ? num.split('.')
            : num.split('.')[0];
      } else {
        num = num.toString();
      }
      console.log('num2', num, typeof num);
      if (props.thousands) {
        console.log(
          '33',
          (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
        );
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      } else {
        return num;
      }
    };
    const formatDecimal = (decimalNum: any) => {
      // formatToHump(decimalNum)
      if (Number(decimalNum) == 0) {
        decimalNum = 0;
      }
      if (checkPoint(decimalNum)) {
        decimalNum = Number(decimalNum).toFixed(props.decimalDigits);
        console.log('decimalNum1', decimalNum, typeof decimalNum);
        // return renderdecimalNum(decimalNum.split('.'));
        decimalNum =
          typeof decimalNum.split('.') === 'string'
            ? 0
            : decimalNum.split('.')[1];
      } else {
        decimalNum = decimalNum.toString();
      }
      console.log('decimalNum1', decimalNum);
      const result = '0.' + decimalNum;
      const resultFixed = Number(result).toFixed(props.decimalDigits);
      return String(resultFixed).substring(2, resultFixed.length);
    };
    return {
      classes,
      showSymbol,
      checkPoint,
      formatThousands,
      formatDecimal,
      replaceSpecialChar
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
