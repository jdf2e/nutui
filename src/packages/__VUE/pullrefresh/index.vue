<template>
  <div ref="scroller" class="nut-pull-refresh" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="nut-pull-refresh-container" :style="getStyle">
      <div class="nut-pull-refresh-container-topbox" :style="getHeightStyle">
        <Loading
          v-if="status == 'loading' && !slots.loading"
          class="nut-icon-loading nut-pull-refresh-container-topbox-icon"
        ></Loading>

        <div class="nut-pull-refresh-container-topbox-text">{{ getPullStatus }}</div>

        <slot v-if="status == 'pulling'" name="pulling"></slot>
        <slot v-if="status == 'loosing'" name="loosing"></slot>
        <slot v-if="status == 'loading'" name="loading"></slot>
        <slot v-if="status == 'complete'" name="complete"></slot>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { toRefs, reactive, computed, CSSProperties, ref, nextTick, watch } from 'vue';
import { createComponent, useLocale } from '@/packages/utils';
const { create } = createComponent('pull-refresh');
import { useTouch } from '@/packages/utils/useTouch';
import { getScrollTopRoot } from '@/packages/utils/util';
import { pxCheck } from '@/packages/utils';
import { useScrollParent } from '@/packages/utils/useScrollParent';
import { Loading } from '@nutui/icons-vue';

type PullRefreshStatus = 'normal' | 'loading' | 'loosing' | 'pulling' | 'complete';

const cN = 'NutPullRefresh';

export default create({
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },

    pullingTxt: {
      type: String,
      default: ''
    },
    loosingTxt: {
      type: String,
      default: ''
    },
    loadingTxt: {
      type: String,
      default: ''
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
    completeDuration: {
      type: Number,
      default: 0
    }
  },
  emits: ['change', 'refresh', 'update:modelValue'],
  components: { Loading },

  setup(props, { emit, slots }) {
    const translate = useLocale(cN);
    const touch: any = useTouch();
    const scroller = ref<HTMLElement>();
    const scrollParent = useScrollParent(scroller);

    const state = reactive<{
      isPullRefresh: Boolean;
      distance: Number;
      status: PullRefreshStatus;
    }>({
      isPullRefresh: false,
      distance: 0,
      status: 'normal'
    });

    const getPullStatus = computed(() => {
      switch (state.status) {
        case 'pulling':
          return !slots.pulling ? props.pullingTxt || translate('pulling') : '';
        case 'loosing':
          return !slots.loosing ? props.loosingTxt || translate('loosing') : '';
        case 'loading':
          return !slots.loading ? props.loadingTxt || translate('loading') : '';
        case 'complete':
          return !slots.complete ? props.completeTxt || translate('complete') : '';
        default:
          break;
      }
      return '';
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
          moveDistance = (distance + pullDistance) / 2;
        } else {
          moveDistance = pullDistance + distance / 4;
        }
      }

      return Math.round(moveDistance);
    };

    const setPullStatus = (distance: number, isLoading?: boolean, isComplete?: boolean) => {
      const pullDistance = +(props.pullDistance || props.headHeight);
      state.distance = distance;

      if (isLoading) {
        state.status = 'loading';
      } else if (isComplete) {
        state.status = 'complete';
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

    const isScrollTop = () => {
      if (scrollParent.value == window) {
        return getScrollTopRoot() == 0;
      } else {
        return scrollParent.value && (scrollParent.value as Element).scrollTop == 0;
      }
    };

    const touchStart = (event: TouchEvent) => {
      if (isCanTouch()) {
        if (isScrollTop()) {
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

    watch(
      () => props.modelValue,
      (val) => {
        if (val) {
          setPullStatus(+props.headHeight, true);
        } else {
          if (props.completeDuration === 0) setPullStatus(0);
          setPullStatus(+props.headHeight, false, true);
          setTimeout(() => {
            setPullStatus(0);
          }, props.completeDuration);
        }
      }
    );

    return {
      scroller,
      ...toRefs(state),
      touchStart,
      touchMove,
      touchEnd,
      getStyle,
      translate,
      slots,
      getHeightStyle,
      getPullStatus
    };
  }
});
</script>
