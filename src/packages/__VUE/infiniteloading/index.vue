<template>
  <view :class="classes" ref="scroller">
    <view class="nut-infinite-container">
      <slot></slot>
    </view>

    <view class="nut-infinite-bottom">
      <template v-if="isInfiniting">
        <view class="bottom-box">
          <slot name="loading">
            <nut-icon v-if="loadIcon" class="bottom-img" v-bind="$attrs" :name="loadIcon"></nut-icon>
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
import {
  toRefs,
  onMounted,
  onUnmounted,
  reactive,
  computed,
  onActivated,
  onDeactivated,
  ref,
  watch,
  nextTick
} from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('infiniteloading');
import { useTouch } from '@/packages/utils/useTouch';
import requestAniFrame from '@/packages/utils/raf';
import { getScrollTopRoot } from '@/packages/utils/util';

export default create({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    hasMore: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 200
    },
    loadIcon: {
      type: String,
      default: ''
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
    }
  },
  emits: ['scroll-change', 'load-more', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const touch: any = useTouch();
    const state = reactive({
      scrollEl: window as Window | HTMLElement | (Node & ParentNode),
      scroller: null as null | HTMLElement,
      beforeScrollTop: 0,
      isInfiniting: false,
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

    const handleScroll = () => {
      requestAniFrame(() => {
        if (!isScrollAtBottom() || !props.hasMore || state.isInfiniting) {
          return false;
        } else {
          state.isInfiniting = true;

          emit('update:modelValue', true);
          nextTick(() => emit('load-more'));
        }
      });
    };

    const scrollListener = () => {
      state.scrollEl.addEventListener('scroll', handleScroll, props.useCapture);
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

    watch(
      () => props.modelValue,
      (val) => {
        console.log('监听', val);
        if (val) {
        } else {
          state.isInfiniting = false;
        }
      }
    );

    return {
      classes,
      ...toRefs(state),
      translate,
      slots
    };
  }
});
</script>
