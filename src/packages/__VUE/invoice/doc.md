# Invoice 发票

### 介绍

展示申请发票页面。

### 安装

```js
import { createApp } from 'vue';
import { Invoice } from '@nutui/nutui';

const app = createApp();
app.use(Invoice);
```

### 基础用法

> demo: invoice basic

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| data | 发票数据 | Array | - |
| form-value | 表单数据对象(使用表单校验时，_必填_) | object | - |
| submit | 是否显示提交按钮 | boolean | `true` |

### Data 数据结构

可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| type | 类型，可选值有 `input`、`radio` | string |
| label | 表单项 `label` | string |
| placeholder | 输入框 `placeholder` | string |
| radio-label | 单选 `label` | string |
| form-item-prop | 表单域 `v-model` 字段， 在使用表单校验功能的情况下，该属性是必填的 | string |
| rules | 校验规则，[可参考 FormItem Rule 数据结构](#/zh-CN/form) | Array |
| required | 是否显示必填字段的标签旁边的红色星号 | boolean |

### Events

| 事件名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit`v4.1.5` | 提交表单的方法 | - | Promise |
| on-submit | 提交表单的方法 | - | Promise |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-invoice-padding | _ 10px 10px 20px_ |
