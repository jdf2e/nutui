<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-drag
      style="
        width: 70%;
        height: 200px;
        border: 1px solid red;
        margin: 0 0 0 20px;
      "
      direction="all"
      width="120"
      height="40"
    >
      <nut-button style="width: 120px; height: 40px" type="primary"
        >触摸移动</nut-button
      >
    </nut-drag>
    <h2 style="margin: 30px 0 0 0">限制拖拽方向</h2>
    <nut-drag
      style="width: 80%; height: 50px; margin: 10px 0 0 20px"
      direction="x"
      width="120"
      height="40"
    >
      <nut-button style="width: 120px; height: 40px" type="primary"
        >X轴拖拽</nut-button
      >
    </nut-drag>
    <nut-drag
      style="width: 100%; height: 200px; margin: 0 0 0 20px"
      direction="y"
      width="120"
      height="40"
    >
      <nut-button style="width: 120px; height: 40px" type="primary"
        >y轴拖拽</nut-button
      >
    </nut-drag>
  </div>
</template>

<script lang="ts">
export default {
  setup() {}
};
</script>

<style lang="scss">
.dragDemo {
  margin-left: 20px;
}
</style>
