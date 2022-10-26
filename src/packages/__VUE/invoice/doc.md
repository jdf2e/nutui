# Invoice 发票

### 介绍

展示申请发票页面。

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Invoice,Form,FormItem,Button } from '@nutui/nutui';
//taro
import { Invoice,Form,FormItem,Button } from '@nutui/nutui-taro';

const app = createApp();
app.use(Invoice);
app.use(Form);
app.use(FormItem);
app.use(Button);

```


### 基础用法
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
import { ref,reactive } from 'vue';
export default {
  setup(){
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

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| data | 发票数据 | array | -
| form-value | 表单数据对象(使用表单校验时，_必填_) | object | -
| submit | 是否显示提交按钮 | boolean | true

### Data 数据结构


可选属性如下:

| 键名      | 说明                   | 类型                                    |
|-----------|------------------------|-----------------------------------------|
| type  | 类型，可选值有 `input`、`radio` | string                                 |
| label  | 表单项 label         | string                                 |
| placeholder   | 输入框 placeholder           | string                                  |
| radio-label   | 单选 label           | string                                  |
| form-item-prop | 表单域 v-model 字段， 在使用表单校验功能的情况下，该属性是必填的 | string | -
| rules | 校验规则，[可参考 FormItem Rule 数据结构](#/form) | array | []
| required | 是否显示必填字段的标签旁边的红色星号 | Boolean | `false`

### Events

| 方法名            | 说明                                                               | 参数                | 返回值  |
|-------------------|--------------------------------------------------------------------|---------------------|---------|
| on-submit            | 提交表单的方法                                             | -                   | Promise |