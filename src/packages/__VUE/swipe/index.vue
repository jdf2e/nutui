<template>
  <view
    class="nut-swipe"
    :style="touchStyle"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view ref="leftRef" class="nut-swipe__left" @click="onClick($event, 'left', true)">
      <slot name="left"></slot>
    </view>

    <view class="nut-swipe__content" @click="onClick($event, 'content', lockClick)">
      <slot name="default"></slot>
    </view>

    <view ref="rightRef" class="nut-swipe__right" @click="onClick($event, 'right', true)">
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { useTouch } from '@/packages/utils/useTouch';
import { computed, inject, reactive, watch, Ref, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { SWIPE_KEY } from './types';
const { create } = createComponent('swipe');
export type SwipePosition = 'left' | 'right' | '';
export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    touchMoveStopPropagation: {
      type: Boolean,
      default: false
    },
    touchMovePreventDefault: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['open', 'close', 'click'],

  setup(props, { emit }) {
    const getRefWidth = (ref: Ref<HTMLElement | undefined>): number => {
      return ref.value?.getBoundingClientRect().width || 0;
    };

    const lockClick = ref(false);

    const leftRef = ref<HTMLElement>(),
      leftRefWidth = computed(() => {
        return getRefWidth(leftRef);
      });
    const rightRef = ref<HTMLElement>(),
      rightRefWidth = computed(() => {
        return getRefWidth(rightRef);
      });

    const parent = inject(SWIPE_KEY, null) as any;

    watch(
      () => parent?.name?.value,
      (name) => {
        if (props.name !== name && parent && parent.lock) {
          close();
        }
      }
    );

    const opened = ref(false);
    let position: SwipePosition = '';
    let oldPosition: SwipePosition = '';

    const state = reactive({
      offset: 0,
      moving: false
    });

    const open = (p: SwipePosition = '') => {
      parent && parent.update(props.name);
      opened.value = true;
      if (p) {
        state.offset = p === 'left' ? -rightRefWidth.value : leftRefWidth.value;
      }
      emit('open', {
        name: props.name,
        position: position || p
      });
    };

    const close = () => {
      state.offset = 0;
      if (opened.value) {
        opened.value = false;
        emit('close', {
          name: props.name,
          position
        });
      }
    };

    const onClick = (e: Event, position: string, lock: boolean) => {
      if (lock) {
        e.stopPropagation();
      } else {
        close();
      }
      emit('click', position);
    };

    const touchStyle = computed(() => {
      return {
        transform: `translate3d(${state.offset}px, 0, 0)`
      };
    });

    const setoffset = (deltaX: number) => {
      position = deltaX > 0 ? 'right' : 'left';
      let offset = deltaX;
      switch (position) {
        case 'left':
          if (opened.value && oldPosition === position) {
            offset = -rightRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX;
          }
          break;
        case 'right':
          if (opened.value && oldPosition === position) {
            offset = leftRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > leftRefWidth.value ? leftRefWidth.value : deltaX;
          }
          break;
      }
      state.offset = offset;
    };

    const touch = useTouch();
    const touchMethods = {
      onTouchStart(event: TouchEvent) {
        if (props.disabled) return;
        touch.start(event);
      },
      onTouchMove(event: TouchEvent) {
        if (props.disabled) return;
        touch.move(event);
        if (touch.isHorizontal()) {
          lockClick.value = true;
          state.moving = true;
          setoffset(touch.deltaX.value);
          if (props.touchMovePreventDefault) {
            event.preventDefault();
          }
          if (props.touchMoveStopPropagation) {
            event.stopPropagation();
          }
        }
      },
      onTouchEnd() {
        if (state.moving) {
          state.moving = false;
          oldPosition = position;
          switch (position) {
            case 'left':
              if (Math.abs(state.offset) <= rightRefWidth.value / 2) {
                close();
              } else {
                state.offset = -rightRefWidth.value;
                open();
              }
              break;
            case 'right':
              if (Math.abs(state.offset) <= leftRefWidth.value / 2) {
                close();
              } else {
                state.offset = leftRefWidth.value;
                open();
              }
              break;
          }
          setTimeout(() => {
            lockClick.value = false;
          }, 0);
        }
      }
    };

    return {
      touchStyle,
      ...touchMethods,
      leftRef,
      rightRef,
      open,
      close,
      onClick,
      lockClick
    };
  }
});
</script>
