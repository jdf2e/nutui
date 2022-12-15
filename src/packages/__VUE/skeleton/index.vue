<template>
  <view v-if="!loading">
    <slot></slot>
  </view>
  <view v-else class="nut-skeleton">
    <view class="nut-skeleton-animation" v-if="animated"></view>
    <view class="nut-skeleton-content">
      <nut-avatar v-if="avatar" :class="avatarClass" :shape="avatarShape" :style="getStyle()"></nut-avatar>

      <view class="nut-skeleton-content__line" :style="{ width }">
        <view v-if="title" :class="getBlockClass('nut-skeleton-blockTitle')" :style="{ height }"></view>
        <view v-for="_ in Number(row)" :key="_" :class="getBlockClass('nut-skeleton-blockLine')" :style="{ height }" />
      </view>
    </view>
  </view>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { component } from './common';
import Avatar from '../avatar/index.vue';
const { create } = createComponent('skeleton');
export default create(
  component({
    [Avatar.name]: Avatar
  })
);
</script>
