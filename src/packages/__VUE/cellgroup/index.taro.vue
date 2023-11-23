<template>
  <view class="nut-cell-group">
    <slot v-if="$slots.title" name="title"></slot>
    <view v-else-if="title" class="nut-cell-group__title">{{ title }}</view>
    <slot v-if="$slots.desc" name="desc"></slot>
    <view v-else-if="desc" class="nut-cell-group__desc">{{ desc }}</view>
    <view class="nut-cell-group__wrap">
      <slot></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils';
const { create } = createComponent('cell-group');
export default create({
  props: {
    title: { type: String, default: '' },
    desc: { type: String, default: '' }
  }
});
</script>
