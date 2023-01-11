<template>
  <div class="demo">
    <nut-cell :title="translate('basic')" is-link @click="state.visible1 = true"></nut-cell>

    <nut-short-password v-model="state.value1" v-model:visible="state.visible1" @focus="state.showKeyboard1 = true">
    </nut-short-password>
    <nut-number-keyboard
      v-model="state.value1"
      v-model:visible="state.showKeyboard1"
      @blur="state.showKeyboard1 = false"
    >
    </nut-number-keyboard>

    <nut-cell
      :title="translate('customPasswordLength')"
      is-link
      @click="
        state.visible2 = true;
        state.length = 4;
      "
    ></nut-cell>
    <nut-short-password
      v-model="state.value2"
      v-model:visible="state.visible2"
      @focus="state.showKeyboard2 = true"
      :length="state.length"
      @complete="methods.complete"
    >
    </nut-short-password>
    <nut-number-keyboard
      v-model="state.value2"
      v-model:visible="state.showKeyboard2"
      @blur="state.showKeyboard2 = false"
    >
    </nut-number-keyboard>

    <nut-cell :title="translate('forgetPassword')" is-link @click="state.visible3 = true"> </nut-cell>

    <nut-short-password
      v-model="state.value3"
      v-model:visible="state.visible3"
      @focus="state.showKeyboard3 = true"
      @complete="methods.complete"
      @tips="methods.onTips"
    >
    </nut-short-password>
    <nut-number-keyboard
      v-model="state.value3"
      v-model:visible="state.showKeyboard3"
      @blur="state.showKeyboard3 = false"
    >
    </nut-number-keyboard>

    <nut-cell
      :title="translate('errorMessage')"
      is-link
      @click="
        state.visible4 = true;
        state.errorMsg = translate('customErrorMsg');
      "
    ></nut-cell>
    <nut-short-password
      v-model="state.value4"
      v-model:visible="state.visible4"
      @focus="state.showKeyboard4 = true"
      :error-msg="state.errorMsg"
      @complete="methods.complete"
      @tips="methods.onTips"
    >
    </nut-short-password>
    <nut-number-keyboard
      v-model="state.value4"
      v-model:visible="state.showKeyboard4"
      @blur="state.showKeyboard4 = false"
    >
    </nut-number-keyboard>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { showToast } from '@/packages/nutui.vue';
const { createDemo, translate } = createComponent('short-password');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
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

    const state = reactive({
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
      showKeyboard1: false,
      showKeyboard2: false,
      showKeyboard3: false,
      showKeyboard4: false,
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      errorMsg: '',
      length: 6
    });
    const methods = {
      complete(value: string) {
        showToast.text(value);
      },
      onTips() {
        showToast.text(translate('onTips'));
      },
      close() {
        showToast.text(translate('close'));
      },
      cancel() {
        showToast.text(translate('cancelTips'));
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
