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
    <view class="nut-picker__wrapper" ref="wrapper" :style="wrapperStyle">
      <view
        class="nut-picker__item"
        :key="index"
        v-for="(item, index) in state.options"
        >{{ dataType === 'cascade' ? item.text : item }}</view
      >
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, ref, watch, computed } from 'vue';
import { createComponent } from '@/utils/create';
import { useTouch } from '@/utils/useTouch';
import { commonProps } from './commonProps';
const MOMENTUM_LIMIT_DISTANCE = 15;
const MOMENTUM_LIMIT_TIME = 300;
const DEFAULT_DURATION = 200;
const { create } = createComponent('picker');
function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
function stopPropagation(event: Event) {
  event.stopPropagation();
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
    dataType: String,
    ...commonProps
  },

  emits: ['click', 'change'],
  setup(props, { emit }) {
    let moving;
    let startOffset, touchStartTime, momentumOffset, transitionEndTrigger;
    const state = reactive({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: props.listData
    });
    watch(
      () => props.listData,
      val => {
        if (val) {
          state.options = val;
        }
      }
    );

    const wrapper = ref();
    const touch = useTouch();
    const count = () => state.options.length;
    const _show = ref(false);
    const getIndexByOffset = offset =>
      range(Math.round(-offset / props.itemHeight), 0, count() - 1);

    const baseOffset = () =>
      (props.itemHeight * (props.visibleItemCount - 1)) / 2;

    const stopMomentum = () => {
      moving = false;
      state.duration = 0;
      if (transitionEndTrigger) {
        transitionEndTrigger();
        transitionEndTrigger = null;
      }
    };

    const adjustIndex = index => {
      index = range(index, 0, count());

      for (let i = index; i < count(); i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
    };

    const setIndex = (index, emitChange = false) => {
      index = adjustIndex(index) || 0;

      const offset = -index * props.itemHeight;
      const trigger = () => {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            emit('change', index);
          }
        }
      };

      if (moving && offset !== state.offset) {
        transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };
    watch(
      () => props.defaultIndex,
      val => {
        setIndex(val);
      }
    );
    setIndex(props.defaultIndex);
    const momentum = (distance, duration) => {
      const speed = Math.abs(distance / duration);

      distance = state.offset + (speed / 0.003) * (distance < 0 ? -1 : 1);

      const index = getIndexByOffset(distance);

      setIndex(index, true);
    };
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
        preventDefault(event, true);
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
      wrapper,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      wrapperStyle,
      state,
      stopMomentum,
      columns: state.options,
      height: Number(props.visibleItemCount) * props.itemHeight
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
