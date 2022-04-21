<template>
  <view :class="classes">
    <view class="nut-sidenavbar__content">
      <view class="nut-sidenavbar__content__list" ref="list">
        <slot></slot>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { computed, onMounted, reactive, ref, toRefs, Ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
// import { createIntersectionObserver, IntersectionObserver } from '@tarojs/taro';
const { componentName, create } = createComponent('sidenavbar');
export default create({
  props: {
    offset: {
      type: [String, Number],
      default: 15
    }
  },
  emits: [],
  setup: (props: any, context: any) => {
    const list = ref(null) as Ref;
    const state = reactive({
      count: 1
      // observer: null as IntersectionObserver | null
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const setPaddingLeft = (nodeList: any, level: number = 1) => {
      for (let i = 0; i < nodeList.length; i++) {
        let item = nodeList[i];
        item.children[0].style.paddingLeft = props.offset * level + 'px';
        if (!item.className.includes('nut-sidenavbaritem')) {
          setPaddingLeft(Array.from(item.children[1].children), ++state.count);
        }
      }
      state.count--;
    };

    const handleSlots = () => {
      let childNodes = list.value.childNodes;
      if (childNodes && childNodes.length) {
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
      // state.observer = createIntersectionObserver(proxy, {
      //   thresholds: [1],
      //   initialRatio: 1,
      //   observeAll: true
      // });

      // state.observer.observe(list.value, () => {
      //   state.count = 1;
      //   handleSlots();
      // });
    });

    return {
      ...toRefs(state),
      list,
      classes
    };
  }
});
</script>
