<template>
  <view v-if="!loading">
    <slot></slot>
  </view>
  <view v-else class="skeleton">
    <view class="skeleton-animation"></view>
    <view class="content">
      <nut-avatar
        v-if="avatar"
        :class="avatarClass"
        :shape="avatarShape"
        :style="getStyle()"
        bg-color="rgb(239, 239, 239)"
      ></nut-avatar>

      <view v-if="Number(row) == 1" :class="blockClass" :style="{ width, height }"> </view>

      <view class="content-line">
        <view v-if="title" class="title"></view>
        <view v-for="(item, index) in Number(row)" :key="index" :class="blockClass" :style="{ width, height }"> </view
      ></view>
    </view>
  </view>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
import { component } from './common';
const { create } = createComponent('skeleton');
export default create(component);
</script>
