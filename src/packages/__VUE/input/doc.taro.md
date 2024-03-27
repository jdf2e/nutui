# Input 输入框

### 介绍

用户可以在文本框里输入内容。

### 安装

```js
import { createApp } from 'vue'
import { Input } from '@nutui/nutui-taro'

const app = createApp()
app.use(Input)
```

### 基础用法

可以通过 `v-model` 双向绑定输入框的值，通过 `placeholder` 设置占位提示文字。

> demo: input basic dentry

### 自定义类型

> NutUI < 4.2.0 时，number 类型为小数，digit 类型为整数。
>
> NutUI >= 4.2.0 时，调整为与小程序原生 input 的类型字段保持一致（如下示例），同时支持调用原生整数键盘、带小数点键盘。

- `text`: 默认值，文本类型
- `password`: 密码类型
- `digit`: 数字类型，支持小数
- `number`: 整数类型

> demo: input type dentry

### 禁用和只读

- `readonly`: 只读状态
- `disabled`: 禁用状态

> demo: input status dentry

### 显示清除图标

开启 `clearable` 后，在输入过程中会展示清除图标，在失去焦点后将隐藏。

开启 `show-clear-icon` 后，失去焦点时仍会继续展示清除按钮。

> demo: input clear dentry

### 配合表单使用

结合 `nut-form` 与 `nut-form-item` 使用

> demo: input form dentry

### 格式化输入内容

通过 `formatter` 属性可以对输入的内容进行格式化，通过 `format-trigger` 属性可以指定执行格式化的时机。例如只允许输入非数字的字符：

> demo: input format dentry

### 显示字数统计

设置 `maxlength` 和 `show-word-limit` 属性后会在底部显示字数统计。

> demo: input count dentry

### 无边框

通过 `border` 属性可以设置输入框的边框。

> demo: input border dentry

### 对齐方式

> demo: input border dentry

### 事件演示

> demo: input event dentry

### 插槽演示

> demo: input slot dentry

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model | 输入值，双向绑定 | string \| number | - |
| type | 输入框类型，支持原生 `input` 标签的所有 `type` 属性，另外还支持 `number` `digit` | string | `text` |
| placeholder | 输入框为空时占位符 | string | - |
| input-align | 输入框内容对齐方式，可选值 `left`、`center`、`right` | string | `left` |
| border | 是否显示下边框 | boolean | `true` |
| disabled | 是否禁用 | boolean | `false` |
| readonly | 是否只读 | boolean | `false` |
| autofocus | 是否自动获得焦点，`iOS` 系统不支持该属性 | boolean | `false` |
| max-length | 限制最长输入字符 | string ｜ number | - |
| clearable | 展示清除 `Icon` | boolean | `false` |
| showClearIcon `4.0.2` | 是否在失去焦点后，继续展示清除按钮，在设置 `clearable` 时生效 | boolean | `false` |
| clear-size | 清除图标的 `font-size` 大小 | string | `14` |
| show-word-limit | 是否显示限制最长输入字符，需要设置 `max-length` 属性 | boolean | `false` |
| error | 是否标红 | boolean | `false` |
| formatter | 输入内容格式化函数 | `(val: string) => string` | - |
| format-trigger | 格式化函数触发的时机，可选值为 `onChange`、`onBlur` | string | `onChange` |
| confirm-type | 键盘右下角按钮的文字，仅在`type='text'`时生效,可选值 `send`：发送、`search`：搜索、`next`：下一个、`go`：前往、`done`：完成 | string | `done` |
| adjust-position | 键盘弹起时，是否自动上推页面 | boolean | `true` |
| always-system | 是否强制使用系统键盘和 `Web-view` 创建的 `input` 元素。为 `true` 时，`confirm-type`、`confirm-hold` 可能失效 | boolean | `false` |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| update:model-value | 输入框内容变化时触发 | `val` |
| focus | 输入框聚焦时触发 | `event` |
| blur | 输入框失焦时触发 | `event` |
| clear | 点击清除按钮时触发 | `event` |
| click | 点击组件时触发 | `event` |
| click-input | 点击输入区域时触发 | `event` |
| confirm`4.2.1` | 点击软键盘确认时触发 ｜ `event` |

### Slots

| 名称 | 说明 |
| --- | --- |
| clear | 自定义输入框尾部清除按钮 |
| left `4.0.1` | 自定义输入框左侧插槽内容 |
| right `4.0.1` | 自定义输入框右侧插槽内容 |

### 类型定义 version

组件导出以下类型定义：

```ts
import type {
  InputType,
  InputAlign,
  InputConfirmType,
  InputFormatTrigger,
  InputProps,
  InputInstance
} from '@nutui/nutui-taro'
```

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-input-border-bottom | _#eaf0fb_ |
| --nut-input-disabled-color | _#c8c9cc_ |
| --nut-input-required-color | _var(--nut-required-color)_ |
| --nut-input-font-size | _var(--nut-font-size-2)_ |
