<template>
  <nut-invoice :data="data" :form-value="formValue" @submit="submit"></nut-invoice>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';
import type { InvoiceDataItem } from '@nutui/nutui-taro';
const asyncValidator = (val: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(/^400(-?)[0-9]{7}$|^1\d{10}$|^0[0-9]{2,3}-[0-9]{7,8}$/.test(val));
    }, 1000);
  });
};

const data = ref<InvoiceDataItem[]>([
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

const submit = (valid: boolean, errors: any) => {
  if (valid) {
    console.log('success', formValue);
  } else {
    console.log('error submit!!', errors);
  }
};
</script>
