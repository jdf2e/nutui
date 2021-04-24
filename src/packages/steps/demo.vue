<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-steps current="1">
      <nut-step title="进行中">1</nut-step>
      <nut-step title="未开始">2</nut-step>
      <nut-step title="未开始">3</nut-step>
      <nut-step title="未开始">4</nut-step>
    </nut-steps>
    <h2>标题和描述信息</h2>
    <nut-steps current="2">
      <nut-step
        title="已完成"
        content="步骤描述"
        icon="nutui-iconfont nut-icon-wanshangshide"
        >1</nut-step
      >
      <nut-step title="进行中" content="步骤描述"></nut-step>
      <nut-step title="未开始" content="步骤描述"></nut-step>
    </nut-steps>
    <h2>自定义图标</h2>
    <nut-steps current="1">
      <nut-step
        title="已完成"
        icon="nutui-iconfont nut-icon-notice"
        >1</nut-step
      >
      <nut-step title="进行中" icon="nutui-iconfont nut-icon-notice"
        >2</nut-step
      >
      <nut-step
        class="nut-step-wait"
        title="未开始"
        icon="nutui-iconfont nut-icon-notice"
        >3</nut-step
      >
    </nut-steps>
    <h2>竖向步骤条</h2>
    <div style="height: 300px">
      <nut-steps direction="vertical" current="2">
        <nut-step
          title="已完成"
          icon="nutui-iconfont nut-icon-wanshangshide"
          content="您的订单已经打包完成，商品已发出"
          >1</nut-step
        >
        <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
        <nut-step
          title="未开始"
          content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
          >3</nut-step
        >
      </nut-steps>
    </div>
    <div style="height: 300px">
      <nut-steps direction="vertical" progress-dot current="2">
        <nut-step title="已完成" content="您的订单已经打包完成，商品已发出"
          >1</nut-step
        >
        <nut-step title="进行中" content="您的订单正在配送途中">2</nut-step>
        <nut-step
          title="未开始"
          content="<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"
          >3</nut-step
        >
      </nut-steps>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('steps');
export default createDemo({
  props: {},
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.demo-box {
}
</style>
