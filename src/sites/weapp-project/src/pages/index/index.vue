<template>
  <view>
    <view>Detail: </view>
  </view>
</template>

<script>
import { ref } from 'vue';
import Taro from '@tarojs/taro';
import './index.scss';

export default {
  setup() {
    const list = ref(['A', 'B', 'C']);

    function goto() {
      // Taro.navigateTo({ url: '/pages/detail/index' })
    }

    function onButtonClick() {
      console.log('onButtonClick');
    }

    return {
      list,
      goto,
      onButtonClick
    };
  }
};
</script>
