<template>
  <nut-scroll-view
    :id="'list' + refRandomId"
    ref="list"
    class="nut-list"
    :scroll-y="true"
    :style="{ height: `${getContainerHeight}px` }"
    scroll-top="0"
    @scroll="handleScrollEvent"
  >
    <div
      :id="'phantom' + refRandomId"
      ref="phantom"
      class="nut-list-phantom"
      :style="{ height: phantomHeight + 'px' }"
    ></div>
    <div
      :id="'actualContent' + refRandomId"
      ref="actualContent"
      class="nut-list-container"
      :style="{ transform: getTransform() }"
    >
      <div
        v-for="(item, index) in visibleData"
        :id="'list-item-' + Number(index + start)"
        :key="item"
        class="nut-list-item"
      >
        <slot :item="item" :index="index + start"></slot>
      </div>
    </div>
  </nut-scroll-view>
</template>
<script lang="ts">
import { reactive, toRefs, computed, ref, Ref, watch, ComputedRef } from 'vue';
import { createComponent } from '@/packages/utils/create';
import Taro from '@tarojs/taro';
import NutScrollView from '../scroll-view/index.taro.vue';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import { CachedPosition, CompareResult, binarySearch } from './type';
const { create } = createComponent('list');
const clientHeight = Taro.getSystemInfoSync().windowHeight || 667;

export default create({
  components: {
    NutScrollView
  },
  props: {
    height: {
      type: [Number],
      default: 50
    },
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
    estimateRowHeight: {
      type: Number,
      default: 80
    },
    margin: {
      type: Number,
      default: 10
    }
  },
  emits: ['scrollUp', 'scrollDown', 'scrollBottom'],

  setup(props, { emit }) {
    const list = ref(null) as Ref;
    const phantom = ref(null) as Ref;
    const actualContent = ref(null) as Ref;
    const refRandomId = Math.random().toString(36).slice(-8);
    const state = reactive({
      start: 0,
      originStartIndex: 0,
      scrollTop: 0,
      list: props.listData.slice(),
      cachePositions: [] as CachedPosition[],
      phantomHeight: props.estimateRowHeight * props.listData.length
    });

    const getContainerHeight = computed(() => {
      return Math.min(props.containerHeight, clientHeight);
    });

    const visibleCount = computed(() => {
      return Math.ceil(getContainerHeight.value / props.estimateRowHeight);
    });

    const end = computed(() => {
      return Math.min(state.originStartIndex + visibleCount.value + props.bufferSize, state.list.length);
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
          height: props.estimateRowHeight,
          top: i * props.estimateRowHeight,
          bottom: (i + 1) * (props.estimateRowHeight + props.margin),
          dValue: 0
        };
      }
    };

    const updateCachedPosition = () => {
      let nodes: any[] = actualContent.value.childNodes;
      nodes = Array.from(nodes).filter((node: HTMLDivElement) => node.nodeType === 1);
      const start = nodes[0];
      nodes.forEach(async (node: HTMLDivElement, index: number) => {
        if (!node) return;
        useTaroRect(node).then(
          (rect: any) => {
            if (rect && rect.height) {
              const { height } = rect;
              const oldHeight = state.cachePositions[index + state.start]
                ? state.cachePositions[index + state.start].height
                : props.height;
              const dValue = oldHeight - height;

              if (dValue && state.cachePositions[index + state.start]) {
                state.cachePositions[index + state.start].bottom -= dValue;
                state.cachePositions[index + state.start].height = height;
                state.cachePositions[index + state.start].dValue = dValue;
              }
            }
          },
          () => {}
        );
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
      state.phantomHeight = props.estimateRowHeight * state.list.length;
    };

    const handleScrollEvent = async (e: any) => {
      const scrollTop = Math.max(e.detail ? e.detail.scrollTop : e.target.scrollTop, 0.1);
      const { originStartIndex } = state;
      const currentIndex = getStartIndex(scrollTop);
      if (currentIndex !== originStartIndex) {
        state.originStartIndex = currentIndex;
        state.start = Math.max(state.originStartIndex - props.bufferSize, 0);
        if (end.value >= state.list.length - 1) {
          emit('scrollBottom');
        }
      }
      emit(scrollTop > state.scrollTop ? 'scrollUp' : 'scrollDown', scrollTop);
      state.scrollTop = scrollTop;
    };

    initCachedPosition();

    watch(
      () => props.listData,
      (val: any[]) => {
        state.list = val.slice();
        if (state.list.length === val.length) {
          setTimeout(() => {
            initCachedPosition();
            updateCachedPosition();
          }, 200);
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
          Taro.nextTick(() => {
            setTimeout(() => {
              updateCachedPosition();
            }, 200);
          });
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
      refRandomId,
      getContainerHeight,
      handleScrollEvent
    };
  }
});
</script>
