<template>
  <view class="index">
    <nut-icon name="dongdong" @click="handleClick"></nut-icon>
  </view>
</template>

<script>
import { ref } from 'vue';
// import Demo from '../../../../../../packages/__VUE/button/demo.vue';
import Icon from '../icon/index.taro.vue';

export default {
  components: {
    'nut-icon': Icon
  },
  setup() {
    const handleClick = () => {
      console.log('icon!!!');
    };

    return {
      handleClick
    };
  }
};
</script>
