<template>
  <div class="demo full">
    <!-- <h2>校验</h2>
    <nut-form>
    <nut-form-item label="姓名" prop="name" required :rules="[{ required: true, message: '请填写姓名' }]">
      <nut-input v-model="state.val0" @change="change" @focus="focus" @blur="blur" label="文本(异步)" />
    </nut-form-item>
    </nut-form> -->
    <h2>{{ translate('basic') }}</h2>
    <nut-input v-model="state.val1" :label="translate('text')" :placeholder="translate('text')" />

    <h2>{{ translate('title1') }}</h2>
    <nut-input v-model="state.text" :label="translate('text')" :placeholder="translate('text')" />
    <nut-input
      v-model="state.password"
      :label="translate('password')"
      :placeholder="translate('password')"
      type="password"
    />
    <nut-input :label="translate('number')" :placeholder="translate('number')" v-model="state.number" type="number" />
    <nut-input :label="translate('digit')" :placeholder="translate('digit')" v-model="state.digit" type="digit" />
    <nut-input :label="translate('tel')" :placeholder="translate('tel')" v-model="state.tel" type="tel" />

    <h2>{{ translate('title2') }}</h2>
    <nut-input :label="translate('text')" :placeholder="translate('readonly')" v-model="state.readonly" readonly />
    <nut-input :label="translate('text')" :placeholder="translate('disabled')" v-model="state.disabled" disabled />

    <h2>{{ translate('title3') }}</h2>
    <nut-input
      v-model="state.showIcon"
      :label="translate('text')"
      :placeholder="translate('icon')"
      left-icon="dongdong"
      right-icon="ask2"
    />
    <nut-input
      v-model="state.clear"
      :label="translate('text')"
      :placeholder="translate('clear')"
      clearable
      clearSize="14"
    />

    <h2>{{ translate('title4') }}</h2>
    <nut-input v-model="state.required" :label="translate('text')" :placeholder="translate('required')" required />
    <nut-input v-model="state.error1" :label="translate('text')" :placeholder="translate('error')" error />
    <nut-input
      v-model="state.error2"
      :label="translate('text')"
      :placeholder="translate('errorBottom')"
      :error-message="translate('errorBottom')"
    />

    <h2>{{ translate('title5') }}</h2>
    <nut-input
      v-model="state.buttonVal"
      :label="translate('code')"
      :placeholder="translate('codeplaceholder')"
      clearable
      center
    >
      <template #button>
        <nut-button size="small" type="primary">
          {{ translate('sendCode') }}
        </nut-button>
      </template>
    </nut-input>

    <h2>{{ translate('title6') }}</h2>
    <nut-input
      v-model="state.format1"
      :label="translate('text')"
      :placeholder="translate('placeholder1')"
      :formatter="formatter"
    />
    <nut-input
      v-model="state.format2"
      :label="translate('text')"
      :placeholder="translate('placeholder2')"
      :formatter="formatter"
      format-trigger="onBlur"
    />

    <h2>{{ translate('title7') }}</h2>
    <nut-input
      v-model="state.textarea"
      :label="translate('message')"
      :placeholder="translate('message')"
      type="textarea"
      show-word-limit
      rows="2"
      max-length="50"
    />

    <h2>{{ translate('title8') }}</h2>
    <nut-input
      v-model="state.align1"
      :label="translate('text')"
      :placeholder="translate('placeholder4')"
      label-align="right"
    />
    <nut-input
      v-model="state.align2"
      :label="translate('text')"
      :placeholder="translate('placeholder5')"
      input-align="right"
    />

    <h2>{{ translate('title9') }}</h2>
    <nut-input
      v-model="state.noBorder1"
      :border="false"
      :label="translate('noBorder')"
      :placeholder="translate('noBorder')"
    />
    <nut-input
      v-model="state.noBorder2"
      :border="false"
      :label="translate('noBorder')"
      :placeholder="translate('noBorder')"
    />

    <h2>{{ translate('title10') }}</h2>
    <nut-input
      v-model="state.event"
      :label="translate('click')"
      :placeholder="translate('click')"
      left-icon="dongdong"
      right-icon="ask2"
      clearable
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
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('input');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title1: '自定义类型',
      title2: '禁用和只读',
      title3: '显示图标',
      title4: '错误提示',
      title5: '插入按钮',
      title6: '格式化输入内容',
      title7: '显示字数统计',
      title8: '对齐方式',
      title9: '无边框',
      title10: '点击事件',
      text: '文本',
      password: '密码',
      number: '数字',
      digit: '整数',
      tel: '手机号',
      readonly: '只读',
      disabled: '禁用',
      icon: '显示图标',
      clear: '显示清除图标',
      required: '必填项',
      error: '输入内容标红',
      errorBottom: '底部错误提示文案',
      code: '短信验证码',
      codeplaceholder: '请输入短信验证码',
      sendCode: '发送验证码',
      message: '留言',
      noBorder: '无边框',
      click: '点击',
      placeholder1: '在输入时执行格式化',
      placeholder2: '在失焦时执行格式化',
      placeholder3: '请输入留言',
      placeholder4: '文本内容对齐',
      placeholder5: '输入框内容对齐'
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'Custom Type',
      title2: 'Readonly And Disabled',
      title3: 'Show Icon',
      title4: 'Error Info',
      title5: 'Insert Button',
      title6: 'Format Value',
      title7: 'Show Word Limit',
      title8: 'Input Align',
      title9: 'No Border',
      title10: 'Click Event',
      text: 'Text',
      password: 'Password',
      number: 'Number',
      digit: 'Digit',
      tel: 'Tel',
      readonly: 'Readonly',
      disabled: 'Disabled',
      icon: 'Show Icon',
      clear: 'Show Clear Icon',
      required: 'Required',
      error: 'Error',
      errorBottom: 'Error Message',
      code: 'Code',
      codeplaceholder: 'Please enter code',
      sendCode: 'Send',
      message: 'Message',
      noBorder: 'No Border',
      click: 'Click',
      placeholder1: 'Format On Change',
      placeholder2: 'Format On Blur',
      placeholder3: 'Message',
      placeholder4: 'Label Align',
      placeholder5: 'Input Align'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
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
      noBorder1: '',
      noBorder2: '',
      event: ''
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
      formatter,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
