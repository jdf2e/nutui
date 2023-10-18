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
            ref="inputRef"
            class="input-text"
            :style="styles"
            :maxlength="maxLength"
            :placeholder="placeholder"
            :disabled="disabled"
            :readonly="readonly"
            :value="modelValue"
            :format-trigger="formatTrigger"
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
          v-if="clearable && !readonly"
          v-show="(active || showClearIcon) && modelValue.length > 0"
          class="nut-input-clear-box"
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
import { PropType, ref, reactive, computed, onMounted, watch, ComputedRef, h } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { formatNumber, mapInputType } from './util';
import { MaskClose } from '@nutui/icons-vue';

import type { InputType, InputAlignType, InputFormatTrigger, InputTarget, ConfirmTextType } from './type';

const { componentName, create } = createComponent('input');

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

  emits: ['update:modelValue', 'blur', 'focus', 'clear', 'keypress', 'click', 'clickInput'],
  expose: ['focus', 'blur', 'select'],

  setup(props, { emit }) {
    const active = ref(false);
    const inputRef = ref();
    const getModelValue = () => String(props.modelValue ?? '');

    const renderInput = (type: InputType) => h('input', { ...mapInputType(type) });

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
      if (['number', 'digit'].includes(props.type)) {
        const isNumber = props.type === 'number';
        value = formatNumber(value, isNumber, isNumber);
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
      emit('clickInput', event);
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
