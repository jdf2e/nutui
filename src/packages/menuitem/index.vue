<template>
  <view
    class="nut-menu-item"
    :class="[{ disabled: disabled }, { 'nut-menu-active': showPanel }]"
  >
    <view class="nut-menu-title" @click="handleMenuPanel">
      <view class="title-name" v-html="menuTitle"></view>
      <i class="icon" name="arrow-down"></i>
    </view>
    <view class="nut-menu-panel" ref="menuPanel">
      <view
        class="menu-list"
        :class="[
          { 'bubble-line': multiLine == 2 },
          { 'three-line': multiLine == 3 }
        ]"
      >
        <view
          class="menu-option"
          v-for="(item, index) in menuList"
          :key="index"
          @click="checkMenus(item, index)"
          ><nut-icon
            class="check-icon"
            v-if="currMenu == index"
            name="dongdong"
            size="14px"
          ></nut-icon
          >{{ item.value }}</view
        >
      </view>
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
  onUnmounted
} from 'vue';
import { createComponent } from '@/utils/create';
import { useParent } from '@/utils/useRelation/useParent';
import { MENU_KEY } from './../menu/index.vue';
import Icon from '@/packages/icon/index.vue';
const { create } = createComponent('menu-item');

export default create({
  props: {
    title: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
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
    isVisible: {
      //是否显示
      type: Boolean,
      default: false
    },
    multiLine: {
      type: [String, Number],
      default: 1 //可选值1、2、3
    }
  },
  emits: ['on-checked'],
  setup(props, { emit }) {
    const { menuList, multiLine } = toRefs(props);
    const menuTitle = ref(props.title);
    const menu = useParent(MENU_KEY);
    const parent: any = reactive(menu.parent as any);
    const index: any = reactive(menu.index as any);
    const state = reactive({
      showPanel: false,
      currMenu: 0
      // menuTitle:''
    });

    const handleMenuPanel = () => {
      //禁用
      if (props.disabled) return;
      state.showPanel = !state.showPanel;
    };
    //menu列表浮层展示和隐藏
    const handleShowAndHide = (event: any) => {
      const menuBox = document.querySelectorAll('.nut-menu-active')[0];
      if (menuBox && state.showPanel) {
        if (!menuBox.contains(event.target)) {
          state.showPanel = false;
        }
      }
    };
    const checkMenus = (item: any, index: number) => {
      console.log(item);
      menuTitle.value = item.value;
      state.currMenu = index;
      emit('on-checked', menuTitle.value);
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
      multiLine
    };
  }
});
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
