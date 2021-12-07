<template>
  <view class="nut-searchbar" :style="searchbarStyle">
    <view v-if="$slots.leftout" class="nut-searchbar__search-icon nut-searchbar__left-search-icon">
      <slot name="leftout"></slot>
    </view>
    <view class="nut-searchbar__search-input" :style="inputSearchbarStyle">
      <view v-if="$slots.leftin" class="nut-searchbar__search-icon nut-searchbar__iptleft-search-icon">
        <slot name="leftin"></slot>
      </view>
      <view class="nut-searchbar__input-inner">
        <form action="#">
          <input
            class="nut-searchbar__input-bar"
            :type="inputType"
            :maxlength="maxLength"
            :placeholder="placeholder"
            :value="modelValue"
            @input="valueChange"
            @focus="valueFocus"
            @blur="valueBlur"
            @confirm="handleSubmit"
          />
        </form>
        <view @click="handleClear" class="nut-searchbar__input-clear" v-if="clearable" v-show="modelValue.length > 0">
          <nut-icon name="circle-close" size="12" color="#555"></nut-icon>
        </view>
      </view>
      <view v-if="$slots.rightin" class="nut-searchbar__search-icon nut-searchbar__iptright-sarch-icon">
        <slot name="rightin"></slot>
      </view>
    </view>
    <view v-if="$slots.rightout" class="nut-searchbar__search-icon nut-searchbar__right-search-icon">
      <slot name="rightout"></slot>
    </view>
  </view>
</template>

<script lang="ts">
import { toRefs, reactive, computed } from 'vue';
import { createComponent } from '../../utils/create';
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
    background: {
      type: String,
      default: ''
    },
    inputBackground: {
      type: String,
      default: ''
    }
  },

  emits: ['change', 'update:modelValue', 'blur', 'focus', 'clear', 'search'],

  setup(props, { emit }) {
    const state = reactive({
      active: false
    });

    const searchbarStyle = computed(() => {
      return {
        background: props.background
      };
    });
    const inputSearchbarStyle = computed(() => {
      return {
        background: props.inputBackground
      };
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
      handleSubmit,
      searchbarStyle,
      inputSearchbarStyle
    };
  }
});
</script>
