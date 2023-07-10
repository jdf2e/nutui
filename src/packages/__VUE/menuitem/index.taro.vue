<template>
  <view class="nut-menu-item" v-show="state.showWrapper" :style="style">
    <view
      v-show="state.showPopup"
      @click="handleClickOutside"
      class="nut-menu-item-placeholder-element"
      :style="placeholderElementStyle"
      :catch-move="parent.props.lockScroll"
    >
    </view>
    <nut-popup
      :style="{ position: 'absolute' }"
      :overlay-style="{ position: 'absolute' }"
      v-bind="$attrs"
      v-model:visible="state.showPopup"
      :position="parent.props.direction === 'down' ? 'top' : 'bottom'"
      :duration="parent.props.duration"
      :destroy-on-close="false"
      :overlay="parent.props.overlay"
      :lock-scroll="parent.props.lockScroll"
      @closed="handleClose"
      :close-on-click-overlay="parent.props.closeOnClickOverlay"
    >
      <scroll-view :scroll-y="true">
        <view class="nut-menu-item__content">
          <view
            v-for="(option, index) in options"
            :key="index"
            class="nut-menu-item__option"
            :class="[{ active: option.value === modelValue }]"
            :style="{ 'flex-basis': 100 / cols + '%' }"
            @click="onClick(option)"
          >
            <span
              class="nut-menu-item__span"
              v-if="option.value === modelValue"
              :class="[option.value === modelValue ? activeTitleClass : inactiveTitleClass]"
            >
              <slot name="icon">
                <Check v-bind="$attrs" :color="parent.props.activeColor"></Check>
              </slot>
            </span>
            <view
              :class="[option.value === modelValue ? activeTitleClass : inactiveTitleClass]"
              :style="{ color: option.value === modelValue ? parent.props.activeColor : '' }"
              >{{ option.text }}</view
            >
          </view>
          <slot></slot>
        </view>
      </scroll-view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { reactive, PropType, inject, getCurrentInstance, computed, onUnmounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('menu-item');
import Popup from '../popup/index.taro.vue';
import { MenuItemOption } from './type';
import { Check } from '@nutui/icons-vue-taro';

export default create({
  props: {
    title: String,
    options: {
      type: Array as PropType<MenuItemOption[]>,
      default: []
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: null as unknown as PropType<unknown>,
    cols: {
      type: Number,
      default: 1
    },
    activeTitleClass: String,
    inactiveTitleClass: String
  },
  components: {
    Check,
    [Popup.name]: Popup
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const state = reactive({
      showPopup: false,
      showWrapper: false
    });

    const useParent: any = () => {
      const parent = inject('menuParent', null);
      if (parent) {
        // 获取子组件自己的实例
        const instance = getCurrentInstance()!;
        const { link, removeLink } = parent;
        // @ts-ignore
        link(instance);
        onUnmounted(() => {
          // @ts-ignore
          removeLink(instance);
        });
        return { parent };
      }
    };

    const { parent } = useParent();

    const style = computed(() => {
      return parent.props.direction === 'down'
        ? { top: parent.offset.value + 'px' }
        : { bottom: parent.offset.value + 'px' };
    });

    const placeholderElementStyle = computed(() => {
      const heightStyle = { height: parent.offset.value + 'px' };
      if (parent.props.direction === 'down') {
        return { ...heightStyle, top: '0px' };
      } else {
        return { ...heightStyle, bottom: '0px' };
      }
    });

    const toggle = (show = !state.showPopup) => {
      if (show === state.showPopup) {
        return;
      }
      state.showPopup = show;
      if (show) {
        state.showWrapper = true;
      }
    };

    const renderTitle = () => {
      if (props.title) {
        return props.title;
      }
      const match: any = props.options?.find((option: any) => option.value === props.modelValue);
      return match ? match.text : '';
    };

    const onClick = (option: MenuItemOption) => {
      state.showPopup = false;
      if (option.value !== props.modelValue) {
        emit('update:modelValue', option.value);
        emit('change', option.value);
      }
    };

    const handleClose = () => {
      state.showWrapper = false;
    };

    const handleClickOutside = () => {
      state.showPopup = false;
    };

    return {
      style,
      placeholderElementStyle,
      renderTitle,
      state,
      parent,
      toggle,
      onClick,
      handleClose,
      handleClickOutside
    };
  }
});
</script>
