# Layout 布局

### 介绍

用于快速进行布局

### 安装

```javascript
import { createApp } from 'vue';
// vue
import { Layout,Row,Col } from '@nutui/nutui';
// taro
import { Layout,Row,Col } from '@nutui/nutui-taro';

const app = createApp();
app.use(Layout);
app.use(Row);
app.use(Col);
```


### 基础用法
:::demo
```html
<template>
  <nut-row>
    <nut-col :span="24">
      <div class="flex-content">span:24</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="12">
      <div class="flex-content">span:12</div>
    </nut-col>
    <nut-col :span="12">
      <div class="flex-content flex-content-light">span:12</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="8">
      <div class="flex-content">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="flex-content flex-content-light">span:8</div>
    </nut-col>
    <nut-col :span="8">
      <div class="flex-content">span:8</div>
    </nut-col>
  </nut-row>
  <nut-row>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```
:::
### 分栏间隔
:::demo
```html
<template>
  <nut-row :gutter="10">
      <nut-col :span="8">
          <div class="flex-content">span:8</div>
      </nut-col>
      <nut-col :span="8">
          <div class="flex-content flex-content-light">span:8</div>
      </nut-col>
      <nut-col :span="8">
          <div class="flex-content">span:8</div>
      </nut-col>
  </nut-row>   
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```
:::
### Flex布局
:::demo
```html
<template>
  <nut-row type="flex" wrap="nowrap">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="center">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="end">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-between">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-around">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
  <nut-row type="flex" justify="space-evenly">
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content flex-content-light">span:6</div>
    </nut-col>
    <nut-col :span="6">
      <div class="flex-content">span:6</div>
    </nut-col>
  </nut-row>
</template>
<style lang="scss" scoped>
.nut-row {
  overflow: hidden;
  &:not(:last-child) .nut-col {
    margin-bottom: 15px;
  }
  margin-bottom: 15px;
}
.flex-content {
  line-height: 40px;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  background: #ff8881;
  &.flex-content-light {
    background: #ffc7c4;
  }
  &.flex-content-height {
    height: 50px;
  }
}
</style>
```
:::
## API

### Row Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 布局方式，可选值为flex | String | -
| gutter | 列元素之间的间距（单位为px） | String、Number | -
| justify | Flex 主轴对齐方式，可选值为 start end center space-around space-between space-evenly | String | start
| align | Flex 交叉轴对齐方式，可选值为 flex-start center flex-end | String | flex-start
| flex-wrap | Flex是否换行，可选值为 nowrap wrap reverse | String | nowrap

### Col Props

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| span | 列元素宽度（共分为24份，例如设置一行3个，那么span值为8） | String、Number | 24
| offset | 列元素偏移距离 | String、Number | 0

### Row Events

| 字段 | 说明 | 回调参数
|----- | ----- | ----- 
| click | 点击时触发 | event: MouseEvent

### Col Events

| 字段 | 说明 | 回调参数
|----- | ----- | ----- 
| click | 点击时触发 | event: MouseEvent
