# InputNumber 数字输入框组件

### 介绍

基于

### 安装

``` javascript
import { createApp } from 'vue';
import { inputnumber } from '@nutui/nutui';

const app = createApp();
app.use(inputnumber);

```

## 代码演示

### 基础用法1

初始化一个默认值

```html
<nut-inputnumber v-model:modelValue="1" />
```

### 基础用法2

设置步长`step` 和 保留的小数位`decimalPlaces`

```html
<nut-inputnumber v-model:modelValue="1" :step="1.1" :decimalPlaces="1" />
```

### 基础用法3

`min` 和 `max` 属性分别表示最小值和最大值

```html
<nut-inputnumber v-model:modelValue="1" :min="3" :max="5" />
```

### 基础用法4

`readonly`设置只读

```html
<nut-inputnumber v-model:modelValue="1" :readonly="true" />
```

### 基础用法5

`size`设置操作符的大小

```html
<nut-inputnumber v-model:modelValue="1" :size="20px" />
```

### 高级用法

`async`支持异步修改数量，设置了此属性为true，必须同时在`change`事件中手动设置input值才能生效

```html
<nut-inputnumber v-model:modelValue="1" :async="true" @change="change"/>
```


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| size         | 操作符+、-尺寸               | String          | 20px                |
| color        | 操作符+、-颜色               | String          | #1a1a1a             |
| disColor     | 操作符+、-禁用时颜色          | String          | #ccc                |
| min          | 最小值                      | String、Number | 1                   |
| max          | 最大值                      | String、Number | Infinity             |
| step         | 步长                        | String、Number |     1                |
| readonly     | 只读                   | Boolean | false              |
| modelValue   | 初始值                   | String、Number | ''              |
| decimalPlaces| 设置保留的小数位                   | String、Number | 1              |
| async        | 支持异步                   | Boolean | false              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| change  | 值改变时触发 | num: string | number |
| focus  | 输入框获取焦点时触发 | event: Event, num: string | number |
| blur  | 输入框失去焦点时触发 | event: Event, num: string | number |
| add-no-allow  | 超出最大事件回调 | - |
| reduce-no-allow  | 超出最小事件回调 | - |
