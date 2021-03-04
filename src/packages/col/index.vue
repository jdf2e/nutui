<template>
  <view class="nut-col" :class="classObject" :style="styleObj">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { reactive, inject } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('col');

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
    const gutter = inject('gutter');
    const classObject = reactive({
      ['nut-col-' + props.span]: true,
      ['nut-col-offset-' + props.offset]: true
    });
    const styleObj = reactive({
      'padding-left': gutter + 'px',
      'padding-right': gutter + 'px'
    });
    return {
      classObject,
      styleObj
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
