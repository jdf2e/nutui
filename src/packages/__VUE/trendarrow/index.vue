<template>
  <view :class="classes" @click="handleClick">
    <nut-icon
      v-if="arrowLeft && Number(rate) !== 0"
      class="nut-trendarrow-icon-before"
      :size="calcIconProps.size"
      :name="calcIconProps.name"
      :color="calcIconProps.color"
    />
    <span :style="calcStyle" class="nut-trendarrow-rate">{{ calcRate }}</span
    ><nut-icon
      v-if="!arrowLeft && Number(rate) !== 0"
      class="nut-trendarrow-icon-after"
      :size="calcIconProps.size"
      :name="calcIconProps.name"
      :color="calcIconProps.color"
    />
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { myFixed } from '@/packages/utils/util';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('trendarrow');

export default create({
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
    },
    iconSize: {
      type: String,
      default: '12px'
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
    const calcIconProps = computed(() => {
      const { dropColor, riseColor, iconSize } = props;

      let iconProps = {
        name: state.rateTrend ? 'triangle-up' : 'triangle-down',
        color: state.rateTrend ? riseColor : dropColor,
        size: iconSize
      };
      return iconProps;
    });
    return { ...toRefs(state), classes, calcRate, calcStyle, calcIconProps };
  }
});
</script>
