# Invoice

### Intro


Display the application invoice page.

### Install

``` javascript
import { createApp } from 'vue';
import { Invoice } from '@nutui/nutui';

const app = createApp();
app.use(Invoice);
```


### Basic Usage
:::demo
```html
<template>
  <nut-invoice 
    :data="data" 
    :formValue="formValue" 
    @onSubmit="submit"
  >
  </nut-invoice>
</template>
<script lang="ts">
import { ref, reactive } from 'vue';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
  setup(){
    // Promise 异步校验
    const asyncValidator = (val: string) => {
      return new Promise((resolve) => {
        showToast.loading('模拟异步验证中...');
        setTimeout(() => {
          showToast.hide();
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
        rules: [{ message: '请输入纳税人识别号' }],
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
}
</script>
```
:::
## API
### Props

| Attribute | Description | Type | Default
|----- | ----- | ----- | -----
| data | Invoice data | Array | `[]`
| formValue | Form data object (required when using form verification) | object | -
| submit | Whether to show the submit button | boolean | `true`

### Data Structure of Data


The optional attributes are as follows:

| Attribute | Description | Type 
|----- | ----- | ----- 
| type  | Type, eg `input`、`radio` | string                                 |
| label  | Label         | string                                 |
| placeholder   | Input placeholder           | string                                  |
| radio-label   | Radio label           | string                                  |
| form-item-prop | The v-model field of the form field is required | string |
| rules | Check rules，[Refer to FormItem Rule data structure](#/en-US/form) | Array |
| required | Is it a required field | boolean |

### Events

| Event   | Description      | Arguments    |
|--------|----------------|-------------|
| on-submit| Method of submitting form for verification  | Promise  |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-invoice-padding       | _ 10px 10px 20px_        |
