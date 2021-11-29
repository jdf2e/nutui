<template>
  <swiper v-bind="attrs">
    <slot></slot>
  </swiper>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
const { create, componentName } = createComponent('swiper');
export default create({
  inheritAttrs: false,
  props: {},
  emits: [],

  setup(props, context) {
    const attrs = context.attrs;
    return { attrs };
  }
});
</script>
