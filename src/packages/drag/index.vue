<template>
  <view class="nut-drag" ref="myDrag" @touchstart="touchstart($event)">
    <slot></slot>
  </view>
</template>

<script lang="ts">
import { onMounted, reactive, ref, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { create } = createComponent('drag');
export default create({
  props: {
    attract: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'all'
    },
    zIndex: {
      type: [Number, String],
      default: 11
    },
    boundary: {
      type: Object,
      default: function() {
        return {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        };
      }
    }
  },
  setup(props: any, { emit }) {
    const myDrag = ref();
    console.log(props.direction);
    const state = reactive({
      elWidth: 0, // 元素的宽度
      elHeight: 0, // 元素的高度
      screenWidth: 0, // 屏幕的宽度
      screenHeight: 0, // 屏幕的高度
      startTop: 0, // 拖拽元素距离顶部的距离
      startLeft: 0, // 拖拽元素距离
      nx: 0,
      ny: 0,
      xPum: 0,
      yPum: 0,
      direction: props.direction,
      position: { x: 0, y: 0 },
      boundary: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }
    });

    function getInfo() {
      const domElem = document.documentElement;
      state.elWidth = myDrag.value.offsetWidth;
      state.elHeight = myDrag.value.offsetHeight;
      state.screenWidth = domElem.clientWidth;
      state.screenHeight = domElem.clientHeight;
      console.log(
        domElem.clientWidth,
        domElem.clientHeight,
        myDrag.value.offsetWidth,
        domElem.offsetHeight
      );
    }

    function goLeft(target: any) {
      if (state.boundary.left) {
        if (target.style.left.split('px')[0] > state.boundary.left) {
          target.style.left = target.style.left.split('px')[0] - 10 + 'px';
          goLeft(target);
        } else {
          target.style.left = `${state.boundary.left}px`;
        }
      } else {
        if (target.style.left.split('px')[0] > 10) {
          target.style.left = target.style.left.split('px')[0] - 10 + 'px';
          goLeft(target);
        } else {
          target.style.left = '0px';
        }
      }
    }
    function goRight(target: any, rightLocation: any) {
      if (rightLocation - parseInt(target.style.left.split('px')[0]) > 10) {
        target.style.left =
          parseInt(target.style.left.split('px')[0]) + 10 + 'px';
        goRight(target, rightLocation);
      } else {
        target.style.left = rightLocation + 'px';
      }
    }
    function touchMove(e: any) {
      e.preventDefault();
      const target = e.currentTarget;
      if (e.targetTouches.length == 1) {
        const touch = e.targetTouches[0];
        state.nx = touch.clientX - state.position.x;
        state.ny = touch.clientY - state.position.y;
        state.xPum = state.startLeft + state.nx;
        state.yPum = state.startTop + state.ny;
        // console.log(state.xPum,state.yPum)
        const rightLocation =
          state.screenWidth - state.elWidth - state.boundary.right;
        // console.log(rightLocation)
        // 限制左右拖拽边界
        if (Math.abs(state.xPum) > rightLocation) {
          state.xPum = rightLocation;
        } else if (state.xPum <= state.boundary.left) {
          state.xPum = state.boundary.left;
        }
        // 限制上下拖拽边界
        if (state.yPum < state.boundary.top) {
          state.yPum = state.boundary.top;
        } else if (
          state.yPum >
          state.screenHeight - state.elHeight - state.boundary.bottom
        ) {
          state.yPum =
            state.screenHeight - state.elHeight - state.boundary.bottom;
        }
        if (props.direction != 'y') {
          console.log('121');
          target.style.left = state.xPum + 'px';
        }
        if (props.direction != 'x') {
          console.log('121121');
          target.style.top = state.yPum + 'px';
        }
      }
    }
    function touchEnd(e: any) {
      const target = e.currentTarget;
      const touch = e.changedTouches[0];
      let currX = touch.clientX;
      const rightLocation =
        state.screenWidth - state.elWidth - state.boundary.right;
      if (currX > rightLocation) {
        currX = rightLocation;
        // console.log('往右划出边界');
      } else if (currX < state.boundary.left) {
        currX = state.boundary.left;
        // console.log('往左划出边界');
      } else {
        currX =
          currX < state.screenWidth / 2 ? state.boundary.left : rightLocation;
        // console.log('在边界内滑动');
      }
      if (state.direction != 'y' && props.attract) {
        if (currX < state.screenWidth / 2) {
          goLeft(target);
        } else {
          goRight(target, rightLocation);
        }
      }
      if (state.direction != 'x') {
        target.style.top = state.yPum + 'px';
      }
    }
    function touchstart(e: any) {
      const target = e.currentTarget;
      state.startTop = target.offsetTop; // 元素距离顶部的距离
      state.startLeft = target.offsetLeft; // 元素距离左侧的距离
      state.position.x = e.touches[0].clientX; // 鼠标点击的x轴的距离
      state.position.y = e.touches[0].clientY; // 鼠标点击的y轴的距离
      myDrag.value.addEventListener('touchmove', touchMove, false);
      myDrag.value.addEventListener('touchend', touchEnd, false);
    }
    onMounted(() => {
      getInfo();
      state.boundary = props.boundary;
    });
    return {
      state,
      touchstart,
      myDrag,
      touchMove,
      touchEnd,
      getInfo,
      goLeft,
      goRight
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
