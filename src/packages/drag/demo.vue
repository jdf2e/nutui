<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-drag :style="{ top: '100px', left: '8px' }">
      <div class="drag-demo">触摸移动</div>
    </nut-drag>
    <!-- <h2>限制拖拽方向</h2>
    <nut-drag direction="x"  >
      <div class="drag-demo">只能X轴拖拽</div>
    </nut-drag>
    <nut-drag direction="y"  >
      <div class="drag-demo">只能Y轴拖拽</div>
    </nut-drag> -->
    <div class="drag" ref="drag" @touchstart="touchstart($event)">拖拽测试</div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('drag');
export default createDemo({
  setup() {
    const drag = ref();
    const state = reactive({
      infoX: 0,
      infoY: 0
    });
    function touchMove(e: { currentTarget: any; targetTouches: any[] }) {
      const target = e.currentTarget;
      const element = e.targetTouches[0];
      console.log(element.clientX, element.clientY, state.infoX, state.infoY);
      const x = element.clientX - state.infoX;
      const y = element.clientY - state.infoY;
      console.log(x, y);
      element.target.style.cssText = `transform: translate3d(${x}px, ${y}px ,1px);`;
      //  element.target.style.transform= `translate(${x}px, ${y}px)`
    }
    function touchEnd(e) {
      // e.target.style.cssText = `transform: none;`
    }
    function touchstart(e: {
      targetTouches: any[];
      target: { offsetTop: any };
    }) {
      const element = e.targetTouches[0];
      state.infoX = element.clientX;
      state.infoY = element.clientY;
      console.log(e.target.offsetTop);
      // console.log(state.infoX,state.infoY)
      // console.log(element.clientX,state.infoX,element.clientY,state.infoY)
      drag.value.addEventListener('touchmove', touchMove, false);
      drag.value.addEventListener('touchend', touchEnd, false);
    }
    return {
      drag,
      state,
      touchstart,
      touchMove,
      touchEnd
    };
  }
});
</script>

<style lang="scss" scoped>
.drag-demo {
  width: 148px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(250, 44, 25, 1) 0%,
    rgba(250, 63, 25, 1) 45%,
    rgba(250, 89, 25, 1) 83%,
    rgba(250, 100, 25, 1) 100%
  );
  border-radius: 24px;
}
.drag {
  width: 100px;
  height: 100px;
  display: inline-block;
  background: red;
  transform: translate3d(0, 0, 1px);
}
</style>
