<template>
  <view :class="classes" ref="scroller">
    <view class="nut-infinite__container">
      <slot></slot>
    </view>

    <view class="nut-infinite__bottom">
      <template v-if="isInfiniting">
        <view class="nut-infinite__bottom-box">
          <slot name="loading">
            <slot name="loadIcon"><Loading class="nut-icon-loading nut-infinite__bottom-box__img"></Loading></slot>
            <view class="nut-infinite__bottom-box__text">{{ loadTxt || translate('loading') }}</view>
          </slot>
        </view>
      </template>
      <template v-else-if="!hasMore">
        <slot name="finished">
          <view class="nut-infinite__bottom-tips">{{ loadMoreTxt || translate('loadMoreTxt') }}</view>
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
const { componentName, create, translate } = createComponent('infinite-loading');
import { useScrollParent } from '@/packages/utils/useScrollParent';
import requestAniFrame from '@/packages/utils/raf';
import { getScrollTopRoot } from '@/packages/utils/util';
import { Loading } from '@nutui/icons-vue';

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
    loadTxt: {
      type: String,
      default: ''
    },
    loadMoreTxt: {
      type: String,
      default: ''
    },
    useCapture: {
      type: Boolean,
      default: false
    }
  },
  emits: ['scroll-change', 'load-more', 'update:modelValue'],
  components: {
    Loading
  },
  setup(props, { emit, slots }) {
    const scroller = ref<HTMLElement>();
    const scrollParent = useScrollParent(scroller);
    const state = reactive({
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

      if (scrollParent.value == window) {
        const windowScrollTop = getScrollTopRoot();

        if (scroller.value) {
          offsetDistance =
            calculateTopPosition(scroller.value) + scroller.value.offsetHeight - windowScrollTop - window.innerHeight;
        }

        resScrollTop = windowScrollTop;
      } else {
        const { scrollHeight, clientHeight, scrollTop } = scrollParent.value as HTMLElement;

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
      scrollParent.value && scrollParent.value.addEventListener('scroll', handleScroll, props.useCapture);
    };

    const removeScrollListener = () => {
      scrollParent.value && scrollParent.value.removeEventListener('scroll', handleScroll, props.useCapture);
    };

    onMounted(() => {
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
        if (!val) {
          state.isInfiniting = false;
        }
      }
    );

    return {
      classes,
      scroller,
      ...toRefs(state),
      translate,
      slots
    };
  }
});
</script>
