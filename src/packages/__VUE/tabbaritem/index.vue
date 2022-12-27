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
import { useRouter } from '@/packages/utils/useRoute';
import Badge from '../badge/index.vue';
import {
  Component,
  ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  reactive,
  watch,
  PropType
} from 'vue';
const { create } = createComponent('tabbar-item');
export default /* @__PURE__ */ create({
  components: { [Badge.name]: Badge },
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
    },
    to: [Object, String]
  },
  setup(props, { emit, slots }) {
    const isHaveSlot = (slot: string) => {
      return slots[slot];
    };
    const parent: any = inject('parent');
    const state = reactive({
      unactiveColor: parent.unactiveColor, // 未选中的颜色
      activeColor: parent.activeColor, // 选中的颜色
      index: 0
    });
    const router = useRouter();
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
      let index = indexValue ?? key;
      if (parent.children[index]?.href) {
        window.location.href = parent.children[index].href;
        return;
      }
      if (parent.children[index]?.to) {
        let to = parent.children[index].to;
        if (to && router) {
          router.push(to);
        } else {
          location.replace(to);
        }
      }
    }
    return {
      state,
      active,
      renderIcon,
      isHaveSlot,
      change
    };
  }
});
</script>
