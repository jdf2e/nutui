<template>
  <view-block
    class="nut-infiniteloading"
    ref="scroller"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <view-block class="nut-infinite-top" ref="refreshTop" :style="getStyle">
      <view-block class="top-box" v-if="!slotRefreshLoading">
        <nut-icon
          class="top-img"
          name="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
        ></nut-icon>
        <view-block class="top-text">松开刷新</view-block>
      </view-block>

      <slot name="refreshLoading" v-else></slot>
    </view-block>

    <view-block class="nut-infinite-container"><slot></slot></view-block>

    <view-block class="nut-infinite-bottom">
      <template v-if="isInfiniting">
        <view-block v-if="!slotLoading" class="bottom-box">
          <nut-icon
            class="bottom-img"
            name="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png"
          ></nut-icon>
          <view-block class="bottom-text">加载中···</view-block>
        </view-block>

        <slot name="loading" v-else></slot>
      </template>
      <template v-else-if="!hasMore">
        <view-block class="tips" v-if="!slotUnloadMore">{{
          unloadMoreTxt
        }}</view-block>
        <slot name="unloadMore" v-else></slot>
      </template>
    </view-block>
  </view-block>
</template>
<script lang="ts">
import {
  ref,
  toRefs,
  onMounted,
  onUnmounted,
  reactive,
  computed,
  CSSProperties
} from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('infiniteloading');
import Icon from '@/packages/icon/index.vue';
export default create({
  components: {
    [Icon.name]: Icon
  },
  props: {
    hasMore: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 200
    },
    unloadMoreTxt: {
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
  components: {},
  emits: ['scrollChange', 'loadMore', 'refresh'],

  setup(props, { emit, slots }) {
    console.log('componentName', componentName);

    const {
      hasMore,
      threshold,
      containerId,
      useWindow,
      useCapture,
      isOpenRefresh
    } = toRefs(props);

    let scrollEl: Window | HTMLElement = window;
    const scroller = ref<null | HTMLElement>(null);
    const refreshTop = ref<null | HTMLElement>(null);
    const beforeScrollTop = ref(0);
    const isTouching = ref(false);
    const isInfiniting = ref(false);
    const refreshMaxH = ref(0);

    const slot = reactive({
      slotLoading: false,
      slotUnloadMore: false,
      slotRefreshLoading: false
    });

    const pageStart = reactive({
      y: 0,
      x: 0,
      distance: 0
    });

    const getStyle = computed(() => {
      const style: CSSProperties = {};

      if (pageStart.distance < 0) {
        style.height = 0 + 'px';
      } else {
        style.height = pageStart.distance + 'px';
      }

      if (isTouching.value) {
        style.transition = `height 0s cubic-bezier(0.25,0.1,0.25,1)`;
      } else {
        style.transition = `height 0.2s cubic-bezier(0.25,0.1,0.25,1)`;
      }
      return style;
    });

    /** 获取监听自定义滚动节点 */
    const getParentElement = el => {
      if (containerId.value != '') {
        return document.querySelector(`#${containerId.value}`);
      }
      return el && el.parentNode;
    };

    const requestAniFrame = () => {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function(callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    };
    /** 获取滚动条高度 */
    const getWindowScrollTop = () => {
      return window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    };

    const calculateTopPosition = el => {
      if (!el) {
        return 0;
      }
      return el.offsetTop + calculateTopPosition(el.offsetParent);
    };

    /** 判断是否滚动到底部 */
    const isScrollAtBottom = () => {
      let offsetDistance = 0;
      let resScrollTop = 0;
      let direction = 'down'; // 滚动的方向
      const windowScrollTop = getWindowScrollTop();
      if (useWindow.value) {
        if (scroller.value) {
          offsetDistance =
            calculateTopPosition(scroller.value) +
            scroller.value.offsetHeight -
            windowScrollTop -
            window.innerHeight;
        }
        resScrollTop = windowScrollTop;
      } else {
        const {
          scrollHeight,
          clientHeight,
          scrollTop
        } = scrollEl as HTMLElement;

        offsetDistance = scrollHeight - clientHeight - scrollTop;
        resScrollTop = scrollTop;
      }

      if (beforeScrollTop.value > resScrollTop) {
        direction = 'up';
      } else {
        direction = 'down';
      }

      beforeScrollTop.value = resScrollTop;

      emit('scrollChange', resScrollTop);

      return offsetDistance <= threshold.value && direction == 'down';
    };

    const infiniteDone = () => {
      isInfiniting.value = false;
    };
    /** 滚动函数 */
    const handleScroll = () => {
      requestAniFrame()(() => {
        if (!isScrollAtBottom() || !hasMore.value || isInfiniting.value) {
          return false;
        } else {
          console.log('无限加载更多');
          isInfiniting.value = true;
          emit('loadMore', infiniteDone);
        }
      });
    };

    /** 滚动监听 */
    const scrollListener = () => {
      scrollEl.addEventListener('scroll', handleScroll, useCapture.value);
    };

    /** 下拉加载完成回到初始状态 */
    const refreshDone = () => {
      pageStart.distance = 0;
      isTouching.value = false;
    };

    const touchStart = event => {
      if (
        beforeScrollTop.value == 0 &&
        !isTouching.value &&
        isOpenRefresh.value
      ) {
        pageStart.y = event.touches[0].pageY;
        isTouching.value = true;

        const childHeight = ((refreshTop.value as HTMLElement)
          .firstElementChild as HTMLElement).offsetHeight;
        refreshMaxH.value = Math.floor(childHeight * 1 + 10);
      }
    };

    const touchMove = event => {
      pageStart.distance = event.touches[0].pageY - pageStart.y;

      if (pageStart.distance > 0 && isTouching.value) {
        event.preventDefault();
        if (pageStart.distance >= refreshMaxH.value)
          pageStart.distance = refreshMaxH.value;
      } else {
        pageStart.distance = 0;
        isTouching.value = false;
      }
    };
    const touchEnd = () => {
      if (pageStart.distance < refreshMaxH.value) {
        pageStart.distance = 0;
      } else {
        emit('refresh', refreshDone);
      }
    };

    /** 生命周期 首次加载 */
    onMounted(() => {
      const parentElement = getParentElement(scroller);

      let scrollElCopy = window;
      if (useWindow.value === false) {
        scrollElCopy = parentElement;
      }

      scrollEl = scrollElCopy;

      scrollListener();

      slot.slotUnloadMore = slots.unloadMore ? true : false;
      slot.slotLoading = slots.loading ? true : false;
      slot.slotRefreshLoading = slots.refreshLoading ? true : false;
    });

    /** 移除监听 */
    onUnmounted(() => {
      scrollEl.removeEventListener('scroll', handleScroll, useCapture.value);
    });

    return {
      scroller,
      refreshTop,
      touchStart,
      touchMove,
      touchEnd,
      getStyle,
      isInfiniting,
      ...toRefs(slot)
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
