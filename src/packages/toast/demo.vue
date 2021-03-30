<template>
  <div class="demo">
    <h2>基本用法</h2>
    <div>
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
    </div>
    <h2>动态更新</h2>
    <nut-cell
      title="Loading 加载提示"
      is-link
      @click="loadingToast('加载中')"
    ></nut-cell>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('toast');

export default createDemo({
  setup() {
    const { proxy } = getCurrentInstance();

    const textToast = msg => {
      proxy.$toast.text(msg, { duration: 100000 });
    };
    const successToast = msg => {
      proxy.$toast.success(msg, { duration: 100000 });
    };
    const errorToast = msg => {
      proxy.$toast.fail(msg);
    };
    const warningToast = msg => {
      proxy.$toast.warn(msg);
    };
    const loadingToast = msg => {
      proxy.$toast.loading(msg, { duration: 0, id: 'test' });
      setTimeout(() => {
        proxy.$toast.success('加载完成', { id: 'test', duration: 2000 });
      }, 2000);
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
