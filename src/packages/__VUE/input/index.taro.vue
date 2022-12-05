<template>
  <view :class="classes">
    <view v-if="leftIcon && leftIcon.length > 0" class="nut-input-left-icon" @click="onClickLeftIcon">
      <nut-icon :name="leftIcon" v-bind="$attrs" :size="leftIconSize"></nut-icon>
    </view>
    <view
      v-if="label"
      class="nut-input-label"
      :class="labelClass"
      :style="{
        width: `${labelWidth}px`,
        textAlign: labelAlign
      }"
    >
      <view class="label-string">
        {{ label }}
        {{ colon ? ':' : '' }}
      </view>
    </view>
    <template v-if="$slots.input">
      <view class="nut-input-value">
        <view class="nut-input-inner" @click="onClickInput">
          <slot name="input"></slot>
        </view>
      </view>
    </template>
    <template v-else>
      <view class="nut-input-value">
        <view class="nut-input-inner">
          <view class="nut-input-box">
            <component
              :is="renderInput(type)"
              class="input-text"
              ref="inputRef"
              :style="styles"
              :maxlength="maxLength"
              :placeholder="placeholder"
              :disabled="disabled"
              :readonly="readonly"
              :value="modelValue"
              :formatTrigger="formatTrigger"
              :autofocus="autofocus"
              :enterkeyhint="confirmType"
              @input="onInput"
              @focus="onFocus"
              @blur="onBlur"
              @click="onClickInput"
            ></component>
            <view v-if="readonly" class="nut-input-disabled-mask" @click="onClickInput"></view>
          </view>
          <view class="nut-input-clear-box">
            <nut-icon
              class="nut-input-clear"
              v-if="clearable && !readonly"
              v-show="active && modelValue.length > 0"
              :name="clearIcon"
              v-bind="$attrs"
              :size="clearSize"
              @click="clear"
            >
            </nut-icon>
          </view>
          <view v-if="rightIcon && rightIcon.length > 0" class="nut-input-right-icon" @click="onClickRightIcon">
            <nut-icon :name="rightIcon" v-bind="$attrs" :size="rightIconSize"></nut-icon>
          </view>
          <slot v-if="$slots.button" name="button" class="nut-input-button"></slot>
          <slot v-if="$slots.rightExtra" name="rightExtra"></slot>
        </view>
        <view v-if="showWordLimit && maxLength" class="nut-input-word-limit">
          <span class="nut-input-word-num">{{ modelValue ? modelValue.length : 0 }}</span
          >/{{ maxLength }}
        </view>
        <view
          v-if="errorMessage"
          class="nut-input-error-message"
          :style="{
            textAlign: errorMessageAlign
          }"
        >
          {{ errorMessage }}
        </view>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
import { PropType, ref, reactive, computed, onMounted, watch, ComputedRef, InputHTMLAttributes, h } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { formatNumber } from './util';

const { componentName, create } = createComponent('input');

export type InputType = InputHTMLAttributes['type'];
export type InputAlignType = 'left' | 'center' | 'right'; // text-align
export type InputFormatTrigger = 'onChange' | 'onBlur'; // onChange: 在输入时执行格式化 ; onBlur: 在失焦时执行格式化
export type InputRule = {
  pattern?: RegExp;
  message?: string;
  required?: boolean;
};
export type ConfirmTextType = 'send' | 'search' | 'next' | 'go' | 'done';

export default create({
  props: {
    ref: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<InputType>,
      default: 'text'
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    labelClass: {
      type: String,
      default: ''
    },
    labelWidth: {
      type: [String, Number],
      default: '80'
    },
    labelAlign: {
      type: String as PropType<InputAlignType>,
      default: 'left'
    },
    colon: {
      type: Boolean,
      default: false
    },
    inputAlign: {
      type: String,
      default: 'left'
    },
    center: {
      type: Boolean,
      default: false
    },
    required: {
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
    error: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: [String, Number],
      default: '9999'
    },
    leftIconSize: {
      type: [String, Number],
      default: ''
    },
    leftIcon: {
      type: String,
      default: ''
    },
    rightIcon: {
      type: String,
      default: ''
    },
    rightIconSize: {
      type: [String, Number],
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    clearIcon: {
      type: String,
      default: 'mask-close'
    },
    clearSize: {
      type: [String, Number],
      default: '14'
    },
    border: {
      type: Boolean,
      default: true
    },
    formatTrigger: {
      type: String as PropType<InputFormatTrigger>,
      default: 'onChange'
    },
    formatter: {
      type: Function as PropType<(value: string) => string>,
      default: null
    },
    rules: {
      type: Array as PropType<InputRule>,
      default: []
    },
    errorMessage: {
      type: String,
      default: ''
    },
    errorMessageAlign: {
      type: String as PropType<InputAlignType>,
      default: ''
    },
    rows: {
      type: [String, Number],
      default: null
    },
    showWordLimit: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    confirmType: {
      type: String as PropType<ConfirmTextType>,
      default: 'done'
    },
    adjustPosition: {
      type: Boolean,
      default: true
    },
    alwaysSystem: {
      type: Boolean,
      default: false
    }
  },

  emits: [
    'update:modelValue',
    'change',
    'blur',
    'focus',
    'clear',
    'keypress',
    'click-input',
    'click-left-icon',
    'click-right-icon'
  ],

  setup(props, { emit, slots }) {
    const active = ref(false);

    const inputRef = ref();
    const getModelValue = () => String(props.modelValue ?? '');

    const renderInput = (type: InputType) => {
      return h(type == 'textarea' ? 'textarea' : 'input', {
        style: type == 'textarea' ? stylesTextarea : styles,
        type: type != 'textarea' && inputType(type)
      });
    };

    const state = reactive({
      focused: false,
      validateFailed: false, // 校验失败
      validateMessage: '' // 校验信息
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        center: props.center,
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-required`]: props.required,
        [`${prefixCls}-error`]: props.error,
        [`${prefixCls}-border`]: props.border
      };
    });

    const styles: ComputedRef = computed(() => {
      return {
        textAlign: props.inputAlign
      };
    });
    const stylesTextarea: ComputedRef = computed(() => {
      return {
        textAlign: props.inputAlign,
        height: Number(props.rows) * 24 + 'px'
      };
    });

    const inputType = (type: InputType) => {
      if (type === 'number') {
        return 'text';
      } else if (type === 'digit') {
        return 'tel';
      } else {
        return type;
      }
    };

    const onInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      updateValue(value);
    };

    const updateValue = (value: string, trigger: InputFormatTrigger = 'onChange') => {
      if (props.type === 'digit') {
        value = formatNumber(value, false, false);
      }
      if (props.type === 'number') {
        value = formatNumber(value, true, true);
      }

      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }

      if (inputRef?.value !== value) {
        inputRef.value = value;
      }

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
        emit('change', value);
      }
    };

    const onFocus = (event: Event) => {
      if (props.disabled || props.readonly) {
        return;
      }
      const input = event.target as HTMLInputElement;
      let value = input.value;
      active.value = true;
      emit('focus', event);
      emit('update:modelValue', value);
    };

    const onBlur = (event: Event) => {
      if (props.disabled || props.readonly) {
        return;
      }
      setTimeout(() => {
        active.value = false;
      }, 200);

      const input = event.target as HTMLInputElement;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      updateValue(getModelValue(), 'onBlur');
      emit('blur', event);
      emit('update:modelValue', value);
    };

    const clear = (event: Event) => {
      event.stopPropagation();
      if (props.disabled) return;
      emit('clear', '', event);
    };

    const resetValidation = () => {
      if (state.validateFailed) {
        state.validateFailed = false;
        state.validateMessage = '';
      }
    };

    const onClickInput = (event: MouseEvent) => {
      if (props.disabled) {
        return;
      }
      emit('click-input', event);
    };

    const onClickLeftIcon = (event: MouseEvent) => {
      event.stopPropagation();
      if (props.disabled) {
        return;
      }
      emit('click-left-icon', event);
    };

    const onClickRightIcon = (event: MouseEvent) => {
      event.stopPropagation();
      if (props.disabled) {
        return;
      }
      emit('click-right-icon', event);
    };

    watch(
      () => props.modelValue,
      () => {
        if (!slots.input) {
          updateValue(getModelValue());
          resetValidation();
        }
      }
    );

    onMounted(() => {
      if (!slots.input) {
        if (props.autofocus) {
          inputRef.value.focus();
        }
        updateValue(getModelValue(), props.formatTrigger);
      }
    });

    return {
      renderInput,
      inputRef,
      active,
      classes,
      styles,
      stylesTextarea,
      inputType,
      onInput,
      onFocus,
      onBlur,
      clear,
      onClickInput,
      onClickLeftIcon,
      onClickRightIcon
    };
  }
});
</script>
