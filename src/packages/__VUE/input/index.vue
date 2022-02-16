<template>
  <view :class="classes">
    <view v-if="label" class="nut-input-label">
      <view class="label-string">{{ label }}</view>
    </view>
    <input
      class="input-text"
      :style="styles"
      :type="type"
      :maxlength="maxLength"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      :inputmode="inputmode"
      @input="valueChange"
      @focus="valueFocus"
      @blur="valueBlur"
    />
    <view
      @click="handleClear"
      class="nut-textinput-clear"
      v-if="clearable && !readonly"
      v-show="active && modelValue.length > 0"
    >
      <nut-icon name="close-little" size="12px"></nut-icon>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, computed } from 'vue';
import { createComponent } from '../../utils/create';
import { formatNumber } from './util';

const { componentName, create } = createComponent('input');
interface Events {
  eventName: 'change' | 'focus' | 'blur' | 'clear' | 'update:modelValue';
  params: (string | number | Event)[];
}
export default create({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入信息'
    },
    label: {
      type: String,
      default: ''
    },
    requireShow: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    maxLength: {
      type: [String, Number],
      default: ''
    },
    clearable: {
      type: Boolean,
      default: true
    },
    hasBorder: {
      type: Boolean,
      default: true
    }
  },

  emits: ['change', 'update:modelValue', 'blur', 'focus', 'clear'],

  setup(props, { emit }) {
    const active = ref(false);

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-require`]: props.requireShow,
        [`${prefixCls}-border`]: props.hasBorder
      };
    });

    const inputmode = computed(() => {
      return props.type === 'digit' ? 'decimal' : props.type === 'number' ? 'numeric' : 'text';
    });

    const styles = computed(() => {
      return {
        textAlign: props.textAlign
      };
    });

    const valueChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let val = input.value;

      if (props.type === 'digit') {
        val = formatNumber(val, true);
      }
      if (props.type === 'number') {
        val = formatNumber(val, false);
      }
      if (props.maxLength && val.length > Number(props.maxLength)) {
        val = val.slice(0, Number(props.maxLength));
      }
      emit('update:modelValue', val, event);
      emit('change', val, event);
    };

    const valueFocus = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value;
      active.value = true;
      emit('focus', value, event);
    };

    const valueBlur = (event: Event) => {
      setTimeout(() => {
        active.value = false;
      }, 200);

      const input = event.target as HTMLInputElement;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      emit('blur', value, event);
    };

    const handleClear = (event: Event) => {
      emit('update:modelValue', '', event);
      emit('change', '', event);
      emit('clear', '');
    };

    return {
      active,
      classes,
      styles,
      inputmode,
      valueChange,
      valueFocus,
      valueBlur,
      handleClear
    };
  }
});
</script>
