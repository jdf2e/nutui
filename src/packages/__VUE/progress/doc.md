# Progress 进度条

### 介绍

展示操作或任务的当前进度。

### 安装

``` javascript
import { createApp } from 'vue';
//vue
import { Progress,Icon } from '@nutui/nutui';
//taro
import { Progress,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Progress);
app.use(Icon);

```


### 基础用法
:::demo
```html
<template>
  <nut-cell>
     <nut-progress percentage="30" />
  </nut-cell>
</template>
```
:::
### 设置高度和颜色

:::demo
```html
<template>
  <nut-cell>
    <nut-progress percentage="30" stroke-color=" rgba(250,44,25,0.47)" stroke-width="20" text-color="red" />
   </nut-cell>
</template>
```
:::
### 设置百分比不显示
:::demo
```html
<template>
  <nut-cell>
     <nut-progress percentage="50" :show-text="false" stroke-height="24" />
  </nut-cell>
</template>
```
:::
### 设置百分比外显

:::demo
```html
<template>
  <nut-cell>
     <nut-progress percentage="30" />
  </nut-cell>
</template>
```
:::

### 设置百分比内显
:::demo
```html
<template>
     <nut-cell>
        <nut-progress percentage="60" :text-inside="true" />
      </nut-cell>
</template>
```
:::
### 设置百分比内显自定义内容
:::demo
```html
<template>
     <nut-cell>
        <nut-progress percentage="60" :text-inside="true">
          <nut-icon
            style="display: block"
            size="30"
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          ></nut-icon>
        </nut-progress>
      </nut-cell>
</template>
```
:::

### 自定义尺寸

内置 **small**，**base**，**large** 三种规格供使用。
:::demo
```html
<template>
  <nut-cell>
        <nut-progress percentage="30" :text-inside="true" size="small"> </nut-progress>
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="50" :text-inside="true" size="base"> </nut-progress>
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="70" :text-inside="true" size="large"> </nut-progress>
      </nut-cell>
</template>
```
:::
### 设置状态显示
:::demo
```html
<template>
   <div>
      <nut-cell>
        <nut-progress
          percentage="30"
          stroke-color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
          status="active"
        />
      </nut-cell>
      <nut-cell>
        <nut-progress percentage="50" :stroke-width="strokeWidth" status="icon" />
      </nut-cell>
      <nut-cell>
        <nut-progress
          percentage="100"
          stroke-color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
          stroke-width="15"
          status="icon"
          icon-name="issue"
          icon-color="red"
        />
      </nut-cell>
    </div>
</template>
```
:::
## API
### Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
| percentage | 百分比 | Number | 0
| is-show-percentage | 是否需要展示百分号 | Boolean | true
| stroke-color | 进度条背景色 | String | #f30
| stroke-width | 进度条宽度 | String | ''
| size | 进度条及文字尺寸，可选值small/base/large | String | -
| show-text | 是否显示进度条文字内容 | Boolean | true
| text-inside | 进度条文字显示位置(false:外显，true:内显) | Boolean | false
| text-color | 进度条文字颜色设置 | String | #333
| text-background | 进度条文字背景颜色设置 | String | 同进度条颜色
| status | 进度条当前状态,active(展示动画效果)/icon(展示icon标签) | String | text
| icon-name | icon名称 | String | checked
| icon-color | icon颜色 | String | #439422
