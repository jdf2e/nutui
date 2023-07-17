<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />

    <h2>通过 show 控制动画</h2>

    <div class="demo-animate">
      <nut-animate type="slide-right" :show="show1">
        <nut-button type="primary" @click="onClick1">单次动画</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-right" :show="show2">
        <nut-button type="primary" @click="onClick2">多次触发</nut-button>
      </nut-animate>
    </div>

    <h2>循环动画</h2>

    <div class="demo-animate">
      <nut-animate type="shake" :loop="true">
        <nut-button type="primary">shake-抖动</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="ripple" :loop="true">
        <nut-button type="primary">ripple-心跳</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="breath" :loop="true">
        <nut-button type="primary">breath-呼吸灯</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="twinkle" :loop="true">
        <nut-button type="primary">twinkle-水波</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="flicker" :loop="true">
        <nut-button type="primary">flicker-擦亮</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="jump" :loop="true">
        <nut-button type="primary">jump-跳跃</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="float" :loop="true">
        <nut-button type="primary">float-漂浮</nut-button>
      </nut-animate>
    </div>

    <h2>点击触发</h2>

    <div class="demo-animate">
      <nut-animate type="slide-right" action="click">
        <nut-button type="primary">由右向左划入</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-left" action="click">
        <nut-button type="primary">由左向右划入</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-top" action="click">
        <nut-button type="primary">由上至下划入</nut-button>
      </nut-animate>
    </div>

    <div class="demo-animate">
      <nut-animate type="slide-bottom" action="click">
        <nut-button type="primary">由下至上划入</nut-button>
      </nut-animate>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();
const show1 = ref(false);
const onClick1 = () => {
  show1.value = true;
};
const show2 = ref(false);
const onClick2 = () => {
  show2.value = true;
  setTimeout(() => {
    show2.value = false;
  }, 500);
};
</script>
<style lang="scss">
.demo-animate {
  margin-bottom: 10px;
  display: inline-block;
  width: 100%;
}
</style>
