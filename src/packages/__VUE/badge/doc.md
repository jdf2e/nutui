# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Badge } from '@nutui/nutui';
// taro
import { Badge } from '@nutui/nutui-taro';

const app = createApp();
app.use(Badge);

```


### 基础用法

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge dot>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### 最大值

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="200" :max="9">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="200" :max="20">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="200" :max="99">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### 自定义颜色

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### 自定义徽标内容

:::demo
```html
<template>
  <div class="demo">
    <nut-badge>
      <template #icons>
        <nut-icon name="Check" color="#ffffff" size="12"></nut-icon>
      </template>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icons>
        <nut-icon name="link" color="#ffffff" size="12"></nut-icon>
      </template>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge>
      <template #icons>
        <nut-icon name="download" color="#ffffff" size="12"></nut-icon>
      </template>
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### 自定义位置

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8" top="5" right="5">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge :value="76" top="10" right="10">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
    <nut-badge value="NEW">
      <nut-avatar icon="my" shape="square"></nut-avatar>
    </nut-badge>
   </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

### 独立展示

:::demo
```html
<template>
  <div class="demo">
    <nut-badge :value="8"> </nut-badge>
    <nut-badge :value="76"> </nut-badge>
    <nut-badge value="NEW"> </nut-badge>
  </div>
</template>

<style lang="scss" scoped>
.demo{
  padding: 30px 17px 0 17px;
}
.nut-badge {
  margin-right: 40px;
}
</style>

```
:::

## API
### Props  

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| value   | 显示的内容                                 | String  | -         |
| max     | value 为数值时，最大值                     | Number  | `10000`   |
| z-index | 徽标的 z-index 值                          | Number  | `10`      |
| dot     | 是否为小点                                 | Boolean | `false`   |
| hidden  | 是否隐藏                                   | Boolean | `false`   |
| top     | 上下偏移量，支持单位设置，可设置为：5px 等 | Number  | `0`       |
| right   | 左右偏移量，支持单位设置，可设置为：5px 等 | Number  | `0`       |
| color   | 徽标背景颜色                               | String  | `#fa2c19` |

### Slots

| 名称    | 说明         |
|---------|--------------|
| default | 	徽标包裹的子元素 |
| icons | 	徽标自定义 |
