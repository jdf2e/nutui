<template>
  <view
    class="nut-pullrefresh"
    ref="scroller"
    :style="getStyle"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd"
  >
    <view
      class="pullrefresh-top"
      :class="
        direction == 'horizontal' ? 'pullrefresh-top-h' : 'pullrefresh-top-v'
      "
    >
      <template
        v-if="status == 'loading' && (reachTop || reachLeft) && distance > 0"
        >{{ loadingText }}</template
      >
      <template
        v-if="status == 'pulling' && (reachTop || reachLeft) && distance > 0"
        >{{ pullingText }}</template
      >
      <template
        v-if="status == 'loosing' && (reachTop || reachLeft) && distance > 0"
        >{{ loosingText }}</template
      >
    </view>
    <view class="pullrefresh-content" ref="pull">
      <slot></slot>
    </view>

    <view
      class="pullrefresh-bottom"
      :class="
        direction == 'horizontal'
          ? 'pullrefresh-bottom-h'
          : 'pullrefresh-bottom-v'
      "
      :style="getBottomStyle"
    >
      <template
        v-if="
          status == 'loading' && (reachBottom || reachRight) && distance < 0
        "
        >{{ loadingText }}</template
      >
      <template
        v-if="
          status == 'pulling' && (reachBottom || reachRight) && distance < 0
        "
        >{{ pullingText }}</template
      >
      <template
        v-if="
          status == 'loosing' && (reachBottom || reachRight) && distance < 0
        "
        >{{ loosingText }}</template
      >
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    /** 方向 Horizontal */
    direction: {
      type: String,
      default: 'vertical'
    },

    pullingText: {
      type: String,
      default: '下拉刷新'
    },
    loosingText: {
      type: String,
      default: '松手释放刷新'
    },
    loadingText: {
      type: String,
      default: '加载中...'
    }
  },
  components: {},
  emits: ['refresh'],

  setup(props, { emit }) {
    console.log('componentName', componentName);

    const { containerId, useWindow, direction, disabled } = toRefs(props);

    const reachTop = ref(false);
    const reachBottom = ref(false);

    const reachLeft = ref(false);
    const reachRight = ref(false);

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
      const { deltaY, deltaX } = touch;
      if (
        direction.value == 'vertical' &&
        ((reachTop.value && deltaY.value > 0) ||
          (reachBottom.value && deltaY.value < 0)) &&
        touch.isVertical()
      ) {
        style = {
          transitionDuration: `${state.duration}ms`,
          transform: state.distance
            ? `translate3d(0,${state.distance}px, 0)`
            : `translate3d(0,0,0)`
        };
      }
      if (
        direction.value == 'horizontal' &&
        ((reachLeft.value && deltaX.value > 0) ||
          (reachRight.value && deltaX.value < 0)) &&
        touch.isHorizontal()
      ) {
        style = {
          transitionDuration: `${state.duration}ms`,
          transform: state.distance
            ? `translate3d(${state.distance}px, 0,0)`
            : `translate3d(0,0,0)`
        };
      }

      return style;
    });

    const getBottomStyle = computed(() => {
      let style: CSSProperties = {};
      if (
        direction.value == 'vertical' &&
        reachBottom.value &&
        touch.deltaY.value < 0 &&
        touch.isVertical()
      ) {
        const dis = Math.abs(state.distance) < 50 ? -state.distance : 50;
        style = {
          height: dis + 'px'
        };
      }

      if (
        direction.value == 'horizontal' &&
        reachRight.value &&
        touch.deltaX.value < 0 &&
        touch.isVertical()
      ) {
        const dis = Math.abs(state.distance) < 50 ? -state.distance : 50;
        style = {
          width: dis + 'px'
        };
      }
      return style;
    });

    const isTouchable = () => state.status !== 'loading' && !disabled.value;

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
      if (isTouchable()) {
        if (direction.value == 'vertical') {
          /** 判断滚动条是否在顶部 */
          const top = 'scrollTop' in scrollEl ? scrollEl.scrollTop : 0;
          reachTop.value = Math.max(top, 0) == 0 ? true : false;

          /** 判断滚动条是否在底部*/
          const { scrollHeight, clientHeight, scrollTop } = scrollEl;
          reachBottom.value =
            clientHeight + scrollTop == scrollHeight ? true : false;

          if (reachTop.value || reachBottom.value) {
            state.duration = 0;
            touch.start(event);
          }
        } else {
          const { scrollWidth, clientWidth, scrollLeft } = scrollEl;
          /** 判断滚动条是否在左边 */
          const left = 'scrollLeft' in scrollEl ? scrollEl.scrollLeft : 0;
          reachLeft.value = Math.max(left, 0) == 0 ? true : false;

          /** 判断滚动条是否在右边 */
          reachRight.value =
            clientWidth + scrollLeft == scrollWidth ? true : false;

          if (reachLeft.value || reachRight.value) {
            state.duration = 0;
            touch.start(event);
          }
        }
      }
    };

    const touchMove = event => {
      if (isTouchable()) {
        const { deltaY, deltaX } = touch;
        touch.move(event);

        if (
          direction.value == 'vertical' &&
          ((reachBottom.value && deltaY.value < 0) ||
            (reachTop.value && deltaY.value >= 0)) &&
          touch.isVertical()
        ) {
          preventDefault(event);
          setStatus(ease(deltaY.value));
        }

        if (
          direction.value == 'horizontal' &&
          ((reachLeft.value && deltaX.value >= 0) ||
            (reachRight.value && deltaX.value < 0)) &&
          touch.isHorizontal()
        ) {
          preventDefault(event);
          setStatus(ease(deltaX.value));
        }
      }
    };
    const touchEnd = () => {
      if (isTouchable()) {
        const { deltaY, deltaX } = touch;
        if (state.status === 'loosing') {
          let dis = 0;

          if (
            direction.value == 'vertical' &&
            reachTop.value &&
            deltaY.value > 0
          ) {
            dis = 50;
          }
          if (
            direction.value == 'vertical' &&
            reachBottom.value &&
            deltaY.value < 0
          ) {
            dis = -50;
          }
          if (
            direction.value == 'horizontal' &&
            reachLeft.value &&
            deltaX.value > 0
          ) {
            dis = 50;
          }
          if (
            direction.value == 'horizontal' &&
            reachRight.value &&
            deltaX.value < 0
          ) {
            dis = -50;
          }
          setStatus(dis, true);
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
      reachRight,
      reachLeft,
      getBottomStyle,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
