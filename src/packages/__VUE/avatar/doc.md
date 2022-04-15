# Avatar 头像

### 介绍

用来代表用户或事物，支持图片、图标或字符展示。

### 安装

```javascript
import { createApp } from 'vue';
// vue
import { Avatar, Icon } from '@nutui/nutui';
// taro
import { Avatar, Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Avatar);
app.use(Icon);
```

### 基本用法

支持三种尺寸：small、normal、large

:::demo

```html
<template>
  <nut-avatar
    size="large"
    icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  ></nut-avatar>
  <nut-avatar
    size="normal"
    icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  ></nut-avatar>
  <nut-avatar
    size="small"
    icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  ></nut-avatar>
</template>
```

:::

### 头像形状

支持两种形状：square、round

:::demo

```html
<template>
  <nut-avatar icon="my" shape="square"></nut-avatar>
  <nut-avatar icon="my" shape="round"></nut-avatar>
</template>
```

:::

### 头像类型

支持三种类型：图片、Icon 以及字符

:::demo

```html
<template>
  <nut-avatar
    url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
  >
  </nut-avatar>
  <nut-avatar icon="my"></nut-avatar>
  <nut-avatar>N</nut-avatar>
</template>
```

:::

### 自定义颜色及背景色

Icon 和字符型可以自定义图标颜色及背景色

:::demo

```html
<template>
  <nut-avatar class="demo-avatar" icon="my" color="#fff" bg-color="#FA2C19"></nut-avatar>
  <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
</template>
```

:::

### 带徽标的头像

:::demo

```html
<template>
  <nut-badge value="8">
    <nut-avatar icon="my" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge dot>
    <nut-avatar icon="my" shape="square"></nut-avatar>
  </nut-badge>
</template>
```

:::

## 头像组合展现

:::demo

```html
<template>
  <nut-avatar-group span="-4">
    <nut-avatar
      url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    >
    </nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
  </nut-avatar-group>
  <nut-avatar-group
    max-count="3"
    max-color="#fff"
    max-bgColor="#498ff2"
  >
    <nut-avatar
      url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    >
    </nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
  
    <nut-avatar icon="my">
      <template #maxContent>+2</template>
    </nut-avatar>
  </nut-avatar-group>
</template>
```

:::

## 组合头像可控制层级方向

:::demo

```html
<template>
  <nut-avatar-group
    max-count="3"
    zIndex="right"
  >
    <nut-avatar
      url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    >
    </nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
  
    <nut-avatar icon="my">
      <template #maxContent>...</template>
    </nut-avatar>
  </nut-avatar-group>
</template>
```

:::

## 点击头像触发事件

:::demo

```html
<template>
  <nut-cell>
    <nut-avatar icon="my" @active-avatar="handleClick"></nut-avatar>
  </nut-cell>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    setup() {
      const handleClick = () => {
        console.log('触发点击头像');
      };

      return {
        handleClick
      };
    }
  }
</script>
```

:::


### Prop

| 字段     | 说明                                                             | 类型   | 默认值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| size     | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字   | String | normal |
| shape    | 设置头像的形状，可选值为：square、round            | String | round  |
| bg-color | 设置 Icon、字符类型头像的背景色                    | String | #eee   |
| color    | 设置 Icon、字符类型头像的颜色                     | String | #666   |
| url      | 设置图片类型头像的地址                           | String | -   |
| alt      | 设置图片类型头像无法显示时的替代文本                | String | -   |
| icon     | 设置 Icon 类型头像图标, 类似 Icon 组件的 name 属性  | String | -     |

### avatarGroup

| 字段     | 说明                                                             | 类型   | 默认值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| maxCount     | 显示的最大头像个数   | Number、String | - |
| size         | 设置头像的大小，可选值为：large、normal、small，支持直接输入数字   | String | normal |
| shape        | 设置头像的形状，可选值为：square、round            | String | round  |
| max-bgColor  | 设置 Icon、字符类型头像的背景色                    | String | #eee   |
| max-color    | 设置 Icon、字符类型头像的颜色                   | String | #666 |
| span         | 设置头像之间的间距               | String | -8   |
| zIndex       | 头像之间的层级关系，可选值为：left、right  | String | left     |

### Slots

| 名称    | 说明         |
|---------|--------------|
| maxContent | 多余头像显示内容 |

### Events

| 字段             | 说明         | 类型     | 回调参数 |
| ---------------- | ------------ | -------- | -------- |
| active-avatar | 点击头像触发事件    | Function | event    |
| active-max    | 点击多余头像触发事件 | Function | event    |
| onError       | 图片加载失败的事件   | Function | event    |
