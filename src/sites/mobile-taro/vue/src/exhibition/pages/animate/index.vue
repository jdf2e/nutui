<template>
  <div class="demo">
    <h2>点击触发</h2>

    <div class="ani-demo-div">
      <nut-animate type="slide-right" action="click">
        <nut-button type="primary">由右向左划入</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="slide-left" action="click">
        <nut-button type="primary">由左向右划入</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="slide-top" action="click">
        <nut-button type="primary">由上至下划入</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="slide-bottom" action="click">
        <nut-button type="primary">由下至上划入</nut-button>
      </nut-animate>
    </div>

    <h2>循环动画</h2>

    <div class="ani-demo-div">
      <nut-animate type="shake" :loop="true">
        <nut-button type="primary">shake-抖动</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="ripple" :loop="true">
        <nut-button type="primary">ripple-心跳</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="breath" :loop="true">
        <nut-button type="primary">breath-呼吸灯</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="twinkle" :loop="true">
        <nut-button type="primary">twinkle-水波</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="flicker" :loop="true">
        <nut-button type="primary">flicker-擦亮</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="jump" :loop="true">
        <nut-button type="primary">jump-跳跃</nut-button>
      </nut-animate>
    </div>

    <div class="ani-demo-div">
      <nut-animate type="float" :loop="true">
        <nut-button type="primary">float-漂浮</nut-button>
      </nut-animate>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {},
  setup() {
    return {};
  }
});
</script>
<style lang="scss" scoped>
.demo {
}

.ani-demo-div {
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
}

.ani-demo-div2 {
  margin-top: 60px;
}
</style>
