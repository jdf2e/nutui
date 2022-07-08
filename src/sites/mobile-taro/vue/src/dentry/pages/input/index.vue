<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-input placeholder="请输入文本" v-model="state.val1" label="文本" />

    <h2>自定义类型</h2>
    <nut-input label="文本" v-model="state.text" />
    <nut-input label="密码" v-model="state.password" type="password" />
    <nut-input label="数字" v-model="state.number" type="number" placeholder="支持小数点的输入" />
    <nut-input label="整数" v-model="state.digit" type="digit" />
    <nut-input label="手机号" v-model="state.tel" type="tel" />

    <h2>禁用和只读</h2>
    <nut-form>
      <nut-form-item>
        <nut-input v-model="state.readonly" readonly label="文本" placeholder="输入框只读" />
        <!-- <nut-input v-model="state.disabled" disabled label="文本" placeholder="输入框已禁用" /> -->
      </nut-form-item>
    </nut-form>

    <h2>显示图标</h2>
    <nut-input v-model="state.showIcon" label="文本" left-icon="dongdong" right-icon="ask2" placeholder="显示图标" />
    <nut-input v-model="state.clear" label="文本" clearable clearSize="14" placeholder="显示清除图标" />

    <h2>错误提示</h2>
    <nut-input v-model="state.required" label="文本" required placeholder="必填项" />
    <nut-input v-model="state.error1" label="文本" error placeholder="输入内容标红" />
    <nut-input v-model="state.error2" label="文本" error-message="底部错误提示文案" placeholder="底部错误提示文案" />

    <h2>插入按钮</h2>
    <nut-input v-model="state.buttonVal" clearable center label="短信验证码" placeholder="请输入短信验证码">
      <template #button>
        <nut-button size="small" type="primary"> 发送验证码 </nut-button>
      </template>
    </nut-input>

    <h2>格式化输入内容</h2>
    <nut-input v-model="state.format1" label="文本" :formatter="formatter" placeholder="在输入时执行格式化" />
    <nut-input
      v-model="state.format2"
      label="文本"
      :formatter="formatter"
      format-trigger="onBlur"
      placeholder="在失焦时执行格式化"
    />

    <h2>显示字数统计</h2>
    <nut-input
      v-model="state.textarea"
      label="留言"
      type="textarea"
      show-word-limit
      rows="2"
      maxLength="50"
      placeholder="请输入留言"
      :adjust-position="state.adjustPosition"
    />

    <h2>对齐方式</h2>
    <nut-input v-model="state.align1" label="文本" label-align="right" placeholder="文本内容对齐" />
    <nut-input v-model="state.align2" label="文本" input-align="right" placeholder="输入框内容对齐" />

    <h2>无边框</h2>
    <nut-input v-model="state.disabled" :border="false" label="无边框" />
    <nut-input v-model="state.showIcon" :border="false" label="无边框" />

    <h2>点击事件</h2>
    <nut-input
      v-model="state.event"
      label="event"
      left-icon="dongdong"
      right-icon="ask2"
      clearable
      placeholder="显示图标"
      :adjust-position="state.adjustPosition"
      @update:model-value="change"
      @focus="focus"
      @blur="blur"
      @clear="clear"
      @click="click"
      @click-input="clickInput"
      @click-left-icon="clickLeftIcon"
      @click-right-icon="clickRightIcon"
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
    const clickLeftIcon = (value: string | number) => {
      console.log('clickLeftIcon:', value);
    };
    const clickRightIcon = (value: string | number) => {
      console.log('clickRightIcon:', value);
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
      clickLeftIcon,
      clickRightIcon,
      formatter
    };
  }
};
</script>

<style lang="scss" scoped></style>
