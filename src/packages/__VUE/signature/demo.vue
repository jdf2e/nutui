<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <div>
      <nut-signature @confirm="confirm" @clear="clear" custom-class="test" @start="start"></nut-signature>
      <p class="demo-tips demo1">{{ translate('tips') }}</p>
    </div>
    <h2>{{ translate('title') }}</h2>
    <div>
      <nut-signature :lineWidth="lineWidth" :strokeStyle="strokeStyle" @end="end"></nut-signature>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('signature');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
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
    const state = reactive({
      lineWidth: 4,
      strokeStyle: 'green'
    });

    const confirm = (canvas: any, data: any) => {
      let img = document.createElement('img');
      img.src = data;
      (document.querySelector('.demo1') as any).appendChild(img);
    };
    const clear = () => {
      console.log('清除');
    };
    const start = () => {
      console.log('签名开始');
    };
    const end = () => {
      console.log('签名结束');
    };
    return { ...state, confirm, clear, translate, start, end };
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
