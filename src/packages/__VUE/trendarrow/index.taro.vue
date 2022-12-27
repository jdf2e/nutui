<template>
  <view :class="classes">
    <span v-if="!arrowLeft" class="nut-trend-arrow-icon-before nut-trend-arrow-rate" :style="calcStyle">{{
      calcRate
    }}</span>
    <slot name="upIcon" v-if="Number(rate) !== 0 && rateTrend">
      <TriangleUp :color="riseColor" />
    </slot>
    <slot name="downIcon" v-if="Number(rate) !== 0 && !rateTrend">
      <TriangleDown :color="dropColor" />
    </slot>
    <span v-if="arrowLeft" class="nut-trend-arrow-icon-after nut-trend-arrow-rate" :style="calcStyle">{{
      calcRate
    }}</span>
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { myFixed } from '@/packages/utils/util';
import { createComponent } from '@/packages/utils/create';
import { TriangleUp, TriangleDown } from '@nutui/icons-vue-taro';
const { componentName, create } = createComponent('trend-arrow');

export default /* @__PURE__ */ create({
  components: { TriangleUp, TriangleDown },
  props: {
    rate: {
      type: Number,
      default: 0
    },
    digits: {
      type: Number,
      default: 2
    },
    showSign: {
      type: Boolean,
      default: false
    },
    showZero: {
      type: Boolean,
      default: false
    },
    arrowLeft: {
      type: Boolean,
      default: false
    },
    syncTextColor: {
      type: Boolean,
      default: true
    },
    textColor: {
      type: String,
      default: '#333'
    },
    riseColor: {
      type: String,
      default: '#fa2c19'
    },
    dropColor: {
      type: String,
      default: '#64b578'
    }
  },
  setup(props) {
    const state = reactive({
      rateTrend: props.rate > 0 ? true : false
    });
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    const calcRate = computed(() => {
      const { rate, digits, showSign, showZero } = props;
      state.rateTrend = rate > 0 ? true : false;
      const absRate = Math.abs(rate);
      if (!showZero && rate === 0) {
        return '--';
      }
      let resultRate = `${showSign && rate !== 0 ? (state.rateTrend ? '+' : '-') : ''}${myFixed(
        Number(absRate),
        digits
      )}%`;

      return resultRate;
    });
    const calcStyle = computed(() => {
      const { dropColor, riseColor, syncTextColor, textColor, rate } = props;
      let style = {
        color: rate === 0 ? textColor : syncTextColor ? (state.rateTrend ? riseColor : dropColor) : textColor
      };
      return style;
    });
    return { ...toRefs(state), classes, calcRate, calcStyle };
  }
});
</script>
