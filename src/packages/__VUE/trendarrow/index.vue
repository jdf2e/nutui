<template>
  <view :class="classes" @click="handleClick" :style="calcStyle">
    <nut-icon
      v-if="arrowLeft && Number(rate) !== 0"
      font-class-name="iconfont"
      class-prefix="icon"
      :size="calcIconProps.size"
      class="nut-trendarrow-icon-before"
      :name="calcIconProps.name"
      :color="calcIconProps.color"
    />{{ calcRate
    }}<nut-icon
      v-if="!arrowLeft && Number(rate) !== 0"
      font-class-name="iconfont"
      class-prefix="icon"
      class="nut-trendarrow-icon-after"
      :size="calcIconProps.size"
      :name="calcIconProps.name"
      :color="calcIconProps.color"
    />
  </view>
</template>
<script lang="ts">
import { reactive, toRefs, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('trendarrow');
import './font/iconfont.css';
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
    showTextColor: {
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
  emits: ['click'],

  setup(props, { emit }) {
    const state = reactive({
      rateTrend: true
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
      let resultRate = `${showSign && rate !== 0 ? (state.rateTrend ? '+' : '-') : ''}${Number(absRate).toFixed(
        digits
      )}%`;

      return resultRate;
    });
    const calcStyle = computed(() => {
      const { dropColor, riseColor, showTextColor, textColor, rate } = props;
      let style = {
        color: rate === 0 ? textColor : showTextColor ? (state.rateTrend ? riseColor : dropColor) : textColor
      };
      return style;
    });

    const calcIconProps = computed(() => {
      const { dropColor, riseColor } = props;

      let iconProps = {
        name: state.rateTrend ? 'shangjiantou' : 'xiajiantou',
        color: state.rateTrend ? riseColor : dropColor,
        size: '8px'
      };
      return iconProps;
    });
    return { ...toRefs(state), classes, calcRate, calcStyle, calcIconProps };
  }
});
</script>
