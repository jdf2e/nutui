<template>
  <label :class="['nut-radio', 'nut-radio-size-' + currentSize]">
    <input
      type="radio"
      :value="currentValue"
      :class="{ 'nut-radio-ani': isAnimated }"
      :checked="currentValue === label"
      :disabled="isDisabled"
      :label="label"
      @click="clickEvt"
    />
    <span class="nut-radio-label">
      <slot></slot>
    </span>
  </label>
</template>
<script lang="ts">
import {
  compile,
  computed,
  reactive,
  ref,
  toRefs,
  getCurrentInstance,
  inject
} from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('radio');

type Iparent = {
  parentNode: boolean;
};
export default create({
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
    animated: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  emits: ['input', 'update:modelValue'],
  setup(props, { emit }) {
    const parentGroup = inject('radiogroup', {
      parentNode: false,
      changeVal: val => {
        console.log();
      }
    });
    const internalInstance = getCurrentInstance()?.parent;
    const parentProps = internalInstance?.props;

    const currentValue = computed({
      get: () => {
        if (parentGroup && parentGroup.parentNode) {
          return parentProps?.modelValue;
        } else {
          return props.modelValue;
        }
      },
      set: val => {
        if (parentGroup && parentGroup.parentNode) {
          parentGroup?.changeVal(val);
        } else {
          emit('input', val);
        }
      }
    });

    const currentSize = computed(() => {
      if (parentGroup && parentGroup.parentNode) {
        return parentProps?.size;
      } else {
        return props.size;
      }
    });

    const isDisabled = computed(() => {
      if (parentGroup && parentGroup.parentNode) {
        return parentProps?.disabled;
      } else {
        return props.disabled;
      }
    });

    const isAnimated = computed(() => {
      if (parentGroup && parentGroup.parentNode) {
        return parentProps?.animated;
      } else {
        return props.animated;
      }
    });

    const clickEvt = (event: any) => {
      event?.stopPropagation();
      if (isDisabled.value) {
        return false;
      }
      currentValue.value = props.label ?? '';
      emit('update:modelValue', props.label);
    };

    return {
      currentValue,
      currentSize,
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
