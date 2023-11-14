<template>
  <Demo class="signature-demo">
    <h2>基础用法</h2>
    <nut-signature custom-class="test" @confirm="confirm" @clear="clear" @start="start"></nut-signature>
    <image v-if="demoSignUrl" :src="demoSignUrl" class="demoSignUrl" />

    <h2>修改颜色和签字粗细</h2>
    <nut-signature
      :line-width="4"
      stroke-style="green"
      @confirm="confirm2"
      @clear="clear2"
      @start="start"
      @signing="signing"
      @end="end"
    />
    <image v-if="demoSignUrl2" :src="demoSignUrl2" class="demoSignUrl" />
  </Demo>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const demoSignUrl = ref('');
const demoSignUrl2 = ref('');
const clear = () => {
  demoSignUrl.value = '';
  console.log('清除事件');
};
const clear2 = () => {
  demoSignUrl2.value = '';
  console.log('清除事件');
};
const confirm = (canvas, data: any) => {
  if (data === '') {
    console.log(canvas);
    return false;
  }
  demoSignUrl.value = data;
  console.log('图片地址', canvas, data);
};
const confirm2 = (canvas, data: any) => {
  if (data === '') {
    console.log(canvas);
    return false;
  }
  demoSignUrl2.value = data;
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
</script>

<style lang="scss">
#app .signature-demo {
  height: auto;
}
.test {
  .nut-input {
    width: 80%;
  }
}
#spcanvas {
  height: 400px;
}
.demoSignUrl {
  width: 100px;
  height: 100px;
}
.demo-tips {
  margin-top: 10px;
}
</style>
