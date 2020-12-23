<template>
  <div class="demo">
    <h2>基本用法</h2>
    <div>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click="textToast('我只传了文案一个参数')"
      >
        <label>Text 文字提示</label>
      </nut-cell>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click="successToast('我只传了文案一个参数')"
      >
        <label>Success 成功提示</label>
      </nut-cell>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click="errorToast('我只传了文案一个参数')"
      >
        <label>Error 失败提示</label>
      </nut-cell>
      <nut-cell
        :showIcon="true"
        :isLink="true"
        @click="warningToast('我只传了文案一个参数')"
      >
        <label>Warning 警告提示提示</label>
      </nut-cell>
    </div>
  </div>
</template>

<script>
import { createComponent } from '@/utils/create';
import Toast from './_toast';
const { createDemo } = createComponent('toast');

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
    return {
      textToast,
      successToast,
      errorToast,
      warningToast
    };
  }
});
</script>

<style lang="scss" scoped></style>
