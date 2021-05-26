<template>
  <view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { provide } from 'vue';
import { createComponent } from '@/packages/utils/create';
import collapseitem from '@/packages/__VUE/collapseitem/index.vue';
const { create } = createComponent('collapse');
export default create({
  children: [collapseitem],
  props: {
    active: {
      type: [String, Number, Array]
    },
    accordion: {
      type: Boolean
    },
    // expandIconPosition: {
    //   type: String,
    //   default: 'right'
    // },
    titleIcon: {
      type: String,
      default: ''
    },
    titleIconSize: {
      type: String,
      default: '16px'
    },
    titleIconColor: {
      type: String,
      default: ''
    },
    titleIconPosition: {
      type: String,
      default: 'left'
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: String,
      default: '16px'
    },
    iconColor: {
      type: String,
      default: ''
    },
    rotate: {
      type: [String, Number],
      default: 180
    }
  },
  emits: ['update:active', 'change'],
  setup(props, { emit }) {
    const changeVal = (val: string | number | Array<string | number>) => {
      emit('update:active', val);
      emit('change', val);
    };

    const changeValAry = (name: string) => {
      const activeItem: any =
        props.active instanceof Object
          ? Object.values(props.active)
          : props.active;
      let index = -1;
      activeItem.forEach((item: string | number, idx: number) => {
        if (String(item) == String(name)) {
          index = idx;
        }
      });
      index > -1 ? activeItem.splice(index, 1) : activeItem.push(name);
      changeVal(activeItem);
    };

    const isExpanded = (name: string | number | Array<string | number>) => {
      const { accordion, active } = props;
      if (accordion) {
        return typeof active === 'number' || typeof active === 'string'
          ? active == name
          : false;
      }
    };

    provide('collapseParent', {
      children: [],
      props,
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
