<template>
  <view :class="classes" :style="style" @click="handleClick">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, inject } from 'vue';
import { createComponent } from '../../utils/create';
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
  emits: ['click'],
  setup(props, { emit }) {
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
    const handleClick = (evt: MouseEvent) => {
      evt.stopPropagation();
      emit('click', evt);
    };
    return {
      classes,
      style,
      handleClick
    };
  }
});
</script>
