# Barrage 弹幕

### 介绍

用于话语和词组的轮播展示，适用于视频中或其他类似需求中。

### 安装

``` javascript
import { Barrage } from '@nutui/nutui-react';
```

## 代码演示

### 基础用法1

```tsx
<h2>基础用法</h2>
<Cell>
  <Barrage ref={barrageRef} barrageList={list}></Barrage>
</Cell>
<div className="test" style={{ textAlign: 'center' }}>
  <Button type="danger" onClick={addBarrage}>随机添加</Button>
</div>
```

```tsx
let list = ['画美不看', '不明觉厉', '喜大普奔', '男默女泪', '累觉不爱', '爷青结-']
const barrageRef = useRef(null)
const addBarrage = () => {
  let n = Math.random()
  if (barrageRef.current) {
    barrageRef.current.add('随机——' + String(n).substr(2, 10))
  }
}
```



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| barrageList         | 弹幕列表数据               | Array | []              |
| frequency        | 可视区域内每个弹幕出现的时间间隔                         | Number | 500               |
| speeds         | 每个弹幕的滚动时间 | Number |  2000               |
| rows  | 弹幕行数，分几行展示     | Number | 1 |
| top  | 弹幕垂直距离    | Number | 10 |
| loop  | 是否循环播放     | Boolean | true |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| add  | 添加数据 | - |