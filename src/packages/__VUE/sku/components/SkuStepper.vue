<template>
  <view class="nut-sku-stepper">
    <view class="nut-sku-stepper-desc">
      <view class="nut-sku-stepper-desc-title">{{ stepperTitle }}</view>
      <view class="nut-sku-stepper-desc-limit" v-if="showSaleLimit">
        <view class="limi" v-html="getSaleText('saleLimit')"></view>
        <template v-if="purchased > 0">
          <view v-html="getSaleText('purchased')"></view>
        </template>
      </view>
    </view>
    <view class="nut-sku-stepper-count">
      <view class="nut-sku-stepper-count-lowestBuy" v-if="showSaleLowest" v-html="getSaleText('saleLowest')"> </view>
      <nut-inputnumber
        v-model="goodsCount"
        :min="stepperMin"
        :max="stepperMax"
        @add="add"
        @reduce="reduce"
        @overlimit="overlimit"
        @change="changeStepper"
      />
    </view>
  </view>
</template>
<script lang="ts">
import { ref, watch, onMounted } from 'vue';
import { TypeOfFun } from '../../../utils/util';
import { createComponent } from '../../../utils/create';
const { componentName, create } = createComponent('sku-stepper');

export default create({
  props: {
    // 是否开启限购
    showSaleLimit: {
      type: Boolean,
      default: false
    },

    // 购买数量最大值
    stepperMax: {
      type: [Number, String],
      default: 99999
    },

    stepperMin: {
      type: [Number, String],
      default: 1
    },

    purchased: {
      type: [Number, String],
      default: 0
    },

    // 起购状态
    showSaleLowest: {
      type: [Boolean, Object],
      default: false
    },

    // 起购文案提示
    saleLowestText: {
      type: [Function, Boolean],
      default: false
    },

    // 限购文案提示
    saleLimitText: {
      type: [Function, Boolean],
      default: false
    },

    // 已购文案提示
    purchasedText: {
      type: [Function, Boolean],
      default: false
    },

    // 数量选择左侧文案
    stepperTitle: {
      type: String,
      default: '购买数量'
    }
  },
  emits: ['click', 'changeSku', 'changeStepper', 'clickBtnOptions', 'stepperOverLimit', 'reduce', 'add'],

  setup(props: any, { emit }) {
    const goodsCount = ref(props.stepperMin);

    onMounted(() => {
      console.log('计步器变化');
      goodsCount.value = props.stepperMin;
    });

    const getSaleText = (t: string) => {
      // saleLimit 限购  saleLowest 起购  purchased 已购
      const { stepperMax, stepperMin } = props;
      const m: any = {
        saleLimit: stepperMax,
        saleLowest: stepperMin,
        purchased: props.purchased
      };

      if (props[`${t}Text`] && TypeOfFun(props[`${t}Text`]) == 'function') {
        return props[`${t}Text`](m[t]);
      } else {
        switch (t) {
          case 'saleLimit':
            return `限购${stepperMax}件`;
          case 'saleLowest':
            return `(${stepperMin}件起购)`;
          default:
            return ` | 已购${props.purchased}件`;
        }
      }
    };

    // 修改购买数量 add 加  reduce 减
    const add = (value: number) => {
      emit('add', value);
    };

    const reduce = (value: number) => {
      emit('reduce', value);
    };

    // stepper 极限值
    const overlimit = (e: Event, action: string) => {
      emit('stepperOverLimit', {
        action,
        value: parseInt(goodsCount.value + '')
      });
    };
    // stepper 发生了改变
    const changeStepper = (value: number) => {
      goodsCount.value = value;

      emit('changeStepper', value);
    };

    return {
      goodsCount,
      add,
      reduce,
      overlimit,
      getSaleText,
      changeStepper
    };
  }
});
</script>
