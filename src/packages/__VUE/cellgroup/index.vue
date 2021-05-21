<template>
  <view :class="classes">
    <view v-if="title" class="nut-cell-group__title">{{ title }}</view>
    <view class="nut-cell-group__warp">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('cell-group');
export default create({
  props: {
    title: { type: String, default: '' }
  },
  setup() {
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

<style lang="scss">
@import 'index.scss';
</style>
