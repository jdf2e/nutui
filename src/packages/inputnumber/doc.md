# InputNumber 数字输入框

### 介绍

通过点击按钮控制数字增减。

### 安装

``` javascript
import { InputNumber } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

初始化一个默认值

```tsx
<InputNumber modelValue={inputState.val1} />
```
```tsx
const [inputState, setInputState] = useState({
  val1: 1,
})
```

### 步长设置

设置步长 `step` 5 

```tsx
<InputNumber modelValue={inputState.val2} step="5" />
```

### 限制输入范围

`min` 和 `max` 属性分别表示最小值和最大值

```tsx
<InputNumber modelValue={inputState.val3} min="10" max="20" overlimit={overlimit} />
```
```tsx
const overlimit = (e: MouseEvent) => {
  console.log(e)
  Toast.warn('超出限制事件触发')
}
```

### 禁用状态

`disabled` 禁用状态下无法点击按钮或修改输入框。

```tsx
<InputNumber modelValue={inputState.val4} disabled />
```

### 只读禁用输入框

`readonly` 设置只读禁用输入框输入行为

```tsx
<InputNumber modelValue={inputState.val5} readonly />
```

### 支持小数点

设置步长 `step` 0.1  `decimal-places` 小数保留1位

```tsx
<InputNumber modelValue={inputState.val6} step="0.1" decimalPlaces="1" readonly />
```
### 支持异步修改

通过 `change` 事件和 `model-value` 进行异步修改

```tsx
<InputNumber modelValue={inputState.val7} change={onChange} isAsync={true} />
```

```tsx
const onChange = (value: string | number) => {
  Toast.loading('异步演示 2 秒后更改')
  setTimeout(() => {
    inputState.val7 = Number(value)
    setInputState({ ...inputState })
    Toast.hide()
  }, 2000)
}
```
### 自定义按钮大小

设置步长 `step` 0.1  `decimal-places` 小数保留1位

```tsx
<InputNumber modelValue={inputState.val8} buttonSize="30" inputWidth="50" />
```

## API

### Props

| 参数           | 说明                       | 类型           | 默认值     |
|----------------|----------------------------|----------------|------------|
| modelValue        | 初始值                     | String、Number | -          |
| inputWidth    | 输入框宽度                 | String         | `40px`     |
| buttonSize    | 操作符+、-尺寸             | String         | `20px`     |
| min            | 最小值限制                 | String、Number | `1`        |
| max            | 最大值限制                 | String、Number | `9999` |
| step           | 步长                       | String、Number | `1`        |
| decimalPlaces | 设置保留的小数位           | String、Number | `0`        |
| disabled       | 禁用所有功能               | Boolean        | false      |
| readonly       | 只读状态禁用输入框操作行为 | Boolean        | false      |
| isAsync       | 支持异步修改 | Boolean        | false      |

### Events

| 事件名    | 说明                   | 回调参数                       |
|-----------|------------------------|--------------------------------|
| add       | 点击增加按钮时触发     | event: Event                   |
| reduce    | 点击减少按钮时触发     | event: Event                   |
| overlimit | 点击不可用的按钮时触发 | event: Event                   |
| change    | 值改变时触发           | value:  number , event : Event |
| blur      | 输入框失去焦点时触发   | event: Event                   |
| focus     | 输入框获得焦点时触发   | event: Event                   |