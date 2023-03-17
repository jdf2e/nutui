<template>
  <div :class="classes" :style="{ height: `${getContainerHeight}px` }" @scroll.passive="handleScrollEvent" ref="list">
    <div class="nut-list-phantom" :style="{ height: phantomHeight + 'px' }" ref="phantom"></div>
    <div class="nut-list-container" :style="{ transform: getTransform() }" ref="actualContent">
      <div class="nut-list-item" v-for="(item, index) in visibleData" :key="item">
        <slot :item="item" :index="index + start"></slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ref, Ref, watch, ComputedRef } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { CachedPosition, CompareResult, binarySearch } from './type';
import { useRect } from '@/packages/utils/useRect';
const { componentName, create } = createComponent('list');
const clientHeight = document.documentElement.clientHeight || document.body.clientHeight || 667;

export default create({
  props: {
    listData: {
      type: Array,
      default: () => {
        return [];
      }
    },
    bufferSize: {
      type: Number,
      default: 5
    },
    containerHeight: {
      type: [Number],
      default: clientHeight
    },
    height: {
      type: Number,
      default: 80
    },
    margin: {
      type: Number,
      default: 10
    }
  },
  emits: ['scroll-up', 'scroll-down', 'scroll-bottom'],

  setup(props, { emit }) {
    const list = ref(null) as Ref;
    const phantom = ref(null) as Ref;
    const actualContent = ref(null) as Ref;
    const state = reactive({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: props.listData.slice(),
      cachePositions: [] as CachedPosition[],
      phantomHeight: props.height * props.listData.length
    });

    const getContainerHeight = computed(() => {
      return Math.min(props.containerHeight, clientHeight);
    });

    const visibleCount = computed(() => {
      return Math.ceil(getContainerHeight.value / props.height);
    });

    const end = computed(() => {
      return Math.min(state.originStartIndex + visibleCount.value + props.bufferSize, state.list.length);
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const visibleData: ComputedRef = computed(() => {
      return state.list.slice(state.start, end.value);
    });

    const getTransform = () => {
      if (actualContent.value) {
        return `translate3d(0, ${state.start >= 1 ? state.cachePositions[state.start - 1].bottom : 0}px, 0)`;
      }
    };

    const initCachedPosition = () => {
      state.cachePositions = [];
      for (let i = 0; i < state.list.length; ++i) {
        state.cachePositions[i] = {
          index: i,
          height: props.height,
          top: i * props.height,
          bottom: (i + 1) * (props.height + props.margin),
          dValue: 0
        };
      }
    };

    const updateCachedPosition = () => {
      let nodes: any[] = actualContent.value.childNodes;
      nodes = Array.from(nodes).filter((node: HTMLDivElement) => node.nodeType === 1);
      const start = nodes[0];
      nodes.forEach((node: HTMLDivElement, index: number) => {
        if (!node) return;
        const rect = useRect(node);
        const { height } = rect;
        const oldHeight = state.cachePositions[index + state.start].height;
        const dValue = oldHeight - height;

        if (dValue) {
          state.cachePositions[index + state.start].bottom -= dValue;
          state.cachePositions[index + state.start].height = height;
          state.cachePositions[index + state.start].dValue = dValue;
        }
      });

      let startIndex = 0;
      if (start) {
        startIndex = state.start;
      }

      const cachedPositionsLen = state.cachePositions.length;
      let cumulativeDiffHeight = state.cachePositions[startIndex].dValue;
      state.cachePositions[startIndex].dValue = 0;

      for (let i = startIndex + 1; i < cachedPositionsLen; ++i) {
        const item = state.cachePositions[i];

        state.cachePositions[i].top = state.cachePositions[i - 1].bottom;
        state.cachePositions[i].bottom = state.cachePositions[i].bottom - cumulativeDiffHeight;

        if (item.dValue !== 0) {
          cumulativeDiffHeight += item.dValue;
          item.dValue = 0;
        }
      }

      const height = state.cachePositions[cachedPositionsLen - 1].bottom;

      state.phantomHeight = height;
    };

    const getStartIndex = (scrollTop = 0) => {
      let idx = binarySearch<CachedPosition, number>(
        state.cachePositions,
        scrollTop,
        (currentValue: CachedPosition, targetValue: number) => {
          const currentCompareValue = currentValue.bottom;
          if (currentCompareValue === targetValue) {
            return CompareResult.eq;
          }

          if (currentCompareValue < targetValue) {
            return CompareResult.lt;
          }

          return CompareResult.gt;
        }
      ) as number;

      const targetItem = state.cachePositions[idx];

      if (targetItem.bottom < scrollTop) {
        idx += 1;
      }

      return idx;
    };

    const resetAllVirtualParam = () => {
      state.originStartIndex = 0;
      state.start = 0;
      state.scrollTop = 0;
      list.value.scrollTop = 0;
      initCachedPosition();
      state.phantomHeight = props.height * state.list.length;
    };

    const handleScrollEvent = () => {
      const scrollTop = list.value?.scrollTop as number;
      const { originStartIndex } = state;
      const currentIndex = getStartIndex(scrollTop);
      if (currentIndex !== originStartIndex) {
        state.originStartIndex = currentIndex;
        state.start = Math.max(state.originStartIndex - props.bufferSize, 0);
        if (end.value >= state.list.length - 1) {
          emit('scroll-bottom');
        }
      }
      emit(scrollTop > state.scrollTop ? 'scroll-up' : 'scroll-down', scrollTop);
      state.scrollTop = scrollTop;
    };

    watch(
      () => props.listData,
      (val: any[]) => {
        state.list = val.slice();
        if (state.list.length === val.length) {
          initCachedPosition();
          updateCachedPosition();
        } else {
          resetAllVirtualParam();
          return;
        }
      }
    );

    watch(
      () => state.start,
      () => {
        if (actualContent.value && state.list.length > 0) {
          updateCachedPosition();
        }
      }
    );

    return {
      ...toRefs(state),
      list,
      phantom,
      actualContent,
      getTransform,
      visibleData,
      classes,
      getContainerHeight,
      handleScrollEvent
    };
  }
});
</script>
