<template>
  <view :class="classes" @click="clickEvt">
    <input
      type="radio"
      :value="currentValue"
      :class="{ 'nut-radio-ani': isAnimated }"
      :checked="currentValue === label"
      :disabled="isDisabled"
      :label="label"
    />
    <view class="nut-radio-label">
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, getCurrentInstance, inject } from 'vue';
import { createComponent } from '@/utils/create';
import radiogroup from '@/packages/radiogroup/index.vue';
const { componentName, create } = createComponent('radio');

type Iparent = {
  parentNode: boolean;
};
export default create({
  children: [radiogroup],
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },
    label: [String, Number, Boolean],
    size: {
      type: String,
      default: 'base'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isAnimated: {
      type: Boolean,
      default: true
    }
  },

  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const parentGroup = inject('radiogroup', {
      parentNode: false,
      changeVal: (val: string) => {}
    });
    const internalInstance = getCurrentInstance()?.parent;
    const parentProps = internalInstance?.props;

    const isParentGroup = computed(() => parentGroup && parentGroup.parentNode);

    const currentSize = computed(() => {
      return isParentGroup.value ? parentProps?.size : props.size;
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-size-${currentSize.value}`]: true
      };
    });

    const currentValue = computed(() => {
      return isParentGroup.value ? parentProps?.modelValue : props.modelValue;
    });

    const isDisabled = computed(() => {
      return isParentGroup.value ? parentProps?.disabled : props.disabled;
    });

    const isAnimated = computed(() => {
      return isParentGroup.value ? parentProps?.isAnimated : props.isAnimated;
    });

    const getValue = () => {
      return isParentGroup.value
        ? parentGroup.changeVal(props.label as string)
        : props.label;
    };

    const clickEvt = (event: Event) => {
      if (isDisabled.value) {
        return false;
      }
      emit('update:modelValue', getValue());
      !isParentGroup.value && emit('change', getValue());
    };

    return {
      classes,
      currentValue,
      isDisabled,
      isAnimated,
      clickEvt
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
