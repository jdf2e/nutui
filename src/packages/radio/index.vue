<template>
  <view :class="classes">
    <input
      type="radio"
      :value="currentValue"
      :class="{ 'nut-radio-ani': isAnimated }"
      :checked="currentValue === label"
      :disabled="isDisabled"
      :label="label"
      @click="clickEvt"
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
    value: {
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

  emits: ['update:value', 'change'],
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

    const currentValue = computed({
      get: () => {
        return isParentGroup.value ? parentProps?.value : props.value;
      },
      set: (val: any) => {
        isParentGroup.value ? parentGroup.changeVal(val) : emit('change', val);
      }
    });

    const isDisabled = computed(() => {
      return isParentGroup.value ? parentProps?.disabled : props.disabled;
    });

    const isAnimated = computed(() => {
      return isParentGroup ? parentProps?.isAnimated : props.isAnimated;
    });

    const clickEvt = (event: Event) => {
      event.stopPropagation();
      if (isDisabled.value) {
        return false;
      }
      currentValue.value = props.label ?? '';
      emit('update:value', currentValue.value);
      emit('change', currentValue.value);
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
