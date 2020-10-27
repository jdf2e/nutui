<template>
  <div class="demo">
    <div class="title">类型</div>
    <div class="card">
      <nut-button type="primary">主要按钮</nut-button>
      <nut-button type="success">成功按钮</nut-button>
      <nut-button type="default">默认按钮</nut-button>
      <nut-button type="warning">警告按钮</nut-button>
      <nut-button type="danger">危险按钮</nut-button>
    </div>
    <div class="title">通栏</div>
    <div class="card">
      <nut-button block>通栏按钮 Normer</nut-button>
      <nut-button block>通栏按钮 Pressed</nut-button>
      <nut-button block disabled>通栏按钮 Disabled</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "@/packages/button/index.vue";
import { createDemoComponent } from "@/utils/create";
export default createDemoComponent("button")({
  props: {
    text: String
  },
  components: { "nut-button": Button },
  emits: ["click"],
  setup(props, { emit, slots }) {
    console.log(props);
  }
});
</script>

<style lang="scss" scoped>
.nut-button {
  margin-bottom: 21px;
  &:last-child {
    margin-bottom: 0;
  }
}
</style>
