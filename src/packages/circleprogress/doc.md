# CricleProgress 进度条

### 介绍

展示操作或任务的当前进度。

### 安装

``` javascript
import { CirecleProgress } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法

```tsx
<CircleProgress progress={10}></CircleProgress>
```
### 环形进度条自定义样式

```tsx
<CircleProgress progress={50} progressOption={progressOption}></CircleProgress>
```
### 环形进度条自定义内容

```tsx
<CircleProgress progress={50} isAuto={true}>
  <div>自定义</div>
</CircleProgress>
```
### 动态改变环形进度条的进度

```tsx
<CircleProgress
  progress={percent}
  progressOption={progressOption}
  strokeInnerWidth={strokeInnerWidth}
></CircleProgress>
```
```tsx
const [percent, setPercent] = useState(50)
const [strokeInnerWidth, setStrokeInnerWidth] = useState(10)
const progressOption = {
  radius: 50,
  strokeOutWidth: 10,
  backColor: '#d9d9d9',
  progressColor: 'red',
}
const setReduceVal = () => {
  if (percent - 10 <= 0) {
    setStrokeInnerWidth(0)
    setPercent(0)
    return
  }
  setPercent(percent - 10)
}
const setAddVal = () => {
  setStrokeInnerWidth(10)
  if (percent >= 100) {
    return
  }
  setPercent(percent + 10)
}
```


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| progress | 百分比 | Number,String | 必传项，无默认值
| strokeInnerWidth | 圆弧的宽度 | Number,String | 10
| isAuto | 是否自定义内容显示（taro暂不支持） | Boolean | false
| progressOption | 外圆相关参数对象,其中包括半径，宽度，背景颜色，进度色值 | Object | {radius: 50,strokeOutWidth: 10, backColor: '#d9d9d9',progressColor: 'red'}