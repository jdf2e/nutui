<template>
  <view v-if="!loading">
    <slot></slot>
  </view>
  <view v-else class="nut-skeleton">
    <view v-if="animated" class="nut-skeleton-animation"></view>
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
import { createComponent } from '@/packages/utils';
import NutAvatar from '../avatar/index.taro.vue';
import { AvatarShape } from '../avatar/types';
import { CSSProperties, PropType, computed, toRefs } from 'vue';
const { create } = createComponent('skeleton');
export default create({
  components: {
    NutAvatar
  },
  props: {
    //每行宽度
    width: {
      type: String,
      default: '100px'
    },
    //每行高度
    height: {
      type: String,
      default: '15px'
    },
    //是否显示动画
    animated: {
      type: Boolean,
      default: false
    },
    //头像
    avatar: {
      type: Boolean,
      default: false
    },
    //头像形状：正方形/圆形
    avatarShape: {
      type: String as PropType<AvatarShape>,
      default: 'round'
    },
    //头像大小
    avatarSize: {
      type: String,
      default: '50px'
    },
    //是否显示骨架屏
    loading: {
      type: Boolean,
      default: true
    },
    //标题/段落 圆角风格
    round: {
      type: Boolean,
      default: false
    },

    //显示段落行数
    row: {
      type: String,
      default: '1'
    },

    //是否显示段落标题
    title: {
      type: Boolean,
      default: true
    }
  },

  setup(props: any) {
    const { avatarShape, round, avatarSize } = toRefs(props);

    const avatarClass = computed(() => {
      const prefixCls = 'avatarClass';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${avatarShape.value}`]: avatarShape.value
      };
    });

    const getBlockClass = (prefixCls: string) => {
      return {
        [prefixCls]: true,
        [`${prefixCls}--round`]: round.value
      };
    };

    const getStyle = (): CSSProperties => {
      if (avatarSize.value) {
        return {
          width: avatarSize.value,
          height: avatarSize.value
        };
      }
      return {
        width: '50px',
        height: '50px'
      };
    };

    return {
      avatarShape,
      avatarClass,
      getBlockClass,
      getStyle
    };
  }
});
</script>
