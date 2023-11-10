<template>
  <view ref="avatarGroupRef" class="nut-avatar-group" :style="styles">
    <slot></slot>
    <nut-avatar
      v-if="foldCount > 0"
      class="avater-fold"
      :color="maxColor"
      :bg-color="maxBgColor"
      :size="size"
      :shape="shape"
      :style="{ magrinLeft: `${span}px` }"
    >
      {{ maxContent || foldCount }}
    </nut-avatar>
  </view>
</template>
<script lang="ts">
import { onMounted, provide, ref, onUnmounted, nextTick, unref, PropType, computed } from 'vue';
import Taro from '@tarojs/taro';
import { createComponent } from '@/packages/utils/create';
import type { AvatarShape, AvatarSize, AvatarZIndex } from '../avatar/types';
import NutAvatar from '../avatar/index.taro.vue';
const { create } = createComponent('avatar-group');
export default create({
  components: {
    NutAvatar
  },
  props: {
    maxContent: {
      type: String,
      default: ''
    },
    maxCount: {
      type: [Number, String],
      default: ''
    },
    maxBgColor: {
      type: String,
      default: '#eee'
    },
    maxColor: {
      type: String,
      default: '#666'
    },
    size: {
      type: [String, Number] as PropType<AvatarSize | string | number>,
      default: 'normal'
    },
    shape: {
      type: String as PropType<AvatarShape>,
      default: 'round'
    },
    span: {
      type: [String, Number],
      default: '-8'
    },
    zIndex: {
      type: String as PropType<AvatarZIndex>,
      default: 'left'
    }
  },
  setup(props) {
    const avatarGroupRef = ref<any>(null);
    const foldCount = ref(99);
    const observer = ref<MutationObserver>();
    const styles = computed(() => {
      return {
        marginLeft: -1 * Number(props.span) + 'px'
      };
    });

    // 折叠头像
    const foldAvatar = (element: any) => {
      let count = 0;

      const children = element.children;
      if (props.zIndex === 'right') {
        for (let i = 0; i < Number(props.maxCount); i++) {
          const child = children[i];
          child.style.zIndex = `${99 - i}`;
        }
      }
      for (let i = Number(props.maxCount); i < children.length; i++) {
        const child = children[i] as any;
        let className;
        if (Taro.getEnv() === 'WEB') {
          className = child.className;
        } else {
          className = child.props.class;
        }
        if (className.includes('avater-fold')) {
          continue;
        }
        child.style.display = 'none';
        count++;
      }
      foldCount.value = count;
    };

    // 监听 default slot
    const watchDefaultSlot = (element: any) => {
      // 观察器的配置（需要观察什么变动）
      const config = { attributes: false, childList: true, subtree: true };

      // 当观察到变动时执行的回调函数
      const callback = function (mutations: MutationRecord[]) {
        let sig = false;
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutations) {
          if (mutation.type === 'childList') {
            sig = true;
            break;
          }
        }
        if (sig) foldAvatar(element);
      };

      // 创建一个观察器实例并传入回调函数
      const observer = new MutationObserver(callback);
      // 以上述配置开始观察目标节点
      observer.observe(element, config);
      return observer;
    };

    onMounted(() => {
      if (props.maxCount) {
        nextTick(() => {
          let element = unref(avatarGroupRef);
          if (Taro.getEnv() === 'WEB') {
            if (element && element.$el) {
              element = element.$el;
            }
          }
          foldAvatar(element);
          observer.value = watchDefaultSlot(element);
        });
      }
    });

    onUnmounted(() => {
      // 之后，可停止观察
      observer.value?.disconnect();
    });

    provide('avatarGroup', {
      props,
      avatarGroupRef
    });

    return {
      styles,
      foldCount,
      avatarGroupRef
    };
  }
});
</script>
