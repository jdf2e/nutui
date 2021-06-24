# InputNumber 数字输入框

### 介绍

通过点击按钮控制数字增减。

### 安装

``` javascript
import { createApp } from 'vue';
import { InputNumber,Icon } from '@nutui/nutui';

const app = createApp();
app.use(InputNumber).use(Icon);

```

## 代码演示

### 基础用法

初始化一个默认值

``` html
<nut-inputnumber v-model="value" />
```
``` javascript
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(1);
    return { value };
  },
};
```

### 步长设置

设置步长 `step` 5 

```html
<nut-inputnumber v-model="value" step="5" />
```

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

```html
<nut-inputnumber v-model="value" min="10" max="20" />
```

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

```html
<nut-inputnumber v-model="value" disabled />
```

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

```html
<nut-inputnumber v-model="value" readonly />
```

### 支持小数点

设置步长 `step` 0.1  `decimal-places` 小数保留1位

```html
<nut-inputnumber v-model="value" step="0.1" decimal-places="1" />
```
### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改

```html
<nut-inputnumber :model-value="value" @change="onChange" />
```

``` javascript
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(1);
    const onChange = (value: number) => {
      setTimeout(() => {
        value.value = value;
      }, 2000);
    };
    return { value,onChange };
  },
};
```
### 自定义按钮大小

设置步长 `step` 0.1  `decimal-places` 小数保留1位

```html
<nut-inputnumber v-model="value"  button-size="30" input-width="50" />
```

## API

### Props

| 参数           | 说明                       | 类型           | 默认值     |
|----------------|----------------------------|----------------|------------|
| v-model        | 初始值                     | String、Number | -          |
| input-width    | 输入框宽度                 | String         | `40px`     |
| button-size    | 操作符+、-尺寸             | String         | `20px`     |
| min            | 最小值限制                 | String、Number | `1`        |
| max            | 最大值限制                 | String、Number | `9999` |
| step           | 步长                       | String、Number | `1`        |
| decimal-places | 设置保留的小数位           | String、Number | `0`        |
| disabled       | 禁用所有功能               | Boolean        | false      |
| readonly       | 只读状态禁用输入框操作行为 | Boolean        | false      |

### Events

| 事件名    | 说明                   | 回调参数                       |
|-----------|------------------------|--------------------------------|
| add       | 点击增加按钮时触发     | event: Event                   |
| reduce    | 点击减少按钮时触发     | event: Event                   |
| overlimit | 点击不可用的按钮时触发 | event: Event                   |
| change    | 值改变时触发           | value:  number , event : Event |
| blur      | 输入框失去焦点时触发   | event: Event                   |
| focus     | 输入框获得焦点时触发   | event: Event                   |
