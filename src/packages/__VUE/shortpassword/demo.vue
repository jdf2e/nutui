<template>
  <div class="demo">
    <nut-shortpassword
      v-model="state.value"
      v-model:visible="state.visible"
      :no-button="state.noButton"
      :length="state.length"
      :error-msg="state.errorMsg"
      @change="methods.onChange"
      @complete="methods.onComplete"
      @ok="methods.onOk"
      @tips="methods.onTips"
      @close="methods.close"
      @cancel="methods.cancel"
    >
    </nut-shortpassword>
    <nut-cell
      :title="translate('basic')"
      is-link
      @click="
        state.visible = true;
        state.noButton = true;
        state.length = 6;
        state.errorMsg = '';
      "
    ></nut-cell>
    <nut-cell
      :title="translate('showButtonGroup')"
      is-link
      @click="
        state.visible = true;
        state.noButton = false;
        state.length = 6;
        state.errorMsg = '';
      "
    ></nut-cell>
    <nut-cell
      :title="translate('customPasswordLength')"
      is-link
      @click="
        state.visible = true;
        state.noButton = true;
        state.length = 4;
        state.errorMsg = '';
      "
    ></nut-cell>
    <nut-cell
      :title="translate('forgetPassword')"
      is-link
      @click="
        state.visible = true;
        state.length = 6;
        state.errorMsg = '';
        state.noButton = true;
      "
    ></nut-cell>
    <nut-cell
      :title="translate('errorMessage')"
      is-link
      @click="
        state.visible = true;
        state.length = 6;
        state.noButton = true;
        state.errorMsg = translate('customErrorMsg');
      "
    ></nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive, getCurrentInstance } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('shortpassword');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      showButtonGroup: '显示按钮组',
      customPasswordLength: '自定义密码长度',
      forgetPassword: '忘记密码',
      errorMessage: '错误提示语',
      customErrorMsg: '请输入正确密码',
      onTips: '执行密码忘记逻辑',
      close: '点击icon关闭弹窗',
      cancelTips: '点击取消按钮关闭弹窗'
    },
    'en-US': {
      basic: 'Basic Usage',
      showButtonGroup: 'Show Button Group',
      customPasswordLength: 'Custom Password Length',
      forgetPassword: 'Forget Password',
      errorMessage: 'Error Message',
      customErrorMsg: 'Please enter correct password',
      onTips: 'Execute forgotten password logic',
      close: 'Click the icon to close the popup',
      cancelTips: 'Click the Cancel button to close the popup'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    let { proxy } = getCurrentInstance() as any;

    const state = reactive({
      visible: false,
      noButton: true,
      value: '',
      errorMsg: '',
      length: 6
    });
    const methods = {
      onChange(val: string) {
        val && proxy.$toast.text(val);
      },
      onOk(val: string) {
        val && proxy.$toast.text(val);
        state.visible = false;
      },
      onComplete() {},
      onTips() {
        proxy.$toast.text(translate('onTips'));
      },
      close() {
        proxy.$toast.text(translate('close'));
      },
      cancel() {
        proxy.$toast.text(translate('cancelTips'));
      }
    };

    return {
      state,
      methods,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
