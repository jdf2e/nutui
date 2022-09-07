<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-signature
      :lineWidth="lineWidth"
      :strokeStyle="strokeStyle"
      @confirm="confirm"
      @clear="clear"
      @start="start"
      @signing="signing"
      @end="end"
    />
  </div>
</template>

<script lang="ts">
import Taro from '@tarojs/taro';
import { reactive } from 'vue';
export default {
  props: {},
  setup() {
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green',
      testimg: ''
    });
    const clear = () => {
      console.log('清除事件');
    };
    const confirm = (data: any) => {
      console.log('图片地址', data);
      Taro.saveImageToPhotosAlbum({
        filePath: `${data}`,
        success(res) {
          Taro.showToast({
            title: '保存成功'
          });
        },
        fail(err) {
          Taro.showToast({
            title: '保存失败'
          });
        }
      });
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
    return { ...state, confirm, clear, start, signing, end };
  }
};
</script>

<style lang="scss">
.nut-cell,
.nut-barrage {
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
</style>
