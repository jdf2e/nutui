<template>
  <view class="nut-picker__list" @touchstart="onTouchStart" @touchmove="onTouchMove" @touchend="onTouchEnd">
    <view class="nut-picker-roller" ref="roller">
      <view
        class="nut-picker-roller-item"
        :class="{ 'nut-picker-roller-item-hidden': isHidden(index + 1) }"
        v-for="(item, index) in listData.values"
        :style="setRollerStyle(index + 1)"
        :key="item.label ? item.label : index"
      >
        {{ dataType === 'cascade' ? item.text : item }}
      </view>
    </view>

    <view class="nut-picker-content">
      <view class="nut-picker-list-panel" ref="list">
        <view class="nut-picker-item" v-for="(item, index) in listData.values" :key="item.label ? item.label : index"
          >{{ dataType === 'cascade' ? item.text : item }}
        </view>
        <view class="nut-picker-placeholder" v-if="listData && listData.length === 1"></view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, ref, watch, computed, toRefs, onMounted } from 'vue';
import { createComponent } from '../../utils/create';
import { commonProps } from './commonProps';
const { create } = createComponent('picker-column');

export default create({
  props: {
    dataType: String,
    ...commonProps
  },

  emits: ['click', 'change'],
  setup(props, { emit }) {
    const wrapper = ref();
    const state = reactive({
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0
      },
      currIndex: 1,
      transformY: 0,
      scrollDistance: 0,
      lineSpacing: 36,
      rotation: 20,
      timer: null
    });

    const roller = ref(null);
    const list = ref(null);

    const onTouchStart = (event: any) => {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      state.touchParams.startY = changedTouches.pageY;
      state.touchParams.startTime = event.timestamp || Date.now();
      state.transformY = state.scrollDistance;
    };

    const onTouchMove = (event: any) => {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      state.touchParams.lastY = changedTouches.pageY;
      state.touchParams.lastTime = event.timestamp || Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;

      setMove(move);
    };

    const onTouchEnd = (event: any) => {
      event.preventDefault();

      let changedTouches = event.changedTouches[0];
      state.touchParams.lastY = changedTouches.pageY;
      state.touchParams.lastTime = event.timestamp || Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;

      let moveTime = state.touchParams.lastTime - state.touchParams.startTime;
      if (moveTime <= 300) {
        move = move * 2;
        moveTime = moveTime + 1000;
        setMove(move, 'end', moveTime);
      } else {
        setMove(move, 'end');
      }
    };

    const setRollerStyle = (index: any) => {
      return `transform: rotate3d(1, 0, 0, ${-state.rotation * index}deg) translate3d(0px, 0px, 104px)`;
    };

    const isHidden = (index: any) => {
      if (index >= state.currIndex + 8 || index <= state.currIndex - 8) {
        return true;
      } else {
        return false;
      }
    };

    const setTransform = (translateY = 0, type, time = 1000, deg) => {
      if (type === 'end') {
        list.value.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
        roller.value.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
      } else {
        list.value.style.webkitTransition = '';
        roller.value.style.webkitTransition = '';
      }
      list.value.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`;
      roller.value.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`;
      state.scrollDistance = translateY;
    };

    const setMove = (move, type?, time?) => {
      let updateMove = move + state.transformY;
      if (type === 'end') {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < -(props.listData.values.length - 1) * state.lineSpacing) {
          updateMove = -(props.listData.values.length - 1) * state.lineSpacing;
        }

        // 设置滚动距离为lineSpacing的倍数值
        let endMove = Math.round(updateMove / state.lineSpacing) * state.lineSpacing;
        let deg = `${(Math.abs(Math.round(endMove / state.lineSpacing)) + 1) * state.rotation}deg`;
        setTransform(endMove, type, time, deg);
        state.timer = setTimeout(() => {
          setChooseValue(endMove);
        }, time / 2);

        state.currIndex = Math.abs(Math.round(endMove / state.lineSpacing)) + 1;
      } else {
        let deg = '0deg';
        if (updateMove < 0) {
          deg = `${(Math.abs(updateMove / state.lineSpacing) + 1) * state.rotation}deg`;
        } else {
          deg = `${(-updateMove / state.lineSpacing + 1) * state.rotation}deg`;
        }

        setTransform(updateMove, null, null, deg);
        state.currIndex = Math.abs(Math.round(updateMove / state.lineSpacing)) + 1;
      }
    };

    const setChooseValue = (move) => {
      emit('change', state.currIndex - 1);
    };

    const modifyStatus = (type: any, defaultIndex?: any) => {
      let index = props.defaultIndex;

      state.currIndex = index === -1 ? 1 : index + 1;
      let move = index === -1 ? 0 : index * state.lineSpacing;
      type && setChooseValue(-move);
      setMove(-move);
    };

    watch(
      () => props.listData,
      (val) => {
        state.transformY = 0;
        modifyStatus(false);
      },
      {
        deep: true
      }
    );

    watch(
      () => props.defaultIndex,
      (val) => {
        state.transformY = 0;
        modifyStatus(false);
      }
    );

    onMounted(() => {
      modifyStatus(true);
    });

    return {
      ...toRefs(state),
      ...toRefs(props),
      wrapper,
      setRollerStyle,
      isHidden,
      roller,
      list,
      onTouchStart,
      onTouchMove,
      onTouchEnd
    };
  }
});
</script>
