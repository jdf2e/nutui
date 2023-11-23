<template>
  <view :class="classes">
    <template v-for="item in size" :key="item">
      <view v-if="item === current" class="nut-indicator--number">
        {{ (fillZero && padZero(item)) || item }}
      </view>
      <view v-else class="nut-indicator--dot"></view>
    </template>
  </view>
</template>
<script lang="ts">
import { PropType, computed } from 'vue';
import { createComponent } from '@/packages/utils';
import { padZero } from '@/packages/utils/util';
import { IndicatorAlign } from './types';
const { create } = createComponent('indicator');

export default create({
  props: {
    size: {
      type: Number,
      default: 3
    },
    current: {
      type: Number,
      default: 1
    },
    block: {
      type: Boolean,
      default: false
    },
    align: {
      type: String as PropType<IndicatorAlign>,
      default: 'center'
    },
    fillZero: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const classes = computed(() => {
      const prefixCls = 'nut-indicator';
      return {
        [prefixCls]: true,
        [`${prefixCls}--block`]: props.block,
        [`${prefixCls}--align__${props.align}`]: props.block && props.align
      };
    });
    return { classes, padZero };
  }
});
</script>
