# Range 区间选择器

### 介绍

滑动输入条，用于在给定的范围内选择一个值。

### 安装

## 代码演示

### 基础用法

```jsx
<Range modelValue={40}></Range>
```

### 双滑块

```jsx
<Range
  range
  modelValue={[30, 60]}
  change={(value) => {
    change(value)
  }}
></Range>
```

### 指定范围

```jsx
<Range
  modelValue={0}
  max={10}
  min={-10}
  change={(value) => {
    change(value)
  }}
></Range>
```

### 设置步长

```jsx
<Range
  modelValue={value1}
  step={5}
  change={(value: any) => {
    change(value, 'value1')
  }}
></Range>
```

### 隐藏范围

```jsx
<Range
  modelValue={30}
  hiddenRange={true}
  change={(value: any) => {
    change(value)
  }}
></Range>
```

### 隐藏标签

```jsx
<Range
  modelValue={20}
  hiddenTag={true}
  change={(value: any) => {
    change(value)
  }}
></Range>
```

### 禁用

```jsx
<Range
  modelValue={50}
  disabled
  change={(value: any) => {
    change(value)
  }}
></Range>
```

### 自定义样式

```jsx
<Range
  modelValue={40}
  inactiveColor="rgba(163,184,255,1)"
  buttonColor="rgba(52,96,250,1)"
  activeColor="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
  change={(value: number) => {
    change(value)
  }}
></Range>
```

### 自定义按钮

```jsx
<Range
  modelValue={value2}
  button={<div className="custom-button">{value2}</div>}
  change={(value: number) => {
    change(value, 'value2')
  }}
></Range>
```

```js
const [value1, SetValue1] = useState(40)
const [value2, SetValue2] = useState(60)
const change = (value: number, name?: string) => {
  Toast.text('当前值：' + value)
  switch (name) {
    case 'value1':
      SetValue1(value)
      break
    case 'value2':
      SetValue2(value)
      break
    default:
      break
  }
}
```

```html
<style>
  .custom-button {
    width: 26px;
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    background-color: #ee0a24;
    border-radius: 100px;
  }
</style>
```

## API

### Props

| 参数          | 说明               | 类型             | 默认值                   |
| ------------- | ------------------ | ---------------- | ------------------------ |
| modelValue    | 当前进度百分比     | Number、Number[] | `0`                      |
| range         | 是否开启双滑块模式 | Boolean          | `false`                  |
| max           | 最大值             | Number、String   | `100`                    |
| min           | 最小值             | Number、String   | `0`                      |
| step          | 步长               | Number、String   | `1`                      |
| disabled      | 是否禁用滑块       | Boolean          | `false`                  |
| hiddenRange   | 是否隐藏范围值     | Boolean          | `false`                  |
| hiddenTag     | 是否隐藏标签       | Boolean          | `false`                  |
| activeColor   | 进度条激活态颜色   | String           | `rgba(250, 44, 25, 1)`   |
| inactiveColor | 进度条非激活态颜色 | String           | `rgba(255, 163, 154, 1)` |
| buttonColor   | 按钮颜色           | String           | `rgba(250, 44, 25, 1)`   |

### Events

| 事件名    | 说明                     | 回调参数        |
| --------- | ------------------------ | --------------- |
| change    | 进度变化且结束拖动后触发 | value: 当前进度 |
| dragStart | 开始拖动时触发           | -               |
| dragEnd   | 结束拖动时触发           | -               |

### Slots

| 名称   | 说明           |
| ------ | -------------- |
| button | 自定义滑动按钮 |
