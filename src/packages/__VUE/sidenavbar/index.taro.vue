<template>
  <view :class="classes">
    <view class="nut-side-navbar__content">
      <view class="nut-side-navbar__content__list" ref="list">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, onMounted, reactive, ref, toRefs, Ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('side-navbar');
export default create({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  emits: [],
  setup: (props) => {
    const list = ref(null) as Ref;
    const state = reactive({
      count: 1
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const setPaddingLeft = (nodeList: any[], level = 1) => {
      for (let i = 0; i < nodeList.length; i++) {
        let item = nodeList[i];
        if (item?.children?.[0]) {
          item.children[0].style.paddingLeft = +props.offset * level + 'px';
          if (!item.className.includes('nut-side-navbar-item')) {
            setPaddingLeft(Array.from(item.children[1].children), ++state.count);
          }
        }
      }
      state.count--;
    };

    const handleSlots = () => {
      let childNodes = list.value.childNodes;
      if (childNodes?.length) {
        childNodes = Array.from(childNodes)
          .filter((item: any) => item.nodeType !== 3)
          .map((item: any) => {
            return item;
          });
        setPaddingLeft(childNodes);
      }
    };

    onMounted(() => {
      handleSlots();
    });

    return {
      ...toRefs(state),
      list,
      classes
    };
  }
});
</script>
