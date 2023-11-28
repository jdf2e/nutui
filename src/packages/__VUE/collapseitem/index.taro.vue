<template>
  <view :class="classes">
    <view
      :class="['nut-collapse-item__title', { 'nut-collapse-item__title--disabled': disabled }]"
      @click="handleClick"
    >
      <view class="nut-collapse-item__title-main">
        <view class="nut-collapse-item__title-main-value">
          <slot v-if="$slots.title" name="title"></slot>
          <template v-else>
            <view class="nut-collapse-item__title-mtitle" v-html="title"></view>
          </template>
          <view v-if="label" class="nut-collapse-item__title-label">{{ label }}</view>
        </view>
      </view>
      <view v-if="$slots.value" class="nut-collapse-item__title-sub">
        <slot name="value"></slot>
      </view>
      <view v-else class="nut-collapse-item__title-sub" v-html="value"></view>
      <view
        :class="['nut-collapse-item__title-icon', { 'nut-collapse-item__title-icon--expanded': expanded }]"
        :style="{ transform: 'rotate(' + (expanded ? rotate : 0) + 'deg)' }"
      >
        <slot v-if="$slots.icon" name="icon"></slot>
        <component :is="renderIcon(icon)" v-else></component>
      </view>
    </view>

    <view v-if="$slots.extra" class="nut-collapse__item-extraWrapper">
      <div class="nut-collapse__item-extraWrapper__extraRender">
        <slot name="extra"></slot>
      </div>
    </view>
    <view
      ref="wrapperRef"
      class="nut-collapse__item-wrapper"
      :style="{
        willChange: 'height',
        height: wrapperHeight
      }"
    >
      <view :id="`nut-collapse__item-${refRandomId}`" class="nut-collapse__item-wrapper__content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, computed, watch, onMounted, inject } from 'vue';
import { DownArrow } from '@nutui/icons-vue-taro';
import { createComponent, renderIcon } from '@/packages/utils/create';
import Taro from '@tarojs/taro';
import { COLLAPSE_KEY } from '../collapse/types';
const { create } = createComponent('collapse-item');

export default create({
  props: {
    collapseRef: {
      type: Object
    },
    title: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: [Number, String],
      default: -1,
      required: true
    },
    border: {
      type: Boolean,
      default: true
    },
    icon: {
      type: Object,
      default: () => DownArrow
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  setup(props, { slots }) {
    const wrapperRef: any = ref(null);
    const refRandomId = Math.random().toString(36).slice(-8);
    const target = `#nut-collapse__item-${refRandomId}`;
    const currentHeight = ref<string>('auto');
    const inAnimation = ref(false);
    const timeoutId = ref<any>('');
    const parent = inject(COLLAPSE_KEY);
    const classes = computed(() => {
      const prefixCls = 'nut-collapse-item';
      return {
        [prefixCls]: true,
        [prefixCls + '__border']: props.border
      };
    });

    onMounted(() => {
      setTimeout(() => {
        getRect(target).then((res: any) => {
          if (res?.height) {
            currentHeight.value = `${res.height}px`;
          }
        });
      }, 100);
    });

    watch(
      () => slots.default?.(),
      () => {
        setTimeout(() => {
          getRect(target).then((res: any) => {
            if (res?.height) {
              currentHeight.value = `${res.height}px`;
            }
          });
        }, 200);
      }
    );

    const getRect = (selector: string) => {
      return new Promise((resolve) => {
        Taro.createSelectorQuery()
          .select(selector)
          .boundingClientRect()
          .exec((rect = []) => {
            resolve(rect[0]);
          });
      });
    };

    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(props.name);
      }
      return false;
    });

    const wrapperHeight = ref(expanded.value ? 'auto' : '0px');

    const handleClick = () => {
      if (!inAnimation.value) {
        parent && parent.updateVal(props.name);
      }
    };

    const toggle = (open: boolean) => {
      // 连续切换状态时，清除打开的后续操作
      if (timeoutId.value) {
        clearTimeout(timeoutId.value);
        timeoutId.value = '';
      }
      const start = open ? '0px' : currentHeight.value;
      const end = open ? currentHeight.value : '0px';
      inAnimation.value = true;
      wrapperHeight.value = start;
      setTimeout(() => {
        wrapperHeight.value = end;
        inAnimation.value = false;
        if (open) {
          timeoutId.value = setTimeout(() => {
            wrapperHeight.value = 'auto';
          }, 300);
        }
      }, 100);
    };

    watch(expanded, toggle);

    return {
      refRandomId,
      classes,
      renderIcon,
      wrapperRef,
      handleClick,
      wrapperHeight,
      expanded
    };
  }
});
</script>
