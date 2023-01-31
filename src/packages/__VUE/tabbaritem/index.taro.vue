<template>
  <div
    class="nut-tabbar-item"
    :class="{ 'nut-tabbar-item__icon--unactive': !active }"
    :style="{
      color: active ? state.activeColor : state.unactiveColor
    }"
    @click="change()"
  >
    <view class="nut-tabbar-item_icon-box">
      <template v-if="!dot">
        <view class="nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_num" v-if="num && num <= 99">
          {{ num }}
        </view>
        <view class="nut-tabbar-item_icon-box_tips nut-tabbar-item_icon-box_nums" v-else-if="num && num >= 100">{{
          '99+'
        }}</view>
      </template>
      <template v-if="dot">
        <div class="nut-tabbar-item_icon-box_dot"></div>
      </template>
      <div class="nut-tabbar-item_icon-box_icon" v-if="isHaveSlot('icon')">
        <slot name="icon" :active="active"></slot>
      </div>
      <view v-if="icon && !isHaveSlot('icon')">
        <nut-icon
          class="nut-tabbar-item_icon-box_icon"
          :size="state.size"
          :name="icon"
          :font-class-name="fontClassName"
          :class-prefix="classPrefix"
        ></nut-icon>
      </view>
      <div
        v-if="!icon && activeImg && !isHaveSlot('icon')"
        class="nut-tabbar-item_icon-box_icon"
        :style="{
          backgroundImage: `url(${active ? activeImg : img})`,
          width: state.size,
          height: state.size
        }"
      ></div>
      <view
        :class="[
          'nut-tabbar-item_icon-box_nav-word',
          { 'nut-tabbar-item_icon-box_big-word': !icon && !activeImg && !isHaveSlot('icon') }
        ]"
      >
        <view v-if="tabTitle">{{ tabTitle }}</view>
        <slot v-if="!tabTitle"></slot>
      </view>
    </view>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { ComponentInternalInstance, computed, getCurrentInstance, inject, reactive, watch } from 'vue';
const { create } = createComponent('tabbar-item');
export default create({
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
      type: String,
      default: ''
    },
    href: {
      // 标签页的跳转链接
      type: String,
      default: ''
    },
    num: {
      // 页签右上角的数字角标
      type: [Number, String],
      default: ''
    },
    activeImg: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    dot: {
      type: Boolean,
      default: false
    },
    classPrefix: {
      type: String,
      default: 'nut-icon'
    },
    fontClassName: {
      type: String,
      default: 'nutui-iconfont'
    },
    to: [Object, String]
  },
  setup(props, { emit, slots }) {
    const isHaveSlot = (slot: string) => {
      return slots[slot];
    };
    const parent: any = inject('parent');
    const state = reactive({
      size: parent.size,
      unactiveColor: parent.unactiveColor, // 未选中的颜色
      activeColor: parent.activeColor, // 选中的颜色
      active: parent.modelValue, // 是否选中
      index: 0
    });
    const relation = (child: ComponentInternalInstance) => {
      if (child.proxy) {
        parent.children.push(child.proxy);
        const index = parent.children.indexOf(child.proxy);
        state.index = props.name ?? index;
      }
    };
    relation(getCurrentInstance() as ComponentInternalInstance);
    const active = computed(() => state.index === state.active);
    function change() {
      let key = props.name ?? state.index;
      let index = null;
      if (props.name) {
        index = parent.children.findIndex((item: { name: string | number }) => {
          return item.name == key;
        });
      }
      parent.changeIndex(index ?? key, state.index);
    }

    const choosed = computed(() => {
      if (parent) {
        return parent.modelValue;
      }
      return null;
    });
    watch(choosed, (value, oldValue) => {
      state.active = value;
      let index = value;
      if (props.name) {
        index = parent.children.findIndex((item: { name: string | number }) => {
          return item.name == value;
        });
      }
      if (parent.children[index]?.href) {
        window.location.href = parent.children[index].href;
      }
    });
    return {
      state,
      active,
      isHaveSlot,
      change
    };
  }
});
</script>
