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
      @input="change"
      @blur="blur"
      @focus="focus"
      :maxlength="maxLength"
      :placeholder="placeholder || translate('placeholder')"
      :autofocus="autofocus"
    />
    <view class="nut-textarea__limit" v-if="limitShow"> {{ modelValue ? modelValue.length : 0 }}/{{ maxLength }}</view>
  </view>
</template>
<script lang="ts">
import { watch, ref, computed, onMounted, nextTick } from 'vue';
import { createComponent } from '@/packages/utils/create';

const { componentName, create, translate } = createComponent('textarea');

export default create({
  props: {
    modelValue: {
      type: [String, Number],
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
    const textareaRef = ref();
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: props.disabled
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
      const input = event.target as HTMLInputElement;
      emitChange(input.value, event);
    };

    const focus = (event: Event) => {
      if (props.disabled) return;
      if (props.readonly) return;
      emit('focus', event);
    };

    const blur = (event: Event) => {
      if (props.disabled) return;
      if (props.readonly) return;
      const input = event.target as HTMLInputElement;

      let value = input.value;

      emitChange(value, event);
      emit('blur', { value, event });
    };

    return {
      textareaRef,
      classes,
      styles,
      change,
      focus,
      blur,
      translate
    };
  }
});
</script>
