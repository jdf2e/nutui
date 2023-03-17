<template>
  <div
    class="nut-tabbar-item"
    :class="{ 'nut-tabbar-item__icon--unactive': !active }"
    :style="{
      color: active ? state.activeColor : state.unactiveColor
    }"
    @click="change()"
  >
    <nut-badge v-bind="$attrs">
      <view class="nut-tabbar-item_icon-box">
        <div class="nut-tabbar-item_icon-box_icon" v-if="isHaveSlot('icon')">
          <slot name="icon" :active="active"></slot>
        </div>
        <view v-if="icon && !isHaveSlot('icon')">
          <component :is="renderIcon(icon)" class="nut-popover-item-img"></component>
        </view>

        <view
          :class="[
            'nut-tabbar-item_icon-box_nav-word',
            { 'nut-tabbar-item_icon-box_big-word': !icon && !isHaveSlot('icon') }
          ]"
        >
          <slot>
            <view v-if="tabTitle">{{ tabTitle }}</view>
          </slot>
        </view>
      </view>
    </nut-badge>
  </div>
</template>
<script lang="ts">
import { createComponent, renderIcon } from '@/packages/utils/create';
import {
  Component,
  ComponentInternalInstance,
  computed,
  PropType,
  getCurrentInstance,
  inject,
  reactive,
  watch
} from 'vue';
import Badge from '../badge/index.taro.vue';
const { create } = createComponent('tabbar-item');
export default create({
  components: {
    [Badge.name]: Badge
  },
  props: {
    tabTitle: {
      // 标签页的标题
      type: String,
      default: ''
    },
    name: {
      type: String
    },
    icon: {
      // 标签页显示的icon
      type: Object as PropType<Component>
    },
    href: {
      // 标签页的跳转链接
      type: String,
      default: ''
    }
  },
  setup(props, { emit, slots }) {
    const isHaveSlot = (slot: string) => {
      return slots[slot];
    };
    const parent: any = inject('parent');
    const state = reactive({
      unactiveColor: parent.unactiveColor, // 未选中的颜色
      activeColor: parent.activeColor, // 选中的颜色
      active: parent.modelValue, // 是否选中
      index: 0
    });
    const relation = (child: ComponentInternalInstance): void => {
      if (child.proxy) {
        parent.children.push(child.proxy);
        const index = parent.children.indexOf(child.proxy);
        state.index = props.name ?? index;
      }
    };
    relation(getCurrentInstance() as ComponentInternalInstance);
    const active = computed(() => state.index === parent.modelValue);
    function change() {
      let key = props.name ?? state.index;
      let indexValue = null;
      if (props.name) {
        indexValue = parent.children.findIndex((item: { name: string | number }) => {
          return item.name == key;
        });
      }
      parent.changeIndex(indexValue ?? key, state.index);
    }
    return {
      state,
      active,
      isHaveSlot,
      renderIcon,
      change
    };
  }
});
</script>
