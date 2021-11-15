<template>
  <nut-cell class="nut-form-item">
    <view class="nut-cell__title nut-form-item__label" v-if="label" :class="{ required: required }">{{ label }}</view>
    <view class="nut-cell__value nut-form-item__body">
      <view class="nut-form-item__body__slots">
        <slot></slot>
      </view>
      <view class="nut-form-item__body__tips" v-if="message">{{ message }}</view>
    </view>
  </nut-cell>
</template>
<script lang="ts">
import { inject, PropType, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('form-item');
export class RuleItem {
  regex?: RegExp;
  trigger?: string;
  required?: boolean;
  validator?: (value: any, rule: RuleItem) => boolean | string | Promise<boolean | string>;
  formatter?: (value: any, rule: RuleItem) => string;
}
export default create({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: Array as PropType<RuleItem[]>,
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
    },
    readonly: {
      type: String,
      default: false
    }
  },
  components: {},
  emits: [''],

  setup(props, { emit }) {
    const message = ref('');
    return { message };
  }
});
</script>
