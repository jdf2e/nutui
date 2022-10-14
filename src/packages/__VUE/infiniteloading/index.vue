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
          <template v-if="!slots.loading">
            <nut-icon class="bottom-img" v-bind="$attrs" :name="loadIcon"></nut-icon>
            <view class="bottom-text">{{ loadTxt || translate('loading') }}</view>
          </template>
          <slot name="loading" v-else></slot>
        </view>
      </template>
      <template v-else-if="!hasMore">
        <view class="tips" v-if="!slots.finished">{{ loadMoreTxt || translate('loadMoreTxt') }}</view>
        <slot name="finished" v-else></slot>
      </template>
    </view>
  </view>
</template>
<script lang="ts">
import {
  toRefs,
  onMounted,
  onUnmounted,
  reactive,
  computed,
  CSSProperties,
  onActivated,
  onDeactivated,
  ref
} from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('infiniteloading');
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
      const style: CSSProperties = {};
      return {
        height: state.distance < 0 ? `0px` : `${state.distance}px`,
        transition: state.isTouching
          ? `height 0s cubic-bezier(0.25,0.1,0.25,1)`
          : `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`
      };
    });

    const requestAniFrame = () => {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    };

    const getWindowScrollTop = () => {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    };

    const calculateTopPosition = (el: HTMLElement): number => {
      return !el ? 0 : el.offsetTop + calculateTopPosition(el.offsetParent as HTMLElement);
    };

    const isScrollAtBottom = () => {
      let offsetDistance = 0;
      let resScrollTop = 0;
      let direction = 'down';
      const windowScrollTop = getWindowScrollTop();
      if (props.useWindow) {
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
      requestAniFrame()(() => {
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
      if (state.beforeScrollTop == 0 && !state.isTouching && props.isOpenRefresh) {
        state.y = event.touches[0].pageY;
        state.isTouching = true;

        const childHeight = ((state.refreshTop as HTMLElement).firstElementChild as HTMLElement).offsetHeight;
        state.refreshMaxH = Math.floor(childHeight * 1 + 10);
      }
    };

    const touchMove = (event: TouchEvent) => {
      state.distance = event.touches[0].pageY - state.y;

      if (state.distance > 0 && state.isTouching) {
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
    };

    // 滚动监听对象
    const getParentElement = (el: HTMLElement) => {
      return !!props.containerId ? document.querySelector(`#${props.containerId}`) : el && el.parentNode;
    };

    onMounted(() => {
      const parentElement = getParentElement(state.scroller as HTMLElement) as Node & ParentNode;
      state.scrollEl = props.useWindow ? window : parentElement;

      scrollListener();

      console.log(slots);
    });

    onUnmounted(() => {
      state.scrollEl.removeEventListener('scroll', handleScroll, props.useCapture);
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
      state.scrollEl.removeEventListener('scroll', handleScroll, props.useCapture);
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
