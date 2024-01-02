<template>
  <div class="drag-boundary"></div>
  <nut-drag :boundary="{ top: 350, left: 16, bottom: 450, right: 16 }" :style="{ top: '400px', left: '50px' }">
    <nut-button type="primary">Button</nut-button>
  </nut-drag>
</template>

<style>
.drag-boundary {
  position: absolute;
  top: 350px;
  left: 16px;
  right: 16px;
  height: 100px;
  border: 1px solid red;
}
</style>
