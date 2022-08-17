<template>
  <view :class="classes" :style="style">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, inject } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('col');

export default create({
  props: {
    span: {
      type: [String, Number],
      default: '24'
    },
    offset: {
      type: [String, Number],
      default: '0'
    }
  },
  emits: [],
  setup(props) {
    const prefixCls = componentName;
    const gutter = inject('gutter') as number;
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        [prefixCls + '-gutter']: gutter,
        ['nut-col-' + props.span]: true,
        ['nut-col-offset-' + props.offset]: true
      };
    });
    const style = computed(() => {
      return {
        paddingLeft: gutter / 2 + 'px',
        paddingRight: gutter / 2 + 'px'
      };
    });
    return {
      classes,
      style
    };
  }
});
</script>
