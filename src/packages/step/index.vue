<template>
  <view :class="classes">
    <view class="nut-step-head">
      <view class="nut-step-line"></view>
      <view class="nut-step-icon" :class="[icon ? 'is-icon' : 'is-text']">
        <template v-if="icon">
          <nut-icon class="nut-step-icon-inner" :class="icon" />
        </template>
        <template v-else>
          <view class="nut-step-inner">11</view>
        </template>
      </view>
    </view>
    <view class="nut-step-main">
      <view class="nut-step-title">
        {{ title }}
      </view>
      <view class="nut-step-content">
        {{ content }}
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { reactive, computed, nextTick, ref } from 'vue';
import { createComponent } from '@/utils/create';
const { create, componentName } = createComponent('step');

export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: null
    }
  },
  setup(props, { emit, slots }) {
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
