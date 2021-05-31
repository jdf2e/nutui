<template>
  <view class="index">
    <nut-button type="primary" desc="主要按钮" @click="handleClick"
      >主要按钮</nut-button
    >
  </view>
</template>

<script>
import { ref } from 'vue';
import Demo from '../../../../../../packages/__VUE/button/demo.vue';
import Button from '../button/index.taro.vue';

export default {
  components: {
    'nut-button': Button
  },
  setup() {
    const handleClick = () => {
      console.log('click!!!');
    };

    return {
      handleClick
    };
  }
};
</script>
