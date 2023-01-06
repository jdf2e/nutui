<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <div class="demo__piece">
      <nut-circle-progress :progress="20"> </nut-circle-progress>
    </div>
    <h2>环形进度条自定义宽度</h2>
    <div class="demo__piece">
      <nut-circle-progress :progress="50" strokeWidth="10"> </nut-circle-progress>
    </div>

    <h2>环形进度条自定义颜色(支持渐变色)</h2>
    <div class="demo__piece">
      <nut-circle-progress :progress="50" color="red" />
      <nut-circle-progress :progress="100" :color="gradientColor" />
    </div>
    <h2>环形进度条自定义大小</h2>
    <div class="demo__piece">
      <nut-circle-progress :progress="50" radius="60"></nut-circle-progress>
    </div>
    <h2>环形进度条自定义内容</h2>
    <div class="demo__piece">
      <nut-circle-progress :progress="50" radius="60">自定义</nut-circle-progress>
    </div>
    <h2>动态改变环形进度条的进度</h2>
    <div class="demo__piece">
      <nut-circle-progress :progress="percent"> </nut-circle-progress>
    </div>
    <div class="demo__btn">
      <nut-button type="primary" @click="setReduceVal">减少</nut-button>
      <nut-button type="primary" @click="setAddVal">增加</nut-button>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  components: {
    Header
  },
  setup() {
    const env = Taro.getEnv();
    const gradientColor = {
      '0%': '#FF5E5E',
      '100%': '#FFA062'
    };
    const percent = ref(30);
    const setAddVal = () => {
      if (percent.value >= 100) {
        return;
      }
      percent.value += 10;
    };
    const setReduceVal = () => {
      if (percent.value - 10 <= 0) {
        percent.value = 0;
        return;
      }
      percent.value -= 10;
    };
    return {
      setAddVal,
      setReduceVal,
      percent,
      gradientColor,
      env
    };
  }
};
</script>

<style lang="scss">
.demo__btn {
  text-align: center;
  width: 100%;
  height: 50px;
  border-top: 1px solid rgba(234, 240, 251, 1);
  padding-top: 6px;
  background: rgba(255, 255, 255, 1);
  .nut-button {
    margin-right: 10px;
  }
}

.demo__piece {
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 1);
}
</style>
