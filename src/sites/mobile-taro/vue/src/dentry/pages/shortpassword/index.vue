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
      title="基础用法"
      is-link
      @click="
        state.visible = true;
        state.noButton = true;
        state.length = 6;
        state.errorMsg = '';
      "
    ></nut-cell>
    <nut-cell
      title="显示按钮组"
      is-link
      @click="
        state.visible = true;
        state.noButton = false;
        state.length = 6;
        state.errorMsg = '';
      "
    ></nut-cell>
    <nut-cell
      title="自定义密码长度4"
      is-link
      @click="
        state.visible = true;
        state.noButton = true;
        state.length = 4;
        state.errorMsg = '';
      "
    ></nut-cell>
    <nut-cell
      title="忘记密码提示语事件回调"
      is-link
      @click="
        state.visible = true;
        state.length = 6;
        state.errorMsg = '';
        state.noButton = true;
      "
    ></nut-cell>
    <nut-cell
      title="错误提示语"
      is-link
      @click="
        state.visible = true;
        state.length = 6;
        state.noButton = true;
        state.errorMsg = '请输入正确密码';
      "
    ></nut-cell>
    <nut-toast
      msg="忘记密码"
      v-model:visible="state.show"
      type="text"
      :cover="state.cover"
    />
  </div>
</template>

<script lang="ts">
import { reactive, getCurrentInstance } from 'vue';
export default {
  setup() {
    // let { proxy } = getCurrentInstance() as any;

    const state = reactive({
      visible: false,
      noButton: true,
      value: '',
      errorMsg: '',
      length: 6,
      show: false,
      cover: false
    });
    const methods = {
      onChange(val: string) {
        console.log(val);

        // val && proxy.$toast.text(val);
      },
      onOk(val: string) {
        // val && proxy.$toast.text(val);
        state.visible = false;
      },

      onComplete() {},
      onTips() {
        state.show = true;
        state.cover = false;
        // proxy.$toast.text('执行忘记密码逻辑');
      },
      close() {
        // proxy.$toast.text('点击icon关闭弹窗');
      },
      cancel() {
        // proxy.$toast.text('点击取消按钮关闭弹窗');
      }
    };

    return {
      state,
      methods
    };
  }
};
</script>
