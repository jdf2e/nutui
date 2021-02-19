<template>
  <view
    class="nut-picker__content"
    :style="{ height: height + 'px' }"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
    @transitionend="stopMomentum"
  >
    <view class="nut-picker__hairline" :style="{ top: ` ${top}px` }"></view>
    <view
      class="nut-picker__mask"
      :style="{ backgroundSize: `100% ${top}px` }"
    ></view>
    <view class="nut-picker__wrapper" ref="wrapper" :style="wrapperStyle">
      <view
        class="nut-picker__item"
        :key="index"
        v-for="(item, index) in columns"
        >{{ item }}</view
      >
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, reactive, ref, watch, computed } from 'vue';
import { createComponent } from '@/utils/create';
import { useTouch } from './use-touch';
const MOMENTUM_LIMIT_DISTANCE = 15;
const MOMENTUM_LIMIT_TIME = 300;
const DEFAULT_DURATION = 200;
const { componentName, create } = createComponent('picker');
function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

function stopPropagation(event: Event) {
  event.stopPropagation();
}
function getElementTranslateY(element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}
export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

function isOptionDisabled(option) {
  return isObject(option) && option.disabled;
}
export default create({
  props: {
    show: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    txt: {
      type: String,
      default: ''
    },
    visibleItemCount: {
      type: [Number],
      default: 7
    },
    defaultIndex: {
      type: [Number, String],
      default: 0
    },
    itemHeight: {
      type: [Number],
      default: 35
    },
    initialOptions: {
      type: Array,
      default: () => [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        11,
        22,
        33,
        44,
        55,
        66,
        77,
        8,
        9
      ]
    }
  },
  components: {},
  emits: ['click', 'close'],

  setup(props, { emit }) {
    let moving;
    let startOffset, touchStartTime, momentumOffset, transitionEndTrigger;

    const _show = ref(false);

    const state = reactive({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: props.initialOptions
    });
    const baseOffset = () =>
      (props.itemHeight * (props.visibleItemCount - 1)) / 2;
    const count = () => state.options.length;
    const momentum = (distance, duration) => {
      const speed = Math.abs(distance / duration);

      distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

      const index = getIndexByOffset(distance);

      setIndex(index, true);
    };
    watch(
      () => props.show,
      val => {
        _show.value = val;
      }
    );
    const stopMomentum = () => {
      moving = false;
      state.duration = 0;
    };
    const wrapper = ref();
    const touch = useTouch();
    const adjustIndex = index => {
      index = range(index, 0, count());

      for (let i = index; i < count(); i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
    };
    const setIndex = (index, emitChange) => {
      index = adjustIndex(index) || 0;

      const offset = -index * props.itemHeight;
      const trigger = () => {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            // emit('change', index);
          }
        }
      };

      // trigger the change event after transitionend when moving
      if (moving && offset !== state.offset) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };
    const getIndexByOffset = offset =>
      range(Math.round(-offset / props.itemHeight), 0, count() - 1);
    const onTouchStart = event => {
      if (props.readonly) {
        return;
      }
      touch.start(event);

      if (moving) {
        const translateY = getElementTranslateY(wrapper.value);
        state.offset = Math.min(0, translateY - baseOffset());
        startOffset = state.offset;
      } else {
        startOffset = state.offset;
      }

      state.duration = 0;
      touchStartTime = Date.now();
      momentumOffset = startOffset;
      transitionEndTrigger = null;
    };
    const onTouchMove = event => {
      if (props.readonly) {
        return;
      }
      moving = true;
      touch.move(event);

      if (touch.isVertical()) {
        moving = true;
        // preventDefault(event, true);
      }

      const moveOffset = startOffset + touch.deltaY.value;
      if (moveOffset > props.itemHeight) {
        state.offset = props.itemHeight;
      } else {
        state.offset = startOffset + touch.deltaY.value;
      }

      const now = Date.now();

      if (now - touchStartTime > MOMENTUM_LIMIT_TIME) {
        touchStartTime = now;
        momentumOffset = state.offset;
      }
    };
    const onTouchEnd = () => {
      const index = getIndexByOffset(state.offset);
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
      const distance = state.offset - momentumOffset;
      const duration = Date.now() - touchStartTime;

      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }
    };
    const handleClick = (event: Event) => {
      emit('click', event);
    };
    const wrapperStyle = computed(() => ({
      transform: `translate3d(0, ${state.offset + baseOffset()}px, 0)`,
      transitionDuration: `${state.duration}ms`,
      transitionProperty: state.duration ? 'all' : 'none'
    }));
    return {
      show: _show,
      wrapper,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      wrapperStyle,
      state,
      stopMomentum,
      columns: props.initialOptions,
      top: (Number(props.visibleItemCount - 1) / 2) * props.itemHeight,
      height: Number(props.visibleItemCount) * props.itemHeight,
      close: () => {
        emit('close');
      }
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
