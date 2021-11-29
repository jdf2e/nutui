<template>
  <view :class="classes" v-show="state.showWrapper">
    <div
      v-show="state.isShowPlaceholderElement"
      @click="handleClickOutside"
      class="placeholder-element"
      :style="{ height: parent.offset.value + 'px' }"
    >
    </div>
    <nut-popup
      :style="{ top: parent.offset.value + 'px' }"
      :overlayStyle="{ top: parent.offset.value + 'px' }"
      v-bind="$attrs"
      v-model:visible="state.showPopup"
      position="top"
      :duration="parent.props.duration"
      pop-class="nut-menu__pop"
      overlayClass="nut-menu__overlay"
      :overlay="parent.props.overlay"
      @closed="handleClose"
    >
      <view class="nut-menu-item__content">
        <view
          v-for="(option, index) in options"
          :key="index"
          class="nut-menu-item__option"
          :class="{ active: option.value === modelValue }"
          :style="{ 'flex-basis': 100 / cols + '%' }"
          @click="onClick(option)"
        >
          <nut-icon v-if="option.value === modelValue" name="Check" :color="parent.props.activeColor"></nut-icon>
          <view :style="{ color: option.value === modelValue ? parent.props.activeColor : '' }">{{ option.text }}</view>
        </view>
        <slot></slot>
      </view>
    </nut-popup>
  </view>
</template>
<script lang="ts">
import { reactive, PropType, inject, getCurrentInstance, computed } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('menu-item');
import Icon from '../icon/index.taro.vue';
import Popup from '../popup/index.taro.vue';

type MenuItemOption = {
  text: string;
  value: number | string;
};

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
    titleIcon: {
      type: String,
      default: 'down-arrow'
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

    const onClick = (option: MenuItemOption) => {
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
