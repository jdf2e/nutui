<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-signature @confirm="confirm" @clear="clear" custom-class="test" @start="start"></nut-signature>
    <p class="demo-tips demo1">Tips: 点击确认按钮,下方显示签名图片</p>
    <h2>修改颜色和签字粗细</h2>
    <nut-signature
      :lineWidth="lineWidth"
      :strokeStyle="strokeStyle"
      @confirm="confirm"
      @clear="clear"
      @start="start"
      @signing="signing"
      @end="end"
    />
    <image :src="demoSignUrl" class="demoSignUrl" v-if="demoSignUrl" />
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default {
  components: { Header },
  setup() {
    const env = Taro.getEnv();
    const demoSignUrl = ref('');
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green',
      testimg: ''
    });
    const clear = () => {
      demoSignUrl.value = '';
      console.log('清除事件');
    };
    const confirm = (canvas, data: any) => {
      demoSignUrl.value = data;
      console.log('图片地址', canvas, data);
    };
    const start = () => {
      console.log('签名开始');
    };
    const signing = (e) => {
      console.log('签名进行中', e);
    };
    const end = () => {
      console.log('签名结束');
    };
    return { ...state, confirm, clear, start, signing, end, demoSignUrl, env };
  }
};
</script>

<style lang="scss">
#app .demo {
  height: auto;
}
.nut-cell {
  padding: 20px 0;
  height: 120px;
}
.test {
  display: flex;
  justify-content: space-between;
  .nut-input {
    width: 80%;
  }
}
#spcanvas {
  height: 400px;
}
.demoSignUrl {
  width: 200px;
  height: 200px;
}
</style>
