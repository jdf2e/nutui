<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell
      title="Text 文字提示"
      is-link
      @click="textToast('网络失败，请稍后再试~')"
    ></nut-cell>
    <nut-cell
      title="Success 成功提示"
      is-link
      @click="successToast('成功提示')"
    ></nut-cell>
    <nut-cell
      title="Error 失败提示"
      is-link
      @click="errorToast('失败提示')"
    ></nut-cell>
    <nut-cell
      title="Warning 警告提示"
      is-link
      @click="warningToast('警告提示')"
    ></nut-cell>
    <nut-cell
      title="Loading 加载提示"
      is-link
      @click="loadingToast('加载中')"
    ></nut-cell>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('toast');
import { Toast } from '@/nutui';
export default createDemo({
  setup() {
    const textToast = msg => {
      Toast.text(msg);
    };
    const successToast = msg => {
      Toast.success(msg);
    };
    const errorToast = msg => {
      Toast.fail(msg);
    };
    const warningToast = msg => {
      Toast.warn(msg);
    };
    const loadingToast = msg => {
      Toast.loading(msg);
    };
    return {
      textToast,
      successToast,
      errorToast,
      warningToast,
      loadingToast
    };
  }
});
</script>

<style lang="scss" scoped></style>
