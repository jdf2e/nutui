<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-input v-model="state.val1" :placeholder="translate('textPlaceholder')" :border="false" />

    <h2>{{ translate('title1') }}</h2>
    <nut-input v-model="state.text" :placeholder="translate('textPlaceholder')" />
    <nut-input v-model="state.password" :placeholder="translate('passwordPlaceholder')" type="password" />
    <nut-input :placeholder="translate('numberPlaceholder')" v-model="state.number" type="number" />
    <nut-input :placeholder="translate('digitPlaceholder')" v-model="state.digit" type="digit" />
    <h2>{{ translate('title2') }}</h2>
    <nut-input :placeholder="translate('readonly')" v-model="state.readonly" readonly />
    <nut-input :placeholder="translate('disabled')" v-model="state.disabled" disabled />
    <h2>{{ translate('title3') }}</h2>
    <nut-input v-model="state.clear" :placeholder="translate('clear')" clearable clearSize="14" />
    <nut-input
      v-model="state.clear2"
      :placeholder="translate('clear2')"
      clearable
      clearSize="14"
      show-word-limit
      max-length="50"
    >
      <template #clear>
        <Close width="12" height="12" @click="clearValue"></Close>
      </template>
    </nut-input>
    <h2>{{ translate('title4') }}</h2>
    <nut-form :model-value="state">
      <nut-form-item :label="translate('text')" label-align="center">
        <nut-input v-model="state.val2" :placeholder="translate('textPlaceholder')" :border="false" />
      </nut-form-item>
    </nut-form>
    <h2>{{ translate('title6') }}</h2>
    <nut-input v-model="state.format1" :placeholder="translate('placeholder1')" :formatter="formatter" />
    <nut-input
      v-model="state.format2"
      :placeholder="translate('placeholder2')"
      :formatter="formatter"
      format-trigger="onBlur"
    />
    <h2>{{ translate('title7') }}</h2>
    <nut-input
      v-model="state.textarea"
      :placeholder="translate('message')"
      type="text"
      show-word-limit
      max-length="50"
    />

    <h2>{{ translate('title8') }}</h2>
    <nut-input v-model="state.align1" :placeholder="translate('placeholder4')" label-align="right" />
    <nut-input v-model="state.align2" :placeholder="translate('placeholder5')" input-align="right" />

    <h2>{{ translate('title9') }}</h2>
    <nut-input v-model="state.noBorder1" :border="false" :placeholder="translate('noBorder')" />
    <nut-input v-model="state.noBorder2" :border="false" :placeholder="translate('noBorder')" />

    <h2>{{ translate('title10') }}</h2>
    <nut-input
      v-model="state.event"
      :placeholder="translate('event')"
      clearable
      @clear="clear"
      @click-input="clickInput"
    />
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue';
import { Close } from '@nutui/icons-vue';
import { showToast } from '@/packages/nutui.vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('input');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基础用法',
      title1: '自定义类型',
      title2: '禁用和只读',
      title3: '显示清除图标',
      title4: '配合表单使用',
      title5: '插入按钮',
      title6: '格式化输入内容',
      title7: '显示字数统计',
      title8: '对齐方式',
      title9: '无边框',
      title10: '事件演示',
      text: '文本',
      textPlaceholder: '请输入文本',
      passwordPlaceholder: '请输入密码',
      numberPlaceholder: '请输入数字',
      digitPlaceholder: '请输入整数',
      telPlaceholder: '请输入手机号',
      readonly: '输入框只读',
      disabled: '输入框已禁用',
      icon: '显示图标',
      clear: '显示清除图标',
      clear2: '自定义清除图标',
      required: '必填项',
      error: '输入内容标红',
      code: '短信验证码',
      codePlaceholder: '请输入短信验证码',
      sendCode: '发送验证码',
      message: '请输入留言',
      noBorder: '输入框无边框',
      event: '事件演示',
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
      title3: 'Show Clear Icon',
      title4: 'Use Form',
      title5: 'Insert Button',
      title6: 'Format Value',
      title7: 'Show Word Limit',
      title8: 'Input Align',
      title9: 'No Border',
      title10: 'Event Demonstration',
      text: 'Text',
      textPlaceholder: 'Text',
      passwordPlaceholder: 'Password',
      numberPlaceholder: 'Number',
      digitPlaceholder: 'Digit',
      telPlaceholder: 'Tel',
      readonly: 'Readonly',
      disabled: 'Disabled',
      icon: 'Show Icon',
      clear: 'Show Clear Icon',
      clear2: 'Custom Clear Icon',
      required: 'Required',
      error: 'Error',
      code: 'Code',
      codePlaceholder: 'Please enter code',
      sendCode: 'Send',
      message: 'Message',
      noBorder: 'No Border',
      event: 'Event',
      placeholder1: 'Format On Change',
      placeholder2: 'Format On Blur',
      placeholder3: 'Message',
      placeholder4: 'Label Align',
      placeholder5: 'Input Align'
    }
  });
export default createDemo({
  components: {
    Close
  },
  setup() {
    initTranslate();
    const state = reactive({
      val1: '',
      val2: '',
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
      clear: '',
      clear2: '',
      event: ''
    });
    setTimeout(function () {
      // state.val1 = '异步数据';
    }, 2000);
    const clear = (event: Event) => {
      showToast.text('clear');
      console.log('clear:', event);
    };
    const clickInput = (event: Event) => {
      showToast.text('clickInput');
      console.log('clickInput:', event);
    };
    const clearValue = () => {
      state.clear2 = '';
    };
    const formatter = (value: string) => value.replace(/\d/g, '');
    return {
      state,
      clear,
      clickInput,
      formatter,
      translate,
      clearValue
    };
  }
});
</script>

<style lang="scss" scoped></style>
