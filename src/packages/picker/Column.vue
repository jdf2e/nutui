<template>
  <view-block
    class="nut-picker__content"
    :style="{ height: height + 'px' }"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
    @transitionend="stopMomentum"
  >
    <view-block class="nut-picker__wrapper" ref="wrapper" :style="wrapperStyle">
      <view-block
        class="nut-picker__item"
        :key="index"
        v-for="(item, index) in options"
        >{{ dataType === 'cascade' ? item.text : item }}</view-block
      >
    </view-block>
  </view-block>
</template>
<script lang="ts">
import { reactive, ref, watch, computed, toRefs, onMounted } from 'vue';
import { createComponent } from '@/utils/create';
import { useTouch } from '@/utils/useTouch';
import { commonProps } from './commonProps';
import {
  PickerObjOpt,
  PickerOption,
  PickerObjectColumn,
  PickerObjectColumns
} from './types';
const MOMENTUM_LIMIT_DISTANCE = 15;
const MOMENTUM_LIMIT_TIME = 300;
const DEFAULT_DURATION = 200;
const { create } = createComponent('picker-column');
function range(num: number, min: number, max: number): number {
  return Math.min(Math.max(num, min), max);
}
function stopPropagation(event: Event) {
  event.stopPropagation();
}
function preventDefault(event: Event, isStopPropagation?: boolean) {
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}

function getElementTranslateY(element: Element) {
  const style = window.getComputedStyle(element);
  const transform = style.transform || style.webkitTransform;
  const translateY = transform.slice(7, transform.length - 1).split(', ')[5];
  return Number(translateY);
}
export function isObject(val: unknown): val is Record<any, any> {
  return val !== null && typeof val === 'object';
}

function isOptionDisabled(option: PickerObjectColumn) {
  return isObject(option) && option.disabled;
}

export default create({
  props: {
    dataType: String,
    ...commonProps
  },

  emits: ['click', 'change'],
  setup(props, { emit }) {
    const wrapper = ref();

    const state = reactive({
      index: props.defaultIndex,
      offset: 0,
      duration: 0,
      options: props.listData as PickerObjectColumn[],
      moving: false,
      startOffset: 0,
      touchStartTime: 0,
      momentumOffset: 0,
      transitionEndTrigger: null as null | Function
    });

    const touch = useTouch();

    const wrapperStyle = computed(() => ({
      transform: `translate3d(0, ${state.offset + baseOffset()}px, 0)`,
      transitionDuration: `${state.duration}ms`,
      transitionProperty: state.duration ? 'all' : 'none'
    }));

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    const getIndexByOffset = (offset: number) => {
      return range(
        Math.round(-offset / +props.itemHeight),
        0,
        state.options.length - 1
      );
    };

    const baseOffset = () => {
      return (+props.itemHeight * (+props.visibleItemCount - 1)) / 2;
    };

    const stopMomentum = () => {
      state.moving = false;
      state.duration = 0;
      if (state.transitionEndTrigger) {
        state.transitionEndTrigger();
        state.transitionEndTrigger = null;
      }
    };

    const adjustIndex = (index: number) => {
      index = range(index, 0, state.options.length);

      for (let i = index; i < state.options.length; i++) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
      for (let i = index - 1; i >= 0; i--) {
        if (!isOptionDisabled(state.options[i])) return i;
      }
    };

    const setIndex = (index: number, emitChange = false) => {
      index = adjustIndex(index) || 0;

      const offset = -index * +props.itemHeight;
      const trigger = () => {
        if (index !== state.index) {
          state.index = index;

          if (emitChange) {
            emit('change', index);
          }
        }
      };

      if (state.moving && offset !== state.offset) {
        state.transitionEndTrigger = trigger;
      } else {
        trigger();
      }

      state.offset = offset;
    };

    const momentum = (distance: number, duration: number) => {
      const speed = Math.abs(distance / duration);

      distance = state.offset + (speed / 0.03) * (distance < 0 ? -1 : 1);

      const index = getIndexByOffset(distance);

      setIndex(index, true);
    };

    const onTouchStart = (event: Event) => {
      if (props.readonly) {
        return;
      }
      touch.start(event);

      if (state.moving) {
        const translateY = getElementTranslateY(wrapper.value);
        state.offset = Math.min(0, translateY - baseOffset());
        state.startOffset = state.offset;
      } else {
        state.startOffset = state.offset;
      }

      state.duration = 0;
      state.touchStartTime = Date.now();
      state.momentumOffset = state.startOffset;
      state.transitionEndTrigger = null;
    };
    const onTouchMove = (event: Event) => {
      if (props.readonly) {
        return;
      }
      state.moving = true;
      touch.move(event);

      if (touch.isVertical()) {
        state.moving = true;
        preventDefault(event, true);
      }

      const moveOffset = state.startOffset + touch.deltaY.value;
      if (moveOffset > props.itemHeight) {
        state.offset = props.itemHeight as number;
      } else {
        state.offset = state.startOffset + touch.deltaY.value;
      }

      const now = Date.now();

      if (now - state.touchStartTime > MOMENTUM_LIMIT_TIME) {
        state.touchStartTime = now;
        state.momentumOffset = state.offset;
      }
    };
    const onTouchEnd = () => {
      const index = getIndexByOffset(state.offset);
      state.duration = DEFAULT_DURATION;
      setIndex(index, true);
      const distance = state.offset - state.momentumOffset;
      const duration = Date.now() - state.touchStartTime;

      const allowMomentum =
        duration < MOMENTUM_LIMIT_TIME &&
        Math.abs(distance) > MOMENTUM_LIMIT_DISTANCE;

      if (allowMomentum) {
        momentum(distance, duration);
        return;
      }
    };

    onMounted(() => {
      setIndex(+props.defaultIndex);
    });

    watch(
      () => props.listData,
      val => {
        if (val) {
          state.options = val as PickerObjectColumn[];
        }
      }
    );

    watch(
      () => props.defaultIndex,
      val => {
        setIndex(+val);
      }
    );

    return {
      ...toRefs(state),
      wrapper,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      wrapperStyle,
      stopMomentum,
      columns: state.options,
      height: Number(props.visibleItemCount) * +props.itemHeight
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
