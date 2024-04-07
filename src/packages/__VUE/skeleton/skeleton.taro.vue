<template>
  <view v-if="!loading">
    <slot></slot>
  </view>
  <view v-else class="nut-skeleton">
    <view v-if="animated" class="nut-skeleton-animation"></view>
    <view class="nut-skeleton-content">
      <nut-avatar v-if="avatar" :class="avatarClass" :shape="avatarShape" :style="avatarStyle"></nut-avatar>

      <view class="nut-skeleton-content__line" :style="{ width }">
        <view v-if="title" :class="getBlockClass('nut-skeleton-blockTitle')" :style="{ height }"></view>
        <view v-for="_ in Number(row)" :key="_" :class="getBlockClass('nut-skeleton-blockLine')" :style="{ height }" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import NutAvatar from '../avatar/index.taro.vue'
import type { AvatarShape } from '../avatar/types'
import { computed } from 'vue'

defineOptions({
  name: 'NutSkeleton'
})

export type SkeletonProps = Partial<{
  width: string
  height: string
  animated: boolean
  avatar: boolean
  avatarShape: AvatarShape
  avatarSize: string
  loading: boolean
  round: boolean
  row: string | number
  title: boolean
}>

const props = withDefaults(defineProps<SkeletonProps>(), {
  width: '100px',
  height: '15px',
  animated: false,
  avatar: false,
  avatarShape: 'round',
  avatarSize: '50px',
  loading: true,
  round: false,
  row: '1',
  title: true
})

const avatarClass = computed(() => {
  const prefixCls = 'avatarClass'
  return {
    [prefixCls]: true,
    [`${prefixCls}--${props.avatarShape}`]: props.avatarShape
  }
})

const getBlockClass = (prefixCls: string) => {
  return {
    [prefixCls]: true,
    [`${prefixCls}--round`]: props.round
  }
}

const avatarStyle = computed(() => {
  return {
    width: props.avatarSize,
    height: props.avatarSize
  }
})
</script>
