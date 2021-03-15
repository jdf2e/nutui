<template>
  <div class="demo">
    <nut-shortpassword
      v-model:value="state.value"
      v-model:visible="state.visible"
      :no-button="state.noButton"
      :length="state.length"
      :error-msg="state.errorMsg"
      @on-change="methods.onChange"
      @on-complete="methods.onComplete"
      @on-ok="methods.onOk"
      @on-tips="methods.onTips"
    >
    </nut-shortpassword>
    <nut-cell title="基础用法" is-link @click="state.visible = true"></nut-cell>
    <nut-cell
      title="显示按钮组"
      is-link
      @click="
        state.visible = true;
        state.noButton = false;
      "
    ></nut-cell>
    <nut-cell
      title="自定义密码长度4"
      is-link
      @click="
        state.visible = true;
        state.noButton = false;
        state.length = 4;
      "
    ></nut-cell>
    <nut-cell
      title="忘记密码提示语事件回调"
      is-link
      @click="state.visible = true"
    ></nut-cell>
    <nut-cell
      title="错误提示语"
      is-link
      @click="
        state.visible = true;
        state.errorMsg = '请输入正确密码';
      "
    ></nut-cell>
  </div>
</template>

<script lang="ts">
import { reactive, getCurrentInstance } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('shortpassword');
export default createDemo({
  setup() {
    let { ctx } = getCurrentInstance();

    const state = reactive({
      visible: false,
      noButton: true,
      value: '',
      errorMsg: '',
      length: 6
    });
    const methods = {
      onChange(val: string) {
        val && ctx.$toast.text(val);
      },
      onOk(val: string) {
        val && ctx.$toast.text(val);
        state.visible = false;
      },
      onComplete() {},
      onTips() {
        ctx.$toast.text('执行忘记密码逻辑');
      }
    };

    return {
      state,
      methods
    };
  }
});
</script>

<style lang="scss" scoped></style>
