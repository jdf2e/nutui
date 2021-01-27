<template>
  <view class="nut-infiniteloading" ref="scroller">
    <view class="nut-infinite-top"></view>

    <view class="nut-infinite-container"><slot></slot></view>

    <view class="nut-infinite-bottom">
      <template v-if="isLoading">
        <nut-icon name="refresh" v-if="!slotLoading"></nut-icon>
        <slot name="loading" v-else></slot>
      </template>
      <template v-else-if="!hasMore">
        <view class="tips" v-if="!slotUnloadMore">{{ unloadMoreTxt }}</view>
        <slot name="unloadMore" v-else></slot>
      </template>
    </view>
  </view>
</template>
<script lang="ts">
import { ref, toRefs, onMounted, onUnmounted } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('infiniteloading');

export default create({
  props: {
    hasMore: {
      type: Boolean,
      default: true
    },
    isLoading: {
      type: Boolean,
      default: false
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
    }
  },
  components: {},
  emits: ['scrollChange', 'loadMore'],

  setup(props, { emit, slots }) {
    console.log('componentName', componentName);

    const {
      hasMore,
      isLoading,
      threshold,
      containerId,
      useWindow,
      useCapture
    } = toRefs(props);

    let scrollEl: Window | HTMLElement = window;
    const scroller = ref<null | HTMLElement>(null);
    const beforeScrollTop = ref(0);
    const slotLoading = ref(false);
    const slotUnloadMore = ref(false);

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

    /** 滚动函数 */
    const handleScroll = () => {
      requestAniFrame()(() => {
        if (!isScrollAtBottom() || !hasMore.value || isLoading.value) {
          return false;
        } else {
          emit('loadMore');
        }
      });
    };

    /** 滚动监听 */
    const scrollListener = () => {
      scrollEl.addEventListener('scroll', handleScroll, useCapture.value);
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

      slotUnloadMore.value = slots.unloadMore ? true : false;
      slotLoading.value = slots.loading ? true : false;
    });

    /** 移除监听 */
    onUnmounted(() => {
      scrollEl.removeEventListener('scroll', handleScroll, useCapture.value);
    });

    return { scroller, slotLoading, slotUnloadMore };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
