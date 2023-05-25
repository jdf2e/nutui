<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <div>
      <nut-signature ref="demo" @confirm="confirm" @clear="clear" custom-class="test" @start="start"></nut-signature>
      <img :src="demoSignUrl" class="demoSignUrl" v-if="demoSignUrl" />
    </div>
    <h2>{{ translate('title') }}</h2>
    <div>
      <nut-signature
        @confirm="confirm2"
        @clear="clear2"
        :lineWidth="lineWidth"
        :strokeStyle="strokeStyle"
        @end="end"
      ></nut-signature>
      <img :src="demoSignUrl2" class="demoSignUrl" v-if="demoSignUrl2" />
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('signature');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title: '修改颜色和签字粗细',
      tips: 'Tips: 点击确认按钮,下方显示签名图片'
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Modify color and signature thickness',
      tips: 'Tips: click the confirm button, and the signature image is displayed below'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const demoSignUrl = ref('');
    const demoSignUrl2 = ref('');
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green'
    });

    const clear = () => {
      demoSignUrl.value = '';
      console.log('清除事件');
    };
    const clear2 = () => {
      demoSignUrl2.value = '';
      console.log('清除事件');
    };
    const confirm = (canvas: any, data: any) => {
      if (data === '') {
        console.log(canvas);
        return false;
      }
      demoSignUrl.value = data;
      console.log('图片地址', canvas, data);
    };
    const confirm2 = (canvas: any, data: any) => {
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
    const end = () => {
      console.log('签名结束');
    };
    return {
      ...state,
      confirm,
      clear,
      translate,
      demoSignUrl,
      demoSignUrl2,
      confirm2,
      clear2,
      start,
      end
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  flex-direction: column;
  .demo-tips {
    font-size: 12px;
    color: #666;
  }
}
</style>
