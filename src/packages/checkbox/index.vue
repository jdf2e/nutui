<template>
  <view>
    <label :class="['nut-checkbox', 'nut-checkbox-size-' + size]">
      <input
        type="checkbox"
        :name="name"
        :class="{ 'nut-checkbox-ani': animation }"
        :disabled="disabled"
        :checked.prop="isChecked"
        :value="submittedValue"
        @change="changeEvt"
      />
      <span class="nut-checkbox-label" v-if="label">
        {{ label }}
      </span>
      <span class="nut-checkbox-label" v-else>
        <slot></slot>
      </span>
    </label>
  </view>
</template>
<script lang="ts">
import { reactive, ref, toRefs, watchEffect } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('checkbox');

export default create({
  props: {
    name: {
      type: String
    },
    size: {
      type: [String, Number, Boolean],
      default: 'base'
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      required: true
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    submittedValue: {
      type: String,
      default: 'on' // HTML default
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  setup(props, { emit }) {
    let isChecked: boolean =
      props.modelValue == props.trueValue || props.checked;

    const isObject = obj => {
      return obj !== null && typeof obj === 'object';
    };

    const looseEqual = (a, b) => {
      return (
        a == b ||
        (isObject(a) && isObject(b)
          ? JSON.stringify(a) === JSON.stringify(b)
          : false)
      );
    };

    watchEffect(() => {
      isChecked = looseEqual(props.modelValue, props.trueValue);
    });

    const { size, label, name, disabled, submittedValue, animation } = reactive(
      props
    );

    const changeEvt = (event: { target: HTMLInputElement }) => {
      const isCheckedPrevious: boolean = isChecked;
      const isCheck: boolean = event.target.checked;
      emit(
        'input',
        isCheck ? props.trueValue : props.falseValue,
        props.label,
        event
      );
      if (isCheckedPrevious !== isCheck) {
        emit(
          'change',
          isCheck ? props.trueValue : props.falseValue,
          props.label,
          event
        );
      }
    };
    console.log(isChecked);

    return {
      size,
      label,
      name,
      disabled,
      submittedValue,
      animation,
      isChecked,
      changeEvt
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
