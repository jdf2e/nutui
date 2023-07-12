<template>
  <view :class="classes" ref="avatarGroupRef">
    <slot></slot>
    <nut-avatar
      v-if="foldCount > 0"
      class="avater-fold"
      :color="maxColor"
      :bgColor="maxBgColor"
      :size="size || 'normal'"
      :shape="shape || 'normal'"
    >
      {{ maxContent || foldCount }}
    </nut-avatar>
  </view>
</template>
<script lang="ts">
import { onMounted, computed, provide, ref, onUnmounted, nextTick, unref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('avatar-group');
import Avatar from '../avatar/index.taro.vue';
import Taro from '@tarojs/taro';
export default create({
  components: {
    [Avatar.name]: Avatar
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
      type: String,
      default: ''
    },
    shape: {
      type: String,
      default: 'round'
    },
    span: {
      type: String,
      default: '-8'
    },
    zIndex: {
      type: String,
      default: 'left'
    }
  },
  setup(props) {
    const avatarGroupRef = ref<any>(null);
    const index = ref(0);
    const foldCount = ref(0);
    const observer = ref<MutationObserver>();
    // const sizeValue = ['large', 'normal', 'small'];
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    // 折叠头像
    const foldAvatar = (element: any) => {
      foldCount.value = 0;

      const childrens = element.children;
      for (let i = props.maxCount as number; i < childrens.length; i++) {
        const children = childrens[i] as any;
        let className;
        if (Taro.getEnv() === 'WEB') {
          className = children.className;
        } else {
          className = children.props.class;
        }
        if (className.includes('avater-fold')) {
          continue;
        }
        children.style.display = 'none';
        foldCount.value += 1;
      }
    };

    // 监听 default slot
    const watchDefaultSlot = (element: any) => {
      // 观察器的配置（需要观察什么变动）
      const config = { attributes: false, childList: true, subtree: true };

      // 当观察到变动时执行的回调函数
      const callback = function (mutations: MutationRecord[]) {
        // Use traditional 'for loops' for IE 11
        for (let mutation of mutations) {
          if (mutation.type === 'childList') {
            foldAvatar(element);
          }
        }
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
      avatarGroupRef,
      index
    });

    return {
      classes,
      // styles,
      foldCount,
      avatarGroupRef
    };
  }
});
</script>
