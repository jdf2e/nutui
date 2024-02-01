<template>
  <view :class="classes">
    <textarea
      ref="textareaRef"
      class="nut-textarea__textarea"
      :style="styles"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      :maxlength="maxLength"
      :placeholder="placeholder || translate('placeholder')"
      :autofocus="autofocus"
      @input="change"
      @blur="blur"
      @focus="focus"
      @change="endComposing"
      @compositionend="endComposing"
      @compositionstart="startComposing"
    />
    <view v-if="limitShow" class="nut-textarea__limit"> {{ modelValue ? modelValue.length : 0 }}/{{ maxLength }}</view>
  </view>
</template>
<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
import { watch, ref, computed, onMounted, nextTick, toRef } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { useLocale } from '@/packages/utils/useLocale';
import { useFormDisabled } from '../form/common';

export interface InputTarget extends HTMLInputElement {
  composing: boolean;
}

const { create } = createComponent('textarea');
const cN = 'NutTextarea';

export default create({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    textAlign: {
      type: String,
      default: ''
    },
    limitShow: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: [String, Number],
      default: ''
    },
    rows: {
      type: [String, Number],
      default: '2'
    },
    placeholder: {
      type: String,
      default: ''
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: [Boolean, Object],
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    }
  },

  emits: ['update:modelValue', 'change', 'blur', 'focus'],

  setup(props, { emit }) {
    const disabled = useFormDisabled(toRef(props, 'disabled'));
    const translate = useLocale(cN);
    const textareaRef = ref();
    const classes = computed(() => {
      const prefixCls = 'nut-textarea';
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: disabled.value
      };
    });

    onMounted(() => {
      if (props.modelValue) {
        emitChange(String(props.modelValue));
      }
      if (props.autosize) {
        nextTick(getContentHeight);
      }
    });

    const styles: any = computed(() => {
      return {
        textAlign: props.textAlign
        // resize: props.autosize ? 'vertical' : 'none'
      };
    });

    const getContentHeight = () => {
      let textarea = textareaRef.value;
      textarea.style.height = 'auto';
      let height = textarea.scrollHeight;
      if (typeof props.autosize === 'object') {
        const { maxHeight, minHeight } = props.autosize;
        if (maxHeight !== undefined) {
          height = Math.min(height, maxHeight);
        }
        if (minHeight !== undefined) {
          height = Math.max(height, minHeight);
        }
      }
      if (height) {
        textarea.style.height = height + 'px';
      }
    };

    watch(
      () => props.modelValue,
      () => {
        if (props.autosize) {
          nextTick(getContentHeight);
        }
      }
    );

    const emitChange = (value: string, event?: Event) => {
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.substring(0, Number(props.maxLength));
      }
      emit('update:modelValue', value, event);
      emit('change', value, event);
    };

    const change = (event: Event) => {
      if (!(event.target as InputTarget)!.composing) {
        const input = event.target as HTMLInputElement;
        let value = input.value;
        if (props.maxLength && value.length > Number(props.maxLength)) {
          value = value.slice(0, Number(props.maxLength));
        }
        emitChange(input.value, event);
      }
      // const input = event.target as HTMLInputElement;
      // emitChange(input.value, event);
    };

    const focus = (event: Event) => {
      if (disabled.value) return;
      if (props.readonly) return;
      emit('focus', event);
    };

    const blur = (event: Event) => {
      if (disabled.value) return;
      if (props.readonly) return;
      const input = event.target as HTMLInputElement;

      let value = input.value;

      emitChange(value, event);
      emit('blur', { value, event });
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

    return {
      textareaRef,
      classes,
      styles,
      disabled,
      change,
      focus,
      blur,
      translate,
      startComposing,
      endComposing
    };
  }
});
</script>
