<template>
  <view :class="classes" :style="style">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { reactive, computed, inject } from 'vue';
import { createComponent } from '@/utils/create';
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
  setup(props, { emit, slots }) {
    const prefixCls = componentName;
    const gutter = inject('gutter');
    const classes = computed(() => {
      return {
        [prefixCls]: true,
        ['nut-col-' + props.span]: true,
        ['nut-col-offset-' + props.offset]: true
      };
    });
    const style = computed(() => {
      return {
        paddingLeft: gutter + 'px',
        paddingRight: gutter + 'px'
      };
    });
    return {
      classes,
      style
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
