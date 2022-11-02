<template>
  <view>
    <myButton type="primary">主要按钮</myButton>
  </view>
</template>

<script>
import { ref } from 'vue';
import Taro from '@tarojs/taro';
import Button from '../../components/button';
import './index.scss';

export default {
  components: {
    myButton: Button
  },
  setup() {
    const list = ref(['A', 'B', 'C']);

    function goto() {
      Taro.navigateTo({ url: '/pages/detail/index' });
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
