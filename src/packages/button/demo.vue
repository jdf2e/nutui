<template>
    <div>
      <h4>常规按钮</h4>
      <div class="bg">
        <nut-button @click="clickHandler">去结算</nut-button>
        <nut-button disabled>去结算（disabled）</nut-button>
        <div class="gap"></div>
        <nut-button small>去结算</nut-button>
        <nut-button small disabled>去结算（disabled）</nut-button>
      </div>

      <h4>常规按钮组</h4>
      <nut-buttongroup>
        <nut-button type="light">重置</nut-button>
        <nut-button>确定</nut-button>
      </nut-buttongroup>

      <h4>通栏按钮</h4>
      <div>
        <nut-button block>登录</nut-button>
        <div class="gap"></div>
        <nut-button block shape="circle">登录</nut-button>
      </div>

      <h4>圆角按钮-常规Button</h4>
      <div class="white-bg">
        <nut-button type="red" shape="circle" small>确认收货</nut-button>
        <nut-button type="gray" shape="circle" small>查看物流</nut-button>
        <nut-button type="default" shape="circle" small>再次购买</nut-button>
        <nut-button type="light" shape="circle" small>降价通知</nut-button>
      </div>

      <h4>圆角按钮-标签Button</h4>
      <div class="white-bg">
        <nut-button type="primary" shape="circle" small>京东快递</nut-button>
        <nut-button type="lightred" shape="circle" small>好评 6.6万</nut-button>
        <nut-button type="actived" shape="circle" icon="tick" small>全部 100万</nut-button>
      </div>

      <h4>图标按钮-小</h4>
      <div class="white-bg">
        <nut-button type="actived" shape="circle" icon="tick" small></nut-button>
      </div>

      <h4>图标按钮-大</h4>
      <div class="white-bg">
        <nut-button type="actived" shape="circle" icon="tick"></nut-button>
      </div>

      <h4>圆角按钮-商品属性选择Button</h4>
      <div class="white-bg">
        <nut-button type="actived" shape="circle" small>象牙白</nut-button>
        <nut-button type="light" shape="circle" small>皓月灰</nut-button>
        <nut-button type="dashed" shape="circle" small>晶钻蓝</nut-button>
      </div> 

      <h4>自定义颜色</h4>
      <div class="white-bg">
        <nut-button type="actived" shape="circle" small color="#fff">象牙白</nut-button>
        <nut-button type="primary" shape="circle" small color="rgb(0,0,0)">象牙白</nut-button>
        <nut-button type="actived" shape="circle" icon="tick" color="rgb(0,0,0)" small></nut-button>
        <nut-button type="actived" shape="circle" icon="tick" color="rgb(0,0,0)" small>全部 100万</nut-button>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
      clickHandler() {
        alert('我点击了按钮');
      }
  }
};
</script>

<style lang="scss" scoped>
.bg {
  margin: 0 10px;
}
.gap {
  height: 10px;
}
.white-bg {
  padding: 10px;
  background: #fff;
}
</style>
