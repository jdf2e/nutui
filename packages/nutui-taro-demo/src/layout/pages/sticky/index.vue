<template>
  <div class="demo sticky-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-sticky top="57">
      <nut-button type="primary">吸顶按钮</nut-button>
    </nut-sticky>
    <h2>吸顶距离</h2>
    <nut-sticky top="120">
      <nut-button type="primary" style="margin-left: 50px">吸顶距离 120px</nut-button>
    </nut-sticky>
    <view style="height: 100vh"></view>
  </div>
</template>
<script setup lang="ts">
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();
</script>
