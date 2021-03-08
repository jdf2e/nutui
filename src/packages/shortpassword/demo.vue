<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-cell @click="switchActionSheet('dialogShow')">点击出现输出框</nut-cell>
    <nut-cell>您输入的密码是：{{ state.value }}</nut-cell>
    <h2>展示按钮</h2>
    <nut-cell @click="switchActionSheet('dialogShow1')"
      >点击出现输出框</nut-cell
    >
    <nut-cell>您输入的密码是：{{ state.value1 }}</nut-cell>
    <h2>自定义长度</h2>
    <nut-cell @click="switchActionSheet('dialogShow2')"
      >点击出现输出框</nut-cell
    >
    <nut-cell>您输入的密码是：{{ state.value2 }}</nut-cell>
    <h2>出现提示信息</h2>
    <nut-cell @click="switchActionSheet('dialogShow3')"
      >点击出现输出框</nut-cell
    >
    <nut-cell>您输入的密码是：{{ state.value3 }}</nut-cell>
    <nut-shortpassword
      v-model:value="state.value"
      v-model:is-visible="state.dialogShow"
    >
    </nut-shortpassword>
    <nut-shortpassword
      v-model:value="state.value1"
      v-model:is-visible="state.dialogShow1"
      :no-button="false"
      @sure-click="sureClick"
    >
    </nut-shortpassword>
    <nut-shortpassword
      v-model:value="state.value2"
      v-model:is-visible="state.dialogShow2"
      :length="4"
    >
    </nut-shortpassword>
    <nut-shortpassword
      v-model:value="state.value3"
      v-model:is-visible="state.dialogShow3"
      :error-msg="state.errorMsg"
      @complete="complete"
      link="http://m.jd.com"
    >
    </nut-shortpassword>
  </div>
</template>

<script lang="ts">
import { ref, reactive, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('shortpassword');
export default createDemo({
  setup() {
    const state = reactive({
      dialogShow: false,
      dialogShow1: false,
      dialogShow2: false,
      dialogShow3: false,
      value: '',
      value1: '',
      value2: '',
      value3: '',
      errorMsg: ''
    });
    // 方法
    function switchActionSheet(
      param: 'dialogShow' | 'dialogShow1' | 'dialogShow2' | 'dialogShow3'
    ) {
      state[param] = !state[param];
    }
    function sureClick(val: string) {
      console.log(val);
      state.dialogShow1 = false;
    }
    function complete() {
      state.errorMsg = '请输入正确密码';
    }
    return {
      state,
      switchActionSheet,
      sureClick,
      complete
    };
  }
});
</script>

<style lang="scss" scoped></style>
