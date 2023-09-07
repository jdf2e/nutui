<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell>
      <nut-button type="primary" @click="state.show = true">显示遮罩层</nut-button>
      <nut-overlay v-model:visible="state.show" :z-index="2000"></nut-overlay>
    </nut-cell>
    <h2>遮罩样式</h2>
    <nut-cell>
      <nut-button type="primary" @click="state.show3 = true">显示遮罩层</nut-button>
      <nut-overlay v-model:visible="state.show3" :z-index="2000" :overlay-style="state.overlayStyle"></nut-overlay>
    </nut-cell>
    <h2>设置动画时间</h2>
    <nut-cell>
      <nut-button type="primary" @click="state.show4 = true">设置动画时间</nut-button>
      <nut-overlay v-model:visible="state.show4" :duration="2.5"></nut-overlay>
    </nut-cell>
    <h2>锁定背景滚动</h2>
    <nut-cell>
      <nut-button type="primary" @click="state.show5 = true">锁定背景滚动</nut-button>
      <nut-overlay v-model:visible="state.show5" lock-scroll></nut-overlay>
    </nut-cell>
    <h2>嵌套内容</h2>
    <nut-cell>
      <nut-button type="success" @click="state.show2 = true">嵌套内容</nut-button>
      <nut-overlay v-model:visible="state.show2" :z-index="2000">
        <div class="wrapper">
          <div class="content">这里是正文</div>
        </div>
      </nut-overlay>
    </nut-cell>
    <h2>点击遮罩不关闭</h2>
    <nut-cell>
      <nut-button type="primary" @click="state.show6 = true">点击遮罩不关闭</nut-button>
      <nut-overlay v-model:visible="state.show6" lock-scroll :close-on-click-overlay="false">
        <div class="wrapper">
          <div class="content" @click.stop="state.show6 = false">close</div>
        </div>
      </nut-overlay>
    </nut-cell>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();
const state = reactive({
  show: false,
  show2: false,
  show3: false,
  show4: false,
  show5: false,
  show6: false,
  overlayStyle: {
    backgroundColor: 'rgba(0, 0, 0, .2)'
  }
});
</script>

<style lang="scss">
.wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    width: 150px;
    height: 150px;
    background: #fff;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    color: red;
  }
}
</style>
