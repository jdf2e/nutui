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

### 基础用法

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

Icon 和字符型可以自定义颜色及背景色

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

### 头像组合展现

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
  </nut-avatar-group>
</template>
```

:::

### 组合头像可控制层级方向

:::demo

```html
<template>
  <nut-avatar-group
    max-count="3"
    zIndex="right"
    max-content="..."
  >
    <nut-avatar
      url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
    >
    </nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">U</nut-avatar>
    <nut-avatar icon="my"></nut-avatar>
  </nut-avatar-group>
</template>
```

:::

### 点击头像触发事件

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

## API
### Avatar Props

| 字段     | 说明                                                        | 类型   | 默认值 |
| -------- | --------------------------------------------------------- | ------ | ------ |
| size     | 头像的大小，可选值为：`large`、`normal`、`small`，支持输入数字   | String ｜ Number | normal |
| shape    | 头像的形状，可选值为：`square`、`round `                      | String | round  |
| color    | Icon、字符类型头像的颜色                                     | String | #666   |
| bg-color | Icon、字符类型头像的背景色                                    | String | #eee   |
| url      | 图片类型头像的地址                                           | String | -   |
| alt      | 图片类型头像无法显示时的替代文本                               | String | -   |
| icon     | Icon 类型头像图标, 类似 Icon 组件的 name 属性                 | String | -     |

### AvatarGroup Props

| 字段     | 说明                                                             | 类型   | 默认值 |
| -------- | ---------------------------------------------------------------- | ------ | ------ |
| max-count    | 显示的最大头像个数   | String ｜ Number | - |
| max-content  | 头像数量超出时，会出现一个头像折叠元素，该元素内容可为`...`、`more`、`+N` | String | +N |
| size         | 头像的大小，可选值为：`large`、`normal`、`small`，支持直接输入数字   | String ｜ Number | normal |
| shape        | 头像的形状，可选值为：`square`、`round`        | String | round  |
| max-color    | Icon、字符类型头像的颜色                   | String | #666 |
| max-bgColor  | Icon、字符类型头像的背景色                    | String | #eee   |
| span         | 头像之间的间距               | String | -8   |
| zIndex       | 组合头像之间的层级方向，可选值为：`left`、`right`  | String | left     |
### Avatar Events

| 字段             | 说明         | 回调参数 |
| ---------------- | ------------ | -------- |
| active-avatar | 点击头像触发事件    | event    |
| onError       | 图片加载失败的事件   | event    |
