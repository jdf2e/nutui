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
import { h, onMounted, CSSProperties } from 'vue';
import { computed, PropType, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('skeleton');

export type avatarShape = 'round' | 'square';

export default create({
  props: {
    //每行宽度
    width: {
      type: String,
      default: '100px'
    },
    //每行高度
    height: {
      type: String,
      default: '100px'
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
      type: String as PropType<avatarShape>,
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

  setup(props) {
    const { avatarShape, round, avatarSize } = toRefs(props);

    const avatarClass = computed(() => {
      const prefixCls = 'avatarClass';
      return {
        [prefixCls]: true,
        [`${prefixCls}--${avatarShape.value}`]: avatarShape.value
      };
    });

    const blockClass = computed(() => {
      const prefixCls = 'blockClass';
      return {
        [prefixCls]: true,
        [`${prefixCls}--round`]: round.value
      };
    });

    const getStyle = (): CSSProperties => {
      const style: CSSProperties = {};
      if (avatarSize?.value) {
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

    onMounted(() => {
      console.log('row', props.row);
    });

    return {
      avatarShape,
      avatarClass,
      blockClass,
      getStyle
    };
  }
});
</script>
