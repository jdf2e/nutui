<template>
  <scroll-view
    :class="classes"
    :scroll-y="true"
    :style="{ height: screenHeight + 'px' }"
    scroll-top="0"
    @scroll="handleScrollEvent"
    ref="list"
  >
    <div class="nut-list-phantom" :style="{ height: listHeight + 'px' }"></div>
    <div class="nut-list-container" :style="{ transform: getTransform }">
      <div class="nut-list-item" :style="{ height: height + 'px' }" v-for="(item, index) in visibleData" :key="item">
        <slot :item="item" :index="index"></slot>
      </div>
    </div>
  </scroll-view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ref, Ref, watch } from 'vue';
import { createComponent } from '../../utils/create';
import Taro from '@tarojs/taro';
const { componentName, create } = createComponent('list');
export default create({
  props: {
    height: {
      type: [Number],
      default: 0
    },
    listData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  emits: ['scroll'],

  setup(props, { emit }) {
    const list = ref(null) as Ref;
    const state = reactive({
      screenHeight: Taro.getSystemInfoSync().windowHeight,
      startOffset: 0,
      start: 0,
      list: props.listData.slice()
    });

    const visibleCount = computed(() => {
      return Math.ceil(state.screenHeight / props.height);
    });

    const end = computed(() => {
      return state.start + visibleCount.value;
    });

    const getTransform = computed(() => {
      return `translate3d(0, ${state.startOffset}px, 0)`;
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const listHeight = computed(() => {
      return state.list.length * props.height;
    });

    const visibleData = computed(() => {
      return state.list.slice(state.start, Math.min(end.value, state.list.length));
    });

    const handleScrollEvent = async (e: any) => {
      const scrollTop = e.detail.scrollTop;
      state.start = Math.floor(scrollTop / props.height);
      if (end.value > state.list.length) {
        emit('scroll');
      }
      state.startOffset = scrollTop - (scrollTop % props.height);
    };

    watch(
      () => props.listData,
      () => {
        state.list = props.listData.slice();
      }
    );

    return {
      ...toRefs(state),
      list,
      getTransform,
      listHeight,
      visibleData,
      classes,
      handleScrollEvent
    };
  }
});
</script>
