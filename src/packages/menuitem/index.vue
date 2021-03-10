<template>
  <view
    id="menuId"
    class="nut-menu-item"
    :class="[{ disabled: disabled }, { 'nut-menu-active': showPanel }]"
  >
    <nut-popup v-model:show="showMask"></nut-popup>
    <view class="nut-menu-title" @click="handleMenuPanel">
      <view class="title-name" v-html="menuTitle"></view>
      <i class="icon"></i>
    </view>

    <view
      class="nut-menu-panel"
      ref="menuPanel"
      :style="`max-height:${maxHeight}px`"
    >
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
          :class="{ checked: currMenu == index }"
          v-for="(item, index) in menuList"
          :key="index"
          @click="checkMenus(item, index)"
          ><nut-icon
            class="check-icon"
            v-if="currMenu == index"
            name="Check"
            size="14px"
          ></nut-icon
          >{{ item.value }}</view
        >
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
  nextTick,
  computed,
  watch,
  onUnmounted,
  provide,
  inject
} from 'vue';
import { createComponent } from '@/utils/create';
import Icon from '@/packages/icon/index.vue';
const { create } = createComponent('menu-item');

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
      default: 1 //可选值1、2、3
    },
    maxHeight: {
      type: [String, Number],
      default: ''
    }
  },
  emits: ['on-change', 'menu-click'],
  setup(props, { emit }) {
    const { menuList, multiStyle } = toRefs(props);
    const menuTitle = ref(props.title);
    const menu = inject('menuRelation');
    const parent: any = reactive(menu as any);
    const state = reactive({
      showPanel: false,
      currMenu: 0,
      showMask: false
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
    //menu列表浮层展示和隐藏
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
      emit('on-change', item, menuTitle.value);
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
      ...toRefs(state),
      ...toRefs(parent),
      handleMenuPanel,
      checkMenus,
      menuTitle,
      multiStyle
    };
  }
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
