<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-drag
      style="width: 90%; height: 200px; border: 1px solid red"
      direction="all"
      width="120"
      height="40"
    >
      <nut-button style="width: 120px; height: 40px" type="primary"
        >触摸移动</nut-button
      >
    </nut-drag>
    <h2 style="margin: 60px 0 0 0">限制拖拽方向</h2>
    <nut-drag
      style="width: 100%; height: 200px; position: absolute"
      direction="x"
      width="120"
      height="40"
    >
      <nut-button style="width: 120px; height: 40px" type="primary"
        >只能X轴拖拽</nut-button
      >
    </nut-drag>
    <nut-drag
      style="
        width: 100%;
        height: 200px;
        position: absolute;
        margin: 0 0 0 200px;
      "
      direction="y"
      width="120"
      height="40"
    >
      <nut-button style="width: 120px; height: 40px" type="primary"
        >只能y轴拖拽</nut-button
      >
    </nut-drag>
  </div>
</template>

<script lang="ts">
export default {
  setup() {}
};
</script>

<style lang="scss"></style>
