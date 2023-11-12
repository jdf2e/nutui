<template>
  <nut-cell
    class="nut-form-item"
    :class="[{ error: parent[prop], line: showErrorLine }, $attrs.class]"
    :style="$attrs.style"
  >
    <view
      v-if="label || getSlots('label')"
      class="nut-cell__title nut-form-item__label"
      :style="labelStyle"
      :class="{ required: required }"
    >
      <slot name="label">{{ label }}</slot>
    </view>
    <view class="nut-cell__value nut-form-item__body">
      <view class="nut-form-item__body__slots" :style="bodyStyle">
        <slot></slot>
      </view>
      <view v-if="parent[prop] && showErrorMessage" class="nut-form-item__body__tips" :style="errorMessageStyle">
        {{ parent[prop] }}</view
      >
    </view>
  </nut-cell>
</template>
<script lang="ts">
import { pxCheck } from '@/packages/utils/pxCheck';
import { computed, inject, provide, PropType, CSSProperties, getCurrentInstance, onUnmounted } from 'vue';
import type { FormItemRule } from './types';
import { createComponent } from '@/packages/utils/create';
import NutCell from '../cell/index.vue';
const { create } = createComponent('form-item');
export default create({
  inheritAttrs: false,
  props: {
    prop: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: Array as PropType<FormItemRule[]>,
      default: () => []
    },
    required: {
      type: Boolean,
      default: false
    },
    showErrorMessage: {
      type: Boolean,
      default: true
    },
    showErrorLine: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: [String, Number],
      default: ''
    },
    labelAlign: {
      type: String,
      default: ''
    },
    errorMessageAlign: {
      type: String,
      default: ''
    },
    bodyAlign: {
      type: String,
      default: ''
    }
  },
  components: {
    NutCell
  },
  setup(props, { slots }) {
    const useParent: any = () => {
      const parent = inject('NutFormParent', null);
      if (parent) {
        // 获取子组件自己的实例
        const instance = getCurrentInstance()!;
        const { link, removeLink } = parent;
        // @ts-ignore
        link(instance);
        onUnmounted(() => {
          // @ts-ignore
          removeLink(instance);
        });
        return { parent };
      }
    };
    useParent();

    const parent = inject('formErrorTip') as any;
    provide('form', {
      props
    });

    const labelStyle = computed(() => {
      return {
        width: pxCheck(props.labelWidth),
        textAlign: props.labelAlign
      } as CSSProperties;
    });
    const bodyStyle = computed(() => {
      return {
        textAlign: props.bodyAlign
      } as CSSProperties;
    });
    const errorMessageStyle = computed(() => {
      return {
        textAlign: props.errorMessageAlign
      } as CSSProperties;
    });
    const getSlots = (name: string) => slots[name];
    return { parent, labelStyle, bodyStyle, errorMessageStyle, getSlots };
  }
});
</script>
