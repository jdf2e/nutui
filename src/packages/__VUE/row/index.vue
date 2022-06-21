<template>
  <view :class="getClasses()" @click="handleClick">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { provide } from 'vue';
import { createComponent } from '@/packages/utils/create';
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
  emits: ['click'],
  setup(props, { emit }) {
    const prefixCls = componentName;
    provide('gutter', props.gutter);
    const getClass = (prefix: string, type: string) => {
      return prefix ? (type ? `nut-row-${prefix}-${type}` : '') : `nut-row-${type}`;
    };
    const getClasses = () => {
      return `
              ${getClass('', props.type)}
              ${getClass('justify', props.justify)}
              ${getClass('align', props.align)}
              ${getClass('flex', props.flexWrap)}
              ${prefixCls}
              `;
    };
    const handleClick = (evt: MouseEvent) => {
      evt.stopPropagation();
      emit('click', evt);
    };
    return {
      getClasses,
      handleClick
    };
  }
});
</script>
