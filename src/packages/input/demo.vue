<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-input
      v-model="state.val1"
      @change="change"
      @focus="focus"
      @blur="blur"
      label="文本(异步)"
    />
    <nut-input
      placeholder="请输入文本"
      @change="change"
      v-model="state.val0"
      :require-show="true"
      label="文本"
      @clear="clear"
    />
    <h2>禁用输入框</h2>
    <nut-input
      v-model="state.val2"
      @change="change"
      :disabled="true"
      label="文本"
    />
    <nut-input
      v-model="state.val3"
      @change="change"
      :readonly="true"
      label="文本"
    />
    <h2>限制输入长度</h2>
    <nut-input
      v-model="state.val4"
      @change="change"
      max-length="7"
      label="限制7"
    />
    <h2>自定义类型</h2>
    <nut-input
      v-model="state.val0"
      @change="change"
      type="password"
      label="密码"
    />
    <nut-input
      v-model="state.val5"
      @change="change"
      type="number"
      label="整数"
    />
    <nut-input
      v-model="state.val6"
      @change="change"
      type="digit"
      placeholder="支持小数点的输入"
      label="数字"
    />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('input');
export default createDemo({
  setup() {
    const state = reactive({
      val0: '',
      val1: '初始数据',
      val2: '禁止修改',
      val3: 'readonly 只读',
      val4: '',
      val5: '',
      val6: '',
      val7: '',
      val8: '文案'
    });
    setTimeout(function() {
      state.val1 = '异步数据';
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

<style lang="scss" scoped></style>
