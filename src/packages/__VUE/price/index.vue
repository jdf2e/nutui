<template>
  <view :class="classes">
    <view
      v-if="needSymbol && position === 'before'"
      class="nut-price--symbol"
      :class="`nut-price--symbol-${size}`"
      v-html="showSymbol"
    ></view>
    <view :class="`nut-price--${size}`">
      {{ formatThousands(price) }}
    </view>
    <view v-if="decimalDigits != 0" :class="`nut-price--decimal-${size}`">.</view>
    <view :class="`nut-price--decimal-${size}`">
      {{ formatDecimal(price) }}
    </view>
    <view
      v-if="needSymbol && position === 'after'"
      class="nut-price--symbol"
      :class="`nut-price--symbol-${size}`"
      v-html="showSymbol"
    ></view>
  </view>
</template>

<script lang="ts">
import { PropType, computed } from 'vue';
import { createComponent } from '@/packages/utils';
import { PricePosition, PriceSize } from './types';
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
    },
    position: {
      type: String as PropType<PricePosition>,
      default: 'before'
    },
    size: {
      type: String as PropType<PriceSize>,
      default: 'normal'
    },
    strikeThrough: {
      type: Boolean,
      default: false
    }
  },

  setup(props) {
    const classes = computed(() => {
      return {
        [componentName]: true,
        [`${componentName}--strike`]: props.strikeThrough
      };
    });
    const showSymbol = computed(() => {
      const symbol = props.needSymbol ? props.symbol : '';
      return symbol;
    });
    const checkPoint = (price: string | number) => {
      return String(price).indexOf('.') > 0;
    };

    const formatThousands = (num: any) => {
      if (Number(num) == 0) {
        num = 0;
      }
      if (checkPoint(num)) {
        num = Number(num).toFixed(props.decimalDigits);
        num = typeof num.split('.') === 'string' ? num.split('.') : num.split('.')[0];
      } else {
        num = num.toString();
      }
      if (props.thousands) {
        return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
      } else {
        return num;
      }
    };
    const formatDecimal = (decimalNum: any) => {
      if (Number(decimalNum) == 0) {
        decimalNum = 0;
      }
      if (checkPoint(decimalNum)) {
        decimalNum = Number(decimalNum).toFixed(props.decimalDigits);
        decimalNum =
          typeof decimalNum.split('.') === 'string' ? 0 : decimalNum.split('.')[1] ? decimalNum.split('.')[1] : 0;
      } else {
        decimalNum = 0;
      }
      const result = '0.' + decimalNum;
      const resultFixed = Number(result).toFixed(props.decimalDigits);
      return String(resultFixed).substring(2, resultFixed.length);
    };
    return {
      classes,
      showSymbol,
      checkPoint,
      formatThousands,
      formatDecimal
    };
  }
});
</script>
