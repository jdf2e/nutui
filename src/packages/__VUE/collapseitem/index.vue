<template>
  <view :class="classes">
    <view :class="['nut-collapse-item__title', { 'nut-collapse-item__title--disabled': disabled }]" @click="toggle">
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
      @transitionend="onTransitionEnd"
    >
      <view ref="contentRef" class="nut-collapse__item-wrapper__content">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, inject, ref, computed, watch } from 'vue';
import { DownArrow } from '@nutui/icons-vue';
import { createComponent, renderIcon } from '@/packages/utils/create';
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
  setup(props) {
    // 获取 DOM 元素
    const wrapperRef: any = ref(null);
    const contentRef: any = ref(null);

    const collapse: any = inject('collapseParent');
    const parent: any = reactive(collapse);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [prefixCls + '__border']: props.border
      };
    });

    const expanded = computed(() => {
      if (parent) {
        return parent.isExpanded(props.name);
      }
      return false;
    });

    const wrapperHeight = ref(expanded.value ? 'auto' : '0px');

    const toggle = () => {
      parent.updateVal(props.name);
    };

    const onTransitionEnd = () => {
      if (expanded.value) {
        wrapperHeight.value = 'auto';
      }
    };

    const open = () => {
      wrapperHeight.value = '0px';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const height = contentRef.value?.offsetHeight;
          wrapperHeight.value = height ? `${height}px` : 'auto';
        });
      });
    };

    const close = () => {
      const height = contentRef.value?.offsetHeight;
      wrapperHeight.value = height ? `${height}px` : 'auto';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          wrapperHeight.value = '0px';
        });
      });
    };

    watch(expanded, (value) => {
      value ? open() : close();
    });

    return {
      classes,
      renderIcon,
      wrapperRef,
      contentRef,
      open,
      toggle,
      wrapperHeight,
      expanded,
      onTransitionEnd
    };
  }
});
</script>
