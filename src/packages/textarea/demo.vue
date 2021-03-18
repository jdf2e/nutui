<template>
  <div class="demo-nopading">
    <h2>基础用法</h2>
    <nut-textarea
      v-model:value="state.val0"
      @change="change"
      rows="5"
      placeholder="高度可拉伸"
      :autosize="true"
      label="留言："
    />
    <h2>显示字数统计</h2>
    <nut-textarea
      v-model:value="state.val1"
      @change="change"
      rows="5"
      :limitShow="true"
      maxLength="20"
      type="textarea"
      placeholder="设置输入五行"
      label="留言："
    />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('textarea');
export default createDemo({
  setup() {
    const state = reactive({
      val0: '',
      val1: '初始数据'
    });
    setTimeout(function() {
      state.val1 = '异步测试数据，2秒';
    }, 2000);
    const change = (num: string | number) => {
      console.log('change: ', num);
    };
    const focus = (num: string | number) => {
      console.log('focus:', num);
    };
    const blur = (num: string | number) => {
      console.log('blur:', num);
    };
    const clear = (num: string | number) => {
      console.log('clear:', num);
    };

    return {
      state,
      change,
      blur,
      clear,
      focus
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-nopading {
  height: 100%;
  background: #f7f8fa;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  padding-top: 57px;
  h2 {
    padding-left: 25px;
    margin-top: 25px;
    margin-bottom: 10px;
    color: #909ca4;
  }
}
</style>
