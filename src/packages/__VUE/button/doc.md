# Button 按钮

### 介绍

按钮用于触发一个操作，如提交表单。

### 安装

```js
import { createApp } from 'vue';
import { Button } from '@nutui/nutui';

const app = createApp();
app.use(Button);
```

### 按钮类型

按钮支持 `default`、`primary`、`info`、`warning`、`danger`、`success` 六种类型，默认为 `default`。

:::mode1

button type

:::

### 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。
