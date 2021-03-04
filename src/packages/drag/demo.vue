<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-drag :style="{ top: '100px', left: '8px' }">
      <div class="drag-demo">触摸移动</div>
    </nut-drag>
    <h2 style="top:30px;position:relative">限制拖拽方向</h2>
    <nut-drag direction="x" :style="{ top: '200px', left: '8px' }">
      <div class="drag-demo">只能X轴拖拽</div>
    </nut-drag>
    <nut-drag direction="y" :style="{ top: '200px', right: '50px' }">
      <div class="drag-demo">只能Y轴拖拽</div>
    </nut-drag>
    <h2 style="top:70px;position:relative">自动吸边</h2>
    <nut-drag
      direction="x"
      :attract="true"
      :style="{ top: '300px', left: '8px' }"
    >
      <div class="drag-demo">拖动我</div>
    </nut-drag>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('drag');
export default createDemo({
  setup() {}
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
