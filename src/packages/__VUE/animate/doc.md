# animate 

### 介绍

给子元素添加动画效果

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Animate } from '@nutui/nutui';
// taro
import { Animate } from '@nutui/nutui-taro';

const app = createApp(Animate);
app.use(Animate);

```

### 点击触发

:::demo

```html
<template>
  <nut-animate type='slide-right' action='click'>
    <nut-button type='primary'>由右向左划入</nut-button>
  </nut-animate>

  <nut-animate type='slide-left' action='click'>
    <nut-button type='primary'>由左向右划入</nut-button>
  </nut-animate>
  
  <nut-animate type='slide-top' action='click'>
    <nut-button type='primary'>由上至下划入</nut-button>
  </nut-animate>

  <nut-animate type='slide-bottom' action='click'>
    <nut-button type='primary'>由下至上划入</nut-button>
  </nut-animate>
 
</template>
<script lang="ts">
  export default {
    setup() {
      return {  };
    }
  };
</script>
```

:::



### 循环动画

:::demo

```html
<template>
  <nut-animate type='shake' :loop='true'>
    <nut-button type='primary'>shake-抖动</nut-button>
  </nut-animate>

  <nut-animate type='ripple' :loop='true'>
    <nut-button type='primary'>ripple-心跳</nut-button>
  </nut-animate>
  
  <nut-animate type='breath' :loop='true'>
    <nut-button type='primary'>breath-呼吸灯</nut-button>
  </nut-animate>

  <nut-animate type='twinkle' :loop='true'>
    <nut-button type='primary'>twinkle-水波</nut-button>
  </nut-animate>
  
  <nut-animate type='flicker' :loop='true'>
    <nut-button type='primary'>flicker-擦亮</nut-button>
  </nut-animate>

  <nut-animate type='jump' :loop='true'>
    <nut-button type='primary'>jump-跳跃</nut-button>
  </nut-animate>

  <nut-animate type='float' :loop='true'>
    <nut-button type='primary'>float-漂浮</nut-button>
  </nut-animate>
</template>
<script lang="ts">
  export default {
    setup() {
      return {  };
    }
  };
</script>
```

:::


## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| type         | 动画类型，见下方type值说明               | String | -                |
| action         | 触发方式，'initial'--初始化执行;  'click'--点击执行              | String | 'initial'             |
| loop         | 是否循环执行。true-循环执行;false-执行一次              | Boolean | false               |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击元素时触发 | event: Event |

### type值说明

|    序号  |    参数名称     |      参数说明     |
|:-------|:------- | :----------|
| 1|   shake  | 抖动，建议loop为true
| 2 |   ripple  | 不循环则是放大后缩小，循环则是心跳
|3 |   breath  | 呼吸灯，建议loop为true
|4 |   float  | 漂浮，建议loop为true
|5|   slide-right  | 由右向左划入
|6 |   slide-left  | 由左向右划入
|7|   slide-top  | 由上至下划入
| 8 |   slide-bottom  | 由下至上划入
|9 |   jump  | 跳跃，建议loop为true
|10 |   twinkle  | 水波，建议loop为true
|11 |   flicker  | 擦亮按钮，建议loop为true