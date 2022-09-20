<template>
  <view class="nut-picker__list" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <view
      class="nut-picker-roller"
      ref="roller"
      :id="'roller' + refRandomId"
      :style="threeDimensional ? touchRollerStyle : touchTileStyle"
      @transitionend="stopMomentum"
    >
      <template v-for="(item, index) in column" :key="item.value ? item.value : index">
        <!-- 3D 效果 -->
        <view
          class="nut-picker-roller-item"
          :class="{ 'nut-picker-roller-item-hidden': isHidden(index + 1) }"
          :style="setRollerStyle(index + 1)"
          v-if="item && item.text && threeDimensional"
        >
          {{ item.text }}
        </view>
        <!-- 平铺 -->
        <view class="nut-picker-roller-item-tile" v-if="item && item.text && !threeDimensional">
          {{ item.text }}
        </view>
      </template>
    </view>
    <view class="nut-picker-roller-mask"></view>
  </view>
</template>
<script lang="ts">
import { reactive, ref, watch, computed, toRefs, onMounted, PropType } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { PickerOption, TouchParams } from './types';
import { useTaroRect } from '@/packages/utils/useTaroRect';
import { useTouch } from '@/packages/utils/useTouch';
const { create } = createComponent('picker-column');
import Taro from '@tarojs/taro';

export default create({
  props: {
    // 当前选中项
    value: [String, Number],
    columnsType: String,
    lineSpacing: {
      type: Number,
      default: 36
    },
    itemShow: {
      type: Boolean,
      default: false
    },
    column: {
      type: Array as PropType<PickerOption[]>,
      default: () => []
    },
    readonly: {
      type: Boolean,
      default: false
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1000
    }
  },

  emits: ['click', 'change'],
  setup(props, { emit }) {
    const touch: any = useTouch();
    const wrapper = ref<HTMLElement>();
    const itemref = ref();
    const state = reactive({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      rotation: 20,
      timer: null
    });

    const roller = ref(null);
    const list = ref(null);
    const listitem = ref(null);

    const moving = ref(false); // 是否处于滚动中
    const touchDeg = ref(0);
    const touchTime = ref(0);
    const touchTranslateY = ref(0);

    const DEFAULT_DURATION = 200;

    // 触发惯性滑动条件:
    // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
    // 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
    const INERTIA_TIME = 300;
    const INERTIA_DISTANCE = 15;

    const touchTileStyle = computed(() => {
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `translate3d(0, ${state.scrollDistance}px, 0)`
      };
    });

    const touchRollerStyle = computed(() => {
      return {
        transition: `transform ${touchTime.value}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
        transform: `rotate3d(1, 0, 0, ${touchDeg.value})`
      };
    });
    const setRollerStyle = (index: number) => {
      return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`;
    };

    const onTouchStart = (event: TouchEvent) => {
      touch.start(event);
      if (moving.value) {
        let dom = list.value as any;
        if (!props.threeDimensional) {
          dom = roller.value as any;
        }

        const { transform } = window.getComputedStyle(dom);
        state.scrollDistance = +parseInt(transform.split(', ')[1]);
      }

      state.touchParams.startY = touch.deltaY.value;
      state.touchParams.startTime = Date.now();
      state.transformY = state.scrollDistance;
    };

    const onTouchMove = (event: TouchEvent) => {
      touch.move(event);

      if ((touch as any).isVertical) {
        moving.value = true;
        preventDefault(event, true);
      }

      (state.touchParams as TouchParams).lastY = touch.deltaY.value;
      const now = Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;

      setMove(move);

      // if (now - (state.touchParams as TouchParams).startTime > INERTIA_TIME) {
      //   (state.touchParams as TouchParams).startTime = now;
      //   state.touchParams.startY = (state.touchParams as TouchParams).lastY;
      // }
    };

    const onTouchEnd = (event: TouchEvent) => {
      state.touchParams.lastY = touch.deltaY.value;
      state.touchParams.lastTime = Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;

      let moveTime = state.touchParams.lastTime - state.touchParams.startTime;

      if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
        // 惯性滚动
        const distance = momentum(move, moveTime);
        setMove(distance, 'end', +props.swipeDuration);
        return;
      } else {
        setMove(move, 'end');
      }

      setTimeout(() => {
        touch.reset();
        moving.value = false;
      }, 0);
    };

    // 惯性滚动 距离
    const momentum = (distance: number, duration: number) => {
      // 惯性滚动的速度
      const speed = Math.abs(distance / duration);
      // 惯性滚动的距离
      distance = (speed / 0.003) * (distance < 0 ? -1 : 1);
      return distance;
    };

    const isHidden = (index: number) => {
      if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
        return true;
      } else {
        return false;
      }
    };

    const setTransform = (translateY = 0, type: string | null, time = DEFAULT_DURATION, deg: string | number) => {
      if (type === 'end') {
        touchTime.value = time;
      } else {
        touchTime.value = 0;
      }
      touchDeg.value = deg as number;
      touchTranslateY.value = translateY;
      state.scrollDistance = translateY;
    };

    const setMove = (move: number, type?: string, time?: number) => {
      let updateMove = move + state.transformY;
      if (type === 'end') {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(props.column.length - 1) * props.lineSpacing) {
          updateMove = -(props.column.length - 1) * props.lineSpacing;
        }

        // 设置滚动距离为lineSpacing的倍数值
        let endMove = Math.round(updateMove / props.lineSpacing) * props.lineSpacing;
        let deg = `${(Math.abs(Math.round(endMove / props.lineSpacing)) + 1) * state.rotation}deg`;
        setTransform(endMove, type, time, deg);

        // let t = time ? time / 2 : 0;
        // (state.timer as any) = setTimeout(() => {
        //   setChooseValue();
        // }, t);

        state.currIndex = Math.abs(Math.round(endMove / props.lineSpacing)) + 1;
      } else {
        let deg = 0;
        let currentDeg = (-updateMove / props.lineSpacing + 1) * state.rotation;

        // picker 滚动的最大角度
        const maxDeg = (props.column.length + 1) * state.rotation;
        const minDeg = 0;

        deg = Math.min(Math.max(currentDeg, minDeg), maxDeg);

        if (minDeg < deg && deg < maxDeg) {
          setTransform(updateMove, null, undefined, deg + 'deg');
          state.currIndex = Math.abs(Math.round(updateMove / props.lineSpacing)) + 1;
        }
      }
    };

    const setChooseValue = () => {
      emit('change', props.column[state.currIndex - 1]);
    };

    const modifyStatus = (type: boolean) => {
      const { column } = props;
      let index = column.findIndex((columnItem) => columnItem.value == props.value);

      state.currIndex = index === -1 ? 1 : (index as number) + 1;
      let move = index === -1 ? 0 : (index as number) * props.lineSpacing;
      type && setChooseValue();
      setMove(-move);
    };

    const preventDefault = (event: Event, isStopPropagation?: boolean) => {
      /* istanbul ignore else */
      if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.preventDefault();
      }

      if (isStopPropagation) {
        event.stopPropagation();
      }
    };

    // 惯性滚动结束
    const stopMomentum = () => {
      moving.value = false;
      touchTime.value = 0;
      setChooseValue();
    };

    watch(
      () => props.column,
      (val) => {
        if (props.column && props.column.length > 0) {
          state.transformY = 0;
          modifyStatus(false);
        }
      },
      {
        deep: true
      }
    );

    watch(
      () => props.value,
      (val) => {
        state.transformY = 0;
        modifyStatus(false);
      },
      {
        deep: true
      }
    );

    onMounted(() => {
      modifyStatus(false);
    });

    const refRandomId = Math.random().toString(36).slice(-8);

    return {
      ...toRefs(state),
      ...toRefs(props),
      wrapper,
      itemref,
      setRollerStyle,
      isHidden,
      roller,
      list,
      listitem,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      touchTileStyle,
      touchRollerStyle,
      setMove,
      refRandomId,
      stopMomentum
    };
  }
});
</script>
