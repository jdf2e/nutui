<template>
  <Demo class="full">
    <h2>基础用法</h2>
    <nut-drag class="dragDemo">
      <nut-button type="primary">触摸移动</nut-button>
    </nut-drag>
    <h2>y轴方向移动</h2>
    <nut-drag class="dragDemo" direction="y">
      <nut-button type="primary">Y轴移动</nut-button>
    </nut-drag>
    <h2>x轴方向移动</h2>
    <nut-drag class="dragDemo" direction="x">
      <nut-button type="primary">X轴移动</nut-button>
    </nut-drag>
  </Demo>
</template>

<style lang="scss">
.dragDemo {
  margin-left: 20px;
}
</style>
