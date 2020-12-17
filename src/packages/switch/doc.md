#  switch组件

### 介绍

用来打开或关闭选项。

### 安装

``` javascript
import { createApp } from 'vue';
import { Switch } from '@nutui/nutui';

const app = createApp();
app.use(Switch);

```

## 代码演示

### 基础用法

``` html
<nut-switch></nut-switch>
```

### change事件

### 自定义颜色

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| checked         | 开关状态               | Boolean | true |
| activeColor        | 开关打开时的背景颜色  | String | -                |
| inactiveColor         | 开关关闭时的背景颜色 | String | "#fff"         |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| switch-change  | 切换开关时触发 | event: Event |
    