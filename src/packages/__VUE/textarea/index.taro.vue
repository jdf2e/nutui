<template>
  <view :class="classes">
    <view v-if="readonly" class="nut-textarea__textarea">
      {{ modelValue }}
    </view>
    <textarea
      v-else
      ref="textareaRef"
      :class="['nut-textarea__textarea', env == 'ALIPAY' && 'nut-textarea__ali']"
      :style="styles"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      @input="change"
      @blur="blur"
      @focus="focus"
      :show-count="false"
      :maxlength="maxLength"
      :placeholder="placeholder || translate('placeholder')"
      :auto-focus="autofocus"
    />
    <view class="nut-textarea__limit" v-if="limitShow"> {{ modelValue ? modelValue.length : 0 }}/{{ maxLength }}</view>
    <view class="cpoyText" :style="copyTxtStyle" v-if="autosize">{{ modelValue }}</view>
  </view>
</template>
<script lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Taro, { eventCenter, getCurrentInstance as getCurrentInstanceTaro } from '@tarojs/taro';
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
      default: ''
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
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: props.disabled
      };
    });

    const styles: any = computed(() => {
      return {
        textAlign: props.textAlign,
        height: props.autosize ? heightSet.value : 'null'
      };
    });

    const copyTxtStyle: any = ref({
      'word-break': 'break-all',
      width: '0'
    });

    const emitChange = (value: string, event: Event) => {
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
      emit('blur', event);
    };

    const textareaRef = ref<any>(null);
    const textareaHeight = ref();
    const heightSet = ref('auto');
    const getContentHeight = () => {
      heightSet.value = 'auto';
      let height = textareaHeight.value;
      // let textarea = textareaRef.value;
      // textarea.style.height = 'auto';
      // let height = textarea.scrollHeight;
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
        // textarea.style.height = height + 'px';
        heightSet.value = height + 'px';
      }
    };
    watch(
      () => props.modelValue,
      () => {
        if (props.autosize) {
          copyHeight();
        }
      }
    );

    const copyHeight = () => {
      const query = Taro.createSelectorQuery();
      query.select('.cpoyText').boundingClientRect();
      query.exec((res) => {
        if (res[0]) {
          if (props.modelValue == '') {
            textareaHeight.value = 20;
          } else {
            textareaHeight.value = res[0]['height'] || 20;
          }
          setTimeout(() => {
            getContentHeight();
          }, 400);
        }
      });
    };

    const getRefHeight = () => {
      const query = Taro.createSelectorQuery();
      query.selectAll('.nut-textarea__textarea').boundingClientRect();
      let uid = textareaRef.value ? textareaRef.value.uid : '0';
      query.exec((res: any) => {
        if (res[0] && textareaRef.value) {
          let _item: any = Array.from(res[0]).filter((item: any) => item.id == uid);
          textareaHeight.value = _item[0]['height'] || 20;
          copyTxtStyle.value.width = _item[0]['width'] + 'px';
          nextTick(getContentHeight);
        }
      });
    };

    const getRefWidth = () => {
      const query = Taro.createSelectorQuery();
      query.select('.nut-textarea__textarea').boundingClientRect();
      query.exec((res: any) => {
        if (res[0] && textareaRef.value) {
          copyTxtStyle.value.width = res[0]['width'] + 'px';
        }
      });
    };
    const env = Taro.getEnv();
    onMounted(() => {
      if (props.autosize) {
        Taro.nextTick(() => {
          setTimeout(() => {
            if (Taro.getEnv() === 'ALIPAY') {
              getRefWidth();
              copyHeight();
            } else {
              getRefHeight();
            }
          }, 300);
        });
      }
    });

    return {
      env,
      textareaRef,
      classes,
      styles,
      change,
      focus,
      blur,
      translate,
      copyTxtStyle
    };
  }
});
</script>
