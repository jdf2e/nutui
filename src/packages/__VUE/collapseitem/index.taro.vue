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
            <view v-html="title" class="nut-collapse-item__title-mtitle"></view>
          </template>
          <view class="nut-collapse-item__title-label" v-if="label">{{ label }}</view>
        </view>
      </view>
      <view v-if="$slots.value" class="nut-collapse-item__title-sub">
        <slot name="value"></slot>
      </view>
      <view v-else v-html="value" class="nut-collapse-item__title-sub"></view>
      <view
        :class="['nut-collapse-item__title-icon', { 'nut-collapse-item__title-icon--expanded': expanded }]"
        :style="{ transform: 'rotate(' + (expanded ? rotate : 0) + 'deg)' }"
      >
        <component :is="renderIcon(icon)"></component>
      </view>
    </view>

    <view v-if="$slots.extra" class="nut-collapse__item-extraWrapper">
      <div class="nut-collapse__item-extraWrapper__extraRender">
        <slot name="extra"></slot>
      </div>
    </view>
    <view
      class="nut-collapse__item-wrapper"
      ref="wrapperRef"
      :style="{
        willChange: 'height',
        height: wrapperHeight
      }"
    >
      <view class="nut-collapse__item-wrapper__content" :id="`nut-collapse__item-${refRandomId}`">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, inject, ref, computed, watch, onMounted } from 'vue';
import { DownArrow } from '@nutui/icons-vue-taro';
import { createComponent, renderIcon } from '@/packages/utils/create';
import Taro from '@tarojs/taro';
const { create, componentName } = createComponent('collapse-item');

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
    const collapse: any = inject('collapseParent');
    const parent: any = reactive(collapse);
    const classes = computed(() => {
      const prefixCls = componentName;
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
        parent.updateVal(props.name);
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
