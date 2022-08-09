# FixedNav 悬浮导航

### 介绍

悬浮收起体验交互，用于快捷导航

### 安装
    
``` javascript
import { createApp } from 'vue';
// vue
import { FixedNav,OverLay } from '@nutui/nutui';
// taro
import { FixedNav,OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(FixedNav);
app.use(OverLay);

```


### 基础用法

:::demo
```html
<template>
  <nut-fixednav :position="{top:'70px' }" v-model:visible="visible" :nav-list="navList" />
</template>
<script lang="ts">
import { ref,reactive } from 'vue';
export default {
 setup() {
    const visible = ref(false);
    const navList = reactive([
      {
        id: 1,
        text: '首页',
        icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
      },
      {
        id: 2,
        text: '分类',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
      },
      {
        id: 3,
        text: '购物车',
        num: 2,
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
      },
      {
        id: 4,
        text: '我的',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
      }
    ]);
    return {
      visible,
      navList
    };
 }
}
</script>
```
:::

### 左侧效果

``` html
<nut-fixednav type="left" :position="{top:'140px' }" v-model:visible="visible" :nav-list="navList" />
```


### 取消背景遮罩

``` html
<nut-fixednav :overlay="false"  :position="{top:'210px' }" v-model:visible="visible" :nav-list="navList" />
```

### 配合 Drag 支持拖拽 , 小程序暂不支持

``` html
<nut-drag direction="y" :style="{right:'0px',bottom:'240px'}">
  <nut-fixednav un-active-text="支持拖拽" v-model:visible="visible" :nav-list="navList" />
</nut-drag>
```

### 自定义使用

:::demo
```html
<template>
<nut-fixednav :position="{top:'280px' }" type="left" v-model:visible="myActive">
    <template v-slot:list>
        <ul class="nut-fixednav__list">
            <li class="nut-fixednav__list-item">1</li>
            <li class="nut-fixednav__list-item">2</li>
            <li class="nut-fixednav__list-item">3</li>
            <li class="nut-fixednav__list-item">4</li>
            <li class="nut-fixednav__list-item">5</li>
        </ul>
    </template>
<template v-slot:btn>
    <nut-icon name="retweet" color="#fff">
    </nut-icon>
    <span class="text">{{ myActive ? '自定义开' : '自定义关' }}</span>
</template>
</nut-fixednav>
</template>
<script lang="ts">
import { ref,reactive } from 'vue';
export default {
 setup() {
    const myActive = ref(false);
    const navList = reactive([
      {
        id: 1,
        text: '首页',
        icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
      },
      {
        id: 2,
        text: '分类',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
      },
      {
        id: 3,
        text: '购物车',
        num: 2,
        icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
      },
      {
        id: 4,
        text: '我的',
        icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
      }
    ]);
    return {
      myActive,
      navList
    };
 }
}
</script>
```
:::


### Prop
| 字段                | 说明                       | 类型    | 默认值                       |
|:--------------------|:---------------------------|:--------|:-----------------------------|
| visible             | 是否打开                   | Boolean | false                        |
| nav-list            | 悬浮列表内容数据           | Array   | []                           |
| active-color`3.2.1` | 选中按钮文案颜色           | String  | #fa2c19 默认集成主题色       |
| active-text         | 收起列表按钮文案           | String  | 收起导航                     |
| un-active-text      | 展开列表按钮文案           | String  | 快速导航                     |
| type                | 导航方向,可选值 left right | String  | right                        |
| overlay             | 展开时是否显示遮罩         | Boolean | true                         |
| position            | fixed 垂直位置             | Object  | {top: 'auto',bottom: 'auto'} |


### Event

| 字段     | 说明         | 回调参数                 |
|----------|--------------|--------------------------|
| selected | 选择之后触发 | {item:item,$event:Event} |


### Slot

| 名称 | 说明               |
|------|--------------------|
| btn  | 自定义按钮         |
| list | 自定义展开列表内容 |

    