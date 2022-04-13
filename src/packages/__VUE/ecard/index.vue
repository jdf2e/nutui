<template>
  <view class="nut-ecard">
    <view class="nut-ecard__title">{{ chooseText }}</view>
    <view class="nut-ecard__list">
      <view
        v-for="(item, index) in dataList"
        :key="index"
        :class="['nut-ecard__list__item', currentIndex == index ? 'active' : '']"
        @click="handleClick(item, index)"
      >
        {{ item.price }}
      </view>
      <view :class="['nut-ecard__list__input', currentIndex == 'input' ? 'active' : '']" @click="inputClick">
        <view>{{ otherValueText }}</view>
        <view class="nut-ecard__list__input--con">
          <input type="text" v-model="inputValue" @input="change" :placeholder="placeholder" />
          {{ suffix }}
        </view>
      </view>
      <view class="nut-ecard__list__step">
        <view>{{ suffix }}{{ money }}</view>
        <nut-inputnumber v-model="stepValue" :min="cardBuyMin" :max="cardBuyMax" @change="changeStep" />
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { Ref, ref, watch } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('ecard');

interface props {
  chooseText: string; // 选择文案
  dataList: Array<any>; // 电子卡列表
  cardAmountMin: number; // 其他面值最小值
  cardAmountMax: number; // 其他面值最大值
  cardBuyMin: number; // 其他面值最小值
  cardBuyMax: number; // 其他面值最大值
  modelValue: number; // 购买电子卡需花费的价钱
  placeholder: string; //提示语
  suffix: string; // 符号标示
  otherValueText: string; // 其他面值
}

export default create({
  props: {
    chooseText: {
      type: String,
      default: '请选择电子卡面值'
    },
    otherValueText: {
      type: String,
      default: '其他面值'
    },
    dataList: {
      type: [Object, Array],
      default: () => {
        return [];
      }
    },
    cardAmountMin: {
      type: Number,
      default: 1
    },
    cardAmountMax: {
      type: Number,
      default: 9999
    },
    cardBuyMin: {
      type: Number,
      default: 1
    },
    cardBuyMax: {
      type: Number,
      default: 9999
    },
    modelValue: {
      type: Number,
      default: 0
    },
    placeholder: {
      type: String,
      default: '请输入1-5000整数'
    },
    suffix: {
      type: String,
      default: '¥'
    }
  },
  emits: ['inputChange', 'changeStep', 'inputClick', 'change', 'update:modelValue'],

  setup(props, { emit }) {
    const currentIndex: Ref<number | null | string> = ref(null);
    const inputValue: Ref<string | undefined | number> = ref();
    const stepValue: Ref<number> = ref(props.cardAmountMin);
    const money: Ref<number | string | undefined> = ref(props.modelValue);
    const handleClick = (item: { price: number | string }, index: number) => {
      currentIndex.value = index;
      inputValue.value = '';
      emit('change', item);
    };
    const change = (event: Event) => {
      let input = event.target as HTMLInputElement;
      let val = input.value.replace(/[^\d]/g, '');
      inputValue.value = val;
      if (Number(val) > props.cardAmountMax) {
        inputValue.value = props.cardAmountMax;
      }
      if (Number(val) < props.cardAmountMin) {
        inputValue.value = props.cardAmountMin;
      }
      emit('inputChange', Number(inputValue.value));
    };
    const inputClick = () => {
      currentIndex.value = 'input';
      emit('update:modelValue', 0);
      emit('inputClick');
    };
    const changeStep = (value: number) => {
      stepValue.value = value;
      emit('changeStep', stepValue.value); // 返回数量
    };
    watch(
      () => props.modelValue,
      (value) => {
        console.log('value', value);
        money.value = value;
      }
    );
    return {
      handleClick,
      changeStep,
      change,
      inputClick,
      stepValue,
      currentIndex,
      inputValue,
      money
    };
  }
});
</script>
