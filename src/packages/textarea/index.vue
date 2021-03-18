<template>
  <view class="nut-textarea">
    <view class="nut-input-label">
      <view v-if="props.label" class="label-string">{{ props.label }}</view>
    </view>
    <view class="nut-text">
      <textarea
        :style="styles"
        :rows="props.rows"
        @input="valueChange"
        v-model="state.curretvalue"
        class="nut-text-core"
        :maxlength="maxLength"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :readonly="props.readonly"
      >
      </textarea>
      <view class="nut-text-limit" v-if="limitShow">
        <view :class="[{ 'nut-field-over': state.textNum > maxLength }]">{{
          state.textNum
        }}</view>
        <view>/{{ maxLength }}</view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, toRefs, reactive, computed } from 'vue';
import { createComponent } from '@/utils/create';

const { componentName, create } = createComponent('textarea');
interface Events {
  eventName: 'change' | 'focus' | 'blur' | 'clear' | 'update:value';
  params: (string | number | Event)[];
}
export default create({
  props: {
    textAlign: {
      type: String,
      default: 'left'
    },
    limitShow: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: String,
      default: ''
    },
    rows: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入信息'
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
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },

  emits: ['change', 'update:value', 'blur', 'focus', 'clear', 'error'],

  setup(props, { emit }) {
    const { maxLength } = props;
    const { value } = toRefs(props);
    const active = ref(false);
    const state = reactive({
      curretvalue: value,
      textNum: String(value.value).length
    });
    const classes = computed(() => {
      return {
        [componentName]: true
      };
    });
    const styles = computed(() => {
      return {
        'text-align': props.textAlign,
        resize: props.autosize ? 'vertical' : 'none'
      };
    });
    const emitChange = (envs: Array<Events>) => {
      envs.forEach((item: Events) => {
        return emit(item.eventName, ...item.params);
      });
    };
    const valueChange = (e: Event) => {
      const input = e.target as HTMLInputElement;
      let val = input.value;

      if (maxLength && val.length > Number(maxLength)) {
        val = val.slice(0, Number(maxLength));
      }
      state.textNum = val.length;
      emitChange([
        {
          eventName: 'update:value',
          params: [val]
        },
        {
          eventName: 'change',
          params: [val]
        }
      ]);
    };
    const valueFocus = (e: Event) => {
      active.value = true;
      const input = e.target as HTMLInputElement;
      let val = input.value;
      val = String(val);
      emitChange([
        {
          eventName: 'update:value',
          params: [state.curretvalue]
        },
        {
          eventName: 'focus',
          params: [val]
        }
      ]);
    };
    const valueBlur = (e: Event) => {
      setTimeout(() => {
        active.value = false;
      }, 400);
      const input = e.target as HTMLInputElement;
      let val = input.value;
      val = String(val);
      emitChange([
        {
          eventName: 'update:value',
          params: [val]
        },
        {
          eventName: 'blur',
          params: [val]
        }
      ]);
    };
    const handleClear = () => {
      const val = '';
      emitChange([
        {
          eventName: 'update:value',
          params: [val]
        },
        {
          eventName: 'clear',
          params: [val]
        }
      ]);
    };
    return {
      props,
      value,
      state,
      styles,
      active,
      maxLength,
      valueChange,
      valueFocus,
      valueBlur,
      handleClear,
      emitChange
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
