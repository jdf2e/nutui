<template>
  <view :class="classes" v-show="state.showWrapper" :style="{ zIndex: state.zIndex }">
    <div
      v-show="state.isShowPlaceholderElement"
      @click="handleClickOutside"
      class="nut-menu-item-placeholder-element"
      :class="{ up: parent.props.direction === 'up' }"
      :style="placeholderElementStyle"
    >
    </div>
    <nut-popup
      :style="
        parent.props.direction === 'down'
          ? {
              top: parent.offset.value + 'px',
              height: state.showPopup ? contentHeight : 0
            }
          : {
              bottom: parent.offset.value + 'px',
              height: state.showPopup ? contentHeight : 0
            }
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
import { reactive, PropType, inject, getCurrentInstance, computed, onUnmounted, ref, nextTick } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('menu-item');
import Popup from '../popup/index.taro.vue';
import { MenuItemOption } from './type';
import { Check } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';

let _zIndex = 2000;

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
    inactiveTitleClass: String,
    optionIcon: {
      type: String,
      default: 'Check'
    }
  },
  components: {
    Check,
    [Popup.name]: Popup
  },
  emits: ['update:modelValue', 'change'],
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
    const contentHeight = ref('auto');
    const toggle = (show = !state.showPopup, options: { immediate?: boolean } = {}) => {
      if (show) {
        nextTick(() => {
          setTimeout(() => {
            const query = Taro.createSelectorQuery();
            query.selectAll('.nut-menu-item__content').boundingClientRect();
            query.exec((res: any[]) => {
              const data = res[0];
              const _height = data.filter((item: { height: number }) => item.height > 0);
              contentHeight.value = _height[0]['height'] + 'px';
            });
          }, 500);
        });
      }

      if (show === state.showPopup) {
        return;
      }

      state.showPopup = show;
      state.isShowPlaceholderElement = show;
      // state.transition = !options.immediate;

      if (show) {
        state.showWrapper = true;
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
      placeholderElementStyle,
      renderTitle,
      state,
      parent,
      toggle,
      onClick,
      handleClose,
      handleClickOutside,
      contentHeight
    };
  }
});
</script>
