<template>
  <view class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell>
      <nut-space>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
      </nut-space>
    </nut-cell>
    <h2>垂直排列</h2>
    <nut-cell>
      <nut-space direction="vertical" fill>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
      </nut-space>
    </nut-cell>
    <h2>自定义间距</h2>
    <nut-cell>
      <nut-space :gutter="20">
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
      </nut-space>
    </nut-cell>
    <nut-cell :style="{ '--nut-space-gap': '30px' }">
      <nut-space>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
        <nut-button type="primary">按钮</nut-button>
      </nut-space>
    </nut-cell>
    <h2>自动换行</h2>
    <nut-cell>
      <nut-space wrap>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
        <nut-button type="primary" block>按钮</nut-button>
      </nut-space>
    </nut-cell>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();
console.log(111);
</script>
