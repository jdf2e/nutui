<template>
  <scroll-view
    :class="classes"
    scrollY="true"
    style="height: 100%"
    id="scroller"
    @scrolltolower="lower"
    @scroll="scroll"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <view class="nut-infinite-top" :style="getStyle">
      <view class="top-box" id="refreshTop">
        <nut-icon class="top-img" :name="pullIcon"></nut-icon>
        <view class="top-text">{{ pullTxt }}</view>
      </view>
    </view>

    <view class="nut-infinite-container">
      <slot></slot>
    </view>

    <view class="nut-infinite-bottom">
      <template v-if="isInfiniting">
        <view class="bottom-box">
          <nut-icon class="bottom-img" :name="loadIcon"></nut-icon>
          <view class="bottom-text">{{ loadTxt }}</view>
        </view>
      </template>
      <template v-else-if="!hasMore">
        <view class="tips">{{ loadMoreTxt }}</view>
      </template>
    </view>
  </scroll-view>
</template>
<script lang="ts">
import { toRefs, onMounted, reactive, computed, CSSProperties } from 'vue';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('infiniteloading');
import Icon from '../icon/index.taro.vue';
import Taro from '@tarojs/taro';
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
      default: '松开刷新'
    },
    loadIcon: {
      type: String,
      default: 'https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png'
    },
    loadTxt: {
      type: String,
      default: '加载中···'
    },
    loadMoreTxt: {
      type: String,
      default: '哎呀，这里是底部了啦'
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
  components: {
    'nut-icon': Icon
  },
  setup(props, { emit, slots }) {
    const state = reactive({
      scrollHeight: 0,
      scrollTop: 0,
      isInfiniting: false,
      direction: 'down',
      isTouching: false,
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
    const getParentElement = (el) => {
      return Taro.createSelectorQuery().select(!!props.containerId ? `#${props.containerId} #${el}` : `#${el}`);
    };
    /** 获取需要滚动的距离 */
    const getScrollHeight = () => {
      const parentElement = getParentElement('scroller');

      parentElement
        .boundingClientRect((rect) => {
          state.scrollHeight = rect.height;
        })
        .exec();
    };

    /** 滚动到底部 */
    const lower = () => {
      if (state.direction == 'up' || !props.hasMore || state.isInfiniting) {
        return false;
      } else {
        state.isInfiniting = true;
        emit('load-more', infiniteDone);
      }
    };

    const scroll = (e) => {
      // 滚动方向
      if (e.detail.scrollTop <= 0) {
        // 滚动到最顶部
        e.detail.scrollTop = 0;
      } else if (e.detail.scrollTop >= state.scrollHeight) {
        // 滚动到最底部
        e.detail.scrollTop = state.scrollHeight;
      }
      if (e.detail.scrollTop > state.scrollTop || e.detail.scrollTop >= state.scrollHeight) {
        state.direction = 'down';
      } else {
        state.direction = 'up';
      }
      state.scrollTop = e.detail.scrollTop;

      emit('scroll-change', e.detail.scrollTop);
    };

    const infiniteDone = () => {
      state.isInfiniting = false;
    };

    const touchStart = (event: TouchEvent) => {
      if (state.scrollTop == 0 && !state.isTouching && props.isOpenRefresh) {
        state.y = event.touches[0].pageY;
        state.isTouching = true;
        getParentElement('refreshTop')
          .boundingClientRect((rect) => {
            state.refreshMaxH = Math.floor(rect.height * 1 + 10);
          })
          .exec();
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
      if (state.distance < state.refreshMaxH) {
        state.distance = 0;
      } else {
        emit('refresh', refreshDone);
      }
    };

    const refreshDone = () => {
      state.distance = 0;
      state.isTouching = false;
    };

    onMounted(() => {
      setTimeout(() => {
        getScrollHeight();
      }, 200);
    });

    return {
      classes,
      ...toRefs(state),
      lower,
      scroll,
      touchStart,
      touchMove,
      touchEnd,
      getStyle
    };
  }
});
</script>
