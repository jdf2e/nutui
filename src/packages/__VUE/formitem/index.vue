<template>
  <nut-cell class="nut-form-item" :class="{ error: parent[prop], line: showErrorLine }">
    <view class="nut-cell__title nut-form-item__label" :style="labelStyle" v-if="label" :class="{ required: required }">
      {{ label }}</view
    >
    <view class="nut-cell__value nut-form-item__body">
      <view class="nut-form-item__body__slots" :style="bodyStyle">
        <slot></slot>
      </view>
      <view class="nut-form-item__body__tips" :style="errorMessageStyle" v-if="parent[prop] && showErrorMessage">
        {{ parent[prop] }}</view
      >
    </view>
  </nut-cell>
</template>
<script lang="ts">
import { pxCheck } from '../../utils/pxCheck';
import { computed, inject, PropType, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('form-item');
import { FormItemRule } from './types';
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
      default: () => {
        return [];
      }
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
      default: 'left'
    },
    errorMessageAlign: {
      type: String,
      default: 'left'
    },
    bodyAlign: {
      type: String,
      default: 'left'
    }
  },
  components: {},
  emits: [''],

  setup(props, { emit }) {
    const parent = inject('formErrorTip') as any;

    const labelStyle = computed(() => {
      return {
        width: pxCheck(props.labelWidth),
        textAlign: props.labelAlign
      };
    });
    const bodyStyle = computed(() => {
      return {
        textAlign: props.bodyAlign
      };
    });
    const errorMessageStyle = computed(() => {
      return {
        textAlign: props.errorMessageAlign
      };
    });

    return { parent, labelStyle, bodyStyle, errorMessageStyle };
  }
});
</script>
