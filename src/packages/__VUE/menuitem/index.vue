<template>
  <view :class="classes" v-show="state.showWrapper">
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
      :overlayStyle="
        parent.props.direction === 'down' ? { top: parent.offset.value + 'px' } : { bottom: parent.offset.value + 'px' }
      "
      v-bind="$attrs"
      v-model:visible="state.showPopup"
      :position="parent.props.direction === 'down' ? 'top' : 'bottom'"
      :duration="parent.props.duration"
      pop-class="nut-menu__pop"
      overlayClass="nut-menu__overlay"
      :overlay="parent.props.overlay"
      @closed="handleClose"
      :lockScroll="parent.props.lockScroll"
      :isWrapTeleport="false"
      :close-on-click-overlay="parent.props.closeOnClickOverlay"
    >
      <view class="nut-menu-item__content nut-menu-item__overflow">
        <view
          v-for="(option, index) in options"
          :key="index"
          class="nut-menu-item__option"
          :class="[{ active: option.value === modelValue }]"
          :style="{ 'flex-basis': 100 / cols + '%' }"
          @click="onClick(option)"
        >
          <nut-icon
            v-bind="$attrs"
            :class="{ activeTitleClass: option.value === modelValue, inactiveTitleClass: option.value !== modelValue }"
            v-if="option.value === modelValue"
            :name="optionIcon"
            :color="parent.props.activeColor"
          ></nut-icon>
          <view
            :class="{ activeTitleClass: option.value === modelValue, inactiveTitleClass: option.value !== modelValue }"
            :style="{ color: option.value === modelValue ? parent.props.activeColor : '' }"
            >{{ option.text }}</view
          >
        </view>
        <slot></slot>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { reactive, PropType, inject, getCurrentInstance, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('menu-item');
import Icon from '../icon/index.vue';
import Popup from '../popup/index.vue';

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
    }
  },
  components: {
    [Icon.name]: Icon,
    [Popup.name]: Popup
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, slots }) {
    const state = reactive({
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

        const { link } = parent;

        // @ts-ignore
        link(instance);

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
      state.showWrapper = false;
      state.isShowPlaceholderElement = false;
    };

    const handleClickOutside = () => {
      state.showPopup = false;
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
