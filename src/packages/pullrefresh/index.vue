<template>
  <view
    class="nut-pullrefresh"
    ref="scroller"
    :style="getStyle"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <view class="pullrefresh-top">
      <template v-if="status == 'loading' && reachTop && distance > 0">
        加载中...
      </template>
      <template v-if="status == 'pulling' && reachTop && distance > 0">
        下拉刷新...
      </template>
      <template v-if="status == 'loosing' && reachTop && distance > 0">
        释放刷新...
      </template>
    </view>
    <view class="pullrefresh-content" ref="pull">
      <slot></slot>
    </view>

    <view class="pullrefresh-bottom" :style="getBottomStyle">
      <template v-if="status == 'loading' && reachBottom && distance < 0">
        加载中...
      </template>
      <template v-if="status == 'pulling' && reachBottom && distance < 0">
        下拉刷新...
      </template>
      <template v-if="status == 'loosing' && reachBottom && distance < 0">
        释放刷新...
      </template>
    </view>
  </view>
</template>

<script lang="ts">
import { ref, toRefs, reactive, onMounted, computed, CSSProperties } from 'vue';
import { createComponent } from '@/utils/create';
import { useTouch } from './use-touch';
import { preventDefault } from './util';
const { componentName, create } = createComponent('pullrefresh');

export default create({
  props: {
    useWindow: {
      type: Boolean,
      default: true
    },
    containerId: {
      type: String,
      default: ''
    }
  },
  components: {},
  emits: ['refresh'],

  setup(props, { emit }) {
    console.log('componentName', componentName);

    const { containerId, useWindow } = toRefs(props);

    const reachTop = ref(false);
    const reachBottom = ref(false);

    const state = reactive({
      status: 'normal',
      distance: 0,
      duration: 0
    });

    let scrollEl: HTMLElement = document.documentElement || document.body;

    const scroller = ref<null | HTMLElement>(null);
    const touch = useTouch();

    const getStyle = computed(() => {
      let style: CSSProperties = {};

      if (
        (reachTop.value && touch.deltaY.value > 0 && touch.isVertical()) ||
        (reachBottom.value && touch.deltaY.value < 0 && touch.isVertical())
      ) {
        style = {
          transitionDuration: `${state.duration}ms`,
          transform: state.distance
            ? `translate3d(0,${state.distance}px, 0)`
            : `translate3d(0,0,0)`
        };
      }
      return style;
    });

    const getBottomStyle = computed(() => {
      let style: CSSProperties = {};
      if (reachBottom.value && touch.deltaY.value < 0 && touch.isVertical()) {
        const dis = Math.abs(state.distance) < 50 ? -state.distance : 50;
        style = {
          height: dis + 'px'
        };
      }
      return style;
    });

    const setStatus = (distance: number, isLoading?: boolean) => {
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (distance === 0) {
        state.status = 'normal';
      } else if (Math.abs(distance) < 50) {
        state.status = 'pulling';
      } else {
        state.status = 'loosing';
      }
    };

    /** 获取监听自定义滚动节点 */
    const getParentElement = el => {
      if (containerId.value != '') {
        return document.querySelector(`#${containerId.value}`);
      }
      return el && el.parentNode;
    };

    /** 生命周期 首次加载 */
    onMounted(() => {
      const parentElement = getParentElement(scroller);

      let scrollElCopy = document.documentElement || document.body;
      if (useWindow.value === false) {
        scrollElCopy = parentElement;
      }

      scrollEl = scrollElCopy;
    });

    const ease = (distance: number) => {
      const headHeight = 50;

      if (distance > headHeight) {
        if (distance < headHeight * 2) {
          distance = headHeight + (distance - headHeight) / 2;
        } else {
          distance = headHeight * 1.5 + (distance - headHeight * 2) / 4;
        }
      }

      return Math.round(distance);
    };

    const refreshDone = () => {
      setStatus(0);
    };

    const touchStart = event => {
      /** 判断滚动条是否在顶部 */
      const top = 'scrollTop' in scrollEl ? scrollEl.scrollTop : 0;
      reachTop.value = Math.max(top, 0) == 0 ? true : false;

      if (reachTop.value) {
        state.duration = 0;
        touch.start(event);
      }

      const { scrollHeight, clientHeight, scrollTop } = scrollEl;

      /** 判断滚动条是否在底部*/
      reachBottom.value =
        clientHeight + scrollTop == scrollHeight ? true : false;

      if (reachBottom.value) {
        state.duration = 0;
        touch.start(event);
      }
    };

    const touchMove = event => {
      const { deltaY } = touch;

      touch.move(event);
      if (reachTop.value && deltaY.value >= 0 && touch.isVertical()) {
        preventDefault(event);
        setStatus(ease(deltaY.value));
      }

      if (reachBottom.value && deltaY.value < 0 && touch.isVertical()) {
        preventDefault(event);
        setStatus(ease(deltaY.value));
      }
    };
    const touchEnd = () => {
      if (reachTop.value && touch.deltaY.value > 0) {
        if (state.status === 'loosing') {
          setStatus(50, true);
          emit('refresh', refreshDone);
        } else {
          setStatus(0);
        }
      }

      if (reachBottom.value && touch.deltaY.value < 0) {
        if (state.status === 'loosing') {
          setStatus(-50, true);
          emit('refresh', refreshDone);
        } else {
          setStatus(0);
        }
      }
    };
    return {
      scroller,
      touchStart,
      touchMove,
      touchEnd,
      getStyle,
      reachBottom,
      reachTop,
      getBottomStyle,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
