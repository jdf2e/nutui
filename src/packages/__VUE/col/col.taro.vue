<template>
  <view :class="classes" :style="style">
    <slot></slot>
  </view>
</template>
<script setup lang="ts">
import { computed, inject } from 'vue';
import { LAYOUT_KEY } from '../layout/types';

defineOptions({
  name: 'NutCol'
});

export type ColProps = Partial<{
  span: string | number;
  offset: string | number;
}>;

const props = withDefaults(defineProps<ColProps>(), {
  span: 24,
  offset: 0
});

const prefixCls = 'nut-col';
const gutter = inject(LAYOUT_KEY) as number;
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
</script>
