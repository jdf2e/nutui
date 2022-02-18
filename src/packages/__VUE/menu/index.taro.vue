<template>
  <view :class="classes">
    <view class="nut-menu__bar" :class="{ opened: opened }" ref="barRef">
      <template v-for="(item, index) in children" :key="index">
        <view
          class="nut-menu__item"
          @click="!item.disabled && toggleItem(index)"
          :class="{ disabled: item.disabled, active: item.state.showPopup }"
          :style="{ color: item.state.showPopup ? activeColor : '' }"
        >
          <view class="nut-menu__title" :class="{ active: item.state.showPopup }">
            <view class="nut-menu__title-text">{{ item.renderTitle() }}</view>
            <nut-icon :name="item.titleIcon" size="10" class="nut-menu__title-icon"></nut-icon>
          </view>
        </view>
      </template>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { reactive, provide, computed, ref, Ref, unref } from 'vue';
import { createComponent } from '../../utils/create';
import Taro from '@tarojs/taro';
const { componentName, create } = createComponent('menu');
export default create({
  props: {
    activeColor: {
      type: String,
      default: ''
    },
    overlay: {
      type: Boolean,
      default: true as const
    },
    duration: {
      type: [Number, String],
      default: 0.3
    }
  },
  setup(props, { emit, slots }) {
    const barRef = ref<HTMLElement>();
    const offset = ref(0);

    const useChildren = () => {
      const publicChildren: any[] = reactive([]);
      const internalChildren: any[] = reactive([]);

      const linkChildren = (value?: any) => {
        const link = (child: any) => {
          if (child.proxy) {
            internalChildren.push(child);
            publicChildren.push(child.proxy as any);
          }
        };

        provide(
          'menuParent',
          Object.assign(
            {
              link,
              children: publicChildren,
              internalChildren
            },
            value
          )
        );
      };

      return {
        children: publicChildren,
        linkChildren
      };
    };

    const { children, linkChildren } = useChildren();

    const opened = computed(() => children.some((item) => item.state.showWrapper));

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const updateOffset = () => {
      if (barRef.value) {
        setTimeout(() => {
          Taro.createSelectorQuery()
            .select('.nut-menu__bar.opened')
            .boundingClientRect((rect) => {
              offset.value = rect.bottom;
            })
            .exec();
        }, 100);
      }
    };

    linkChildren({ props, offset });

    const toggleItem = (active: number) => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset();
          item.toggle();
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true });
        }
      });
    };

    return {
      toggleItem,
      children,
      opened,
      classes,
      barRef
    };
  }
});
</script>
