<template>
  <div class="demo">
    <div class="title">按钮类型</div>
    <div class="demo-button-row">
      <nut-button type="primary">主要按钮</nut-button>
      <nut-button type="info">信息按钮</nut-button>
      <nut-button type="default">默认按钮</nut-button>
    </div>
    <div class="demo-button-row2">
      <nut-button type="danger">危险按钮</nut-button>
      <nut-button type="warning">警告按钮</nut-button>
      <nut-button type="success">成功按钮</nut-button>
    </div>
    <div class="title">朴素按钮</div>
    <div class="demo-button-row2">
      <nut-button plain type="primary">朴素按钮</nut-button>
      <nut-button plain type="info">朴素按钮</nut-button>
    </div>
    <div class="title">禁用状态</div>
    <div class="demo-button-row2">
      <nut-button disabled type="primary">禁用状态</nut-button>
      <nut-button plain disabled type="info">禁用状态</nut-button>
      <nut-button plain disabled type="primary">禁用状态</nut-button>
    </div>
    <div class="title">按钮形状</div>
    <div class="demo-button-row2">
      <nut-button shape="square" type="primary">方形按钮</nut-button>
      <nut-button type="info">圆形按钮</nut-button>
    </div>
    <div class="title">加载状态</div>

    <div class="title">图标按钮</div>

    <div class="title">按钮尺寸</div>
    <div class="demo-button-row2">
      <div class="demo-button-row2">
        <nut-button block type="primary">通栏按钮</nut-button>
      </div>
      <div class="demo-button-row2">
        <nut-button type="primary">普通按钮</nut-button>
        <nut-button size="small" type="primary">小型按钮</nut-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Button from '@/packages/button/index.vue';
import { createDemoComponent } from '@/utils/create';
export default createDemoComponent('button')({
  props: {
    text: String
  },
  components: { 'nut-button': Button },
  emits: ['click']
});
</script>

<style lang="scss" scoped>
.demo-button-row {
  margin-bottom: 20px;
}
.demo-button-row2 {
  margin-bottom: 10px;
}
.nut-button {
  margin-right: 15px;
  &:last-child {
    margin-bottom: 0;
    margin-right: 0;
  }
}
</style>
