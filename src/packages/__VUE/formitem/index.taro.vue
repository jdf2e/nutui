<template>
  <nut-cell
    class="nut-form-item"
    :class="[{ error: parent[prop], line: showErrorLine }, $attrs.class, labelPositionClass]"
    :style="$attrs.style"
  >
    <view
      v-if="label || getSlots('label')"
      class="nut-cell__title nut-form-item__label"
      :style="labelStyle"
      :class="{ required: isRequired, [starPositionClass]: starPositionClass }"
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
import { computed, inject, PropType, CSSProperties } from 'vue';
import type { FormItemRule, FormItemLabelPosition, FormItemStarPosition } from './types';
import { createComponent } from '@/packages/utils/create';
import NutCell from '../cell/index.taro.vue';
import { FORM_KEY } from '../form/types';
import { useParent } from '@/packages/utils';
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
    },
    labelPosition: {
      type: String as PropType<FormItemLabelPosition>,
      default: ''
    },
    starPosition: {
      type: String as PropType<FormItemStarPosition>,
      default: ''
    }
  },
  components: {
    NutCell
  },
  setup(props, { slots }) {
    const { parent: parentObj } = useParent(FORM_KEY);
    const isRequired = computed(() => {
      const rules = parentObj.props?.rules;
      let formRequired = false;
      for (const key in rules) {
        if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
          formRequired = rules[key].some((rule: FormItemRule) => rule.required);
        }
      }
      return props.required || props.rules.some((rule) => rule.required) || formRequired;
    });

    const labelPositionClass = computed(() => {
      const labelPosition = parentObj.props.labelPosition;
      const position = props.labelPosition ? props.labelPosition : labelPosition;
      return position !== 'left' ? `nut-form-item__${position}` : '';
    });

    const starPositionClass = computed(() => {
      const starPosition = parentObj.props.starPosition;
      const position = props.starPosition ? props.starPosition : starPosition;
      return position !== 'left' ? `nut-form-item__star-${position}` : '';
    });

    const parent = inject('formErrorTip') as any;

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
    return {
      parent,
      labelStyle,
      bodyStyle,
      errorMessageStyle,
      getSlots,
      isRequired,
      labelPositionClass,
      starPositionClass
    };
  }
});
</script>
