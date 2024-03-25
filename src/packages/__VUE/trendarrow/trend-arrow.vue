<template>
  <view class="nut-trend-arrow">
    <span v-if="!arrowLeft" class="nut-trend-arrow-icon-before nut-trend-arrow-rate" :style="calcStyle">{{
      calcRate
    }}</span>
    <slot v-if="Number(rate) !== 0 && isPositive" name="up-icon">
      <TriangleUp :color="riseColor" />
    </slot>
    <slot v-if="Number(rate) !== 0 && !isPositive" name="down-icon">
      <TriangleDown :color="dropColor" />
    </slot>
    <span v-if="arrowLeft" class="nut-trend-arrow-icon-after nut-trend-arrow-rate" :style="calcStyle">{{
      calcRate
    }}</span>
  </view>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { myFixed } from '@/packages/utils/util';
import { TriangleUp, TriangleDown } from '@nutui/icons-vue';

defineOptions({
  name: 'NutTrendArrow'
});

export type TrendArrowProps = Partial<{
  rate: number;
  digits: number;
  showSign: boolean;
  showZero: boolean;
  arrowLeft: boolean;
  syncTextColor: boolean;
  textColor: string;
  riseColor: string;
  dropColor: string;
}>;

const props = withDefaults(defineProps<TrendArrowProps>(), {
  rate: 0,
  digits: 2,
  showSign: false,
  showZero: false,
  arrowLeft: false,
  syncTextColor: true,
  textColor: '#333',
  riseColor: '#fa2c19',
  dropColor: '#64b578'
});

const isPositive = computed(() => {
  return props.rate > 0 ? true : false;
});
const calcRate = computed(() => {
  const absRate = Math.abs(props.rate);
  if (!props.showZero && props.rate === 0) {
    return '--';
  }
  let resultRate = `${props.showSign && props.rate !== 0 ? (isPositive.value ? '+' : '-') : ''}${myFixed(
    Number(absRate),
    props.digits
  )}%`;

  return resultRate;
});
const calcStyle = computed(() => {
  return {
    color:
      props.rate === 0
        ? props.textColor
        : props.syncTextColor
          ? isPositive.value
            ? props.riseColor
            : props.dropColor
          : props.textColor
  };
});
</script>
