<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell title="Text 文字提示" is-link @click="textToast('网络失败，请稍后再试~')"></nut-cell>
    <nut-cell title="Title 标题展示" is-link @click="titleToast('网络失败，请稍后再试~')"></nut-cell>
    <nut-cell title="Success 成功提示" is-link @click="successToast('成功提示')"></nut-cell>
    <nut-cell title="Error 失败提示" is-link @click="errorToast('失败提示')"></nut-cell>
    <nut-cell title="Warning 警告提示" is-link @click="warningToast('警告提示')"></nut-cell>
    <nut-cell title="Loading 加载提示" is-link @click="loadingToast('加载中')"></nut-cell>
    <h2>Toast不消失</h2>
    <nut-cell title="Toast 文字提示不消失" is-link @click="NoToast('Toast不消失~')"></nut-cell>
    <h2>Toast自定义距离底部高度</h2>
    <nut-cell title="Toast 自定义底部高度" is-link @click="BottomToast('自定义距离~')"></nut-cell>
    <h2>Loading带透明遮罩</h2>
    <nut-cell title="带文案+带透明遮罩+自动消失" is-link @click="NoLoading('加载中~')"></nut-cell>
  </div>
</template>

<script>
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('toast');
import { Toast } from '@/packages/nutui.vue';
export default createDemo({
  setup() {
    const textToast = (msg) => {
      Toast.text(msg);
    };
    const titleToast = (msg) => {
      Toast.text(msg, {
        title: '标题文字'
      });
    };
    const successToast = (msg) => {
      Toast.success(msg);
    };
    const errorToast = (msg) => {
      Toast.fail(msg);
    };
    const warningToast = (msg) => {
      Toast.warn(msg);
    };
    const loadingToast = (msg) => {
      Toast.loading(msg);
    };
    const NoToast = (msg) => {
      Toast.text(msg, {
        duration: 0
      });
    };
    const BottomToast = (msg) => {
      Toast.text(msg, {
        center: false,
        bottom: '10%'
      });
    };
    const NoLoading = (msg) => {
      Toast.loading(msg, {
        cover: true
      });
    };
    return {
      textToast,
      titleToast,
      successToast,
      errorToast,
      warningToast,
      loadingToast,
      NoToast,
      NoLoading,
      BottomToast
    };
  }
});
</script>

<style lang="scss" scoped></style>
