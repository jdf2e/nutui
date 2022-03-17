<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-input v-model="val0" @change="change" @focus="focus" @blur="blur" label="文本(异步)" />
    <nut-input
      placeholder="请输入文本"
      @change="change"
      v-model="val1"
      :require-show="true"
      label="文本"
      @clear="clear"
    />
    <nut-input placeholder="请输入文本" @change="change" v-model="val2" :require-show="true" @clear="clear">
      <template #label>
        <nut-icon name="dongdong"></nut-icon>
        (自定义)
      </template>
    </nut-input>
    <h2>禁用输入框</h2>
    <nut-input v-model="val3" @change="change" :disabled="true" label="文本" />
    <nut-input v-model="val4" @change="change" :readonly="true" label="文本" />
    <h2>限制输入长度</h2>
    <nut-input v-model="val5" @change="change" max-length="7" label="限制7" />
    <h2>自定义类型</h2>
    <nut-input v-model="val6" @change="change" type="password" label="密码" />
    <nut-input v-model="val7" @change="change" type="number" label="整数" />
    <nut-input v-model="val8" @change="change" type="digit" placeholder="支持小数点的输入" label="数字" />
    <h2>无边框</h2>
    <nut-input v-model="val9" @change="change" :hasBorder="false" label="无边框" />
    <nut-input v-model="val10" @change="change" :hasBorder="false" label="无边框" />
  </div>
</template>

<script lang="ts">
import { h, reactive, toRefs } from 'vue';
import { createComponent } from '../../utils/create';

const { createDemo } = createComponent('input');
export default createDemo({
  setup() {
    const state = reactive({
      val0: '初始数据',
      val1: '',
      val2: '',
      val3: '禁止修改',
      val4: 'readonly 只读',
      val5: '',
      val6: '',
      val7: '',
      val8: '',
      val9: '',
      val10: ''
    });
    setTimeout(function () {
      state.val0 = '异步数据';
    }, 2000);
    const change = (value: string | number, event: Event) => {
      console.log('change: ', value, event);
    };
    const focus = (value: string | number, event: Event) => {
      console.log('focus:', value, event);
    };
    const blur = (value: string | number, event: Event) => {
      console.log('blur:', value, event);
    };
    const clear = (value: string | number) => {
      console.log('clear:', value);
    };
    return {
      ...toRefs(state),
      change,
      blur,
      clear,
      focus
    };
  }
});
</script>

<style lang="scss" scoped></style>
