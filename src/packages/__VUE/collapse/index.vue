<template>
  <view ref="collapseDom">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { getCurrentInstance, onMounted, provide, ref, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('collapse');
export default create({
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
  setup(props, { emit, slots }) {
    const collapseDom: any = ref(null);
    const collapseChldren: any = ref([]);
    watch(
      () => props.active,
      (newval: any, oldval) => {
        let doms: any = collapseChldren.value;
        Array.from(doms).forEach((item: any) => {
          if (typeof newval == 'number' || typeof newval == 'string') {
            if (newval == item.name) {
              item.changeOpen(true);
            } else {
              item.changeOpen(false);
            }
          } else if (Object.values(newval) instanceof Array) {
            if (newval.indexOf(Number(item.name)) > -1 || newval.indexOf(String(item.name)) > -1) {
              item.changeOpen(true);
            } else {
              item.changeOpen(false);
            }
          }
          item.animation();
        });
      }
    );

    onMounted(() => {
      collapseChldren.value = (getCurrentInstance() as any).provides.collapseParent.children || [];
    });

    const changeVal = (val: string | number | Array<string | number>) => {
      emit('update:active', val);
      emit('change', val);
    };

    const changeValAry = (name: string) => {
      const activeItem: any = props.active instanceof Object ? Object.values(props.active) : props.active;
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
        return typeof active === 'number' || typeof active === 'string' ? active == name : false;
      }
    };

    provide('collapseParent', {
      children: [],
      props,
      changeValAry,
      changeVal,
      isExpanded
    });

    return { collapseDom };
  }
});
</script>
