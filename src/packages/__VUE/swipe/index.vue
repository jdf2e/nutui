<template>
  <view
    :class="classes"
    :style="touchStyle"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view class="nut-swipe__left" ref="leftRef">
      <slot name="left"></slot>
    </view>

    <view class="nut-swipe__content">
      <slot name="default"></slot>
    </view>

    <view class="nut-swipe__right" ref="rightRef">
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import { useTouch } from '@/packages/utils/useTouch';
import { computed, reactive, Ref, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { componentName, create } = createComponent('swipe');

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
  emits: ['open', 'close'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const getRefWidth = (ref: Ref<HTMLElement | undefined>): number => {
      return ref.value?.clientWidth || 0;
    };

    const leftRef = ref<HTMLElement>(),
      leftRefWidth = computed(() => {
        return getRefWidth(leftRef);
      });
    const rightRef = ref<HTMLElement>(),
      rightRefWidth = computed(() => {
        return getRefWidth(rightRef);
      });

    let opened: boolean = false;
    let position: SwipePosition = '';
    let oldPosition: SwipePosition = '';

    const state = reactive({
      offset: 0,
      moving: false
    });

    const open = (p: SwipePosition = '') => {
      opened = true;
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
      opened = false;
      emit('close', {
        name: props.name,
        position
      });
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
          if (opened && oldPosition === position) {
            offset = -rightRefWidth.value;
          } else {
            offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX;
          }
          break;
        case 'right':
          if (opened && oldPosition === position) {
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
      onTouchStart(event: Event) {
        if (props.disabled) return;
        touch.start(event);
      },
      onTouchMove(event: Event) {
        if (props.disabled) return;
        touch.move(event);
        if (touch.isHorizontal()) {
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
        }
      }
    };

    return {
      classes,
      touchStyle,
      ...touchMethods,
      leftRef,
      rightRef,
      open,
      close
    };
  }
});
</script>
