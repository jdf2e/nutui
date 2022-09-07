<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-invoice :data="data" :formValue="formValue" @onSubmit="submit"></nut-invoice>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('invoice');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Toast } from '@/packages/nutui.vue';

const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法'
    },
    'en-US': {
      basic: 'Basic Usage'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const formValue = reactive({
      type: '企业',
      name: '',
      num: '',
      adress: '',
      tel: '',
      address: '',
      bank: '',
      account: ''
    });

    // Promise 异步校验
    const asyncValidator = (val: string) => {
      return new Promise((resolve) => {
        Toast.loading('模拟异步验证中...');
        setTimeout(() => {
          Toast.hide();
          resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
        }, 1000);
      });
    };

    let data: any = ref([
      {
        type: 'radio',
        label: '发票类型',
        radioLabel: [
          {
            label: '企业'
          },
          {
            label: '个人或事业单位'
          }
        ],
        formItemProp: 'type',
        required: true
      },
      {
        label: '发票抬头',
        placeholder: '请输入发票抬头',
        formItemProp: 'name',
        rules: [{ required: true, message: '请输入发票抬头' }],
        required: true
      },
      {
        label: '纳税人识别号',
        placeholder: '请输入纳税人识别号',
        formItemProp: 'num',
        rules: [{ message: '请输入纳税人识别号' }]
      },
      {
        label: '注册地址',
        placeholder: '请输入注册地址',
        formItemProp: 'adress',
        rules: [{ required: true, message: '请输入地址' }],
        required: true
      },
      {
        label: '注册电话',
        placeholder: '请输入注册电话',
        formItemProp: 'tel',
        rules: [
          { required: true, message: '请输入联系电话' },
          { validator: asyncValidator, message: '电话格式不正确' }
        ],
        required: true
      },
      {
        label: '开户行',
        placeholder: '请输入开户行',
        formItemProp: 'bank'
      },
      {
        label: '银行账户',
        placeholder: '请输入银行账户',
        formItemProp: 'account'
      }
    ]);

    const submit = (valid: boolean, errors: []) => {
      if (valid) {
        console.log('success', formValue);
      } else {
        console.log('error submit!!', errors);
      }
    };

    return {
      translate,
      data,
      formValue,
      submit,
      asyncValidator
    };
  }
});
</script>

<style lang="scss" scoped>
.nut-button {
  margin-right: 10px;
}
</style>
