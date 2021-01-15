<template>
  <view @changeEvt="changeEvt">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs } from 'vue';
import { createComponent } from '@/utils/create';
import { useChildren } from '@/utils/useRelation/useChildren';
export const COLLAPSE_KEY = 'nutCollapse';
const { create } = createComponent('collapse');

export default create({
  props: {
    active: {
      type: [String, Number, Array]
    },
    accordion: {
      type: Boolean
    },
    expandIconPosition: {
      type: String,
      default: 'right'
    },
    titleIcon: {
      type: String,
      default: ''
    },
    titleIconWidth: {
      type: String,
      default: '13px'
    },
    titleIconHeight: {
      type: String,
      default: '13px'
    },
    titleIconPosition: {
      type: String,
      default: 'left'
    },
    icon: {
      type: String,
      default: ''
    },
    iconWidth: {
      type: String,
      default: '24px'
    },
    iconHeight: {
      type: String,
      default: '12px'
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  emits: ['update:active', 'change'],
  setup(props, { emit }) {
    const { active } = toRefs(props);
    // 多个 item 展开
    const changeValAry = (name: any) => {
      const activeItem: any =
        active?.value instanceof Object
          ? Object.values(active.value)
          : active?.value;
      let index = -1;
      activeItem.forEach((item: string | number, idx: number) => {
        if (String(item) == String(name)) {
          index = idx;
        }
      });
      const v = JSON.parse(JSON.stringify(activeItem));
      index > -1 ? v.splice(index, 1) : v.push(name);
      emit('update:active', v);
      emit('change', v);
    };

    // 更新v-modal的值
    const changeVal = (
      val: string | number | Array<string | number>,
      expanded: boolean
    ) => {
      emit('update:active', val);
      emit('change', val);
    };

    const isExpanded = (name: string | number | Array<string | number>) => {
      const { accordion, active } = props;
      if (accordion) {
        if (typeof active == 'number' || typeof active == 'string') {
          return active == name;
        } else {
          return false;
        }
      }
    };

    const { linkChildren } = useChildren(COLLAPSE_KEY);
    linkChildren({
      value: props.active,
      accordion: props.accordion,
      expandIconPosition: props.expandIconPosition,
      titleIcon: props.titleIcon,
      titleIconPosition: props.titleIconPosition,
      icon: props.icon,
      rotate: props.rotate,
      changeValAry,
      changeVal,
      isExpanded
    });
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
