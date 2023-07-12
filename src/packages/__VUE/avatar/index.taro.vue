<template>
  <view :style="styles" :class="classes" ref="avatarRef">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs, computed, inject, ref, PropType, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
import type { AvatarShape, AvatarSize } from './types';
const { create } = createComponent('avatar');
export default create({
  props: {
    size: {
      type: [String, Number] as PropType<AvatarSize | string | number>,
      default: 'normal'
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'round'
    },
    bgColor: {
      type: String,
      default: '#eee'
    },
    color: {
      type: String,
      default: '#666'
    }
  },
  setup(props) {
    const { size, shape, bgColor, color } = toRefs(props);
    const sizeValue = ['large', 'normal', 'small'];
    const avatarGroup: any = inject('avatarGroup', null);
    const avatarRef = ref(null);
    const index = ref(1);

    const classes = computed(() => {
      const prefixCls = 'nut-avatar';
      return {
        [prefixCls]: true,
        [`nut-avatar-${size.value || avatarGroup?.props?.size || 'normal'}`]: true,
        [`nut-avatar-${shape.value || avatarGroup?.props?.shape || 'round'}`]: true
      };
    });

    const styles = computed(() => {
      return {
        width: size.value in sizeValue ? '' : `${size.value}px`,
        height: size.value in sizeValue ? '' : `${size.value}px`,
        backgroundColor: `${bgColor.value}`,
        color: `${color.value}`,
        marginLeft: index.value !== 1 && avatarGroup?.props?.span ? `${avatarGroup?.props?.span}px` : '',
        zIndex: avatarGroup?.props?.zIndex == 'right' ? `${Math.abs(avatarGroup?.props?.maxCount - index.value)}` : ''
      } as CSSProperties;
    });

    return {
      classes,
      styles,
      avatarRef
    };
  }
});
</script>
