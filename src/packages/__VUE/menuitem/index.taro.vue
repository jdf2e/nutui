<template>
  <view :class="classes" v-show="state.showWrapper" :style="{ zIndex: state.zIndex }">
    <div
      v-show="state.isShowPlaceholderElement"
      @click="handleClickOutside"
      class="placeholder-element"
      :class="{ up: parent.props.direction === 'up' }"
      :style="placeholderElementStyle"
    >
    </div>
    <nut-popup
      :style="
        parent.props.direction === 'down' ? { top: parent.offset.value + 'px' } : { bottom: parent.offset.value + 'px' }
      "
      :overlay-style="
        parent.props.direction === 'down'
          ? { top: parent.offset.value + 'px' }
          : { bottom: parent.offset.value + 'px', top: 'auto' }
      "
      transition="none"
      v-bind="$attrs"
      v-model:visible="state.showPopup"
      :position="parent.props.direction === 'down' ? 'top' : 'bottom'"
      :duration="parent.props.duration"
      pop-class="nut-menu__pop"
      :destroy-on-close="false"
      :overlay="parent.props.overlay"
      :lockScroll="parent.props.lockScroll"
      @closed="handleClose"
      :close-on-click-overlay="parent.props.closeOnClickOverlay"
    >
      <Nut-Scroll-View :scroll-y="true" style="height: 100%">
        <view class="nut-menu-item__content">
          <view
            v-for="(option, index) in options"
            :key="index"
            class="nut-menu-item__option"
            :class="[{ active: option.value === modelValue }]"
            :style="{ 'flex-basis': 100 / cols + '%' }"
            @click="onClick(option)"
          >
            <nut-icon
              :class="{
                activeTitleClass: option.value === modelValue,
                inactiveTitleClass: option.value !== modelValue
              }"
              v-if="option.value === modelValue"
              :name="optionIcon"
              v-bind="$attrs"
              :color="parent.props.activeColor"
              :class-prefix="classPrefix"
            ></nut-icon>
            <view
              :class="{
                activeTitleClass: option.value === modelValue,
                inactiveTitleClass: option.value !== modelValue
              }"
              :style="{ color: option.value === modelValue ? parent.props.activeColor : '' }"
              >{{ option.text }}</view
            >
          </view>
          <slot></slot>
        </view>
      </Nut-Scroll-View>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { reactive, PropType, inject, getCurrentInstance, computed, onUnmounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('menu-item');
import Icon from '../icon/index.taro.vue';
import Popup from '../popup/index.taro.vue';
import NutScrollView from '../scrollView/index.taro.vue';
let _zIndex = 2000;

export default create({
  props: {
    title: String,
    options: {
      type: Array as PropType<import('./type').MenuItemOption[]>,
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
    inactiveTitleClass: String,
    optionIcon: {
      type: String,
      default: 'Check'
    },
    classPrefix: {
      type: String,
      default: 'nut-icon'
    }
  },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup,
    NutScrollView
  },
  emits: ['update:modelValue', 'change', 'open', 'close'],
  setup(props, { emit, slots }) {
    const state = reactive({
      zIndex: _zIndex,
      showPopup: false,
      transition: true,
      showWrapper: false,
      isShowPlaceholderElement: false
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

        return {
          parent
        };
      }
    };

    const { parent } = useParent();

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const placeholderElementStyle = computed(() => {
      const heightStyle = { height: parent.offset.value + 'px' };

      if (parent.props.direction === 'down') {
        return heightStyle;
      } else {
        return { ...heightStyle, top: 'auto' };
      }
    });

    const toggle = (show = !state.showPopup, options: { immediate?: boolean } = {}) => {
      if (show === state.showPopup) {
        return;
      }

      state.showPopup = show;
      state.isShowPlaceholderElement = show;
      // state.transition = !options.immediate;

      if (show) {
        state.showWrapper = true;
        emit('open');
        state.zIndex = ++_zIndex;
      }
    };

    const renderTitle = () => {
      if (props.title) {
        return props.title;
      }

      const match: any = props.options?.find((option: any) => option.value === props.modelValue);

      return match ? match.text : '';
    };

    const onClick = (option: import('./type').MenuItemOption) => {
      state.showPopup = false;
      state.isShowPlaceholderElement = false;

      if (option.value !== props.modelValue) {
        emit('update:modelValue', option.value);
        emit('change', option.value);
      }
    };

    const handleClose = () => {
      emit('close');
      state.showWrapper = false;
      state.isShowPlaceholderElement = false;
    };

    const handleClickOutside = () => {
      state.showPopup = false;
      emit('close');
    };

    return {
      classes,
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
