<template>
  <view :class="classes">
    <view v-if="readonly" class="nut-textarea__textarea nut-textarea__textarea__readonly">
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
      @change="endComposing"
      @compositionend="endComposing"
      @compositionstart="startComposing"
    />
    <view class="nut-textarea__limit" v-if="limitShow"> {{ modelValue ? modelValue.length : 0 }}/{{ maxLength }}</view>
    <view class="nut-textarea__cpoyText" :style="copyTxtStyle" v-if="autosize">{{ modelValue }}</view>
  </view>
</template>
<!-- eslint-disable @typescript-eslint/no-non-null-assertion -->
<script lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Taro from '@tarojs/taro';
const { componentName, create, translate } = createComponent('textarea');
export interface InputTarget extends HTMLInputElement {
  composing?: boolean;
}
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
      const styleObj: { textAlign: string; height?: string } = {
        textAlign: props.textAlign
      };
      if (props.autosize) {
        styleObj['height'] = heightSet.value;
      }
      return styleObj;
      // return {
      //   textAlign: props.textAlign,
      //   height: props.autosize ? heightSet.value : 'null'
      // };
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
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (!composing.value) {
          // console.log((event.target as InputTarget)!.composing);
          _onInput(event);
        }
      } else {
        _onInput(event);
      }
      // const input = event.target as HTMLInputElement;
      // emitChange(input.value, event);
    };
    const _onInput = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      emitChange(value, event);
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
          setTimeout(() => {
            copyHeight();
          }, 100);
        }
      }
    );
    // const listenInput = () => {
    // window.addEventListener('compositionend', function () {
    //   copyHeight();
    // });
    // };

    const copyHeight = () => {
      const query = Taro.createSelectorQuery();
      query.select('.nut-textarea__cpoyText').boundingClientRect();
      query.exec((res) => {
        if (res[0]) {
          if (props.modelValue == '') {
            textareaHeight.value = 20;
          } else {
            textareaHeight.value = res[0]['height'] || 20;
          }
          nextTick(getContentHeight);
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
          if (_item[0]) {
            textareaHeight.value = _item[0]['height'] || 20;
            copyTxtStyle.value.width = _item[0]['width'] + 'px';
          }
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
        // listenInput();
        Taro.nextTick(() => {
          setTimeout(() => {
            if (Taro.getEnv() === 'ALIPAY' || Taro.getEnv() === 'WEB') {
              getRefWidth();
              copyHeight();
            } else {
              getRefHeight();
            }
          }, 300);
        });
      }
    });
    const composing = ref(false);
    const startComposing = (event: Event) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        composing.value = true;
        // (event.target as InputTarget)!.composing = true;
      }
    };

    const endComposing = ({ target }: Event) => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        if (composing.value) {
          composing.value = false;
          // (target as InputTarget)!.composing = false;
          (target as InputTarget).dispatchEvent(new Event('input'));
        }
      }
    };

    return {
      env,
      textareaRef,
      classes,
      styles,
      change,
      focus,
      blur,
      translate,
      copyTxtStyle,
      startComposing,
      endComposing
    };
  }
});
</script>
