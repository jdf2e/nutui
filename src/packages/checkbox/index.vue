<template>
  <view :class="['nut-checkbox', 'nut-checkbox-size-' + currentSize]">
    <input
      type="checkbox"
      :name="name"
      :class="{ 'nut-checkbox-ani': isAnimated }"
      :disabled="isDisabled"
      :checked.prop="isChecked"
      :value="submittedValue"
      @change="changeEvt"
    />
    <view class="nut-checkbox-label" v-if="label">
      {{ label }}
    </view>
    <view class="nut-checkbox-label" v-else>
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, computed, getCurrentInstance, inject } from 'vue';
import { createComponent } from '@/utils/create';
import checkboxgroup from '@/packages/checkboxgroup/index.vue';
const { create } = createComponent('checkbox');

export default create({
  children: [checkboxgroup],
  props: {
    name: {
      type: String
    },
    size: {
      type: [String, Number, Boolean],
      default: 'normal'
    },
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      required: false
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    },
    submittedValue: {
      type: String,
      default: 'on'
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    isAnimation: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const parentGroup = inject('checkboxgroup', {
      parentNode: false,
      changeVal: (val: number) => {
        console.log(1);
      }
    });
    const parentProps = getCurrentInstance()?.parent?.props;

    const isChecked = computed(() => {
      if (parentGroup && parentGroup.parentNode) {
        const choosedVal = parentProps?.modelValue;
        const chooseFlag =
          (choosedVal as any).indexOf(props.label) == -1 ? false : true;
        return chooseFlag;
      } else {
        const isCheckedVal =
          props.modelValue == props.trueValue || props.checked;
        return isCheckedVal;
      }
    });

    const isDisabled = computed(() => {
      if (parentGroup && parentGroup.parentNode) {
        return parentProps?.disabled;
      } else {
        return props.disabled;
      }
    });

    const currentSize = computed(() => {
      if (parentGroup && parentGroup.parentNode) {
        return parentProps?.size;
      } else {
        return props.size;
      }
    });

    const isAnimated = computed(() => {
      if (parentGroup && parentGroup.parentNode) {
        return parentProps?.isAnimation;
      } else {
        return props.isAnimation;
      }
    });

    const { label, name, submittedValue } = reactive(props);

    const setParentValue = (checked: boolean) => {
      // const { label } = props;
      // const { max, modelValue } = parentProps?.modelValue;
      const modelValue = parentProps?.modelValue;
      const value = (modelValue as any).slice();
      if (checked) {
        if (value.indexOf(label) === -1) {
          value.push(label);
          parentGroup?.changeVal(value);
        }
      } else {
        const index = value.indexOf(label);
        if (index !== -1) {
          value.splice(index, 1);
          parentGroup?.changeVal(value);
        }
      }
    };

    const changeEvt = (event: any) => {
      event?.stopPropagation();
      const isCheck: boolean = event.target.checked;
      if (isDisabled.value) {
        return false;
      }
      if (parentGroup.parentNode) {
        setParentValue(isCheck);
        return false;
      }
      emit('update:modelValue', isCheck);
      emit(
        'input',
        isCheck ? props.trueValue : props.falseValue,
        props.label,
        event
      );
      if (isChecked.value !== isCheck) {
        emit(
          'change',
          isCheck ? props.trueValue : props.falseValue,
          props.label,
          event
        );
      }
    };

    return {
      currentSize,
      label,
      name,
      isDisabled,
      submittedValue,
      isAnimated,
      isChecked,
      changeEvt
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
