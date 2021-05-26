<template>
  <view :class="classes">
    <nut-popup v-model:visible="showMask"></nut-popup>
    <view class="nut-menu-title" @click="handleMenuPanel">
      <view class="title-name" v-html="menuTitle"></view>
      <nut-icon class-prefix="icon"></nut-icon>
    </view>

    <view class="nut-menu-panel" :style="`max-height:${maxHeight}px`">
      <view
        v-if="menuList && menuList.length"
        class="menu-list"
        :class="[
          { 'bubble-line': multiStyle == 2 },
          { 'three-line': multiStyle == 3 }
        ]"
      >
        <view
          class="menu-option"
          :class="{ checked: currMenu === index }"
          v-for="(item, index) in menuList"
          :key="index"
          @click="checkMenus(item, index)"
        >
          <nut-icon
            class="check-icon"
            v-if="currMenu === index"
            name="Check"
            size="14px"
          ></nut-icon
          >{{ item.value }}
        </view>
      </view>
      <slot></slot>
    </view>
  </view>
</template>
<script lang="ts">
import {
  reactive,
  toRefs,
  onMounted,
  ref,
  computed,
  watch,
  onUnmounted,
  inject
} from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, componentName } = createComponent('menu-item');
export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    menuList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    multiStyle: {
      type: [String, Number],
      default: 1
    },
    maxHeight: {
      type: [String, Number],
      default: ''
    }
  },
  emits: ['change', 'menu-click'],
  setup(props, { emit }) {
    const menuTitle = ref(props.title);
    const menu = inject('menuRelation');
    const parent: any = reactive(menu as any);
    const state = reactive({
      showPanel: false,
      currMenu: 0,
      showMask: false
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        disabled: props.disabled,
        [`${prefixCls}-active`]: state.showPanel
      };
    });

    const handleMenuPanel = () => {
      emit('menu-click', menuTitle.value);
      //禁用
      if (props.disabled) {
        return;
      }

      state.showPanel = !state.showPanel;
      if (parent.hasMask) {
        state.showMask = !state.showMask;
        parent.handleMaskShow(state.showPanel);
      }
    };

    const handleShowAndHide = (event: any) => {
      const menuBox = document.querySelectorAll('.nut-menu-active')[0];
      if (menuBox && state.showPanel) {
        if (!menuBox.contains(event.target)) {
          state.showPanel = false;
          state.showMask = false;
          parent.handleMaskShow(false);
        }
      }
    };
    const checkMenus = (item: any, index: number) => {
      menuTitle.value = item.value;
      state.currMenu = index;
      if (props.autoClose) {
        state.showPanel = false;
        state.showMask = false;
        parent.handleMaskShow(false);
      }
      emit('change', item, menuTitle.value);
    };
    onMounted(() => {
      document.addEventListener(
        'mouseup',
        (event: any) => {
          handleShowAndHide(event);
        },
        false
      );
    });

    onUnmounted(() => {
      document.removeEventListener('mouseup', (event: any) => {
        handleShowAndHide(event);
      }),
        false;
    });
    return {
      classes,
      ...toRefs(state),
      handleMenuPanel,
      checkMenus,
      menuTitle
    };
  }
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
