# NumberKeyboard 数字键盘

### 介绍

虚拟数字键盘，用于输入支付密码的场景。

### 安装

```js
import { createApp } from 'vue';
import { NumberKeyboard } from '@nutui/nutui-taro';

const app = createApp();
app.use(NumberKeyboard);
```

### 默认键盘

> demo: numberkeyboard basic dentry

### 带右侧栏键盘

> demo: numberkeyboard right dentry

### 随机数键盘

> demo: numberkeyboard random dentry

### 带标题栏键盘

> demo: numberkeyboard title dentry

### 身份证键盘

> demo: numberkeyboard idcard dentry

### 双向绑定

> demo: numberkeyboard value dentry

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| v-model:visible | 是否显示键盘 | boolean | `false` |
| v-model | 当前输入值 | string | - |
| title | 键盘标题 | string | - |
| type | 键盘模式 | string | `default`：默认样式<br>`rightColumn`：带右侧栏 |
| random-keys | 随机数 | boolean | `false` |
| custom-key | 自定义键盘额外的键 | string [] | `数组形式最多支持添加2个,超出默认取前2项` |
| overlay | 是否显示遮罩 | boolean | false |
| maxlength | 输入值最大长度，结合 v-model 使用 | number \| string | `6` |
| confirm-text | 自定义完成按钮文字，如"支付"，"下一步"，"提交"等 | string | `完成` |
| pop-class | 自定义弹框类名 | string | - |

### Events

| 事件名 | 说明 | 回调参数 |
| --- | --- | --- |
| input | 点击按键时触发 | 按键内容 |
| delete | 点击删除键时触发 | - |
| close | 点击关闭按钮或非键盘区域时触发 | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称 | 默认值 |
| --- | --- |
| --nut-numberkeyboard-width | _100%_ |
| --nut-numberkeyboard-padding | _0_ |
| --nut-numberkeyboard-background-color | _#f2f3f5_ |
| --nut-numberkeyboard-header-height | _34px_ |
| --nut-numberkeyboard-header-padding | _6px 0 0 0_ |
| --nut-numberkeyboard-header-color | _#646566_ |
| --nut-numberkeyboard-header-font-size | _16px_ |
| --nut-numberkeyboard-header-close-padding | _0 16px_ |
| --nut-numberkeyboard-header-close-color | _#576b95_ |
| --nut-numberkeyboard-header-close-font-size | _14px_ |
| --nut-numberkeyboard-header-close-background-color | _transparent_ |
| --nut-numberkeyboard-key-background-color | _#fff_ |
| --nut-numberkeyboard-key-active-background-color | _#ebedf0_ |
| --nut-numberkeyboard-key-height | _48px_ |
| --nut-numberkeyboard-key-line-height | _1.5_ |
| --nut-numberkeyboard-key-border-radius | _8px_ |
| --nut-numberkeyboard-key-font-size | _28px_ |
| --nut-numberkeyboard-key-font-size-color | _#333_ |
| --nut-numberkeyboard-key-finish-font-size | _16px_ |
| --nut-numberkeyboard-key-finish-font-size-color | _#fff_ |
| --nut-numberkeyboard-key-finish-background-color | _#1989fa_ |
| --nut-numberkeyboard-key-activeFinsh-background-color | _#0570db_ |
