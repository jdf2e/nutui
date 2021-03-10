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

### 禁用状态

``` html
<nut-switch disable></nut-switch>
```

### change事件

``` html
<nut-switch @switch-change="change"></nut-switch>
```

``` javascript
export default {
  setup() {
    const change = (event: Event, isOpen: boolean) => {
      console.log('触发了change事件,开关状态：', isOpen);
    };
    
    return {
      change
    };
  }
};
```

### 自定义颜色

``` html
<nut-switch active-color="blue"></nut-switch>
```

## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| status         | 开关状态               | Boolean | `true` |
| disable         | 禁用状态               | Boolean | `false` |
| active-color        | 开关打开时的背景颜色  | String | `rgb(250,63,25,1)`                |
| inactive-color         | 开关关闭时的背景颜色 | String | `rgba(235,235,235,1)`         |
| label         | 支持内嵌文字,两种状态使用空格隔开 | String | -         |


### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| switch-change  | 切换开关时触发 | (event: Event, isOpen: boolean) |
    