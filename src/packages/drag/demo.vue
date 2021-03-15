<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-drag :style="{ top: '100px', left: '8px' }">
      <nut-button type="primary">触摸移动</nut-button>
    </nut-drag>
    <h2 style="top:30px;position:relative">限制拖拽方向</h2>
    <nut-drag direction="x" :style="{ top: '200px', left: '8px' }">
      <nut-button type="primary">只能X轴拖拽</nut-button>
    </nut-drag>
    <nut-drag direction="y" :style="{ top: '200px', right: '50px' }">
      <nut-button type="primary">只能Y轴拖拽</nut-button>
    </nut-drag>
    <h2 style="top:70px;position:relative">自动吸边</h2>
    <nut-drag
      direction="x"
      :attract="true"
      :style="{ top: '300px', left: '8px' }"
    >
      <nut-button type="primary">拖动我</nut-button>
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

<style lang="scss" scoped></style>
