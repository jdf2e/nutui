<template>
  <view class="nut-searchbar" :style="searchbarStyle">
    <view v-if="$slots.leftout" class="nut-searchbar__search-icon nut-searchbar__left-search-icon">
      <slot name="leftout"></slot>
    </view>
    <view class="nut-searchbar__search-input" :style="{ ...inputSearchbarStyle, ...focusCss }">
      <view v-if="$slots.leftin" class="nut-searchbar__search-icon nut-searchbar__iptleft-search-icon">
        <slot name="leftin"></slot>
      </view>
      <view class="nut-searchbar__input-inner">
        <form action="#" onsubmit="return false" @submit.prevent="handleSubmit">
          <input
            ref="inputsearch"
            class="nut-searchbar__input-bar"
            :type="inputType"
            :maxlength="maxLength"
            :placeholder="placeholder || translate('placeholder')"
            :value="modelValue"
            :confirm-type="confirmType"
            :disabled="disabled"
            :readonly="readonly"
            @click="clickInput"
            @input="valueChange"
            @focus="valueFocus"
            @blur="valueBlur"
            @confirm="handleSubmit"
            :style="styleSearchbar"
          />
        </form>
        <view @click="handleClear" class="nut-searchbar__input-clear" v-if="clearable" v-show="modelValue.length > 0">
          <nut-icon :name="clearIcon" size="12" color="#555"></nut-icon>
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
import { toRefs, reactive, computed, ref, onMounted, PropType, Ref, CSSProperties } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, translate } = createComponent('searchbar');
export type confirmTextType = 'send' | 'search' | 'next' | 'go' | 'done';

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
      default: ''
    },
    clearable: {
      type: Boolean,
      default: true
    },
    clearIcon: {
      type: String,
      default: 'circle-close'
    },
    background: {
      type: String,
      default: ''
    },
    inputBackground: {
      type: String,
      default: ''
    },
    confirmType: {
      type: String as PropType<confirmTextType>,
      default: 'done'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    focusStyle: {
      type: Object,
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    inputAlign: {
      type: String,
      default: 'left'
    }
  },

  emits: [
    'change',
    'update:modelValue',
    'blur',
    'focus',
    'clear',
    'search',
    'click-input',
    'click-left-icon',
    'click-right-icon'
  ],

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

    const focusCss = ref({});
    const valueFocus = (event: Event) => {
      const input = event.target as HTMLInputElement;
      let value = input.value;
      state.active = true;
      focusCss.value = props.focusStyle;
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
      focusCss.value = {};
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

    const clickInput = (event: Event) => {
      emit('click-input', event);
    };

    const leftIconClick = (event: Event) => {
      emit('click-left-icon', props.modelValue, event);
    };

    const rightIconClick = (event: Event) => {
      emit('click-right-icon', props.modelValue, event);
    };

    const styleSearchbar = computed(() => {
      const style: CSSProperties = {
        textAlign: props.inputAlign as import('./type').TextAlign
      };
      return style;
    });

    const inputsearch: Ref<HTMLElement | null> = ref(null);
    onMounted(() => {
      if (props.autofocus) {
        (inputsearch.value as HTMLElement).focus();
      }
    });
    return {
      inputsearch,
      ...toRefs(state),
      valueChange,
      valueFocus,
      valueBlur,
      handleClear,
      handleSubmit,
      searchbarStyle,
      inputSearchbarStyle,
      focusCss,
      translate,
      clickInput,
      leftIconClick,
      rightIconClick,
      styleSearchbar
    };
  }
});
</script>
