<template>
  <view :class="['nut-input', { 'nut-input-disabled': disabled }]">
    <view class="nut-input-label">
      <view class="nut-input-require" v-if="requireShow">*</view>
      <view v-if="label" class="label-string">{{ label }}</view>
    </view>

    <view v-if="type === 'textarea'" class="nut-text">
      <textarea
        :style="styles"
        :rows="rows"
        @input="valueChange"
        v-model="state.curretvalue"
        class="nut-text-core"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
      >
      </textarea>
      <span class="nut-text-limit" v-if="limitShow">
        <span :class="[{ 'nut-field-over': state.textNum > maxLength }]">{{
          state.textNum
        }}</span>
        <span>/{{ maxLength }}</span>
      </span>
    </view>
    <input
      v-else
      class="input-text"
      :style="styles"
      :type="type"
      :maxlength="maxLength"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="state.curretvalue"
      @input="valueChange"
      @focus="valueFocus"
      @blur="valueBlur"
    />
    <view
      @click="handleClear"
      class="nut-textinput-clear"
      v-if="!disableClear && !readonly"
      v-show="type !== 'textarea' && active"
    >
      <nut-icon name="close-little" size="12px"></nut-icon>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, toRefs, reactive, computed } from 'vue';
import { createComponent } from '@/utils/create';
import { formatNumber } from './util';

const { create } = createComponent('input');

export default create({
  props: {
    type: {
      type: String,
      default: 'text'
    },
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
    requireShow: {
      type: Boolean,
      default: false
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
    },
    disableClear: {
      type: Boolean,
      default: false
    }
  },

  emits: ['change', 'update:value', 'blur', 'focus', 'clear', 'error'],

  setup(props, { emit }) {
    interface Events {
      eventName:
        | 'change'
        | 'focus'
        | 'blur'
        | 'clear'
        | 'update:value'
        | 'error';
      params: (string | number | Event)[];
    }

    const {
      label,
      placeholder,
      disabled,
      readonly,
      requireShow,
      maxLength,
      rows
    } = props;
    const { value } = toRefs(props);
    const active = ref(false);
    const state = reactive({
      curretvalue: value,
      textNum: String(value.value).length
    });
    const styles = computed(() => {
      const rize =
        props.type == 'textarea'
          ? `'resize':${props.autosize ? 'none' : 'horizontal'}`
          : '';
      return {
        'text-align': props.textAlign,
        rize
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
        emitChange([
          {
            eventName: 'error',
            params: [val]
          }
        ]);
      }
      if (props.type == 'digit') {
        val = formatNumber(val, true);
      }
      if (props.type == 'number') {
        val = formatNumber(val, false);
      }
      state.textNum = val.length;
      // input.value = val;
      //state.curretvalue = val;
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
      value,
      requireShow,
      readonly,
      placeholder,
      label,
      disabled,
      rows,
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
