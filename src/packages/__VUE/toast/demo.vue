<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell :title="translate('toastText')" is-link @click="textToast(translate('toastText'))"></nut-cell>
    <nut-cell :title="translate('toastTitle')" is-link @click="titleToast(translate('toastText'))"></nut-cell>
    <nut-cell :title="translate('toastSuccess')" is-link @click="successToast(translate('toastSuccess'))"></nut-cell>
    <nut-cell :title="translate('toastError')" is-link @click="errorToast(translate('toastError'))"></nut-cell>
    <nut-cell :title="translate('toastWarning')" is-link @click="warningToast(translate('toastWarning'))"></nut-cell>
    <nut-cell :title="translate('toastLoading')" is-link @click="loadingToast(translate('toastLoading'))"></nut-cell>
    <h2>{{ translate('toastAll') }}</h2>
    <nut-cell :title="translate('toastAll')" is-link @click="NoToast(translate('toastAll'))"></nut-cell>
    <h2>{{ translate('toastBottom') }}</h2>
    <nut-cell :title="translate('toastBottom')" is-link @click="BottomToast(translate('toastBottom'))"></nut-cell>
    <h2>{{ translate('toastTransparent') }}</h2>
    <nut-cell
      :title="translate('toastTransparent')"
      is-link
      @click="NoLoading(translate('toastTransparent'))"
    ></nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('toast');
import { showToast } from '@/packages/nutui.vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { onUnmounted } from 'vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      toastText: '文字提示',
      toastTitle: '标题展示',
      toastSuccess: '成功提示',
      toastError: '错误提示',
      toastWarning: '警告提示',
      toastLoading: '加载提示',
      toastAll: 'Toast 不消失',
      toastBottom: '自定义底部高度',
      toastTransparent: '加载状态透明遮罩'
    },
    'en-US': {
      basic: 'Basic Usage',
      toastText: 'Text Message',
      toastTitle: 'Title',
      toastSuccess: 'Success',
      toastError: 'Error',
      toastWarning: 'Warning',
      toastLoading: 'Loading',
      toastAll: 'Not Disappear',
      toastBottom: 'Custom Bottom Height',
      toastTransparent: 'Loading Transparent Cover'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const textToast = (msg: string) => {
      showToast.text(msg);
    };
    const titleToast = (msg: string) => {
      showToast.text(msg, {
        title: translate('toastTitle')
      });
    };
    const successToast = (msg: string) => {
      showToast.success(msg);
    };
    const errorToast = (msg: string) => {
      showToast.fail(msg);
    };
    const warningToast = (msg: string) => {
      showToast.warn(msg);
    };
    const loadingToast = (msg: string) => {
      showToast.loading(msg);
    };
    let t: any;
    const NoToast = (msg: string) => {
      t = showToast.text(msg, {
        duration: 0
      });
    };

    onUnmounted(() => {
      t && t.hide();
    });

    const BottomToast = (msg: string) => {
      showToast.text(msg, {
        id: 'taset11',
        center: false,
        bottom: '10%'
      });
    };
    const NoLoading = (msg: string) => {
      showToast.loading(msg, {
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
      BottomToast,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
