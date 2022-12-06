<template>
  <div :class="classes" ref="scroller" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="nut-pullrefresh-container" ref="refreshTop" :style="getStyle">
      <div class="nut-pullrefresh-container-topbox" :style="getHeightStyle">
        <!-- <nut-icon class="nut-pullrefresh-container-topbox-icon" v-bind="$attrs" :name="pullIcon"></nut-icon> -->
        <div class="nut-pullrefresh-container-topbox-text" v-if="status == 'pulling'">{{ pullingTxt }}</div>

        <div class="nut-pullrefresh-container-topbox-text" v-if="status == 'loosing'">{{ loosingTxt }}</div>

        <div class="nut-pullrefresh-container-topbox-text" v-if="status == 'loading'">{{ loadingTxt }}</div>

        <div class="nut-pullrefresh-container-topbox-text" v-if="status == 'complete'">{{ completeTxt }}</div>
      </div>

      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, reactive, computed, CSSProperties, onActivated, onDeactivated, ref, nextTick, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create, translate } = createComponent('pullrefresh');
import { useTouch } from '@/packages/utils/useTouch';
import { getScrollTopRoot } from '@/packages/utils/util';
import { pxCheck } from '@/packages/utils/pxCheck';

type PullRefreshStatus = 'normal' | 'loading' | 'loosing' | 'pulling' | 'complete';

export default create({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    pullIcon: {
      type: String,
      default: ''
    },
    pullingTxt: {
      type: String,
      default: '下拉刷新'
    },
    loosingTxt: {
      type: String,
      default: '释放刷新'
    },
    loadingTxt: {
      type: String,
      default: '加载中...'
    },

    completeTxt: {
      type: String,
      default: ''
    },
    headHeight: {
      type: [String, Number],
      default: 50
    },

    pullDistance: {
      type: [String, Number],
      default: 50
    },

    duration: {
      type: [String, Number],
      default: 0.3
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
  emits: ['change', 'refresh', 'update:modelValue'],

  setup(props, { emit, slots }) {
    const touch: any = useTouch();
    const state = reactive({
      scroller: null as null | HTMLElement,
      refreshTop: null as null | HTMLElement,
      isPullRefresh: false,
      distance: 0,
      status: 'normal' // 当前状态
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const getStyle = computed(() => {
      return {
        transitionDuration: `${props.duration}s`,
        transform: state.distance ? `translate3d(0,${state.distance}px, 0)` : ''
      };
    });

    const getHeightStyle = computed(() => {
      const styles: CSSProperties = {};
      if (props.headHeight != 50) styles.height = pxCheck(props.headHeight);
      return styles;
    });

    const timing = (distance: number) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      let moveDistance = distance;
      if (distance > pullDistance) {
        if (distance < pullDistance * 2) {
          moveDistance = pullDistance + (distance - pullDistance) / 2;
        } else {
          moveDistance = pullDistance + distance / 4;
        }
      }

      return Math.round(moveDistance);
    };

    const setPullStatus = (distance: number, isLoading?: boolean) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (distance === 0) {
        state.status = 'normal';
      } else if (distance < pullDistance) {
        state.status = 'pulling';
      } else {
        state.status = 'loosing';
      }

      emit('change', { status: state.status, distance });
    };

    const isCanTouch = () => state.status !== 'loading' && state.status !== 'complete';

    const touchStart = (event: TouchEvent) => {
      if (isCanTouch()) {
        if (getScrollTopRoot() == 0) {
          touch.start(event);
          state.isPullRefresh = true;
        } else {
          state.distance = 0;
          state.isPullRefresh = false;
        }
      }
    };

    const touchMove = (event: TouchEvent) => {
      if (isCanTouch()) {
        touch.move(event);

        const { deltaY } = touch;

        if ((touch as any).isVertical() && deltaY.value > 0 && state.isPullRefresh) {
          event.preventDefault();
          setPullStatus(timing(deltaY.value));
        }
      }
    };

    const touchEnd = () => {
      if (state.isPullRefresh && isCanTouch() && touch.deltaY.value) {
        if (state.status === 'loosing') {
          setPullStatus(+props.headHeight, true);
          emit('update:modelValue', true);
          nextTick(() => emit('refresh'));
        } else {
          setPullStatus(0);
        }
      }

      setTimeout(() => {
        touch.reset();
      }, 0);
    };

    const isKeepAlive = ref(false);

    onActivated(() => {
      if (isKeepAlive.value) {
        isKeepAlive.value = false;
      }
    });

    onDeactivated(() => {
      isKeepAlive.value = true;
    });

    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          setPullStatus(+props.headHeight, true);
        } else {
          setPullStatus(0);
        }
      }
    );

    return {
      classes,
      ...toRefs(state),
      touchStart,
      touchMove,
      touchEnd,
      getStyle,
      translate,
      slots,
      getHeightStyle
    };
  }
});
</script>
