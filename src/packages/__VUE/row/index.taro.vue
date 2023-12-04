<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { provide, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { LAYOUT_KEY } from '../layout/types';
const { create } = createComponent('row');

export default create({
  props: {
    type: {
      type: String,
      default: ''
    },
    gutter: {
      type: [String, Number],
      default: ''
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: {
      type: String,
      default: 'flex-start'
    },
    flexWrap: {
      type: String,
      default: 'nowrap'
    }
  },
  setup(props) {
    const prefixCls = 'nut-row';
    provide(LAYOUT_KEY, props.gutter);
    const getClass = (prefix: string, type: string) => {
      return prefix ? (type ? `nut-row-${prefix}-${type}` : '') : `nut-row-${type}`;
    };
    const classes = computed(() => {
      return [
        prefixCls,
        getClass('', props.type),
        getClass('justify', props.justify),
        getClass('align', props.align),
        getClass('flex', props.flexWrap)
      ];
    });
    return {
      classes
    };
  }
});
</script>
