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
    <div class="title">边框按钮</div>

    <div class="title">禁用状态</div>

    <div class="title">按钮形状</div>

    <div class="title">加载状态</div>

    <div class="title">图标按钮</div>

    <div class="title">按钮尺寸</div>
    <nut-button block type="primary">通栏按钮</nut-button>
    <nut-button>普通按钮</nut-button>
    <nut-button>小型按钮</nut-button>
  </div>
</template>

<script lang="ts">
import Button from '@/packages/button/index.vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('button');
export default createDemo({
  props: {
    text: String
  },
  components: { [Button.name]: Button },
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
