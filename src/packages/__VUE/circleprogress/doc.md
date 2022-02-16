# CircleProgress 进度条

### 介绍

展示操作或任务的当前进度。

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { CircleProgress } from '@nutui/nutui';
//taro
import { CircleProgress } from '@nutui/nutui-taro';

const app = createApp();
app.use(CircleProgress);

```


### 基础用法
:::demo
```html
<template>
    <nut-cell>
    <nut-circleprogress :progress="10"> </nut-circleprogress>
   </nut-cell>
</template>
```
:::
### 环形进度条自定义样式
:::demo
```html
<template>
  <nut-cell>
    <nut-circleprogress :progress="50" :progress-option="progressOption"> </nut-circleprogress>
  </nut-cell>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const progressOption = reactive({
      radius: 50,
      strokeOutWidth: 10,
      backColor: '#d9d9d9',
      progressColor: 'red'
    });
    return {
      progressOption,
    };
  }
}
</script>
```
:::
### 环形进度条自定义内容
:::demo
```html
<template>
  <nut-cell>
     <nut-circleprogress :progress="50" :is-auto="isAuto">
       <div>自定义</div>
    </nut-circleprogress>
  </nut-cell>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const isAuto = ref(true);
    return {
      isAuto,
    };
  }
}
</script>
```
:::
### 动态改变环形进度条的进度
:::demo
```html
<template>
  <div>
    <nut-circleprogress :progress="percent" :progress-option="progressOption" :stroke-inner-width="strokeInnerWidth">
    </nut-circleprogress>
  </div>
  <div>
    <nut-button type="primary" @click="setReduceVal">减少</nut-button>
    <nut-button type="primary" @click="setAddVal">增加</nut-button>
  </div>
</template>
<script>
import { reactive, ref } from 'vue';
export default {
  setup() {
    const progressOption = reactive({
      radius: 50,
      strokeOutWidth: 10,
      backColor: '#d9d9d9',
      progressColor: 'red'
    });
    const percent = ref(50);
    const strokeInnerWidth = ref(10);
    const isAuto = ref(true);
    const setAddVal = () => {
      strokeInnerWidth.value = 10;
      if (percent.value >= 100) {
        return;
      }
      percent.value += 10;
    };
    const setReduceVal = () => {
      if (percent.value - 10 <= 0) {
        strokeInnerWidth.value = 0;
        percent.value = 0;
        return;
      }
      percent.value -= 10;
    };
    return {
      progressOption,
      isAuto,
      setAddVal,
      setReduceVal,
      percent
    };
  }
}
</script>
```
:::


## Prop

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| progress | 百分比 | Number,String | 必传项，无默认值
| stroke-inner-width | 圆弧的宽度 | Number,String | 10
| is-auto | 是否自定义内容显示 | Boolean | false
| progress-option | 外圆相关参数对象,其中包括半径，宽度，背景颜色，进度色值 | Object | {radius: 50,strokeOutWidth: 10, backColor: '#d9d9d9',progressColor: 'red'}
