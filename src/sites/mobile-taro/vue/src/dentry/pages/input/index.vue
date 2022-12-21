<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-input placeholder="文本" v-model="state.val1" />

    <h2>自定义类型</h2>
    <nut-input v-model="state.text" placeholder="文本" />
    <nut-input v-model="state.password" type="password" placeholder="密码" />
    <nut-input v-model="state.number" type="number" placeholder="数字" />
    <nut-input v-model="state.digit" type="digit" placeholder="整数" />

    <h2>禁用和只读</h2>
    <nut-input v-model="state.readonly" readonly placeholder="只读" />
    <nut-input v-model="state.disabled" disabled placeholder="禁用" />

    <h2>显示清除图标</h2>
    <nut-input v-model="state.clear" clearable clearSize="14" placeholder="显示清除图标" />

    <h2>配合表单使用</h2>
    <nut-form :model-value="state">
      <nut-form-item label-align="center">
        <nut-input v-model="state.val1" placeholder="请输入文本" :border="false" />
      </nut-form-item>
    </nut-form>

    <h2>格式化输入内容</h2>
    <nut-input v-model="state.format1" :formatter="formatter" placeholder="在输入时执行格式化" />
    <nut-input
      v-model="state.format2"
      :formatter="formatter"
      format-trigger="onBlur"
      placeholder="在失焦时执行格式化"
    />

    <h2>显示字数统计</h2>
    <nut-input
      v-model="state.textarea"
      type="textarea"
      show-word-limit
      rows="2"
      maxLength="50"
      placeholder="留言"
      :adjust-position="state.adjustPosition"
    />

    <h2>无边框</h2>
    <nut-input v-model="state.disabled" :border="false" placeholder="无边框" />
    <nut-input v-model="state.showIcon" :border="false" placeholder="无边框" />

    <h2>点击事件</h2>
    <nut-input
      v-model="state.event"
      placeholder="点击"
      left-icon="dongdong"
      right-icon="ask2"
      clearable
      :adjust-position="state.adjustPosition"
      @update:model-value="change"
      @focus="focus"
      @blur="blur"
      @clear="clear"
      @click="click"
      @click-input="clickInput"
    />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';

export default {
  setup() {
    const state = reactive({
      val1: '',
      text: '',
      password: '',
      number: '',
      digit: '',
      tel: '',
      readonly: '',
      disabled: '',
      showIcon: '',
      required: '',
      error1: '',
      error2: '',
      buttonVal: '',
      format1: '',
      format2: '',
      textarea: '',
      align1: '',
      align2: '',
      event: '',
      clear: '',
      adjustPosition: false
    });
    setTimeout(function () {
      // state.val1 = '异步数据';
    }, 2000);
    const change = (value: string | number) => {
      console.log('change: ', value);
    };
    const focus = (value: string | number, event: Event) => {
      console.log('focus:', value, event);
    };
    const blur = (value: string | number, event: Event) => {
      console.log('blur:', value, event);
    };
    const clear = (value: string | number, event: Event) => {
      console.log('clear:', value, event);
    };
    const click = (value: string | number) => {
      console.log('click:', value);
    };
    const clickInput = (value: string | number) => {
      console.log('clickInput:', value);
    };
    const formatter = (value: string) => value.replace(/\d/g, '');

    return {
      state,
      change,
      blur,
      clear,
      focus,
      click,
      clickInput,
      formatter
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  .nut-placeholder {
    color: #ccc;
  }
}
</style>
