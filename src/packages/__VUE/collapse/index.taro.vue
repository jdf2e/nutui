<template>
  <view ref="collapseDom">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { onMounted, provide, ref, watch, getCurrentInstance } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { nextTick } from '@tarojs/taro';
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

    const activeIndex = () => {
      const activeCollapse: any = props.active;
      const childrenList: any = slots.default?.();
      let act: any = [];
      childrenList.forEach((item: any, index: number) => {
        if (typeof activeCollapse == 'number' || typeof activeCollapse == 'string') {
          if (item.props.name == activeCollapse) {
            act.push(item.flag);
            return act;
          }
        } else {
          let ary = Array.from(activeCollapse);
          if (ary.includes(String(item.props.name)) || ary.includes(Number(item.props.name))) {
            act.push(item.flag);
          }
        }
      });
      return act;
    };
    const childrenDom = ref(null);
    onMounted(() => {
      childrenDom.value = (getCurrentInstance() as any).provides.collapseParent.children;
    });

    watch(
      () => props.active,
      (newval: any, oldval) => {
        nextTick(() => {
          let domsProps: any = slots?.default?.();
          let doms: any = childrenDom.value;
          Array.from(doms).forEach((item: any, index: number) => {
            if (typeof newval == 'number' || typeof newval == 'string') {
              if (domsProps[index]) {
                if (domsProps[index].props) {
                  item.changeOpen(newval == domsProps[index].props.name ? true : false);
                } else {
                  item.changeOpen(newval == item.name ? true : false);
                }
              } else {
                item.changeOpen(newval == item.name ? true : false);
              }
            } else if (Object.values(newval) instanceof Array) {
              const isOpen =
                newval.indexOf(Number(domsProps[index].props.name)) > -1 ||
                newval.indexOf(String(domsProps[index].props.name)) > -1;
              item.changeOpen(isOpen);
            }
            item.animation();
          });
        });
      }
    );

    const getParentChildren = () => {
      return slots.default?.();
    };
    provide('collapseParent', {
      children: [],
      props,
      changeValAry,
      changeVal,
      isExpanded,
      activeIndex,
      getParentChildren
    });
    return { collapseDom };
  }
});
</script>
