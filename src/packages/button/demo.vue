<template>
  <div class="demo-list-pd">
    <h4>按钮状态</h4>
    <div class="btn-state">
      <nut-button block>默认状态</nut-button>
      <nut-button block>点击状态</nut-button>
      <nut-button disabled block>不可点击状态</nut-button>
    </div>
    <h4>按钮尺寸</h4>
    <div class="btn-size">
      <nut-button size="big">大号按钮</nut-button>
      <nut-button size="middle">中号按钮</nut-button>
      <nut-button size="small">小号按钮</nut-button>
    </div>

    <h4>底部分栏按钮</h4>
    <div class="btn-size two">
      <nut-button size="middle" type="bottom">按钮A</nut-button>
      <nut-button size="middle">按钮B</nut-button>
    </div>
    <div class="btn-size three">
      <nut-button size="middle" type="bottom">按钮A</nut-button>
      <nut-button size="middle" type="bottom">按钮B</nut-button>
      <nut-button size="middle" type="bottom">按钮C</nut-button>
    </div>
    <div class="btn-size four">
      <nut-button size="middle" type="bottom">按钮A</nut-button>
      <nut-button size="middle" type="bottom">按钮B</nut-button>
      <nut-button size="middle" type="bottom">按钮C</nut-button>
      <nut-button size="middle" type="bottom">更多</nut-button>
    </div>
    <h4>常规按钮</h4>
    <div>
      <nut-button @click="clickHandler" :disabled="disabled">去结算</nut-button>
      <nut-button disabled>去结算（disabled）</nut-button>
    </div>
    <h4>常规按钮-小</h4>
    <div>
      <nut-button small>去结算</nut-button>
      <nut-button small disabled>去结算（disabled）</nut-button>
    </div>

    <h4>通栏按钮</h4>
    <div>
      <nut-button block>登录</nut-button>
    </div>

    <h4>通栏按钮-圆角</h4>
    <div>
      <nut-button block shape="circle">登录</nut-button>
    </div>

    <h4>圆角按钮-常规Button</h4>
    <div class="white-bg">
      <nut-button type="red" shape="circle" size="small">确认收货</nut-button>
      <nut-button type="gray" shape="circle" size="small">查看物流</nut-button>
      <nut-button type="default" shape="circle" size="small">再次购买</nut-button>
      <nut-button type="light" shape="circle" size="small">降价通知</nut-button>
    </div>

    <h4>圆角按钮-标签Button</h4>
    <div class="white-bg">
      <nut-button type="primary" shape="circle" size="small">京东快递</nut-button>
      <nut-button type="lightred" shape="circle" size="small">好评 6.6万</nut-button>
      <nut-button type="actived" shape="circle" icon="tick" size="small">全部 100万</nut-button>
    </div>

    <h4>图标按钮-小</h4>
    <div class="white-bg">
      <nut-button type="actived" shape="circle" icon="tick" size="small"></nut-button>
    </div>

    <h4>图标按钮-大</h4>
    <div class="white-bg">
      <nut-button type="actived" shape="circle" icon="tick"></nut-button>
    </div>

    <h4>圆角按钮-商品属性选择Button</h4>
    <div class="white-bg">
      <nut-button type="actived" shape="circle" size="small">象牙白</nut-button>
      <nut-button type="light" shape="circle" size="small">皓月灰</nut-button>
      <nut-button type="dashed" shape="circle" size="small">晶钻蓝</nut-button>
    </div>

    <h4>自定义颜色</h4>
    <div class="white-bg">
      <nut-button type="actived" shape="circle" size="small" color="#fff">象牙白</nut-button>
      <nut-button type="primary" shape="circle" size="small" color="rgb(0,0,0)">象牙白</nut-button>
      <nut-button type="actived" shape="circle" icon="tick" color="rgb(0,0,0)" size="small"></nut-button>
      <nut-button type="actived" shape="circle" icon="tick" color="rgb(0,0,0)" size="small">全部 100万</nut-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
    };
  },
  methods: {
    clickHandler(e) {
      // alert("我点击了按钮");
      console.log(e, '我点击了按钮');
      this.disabled = true;
      setTimeout(() => {
        this.disabled = false;
      }, 2000);
    },
  },
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

.btn-state {
  button {
    margin-bottom: 10px;
    border-radius: 4px;
  }
}

.btn-size {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 24px;

  &.two {
    button {
      width: 168px;
    }
  }

  &.three {
    button {
      width: 108px;
    }
  }

  &.four {
    button {
      width: 79px;
    }

    .middle {
      padding: 0;
    }
  }
}
</style>
