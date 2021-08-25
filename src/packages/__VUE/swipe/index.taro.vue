<template>
  <view
    :class="classes"
    :style="touchStyle"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view class="nut-swipe__left" ref="leftRef" :id="'leftRef-' + refRandomId">
      <slot name="left"></slot>
    </view>

    <view class="nut-swipe__content">
      <slot name="default"></slot>
    </view>

    <view
      class="nut-swipe__right"
      ref="rightRef"
      :id="'rightRef-' + refRandomId"
    >
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script lang="ts">
import Taro from '@tarojs/taro';
import { useTouch } from '../../utils/useTouch';
import { computed, onMounted, reactive, Ref, ref } from 'vue';
import { createComponent } from '../../utils/create';
import { useTaroRect } from '../../utils/useTaroRect';
const { componentName, create } = createComponent('swipe');
export type SwipePosition = 'left' | 'right' | '';
export default create({
  props: {
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['open', 'close'],

  setup(props, { emit }) {
    const refRandomId = Math.random().toString(36).slice(-8);
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const getRefWidth = async (ref: Ref<HTMLElement | undefined>) => {
      if (Taro.getEnv() === 'WEB') {
        return ref.value?.clientWidth || ref.value?.$el?.clientWidth || 0;
      } else {
        let rect = await useTaroRect(ref, Taro);
        return rect.width || 0;
      }
    };

    const leftRef = ref<HTMLElement>();
    const leftRefWidth = ref(0);
    const rightRef = ref<HTMLElement>();
    const rightRefWidth = ref(0);

    const initWidth = async () => {
      leftRefWidth.value = await getRefWidth(leftRef);
      rightRefWidth.value = await getRefWidth(rightRef);
    };

    onMounted(() => {
      Taro.nextTick(initWidth);
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
            offset =
              Math.abs(deltaX) > rightRefWidth.value
                ? -rightRefWidth.value
                : deltaX;
          }
          break;
        case 'right':
          if (opened && oldPosition === position) {
            offset = leftRefWidth.value;
          } else {
            offset =
              Math.abs(deltaX) > leftRefWidth.value
                ? leftRefWidth.value
                : deltaX;
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
      async onTouchMove(event: Event) {
        if (props.disabled) return;
        if (touch.isVertical() == false) {
          state.moving = true;
          touch.move(event);
          setoffset(touch.deltaX.value);
          event.preventDefault();
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
      refRandomId,
      open,
      close
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
