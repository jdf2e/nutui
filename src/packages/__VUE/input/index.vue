<template>
  <view :class="classes" @click="onClick">
    <view class="nut-input-value">
      <view class="nut-input-inner">
        <view class="nut-input-left-box">
          <slot name="left"></slot>
        </view>
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
            @change="endComposing"
            @compositionend="endComposing"
            @compositionstart="startComposing"
          ></component>
          <view v-if="showWordLimit && maxLength" class="nut-input-word-limit">
            <span class="nut-input-word-num">{{ modelValue ? modelValue.length : 0 }}</span
            >/{{ maxLength }}
          </view>
        </view>
        <view
          class="nut-input-clear-box"
          v-if="clearable && !readonly"
          v-show="(active || showClearIcon) && modelValue.length > 0"
          @click="clear"
        >
          <slot name="clear">
            <MaskClose class="nut-input-clear" v-bind="$attrs" :size="clearSize" :width="clearSize" :height="clearSize">
            </MaskClose>
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
import { PropType, ref, reactive, computed, onMounted, watch, ComputedRef, InputHTMLAttributes, h } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { formatNumber } from './util';
import { MaskClose } from '@nutui/icons-vue';

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
export interface InputTarget extends HTMLInputElement {
  composing: boolean;
}
export default create({
  props: {
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
    inputAlign: {
      type: String,
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
    error: {
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

  emits: ['update:modelValue', 'blur', 'focus', 'clear', 'keypress', 'click', 'click-input'],
  expose: ['focus', 'blur', 'select'],

  setup(props, { emit, slots }) {
    const active = ref(false);
    const inputRef = ref();
    const getModelValue = () => String(props.modelValue ?? '');

    const renderInput = (type: InputType) => {
      return h('input', {
        style: styles,
        ...inputType(type)
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
        [`${prefixCls}--disabled`]: props.disabled,
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

    const inputType = (type: InputType) => {
      if (type === 'number') {
        return {
          type: 'text'
        };
      }

      if (type === 'digit') {
        return {
          type: 'tel'
        };
      }

      return { type };
    };

    const onInput = (event: Event) => {
      if (!(event.target as InputTarget)!.composing) {
        const input = event.target as HTMLInputElement;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        updateValue(value);
      }
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

      if (inputRef?.value?.value !== value) {
        inputRef.value.value = value;
      }

      if (value !== props.modelValue) {
        emit('update:modelValue', value);
        // emit('change', value);
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
      // emit('update:modelValue', value);
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
      // emit('update:modelValue', value);
    };

    const clear = (event: Event) => {
      event.stopPropagation();
      if (props.disabled) return;
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
      if (props.disabled) {
        return;
      }
      emit('click-input', event);
    };

    const onClick = (event: MouseEvent) => {
      emit('click', event);
    };

    const startComposing = ({ target }: Event) => {
      (target as InputTarget)!.composing = true;
    };

    const endComposing = ({ target }: Event) => {
      if ((target as InputTarget)!.composing) {
        (target as InputTarget)!.composing = false;
        (target as InputTarget)!.dispatchEvent(new Event('input'));
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
      updateValue(getModelValue(), props.formatTrigger);
    });

    const focus = () => {
      inputRef.value?.focus();
    };

    const blur = () => {
      inputRef.value?.blur();
    };

    const select = () => {
      inputRef.value?.select();
    };

    return {
      renderInput,
      inputRef,
      active,
      classes,
      styles,
      inputType,
      onInput,
      onFocus,
      onBlur,
      clear,
      startComposing,
      endComposing,
      onClick,
      onClickInput,
      focus,
      blur,
      select
    };
  }
});
</script>
