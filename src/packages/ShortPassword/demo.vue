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
    <nut-shortpassword
      v-model:value="state.value"
      v-model:is-visible="state.dialogShow"
      :show-button="true"
    >
    </nut-shortpassword>
    <nut-shortpassword
      v-model:value="state.value1"
      v-model:is-visible="state.dialogShow1"
      :show-button="false"
    >
    </nut-shortpassword>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, watch } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('shortpassword');
export default createDemo({
  setup() {
    const state = reactive({
      dialogShow: false,
      dialogShow1: false,
      value: '',
      value1: ''
    });
    // 方法
    function switchActionSheet(param) {
      state[`${param}`] = !state[`${param}`];
    }
    watch(
      () => state.value,
      val => {
        if (val.length == 6) {
          state.dialogShow = false;
          console.log(state.dialogShow);
        }
      }
    );
    return {
      state,
      switchActionSheet
    };
  }
});
</script>

<style lang="scss" scoped></style>
