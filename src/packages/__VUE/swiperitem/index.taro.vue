<template>
  <swiper-item :class="classes">
    <slot></slot>
  </swiper-item>
</template>

<script lang="ts">
import { computed, reactive, inject, getCurrentInstance, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('swiper-item');
export default create({
  props: {},
  setup(props, { slots }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    return {
      classes
    };
  }
});
</script>

<style scoped lang="scss">
@import 'index.scss';
</style>
