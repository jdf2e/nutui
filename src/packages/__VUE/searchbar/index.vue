<template>
  <view class="nut-searchbar">
    <view v-if="hasLeftOut" class="search-icon left-search-icon">
      <slot name="leftout"></slot>
    </view>
    <view class="search-input">
      <view v-if="hasLeftIn" class="search-icon iptleft-search-icon">
        <slot name="leftin"></slot>
      </view>
      <view class="input-inner">
        <form action="#" @submit.prevent="handleSubmit">
          <input
            class="input-bar"
            :type="inputType"
            :maxlength="maxLength"
            :placeholder="placeholder"
            :value="modelValue"
            @input="valueChange"
            @focus="valueFocus"
            @blur="valueBlur"
          />
        </form>
        <view @click="handleClear" class="input-clear" v-if="clearable" v-show="modelValue.length > 0">
          <nut-icon name="mask-close" size="12px"></nut-icon>
        </view>
      </view>
      <view v-if="hasRightIn" class="search-icon iptright-sarch-icon">
        <slot name="rightin"></slot>
      </view>
    </view>
    <view v-if="hasRightOut" class="search-icon right-search-icon">
      <slot name="rightout"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue';
import { createComponent } from '../../utils/create';
import Icon from '../icon/index.vue';
const { create } = createComponent('searchbar');
interface Events {
  eventName: 'change' | 'focus' | 'blur' | 'clear' | 'update:modelValue';
  params: (string | number | Event)[];
}
export default create({
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    maxLength: {
      type: [String, Number],
      default: '9999'
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    clearable: {
      type: Boolean,
      default: true
    },
    hasLeftIn: {
      type: Boolean,
      default: false
    },
    hasLeftOut: {
      type: Boolean,
      default: false
    },
    hasRightIn: {
      type: Boolean,
      default: false
    },
    hasRightOut: {
      type: Boolean,
      default: false
    }
  },
  components: {
    [Icon.name]: Icon
  },

  emits: ['change', 'update:modelValue', 'blur', 'focus', 'clear', 'search'],

  setup(props, { emit }) {
    const {} = toRefs(props);

    const state = reactive({
      active: false
    });

    const valueChange = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let val = input.value;

      if (props.maxLength && val.length > Number(props.maxLength)) {
        val = val.slice(0, Number(props.maxLength));
      }
      emit('update:modelValue', val, event);
      emit('change', val, event);
    };

    const valueFocus = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value;
      state.active = true;
      emit('focus', value, event);
    };

    const valueBlur = (event: Event) => {
      setTimeout(() => {
        state.active = false;
      }, 0);

      const input = event.target as HTMLInputElement;
      let value = input.value;
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.slice(0, Number(props.maxLength));
      }
      emit('blur', value, event);
    };

    const handleClear = (event: Event) => {
      emit('update:modelValue', '', event);
      emit('change', '', event);
      emit('clear', '');
    };

    const handleSubmit = () => {
      emit('search', props.modelValue);
    };

    return {
      ...toRefs(state),
      valueChange,
      valueFocus,
      valueBlur,
      handleClear,
      handleSubmit
    };
  }
});
</script>
