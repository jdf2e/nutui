<template>
  <view v-if="!loading">
    <slot></slot>
  </view>
  <view v-else class="skeleton">
    <view class="skeleton-animation" v-if="animated"></view>
    <view class="content">
      <nut-avatar v-if="avatar" :class="avatarClass" :shape="avatarShape" :style="getStyle()"></nut-avatar>

      <view class="content-line" :style="{ width }">
        <view v-if="title" :class="getBlockClass('blockTitle')" :style="{ height }"></view>
        <view v-for="_ in Number(row)" :key="_" :class="getBlockClass('blockLine')" :style="{ height }" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
const { create } = createComponent('skeleton');
export default create(component);
</script>
