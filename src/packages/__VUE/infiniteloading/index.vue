<template>
  <view :class="classes" ref="scroller" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <view class="nut-infinite-top" ref="refreshTop" :style="getStyle">
      <view class="top-box">
        <nut-icon class="top-img" v-bind="$attrs" :name="pullIcon"></nut-icon>
        <view class="top-text">{{ pullTxt || translate('pullTxt') }}</view>
      </view>
    </view>

    <view class="nut-infinite-container">
      <slot></slot>
    </view>

    <view class="nut-infinite-bottom">
      <template v-if="isInfiniting">
        <view class="bottom-box">
          <slot name="loading">
            <nut-icon class="bottom-img" v-bind="$attrs" :name="loadIcon"></nut-icon>
            <view class="bottom-text">{{ loadTxt || translate('loading') }}</view>
          </slot>
        </view>
      </template>
      <template v-else-if="!hasMore">
        <slot name="finished">
          <view class="tips">{{ loadMoreTxt || translate('loadMoreTxt') }}</view>
        </slot>
      </template>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, onMounted, onUnmounted, reactive, computed, onActivated, onDeactivated, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('infiniteloading');
import { useTouch } from '@/packages/utils/useTouch';
import requestAniFrame from '@/packages/utils/raf';
import { getScrollTopRoot } from '@/packages/utils/util';

export default create({
  props: {
    hasMore: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 200
    },
    pullIcon: {
      type: String,
      default: 'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png'
    },
    pullTxt: {
      type: String,
      default: ''
    },
    loadIcon: {
      type: String,
      default: 'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png'
    },
    loadTxt: {
      type: String,
      default: ''
    },
    loadMoreTxt: {
      type: String,
      default: ''
    },
    useWindow: {
      type: Boolean,
      default: true
    },
    containerId: {
      type: String,
      default: ''
    },
    useCapture: {
      type: Boolean,
      default: false
    },
    isOpenRefresh: {
      type: Boolean,
      default: false
    }
  },
  emits: ['scroll-change', 'load-more', 'refresh'],

  setup(props, { emit, slots }) {
    const touch: any = useTouch();
    const state = reactive({
      scrollEl: window as Window | HTMLElement | (Node & ParentNode),
      scroller: null as null | HTMLElement,
      refreshTop: null as null | HTMLElement,
      beforeScrollTop: 0,
      isTouching: false,
      isInfiniting: false,
      refreshMaxH: 0,
      y: 0,
      x: 0,
      distance: 0
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const getStyle = computed(() => {
      return {
        height: state.distance < 0 ? `0px` : `${state.distance}px`,
        transitionDuration: state.isTouching ? 0 : `0.2s`
      };
    });

    const calculateTopPosition = (el: HTMLElement): number => {
      return !el ? 0 : el.offsetTop + calculateTopPosition(el.offsetParent as HTMLElement);
    };

    const isScrollAtBottom = () => {
      let offsetDistance = 0;
      let resScrollTop = 0;
      let direction = 'down';

      if (props.useWindow) {
        const windowScrollTop = getScrollTopRoot();
        if (state.scroller) {
          offsetDistance =
            calculateTopPosition(state.scroller) + state.scroller.offsetHeight - windowScrollTop - window.innerHeight;
        }
        resScrollTop = windowScrollTop;
      } else {
        const { scrollHeight, clientHeight, scrollTop } = state.scrollEl as HTMLElement;

        offsetDistance = scrollHeight - clientHeight - scrollTop;
        resScrollTop = scrollTop;
      }

      if (state.beforeScrollTop > resScrollTop) {
        direction = 'up';
      } else {
        direction = 'down';
      }

      state.beforeScrollTop = resScrollTop;

      emit('scroll-change', resScrollTop);

      return offsetDistance <= props.threshold && direction == 'down';
    };

    const infiniteDone = () => {
      state.isInfiniting = false;
    };

    const handleScroll = () => {
      requestAniFrame(() => {
        if (!isScrollAtBottom() || !props.hasMore || state.isInfiniting) {
          return false;
        } else {
          state.isInfiniting = true;
          emit('load-more', infiniteDone);
        }
      });
    };

    const scrollListener = () => {
      state.scrollEl.addEventListener('scroll', handleScroll, props.useCapture);
    };

    const refreshDone = () => {
      state.distance = 0;
      state.isTouching = false;
    };

    const touchStart = (event: TouchEvent) => {
      touch.start(event);

      if (state.beforeScrollTop == 0 && !state.isTouching && props.isOpenRefresh) {
        state.y = event.touches[0].pageY;
        state.isTouching = true;

        const childHeight = ((state.refreshTop as HTMLElement).firstElementChild as HTMLElement).offsetHeight;
        state.refreshMaxH = Math.floor(childHeight * 1 + 10);
      }
    };

    const touchMove = (event: TouchEvent) => {
      touch.move(event);

      state.distance = event.touches[0].pageY - state.y;

      if ((touch as any).isVertical() && state.distance > 0 && state.isTouching) {
        event.preventDefault();
        if (state.distance >= state.refreshMaxH) state.distance = state.refreshMaxH;
      } else {
        state.distance = 0;
        state.isTouching = false;
      }
    };

    const touchEnd = () => {
      if (state.distance) {
        if (state.distance < state.refreshMaxH) {
          state.distance = 0;
        } else {
          emit('refresh', refreshDone);
        }
      }

      setTimeout(() => {
        touch.reset();
      }, 0);
    };

    // 滚动监听对象
    const getParentElement = (el: HTMLElement) => {
      return !!props.containerId ? document.querySelector(`#${props.containerId}`) : el && el.parentNode;
    };

    const removeScrollListener = () => {
      state.scrollEl.removeEventListener('scroll', handleScroll, props.useCapture);
    };

    onMounted(() => {
      const parentElement = getParentElement(state.scroller as HTMLElement) as Node & ParentNode;
      state.scrollEl = props.useWindow ? window : parentElement;

      scrollListener();
    });

    onUnmounted(() => {
      removeScrollListener();
    });

    const isKeepAlive = ref(false);

    onActivated(() => {
      if (isKeepAlive.value) {
        isKeepAlive.value = false;
        scrollListener();
      }
    });

    onDeactivated(() => {
      isKeepAlive.value = true;
      removeScrollListener();
    });

    return {
      classes,
      ...toRefs(state),
      touchStart,
      touchMove,
      touchEnd,
      getStyle,
      translate,
      slots
    };
  }
});
</script>
