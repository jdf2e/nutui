<template>
  <view class="nut-row" :class="getClassObject()">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, provide } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('row');

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
    tag: {
      type: String,
      default: 'div'
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
  setup(props, { slots }) {
    provide('gutter', props.gutter);
    const getClass = (prefix, type) => {
      return prefix
        ? type
          ? `nut-row-${prefix}-${type}`
          : ''
        : `nut-row-${type}`;
    };
    const getClassObject = () => {
      return `
              ${getClass('', props.type)}
              ${getClass('justify', props.justify)}
              ${getClass('align', props.align)}
              ${getClass('flex', props.flexWrap)}
              `;
    };

    return {
      getClassObject
    };
  }
});
</script>
<style lang="scss">
@import 'index.scss';
</style>
