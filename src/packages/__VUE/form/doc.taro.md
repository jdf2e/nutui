# Form 表单

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型。

### 安装

```js
import { createApp } from 'vue';
import { Form, FormItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Form);
app.use(FormItem);
```

### 基础用法

> demo: form basic dentry

### 动态表单

> demo: form dynamic dentry

### 表单校验

`4.1.0` 新增基于 Promise 的自定义错误提示功能：

`validator` 为函数，返回值类型为 `boolean | Promise`。若返回 `false` 或者触发了 `resolve(false)` 的 Promise ，则表示校验失败，会展示 `message` 设置的提示信息。若返回触发了 `reject(error)` 的 Promise，则会将 `error` 作为提示文案，优先级高于 `message`。

> demo: form validate dentry

### 表单类型

> demo: form type dentry

### 自定义 Label & Star 位置 v4.2.4

> demo: form star dentry

## API

### Form Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| model-value | 表单数据对象(使用表单校验时，_必填_) | object |  |
| rules | 统一配置每个 `FormItem` 的 `rules` | { prop: FormItemRule[] } | `{}` |
| disabled | 禁用表单下的所有数据录入组件 | boolean | `false` |
| label-position`v4.2.4` | 表单项 label 的位置 | `top` \| `left` \| `right` | `left` |
| star-position`v4.2.4` | 必填表单项 label 的红色星标位置 | `left` \| `right` | `left` |

### Form Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| validate | 任一表单项被校验失败后触发 | 被校验的表单项 `prop` 值，校验是否通过，错误消息（如果存在） |

### FormItem Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| required | 是否显示必填字段的标签旁边的红色星号 | boolean | `false` |
| prop | 表单域 `v-model` 字段， 在使用表单校验功能的情况下，该属性是必填的 | string | - |
| rules | 定义校验规则 | FormItemRule [] | [] |
| label-width | 表单项 `label` 宽度，默认单位为`px` | number \| string | - |
| label-align | 表单项 `label` 对齐方式，可选值为 `center` `right` | string | `left` |
| body-align | 右侧插槽对齐方式，可选值为 `center` `right` | string | `left` |
| error-message-align | 错误提示文案对齐方式，可选值为 `center` `right` | string | `left` |
| show-error-line | 是否在校验不通过时标红输入框 | boolean | `true` |
| show-error-message | 是否在校验不通过时在输入框下方展示错误提示 | boolean | `true` |
| label-position`v4.2.4` | 表单项 label 的位置，优先级高于 form 中的 label-position | `top` \| `left` \| `right` | `left` |
| star-position`v4.2.4` | 必填表单项 label 的红色星标位置，优先级高于 form 中的 star-position | `left` \| `right` | `left` |

### FormItemRule 数据结构

使用 `FormItem` 的 `rules` 属性可以定义校验规则，可选属性如下:

| 键名 | 说明 | 类型 |
| --- | --- | --- |
| required | 是否为必选字段 | boolean |
| message | 错误提示文案 | string |
| validator | 通过函数进行校验 | (value:string, rule?:FormItemRule ) => boolean \| Promise |
| regex | 通过正则表达式进行校验 | RegExp |

### FormItem Slots

| 名称 | 说明 |
| --- | --- |
| default | 自定义内容 |
| label | 自定义 `label` 区域 |

### Methods

通过 [ref](https://vuejs.org/guide/essentials/template-refs.html#template-refs) 可以获取到 `Form` 实例并调用实例方法

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| submit | 提交表单进行校验的方法 | - | - |
| reset | 清空校验结果 | - | - |
| validate | 用户主动触发校验，用于用户自定义场景时触发，例如 `blur`、`change` 事件 | 同 `FormItem prop` 值,不传值会校验全部 `Rule` | - |

### 类型定义 version

组件导出以下类型定义：

```js
import type {
  FormErrorMessage,
  FormLabelPosition,
  FormStarPosition,
  FormItemRule
  FormProps,
  FormInstance,
  FormItemProps,
  FormItemInstance
} from '@nutui/nutui-taro';
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-form-item-error-line-color | _var(--nut-required-color)_ |
| --nut-form-item-required-color | _var(--nut-required-color)_ |
| --nut-form-item-error-message-color | _var(--nut-required-color)_ |
| --nut-form-item-label-font-size | _14px_ |
| --nut-form-item-label-width | _90px_ |
| --nut-form-item-label-margin-right | _10px_ |
| --nut-form-item-label-text-align | _left_ |
| --nut-form-item-required-margin-right | _4px_ |
| --nut-form-item-body-font-size | _14px_ |
| --nut-form-item-body-slots-text-align | _left_ |
| --nut-form-item-body-input-text-align | _left_ |
| --nut-form-item-tip-font-size | _10px_ |
| --nut-form-item-tip-text-align | _left_ |
