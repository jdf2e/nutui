<template>
  <view :class="classes" @click="onClick">
    <template v-if="$slots.input">
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
      <view class="nut-input-value">
        <view class="nut-input-inner" @click="onClickInput">
          <slot name="input"></slot>
        </view>
      </view>
    </template>
    <template v-else>
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
      <view class="nut-input-value">
        <view class="nut-input-inner">
          <view class="nut-input-box">
            <textarea
              v-if="type == 'textarea'"
              class="input-text"
              ref="inputRef"
              :style="stylesTextarea"
              :maxlength="maxLength"
              :placeholder="placeholder || translate('placeholder')"
              placeholder-class="nut-placeholder"
              :disabled="disabled"
              :readonly="readonly"
              :value="modelValue"
              :formatTrigger="formatTrigger"
              :adjust-position="adjustPosition"
              @input="onInput"
              @focus="onFocus"
              @blur="onBlur"
              @click="onClickInput"
            />
            <input
              v-else
              class="input-text"
              ref="inputRef"
              :style="styles"
              :type="inputType(type)"
              :maxlength="maxLength"
              :placeholder="placeholder || translate('placeholder')"
              placeholder-class="nut-placeholder"
              :disabled="disabled"
              :readonly="readonly"
              :value="modelValue"
              :formatTrigger="formatTrigger"
              :confirm-type="confirmType"
              :adjust-position="adjustPosition"
              @input="onInput"
              @focus="onFocus"
              @blur="onBlur"
              @click="onClickInput"
            />
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
import { PropType, ref, reactive, computed, onMounted, watch, nextTick, inject } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { formatNumber } from './util';

const { componentName, create, translate } = createComponent('input');

export default create({
  props: {
    ref: {
      type: String,
      default: ''
    },
    type: {
      type: String as PropType<import('./type').InputType>,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
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
      type: String as PropType<import('./type').InputAlignType>,
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
      type: String as PropType<import('./type').InputFormatTrigger>,
      default: 'onChange'
    },
    formatter: {
      type: Function as PropType<(value: string) => string>,
      default: null
    },
    rules: {
      type: Array as PropType<import('./type').InputRule>,
      default: []
    },
    errorMessage: {
      type: String,
      default: ''
    },
    errorMessageAlign: {
      type: String as PropType<import('./type').InputAlignType>,
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
      type: String as PropType<import('./type').ConfirmTextType>,
      default: 'done'
    },
    adjustPosition: {
      type: Boolean,
      default: true
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

    const inputRef: any = ref(null);
    const getModelValue = () => String(props.modelValue ?? '');
    // const form = inject('form');

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

    const styles: any = computed(() => {
      return {
        textAlign: props.inputAlign
      };
    });
    const stylesTextarea: any = computed(() => {
      return {
        textAlign: props.inputAlign,
        height: Number(props.rows) * 24 + 'px'
      };
    });

    const inputType = (type: string) => {
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
      emit('update:modelValue', value, event);
      emit('change', value, event);
    };

    const updateValue = (value: string, trigger: import('./type').InputFormatTrigger = 'onChange') => {
      if (props.type === 'digit') {
        value = formatNumber(value, false, false);
      }
      if (props.type === 'number') {
        // console.log('value', value)
        value = formatNumber(value, true, true);
      }

      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }

      if (inputRef && inputRef.value && inputRef.value !== value) {
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
      emit('focus', value, event);
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
      emit('blur', value, event);
    };

    const clear = (event: Event) => {
      if (props.disabled) return;
      emit('update:modelValue', '', event);
      emit('change', '', event);
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
      if (props.disabled) {
        return;
      }
      emit('click-left-icon', event);
    };

    const onClickRightIcon = (event: MouseEvent) => {
      if (props.disabled) {
        return;
      }
      emit('click-right-icon', event);
    };

    const onClick = (e: MouseEvent) => {
      if (props.disabled) {
        e.stopPropagation();
        return;
      }
    };

    watch(
      () => props.modelValue,
      () => {
        updateValue(getModelValue());
        resetValidation();
      }
    );

    onMounted(() => {
      if (props.autofocus) {
        inputRef.value.focus();
      }
      updateValue(getModelValue(), props.formatTrigger);
    });

    return {
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
      onClickRightIcon,
      onClick,
      translate
    };
  }
});
</script>
