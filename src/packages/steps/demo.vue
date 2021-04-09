<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-steps current="1">
      <nut-step
        class="nut-step-finish"
        title="已完成"
        content="这是一段很长很长很长的描述性文字"
        >1</nut-step
      >
      <nut-step
        class="nut-step-process"
        title="进行中"
        content="这是一段很长很长很长的描述性文字"
        >2</nut-step
      >
      <nut-step class="nut-step-wait" title="未开始">3</nut-step>
    </nut-steps>
    <h2>自定义图标和颜色</h2>
    <div class="" style="height: 300px">
      <nut-steps>
        <nut-step
          class="nut-step-finish"
          title="已完成"
          icon="nutui-iconfont nut-icon-wanshangshide"
        ></nut-step>
        <nut-step
          class="nut-step-process"
          title="进行中"
          icon="nutui-iconfont nut-icon-notice"
          >2</nut-step
        >
        <nut-step class="nut-step-wait" title="未开始" content="">3</nut-step>
      </nut-steps>
    </div>
    <h2>竖向步骤条</h2>
    <div class="" style="height: 300px">
      <nut-steps direction="vertical">
        <nut-step
          class="nut-step-error"
          title="已完成"
          content="您的订单已经打包完成，商品已发出"
          >1</nut-step
        >
        <nut-step
          class="nut-step-process"
          title="进行中"
          content="您的订单正在配送途中"
          >2</nut-step
        >
        <nut-step
          class="nut-step-wait"
          title="未开始"
          content="收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"
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
