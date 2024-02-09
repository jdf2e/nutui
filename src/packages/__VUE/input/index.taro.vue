<template>
  <view :class="classes" @click="onClick">
    <view class="nut-input-value">
      <view class="nut-input-inner">
        <view v-if="$slots.left" class="nut-input-left-box">
          <slot name="left"></slot>
        </view>
        <view class="nut-input-box">
          <component
            :is="renderInput(type)"
            v-bind="$attrs"
            ref="inputRef"
            class="input-text"
            :style="styles"
            :maxlength="maxLength ? maxLength : undefined"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :value="modelValue"
            :format-trigger="formatTrigger"
            :autofocus="autofocus ? true : undefined"
            :enterkeyhint="confirmType"
            :adjust-position="adjustPosition"
            :always-system="alwaysSystem"
            @input="onInput"
            @focus="onFocus"
            @blur="onBlur"
            @click="onClickInput"
            @change="endComposing"
            @compositionend="endComposing"
            @compositionstart="startComposing"
            @confirm="onConfirm"
            @keyup="onKeyup"
          ></component>
          <view v-if="readonly" class="nut-input-disabled-mask" @click="onClickInput"></view>
          <view v-if="showWordLimit && maxLength" class="nut-input-word-limit">
            <span class="nut-input-word-num">{{ getModelValue() ? getModelValue().length : 0 }}</span
            >/{{ maxLength }}
          </view>
        </view>
        <view
          v-if="clearable && !readonly"
          v-show="(active || showClearIcon) && getModelValue().length > 0"
          class="nut-input-clear-box"
          @click="clear"
        >
          <slot name="clear">
            <MaskClose class="nut-input-clear" :size="clearSize" :width="clearSize" :height="clearSize"> </MaskClose>
          </slot>
        </view>
        <view class="nut-input-right-box">
          <slot name="right"> </slot>
        </view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import Taro from '@tarojs/taro';
import { MaskClose } from '@nutui/icons-vue-taro';
import { ref, reactive, computed, onMounted, watch, h, toRef } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { formatNumber } from './util';
import { useFormDisabled } from '../form/common';

import type { PropType, ComputedRef } from 'vue';
import type { InputType, InputAlignType, InputFormatTrigger, InputTarget, ConfirmTextType, InputEvent } from './type';

const { componentName, create } = createComponent('input');

export default create({
  inheritAttrs: false,
  props: {
    type: {
      type: String as PropType<InputType>,
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
    inputAlign: {
      type: String as PropType<InputAlignType>,
      default: 'left'
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
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
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
    },
    showClearIcon: {
      type: Boolean,
      default: false
    },
    class: {
      type: String,
      default: ''
    }
  },
  components: { MaskClose },
  emits: ['update:modelValue', 'blur', 'focus', 'clear', 'keypress', 'click', 'clickInput', 'confirm'],

  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, 'disabled'));
    const active = ref(false);

    const inputRef = ref();
    const getModelValue = () => String(props.modelValue ?? '');

    const renderInput = (type: InputType) => {
      let inputType: any = { type };
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        // Taro H5 端与小程序端效果保持一致
        if (type === 'number') {
          inputType = {
            type: 'tel',
            inputmode: 'numeric'
          };
        }
        if (type === 'digit') {
          inputType = {
            type: 'text',
            inputmode: 'decimal'
          };
        }
      }
      return h('input', inputType);
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
        [`${prefixCls}--disabled`]: disabled.value,
        [`${prefixCls}--required`]: props.required,
        [`${prefixCls}--error`]: props.error,
        [`${prefixCls}--border`]: props.border,
        [props.class]: !!props.class
      };
    });

    const styles: ComputedRef = computed(() => {
      return {
        textAlign: props.inputAlign
      };
    });

    const onInput = (event: Event) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (!(event.target as InputTarget)!.composing) {
          _onInput(event);
        }
      } else {
        _onInput(event);
      }
    };
    const _onInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value;
      updateValue(value);
    };

    const updateValue = (value: string, trigger: InputFormatTrigger = 'onChange') => {
      // #2178 & Taro #2642
      emit('update:modelValue', value);
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      // In weapp input digit is decimal keyboard
      if (['number', 'digit'].includes(props.type)) {
        const isDigit = props.type === 'digit';
        value = formatNumber(value, isDigit, isDigit);
      }
      if (props.formatter && trigger === props.formatTrigger) {
        value = props.formatter(value);
      }
      if (value !== props.modelValue) {
        emit('update:modelValue', value);
        // emit('change', value);
      }
    };

    const onFocus = (event: Event) => {
      if (disabled.value || props.readonly) {
        return;
      }
      active.value = true;
      emit('focus', event);
      // emit('update:modelValue', value);
    };

    const onBlur = (event: Event) => {
      if (disabled.value || props.readonly) {
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
      // emit('update:modelValue', value);
    };

    const clear = (event: Event) => {
      event.stopPropagation();
      if (disabled.value) return;
      emit('update:modelValue', '', event);
      // emit('change', '', event);
      emit('clear', '', event);
    };

    const resetValidation = () => {
      if (state.validateFailed) {
        state.validateFailed = false;
        state.validateMessage = '';
      }
    };

    const onClickInput = (event: MouseEvent) => {
      if (disabled.value) {
        return;
      }
      emit('clickInput', event);
    };

    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    const startComposing = ({ target }: Event) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        (target as InputTarget)!.composing = true;
      }
    };

    const endComposing = ({ target }: Event) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if ((target as InputTarget)!.composing) {
          (target as InputTarget)!.composing = false;
          (target as InputTarget)!.dispatchEvent(new Event('input'));
        }
      }
    };

    const onKeyup = (e: KeyboardEvent) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB && e.key === 'Enter') {
        emit('confirm', e);
      }
    };

    const onConfirm = (e: InputEvent) => {
      emit('confirm', e);
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
      renderInput,
      inputRef,
      active,
      classes,
      styles,
      disabled,
      onInput,
      onFocus,
      onBlur,
      clear,
      startComposing,
      endComposing,
      onClick,
      onClickInput,
      onConfirm,
      onKeyup,
      getModelValue
    };
  }
});
</script>
