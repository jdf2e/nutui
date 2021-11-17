<template>
  <nut-cell class="nut-form-item" :class="{ error: parent[prop] }">
    <view class="nut-cell__title nut-form-item__label" v-if="label" :class="{ required: required }">{{ label }}</view>
    <view class="nut-cell__value nut-form-item__body">
      <view class="nut-form-item__body__slots">
        <slot></slot>
      </view>
      <view class="nut-form-item__body__tips" v-if="parent[prop]">{{ parent[prop] }}</view>
    </view>
  </nut-cell>
</template>
<script lang="ts">
import { inject, PropType, ref } from 'vue';
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
    labelWidth: {
      type: String,
      default: ''
    },
    labelAlign: {
      type: String,
      default: ''
    }
  },
  components: {},
  emits: [''],

  setup(props, { emit }) {
    const parent = inject('formErrorTip') as any;
    return { parent };
  }
});
</script>
