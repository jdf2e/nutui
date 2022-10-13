# NoticeBar 通告栏

### 介绍 


用于循环播放展示一组消息通知。


### 安装

```javascript

import { createApp } from 'vue';
// vue
import { NoticeBar } from '@nutui/nutui';
// taro
import { NoticeBar } from '@nutui/nutui-taro';

const app = createApp();
app.use(NoticeBar);

```


### 基础用法

:::demo

```html
<template>
  <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
</template>

```
:::

### 滚动播放

通知栏的内容长度溢出时会自动开启滚动播放，可通过 scrollable 属性可以控制该行为

:::demo

```html
<template>
  <nut-noticebar text="华为畅享9新品即将上市" :scrollable="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`"></nut-noticebar>

  <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      :scrollable="false"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
</template>

```
:::


### 通告栏模式--关闭模式

:::demo

```html
<template>
  <nut-noticebar :closeMode="true" :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
    NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
  </nut-noticebar>
 
  <nut-noticebar
      :closeMode="true"
      right-icon="circle-close"
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
      >
      NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。
  </nut-noticebar>
</template>

```
:::


### 通告栏模式--链接模式

:::demo
```html
<template>
    <nut-noticebar
      left-icon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
      :scrollable="false"
    >
      <a href="https://www.jd.com">京东商城</a>
    </nut-noticebar>
</template>
```
:::

### 多行展示

文字较长时，可以通过设置 wrapable 属性来开启多行展示。默认为不滚动，可以通过设置 scrollable 控制为滚动。

:::demo
```html
<template>
  <nut-noticebar
      text="NutUI 是京东风格的移动端组件库，使用 Vue 语言来编写可以在 H5，小程序平台上的应用，帮助研发人员提升开发效率，改善开发体验。"
      wrapable
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`"
    ></nut-noticebar>
</template>
```
:::

### 纵向滚动
:::demo
```html
<template>
  <nut-noticebar 
      direction='vertical' 
      :list="horseLamp1" 
      :speed='10' 
      :standTime='1000' 
      @click='go' 
      :closeMode="true" 
      :background="`rgba(251, 248, 220, 1)`"
      :color="`#D9500B`">
  </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
      const go = (item) => {
        console.log(item)
      }
      return { horseLamp1 };
    }
  }
</script>
```

:::

### 复杂滚动动画

:::demo
```html
<template>
  <nut-noticebar direction='vertical' :list="horseLamp2" :speed='10' :standTime='2000' :complexAm='true' :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`"></nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp2 = ref(['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
      return { horseLamp2 };
    }
  }
</script>
```
:::

### 自定义滚动内容

:::demo
```html
<template>
    <nut-noticebar direction='vertical' :height='50' :speed='10' :standTime='1000' :list="[]"  @close='go' :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
      <div class="custom-item" :data-index='index' v-for="(item,index) in horseLamp3" :key="index">{{item}}</div>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp3 = ref(['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
      return { horseLamp3 };
    }
  }
</script>
```
:::

### 纵向自定义右侧图标

:::demo
```html
<template>
    <nut-noticebar direction='vertical' :list="horseLamp1" :speed='10' :standTime='1000' :background="`rgba(251, 248, 220, 1)`" :color="`#D9500B`">
      <template v-slot:rightIcon>
        <nut-icon name="fabulous" color="#f0250f"></nut-icon>
      </template>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']);
      return { horseLamp1 };
    }
  }
</script>
```
:::

## API
### Props

| 字段       | 说明                                                       | 类型          | 默认值 |
| ---------- | ---------------------------------------------------------- | ------------- | ------ |
| direction       | 滚动的方向，可选 across、vertical                         | String        | across     |
| text       | 提示的信息                                                 | String        | 空     |
| close-mode  | 是否启用关闭模式                                           | Boolean       | false  |
| left-icon   | close为没有左边icon,其他为自定义的图片链接，没有为默认图片 | String        | 空     |
| right-icon   | closeMode 模式下，默认为 ‘close’,其他模式下，没有为默认图片 | String        | 空     |
| color      | 导航栏的文字颜色                                           | String        | 空     |
| background | 导航栏的背景颜色                                           | String        | 空     |
| delay      | 延时多少秒                                                 | String/Number | 1      |
| scrollable | 是否可以滚动                                               | Boolean       | true   |
| speed      | 滚动速率 (px/s)                                            | Number        | 50     |
| wrapable `v3.1.18`  | 是否开启文本换行                                           | Boolean       | false    |

### Props（direction=vertical）

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 纵向滚动数据列表               | Array | []               |
| speed        | 滚动的速度                         | Number | 50               |
| stand-time         | 停留时间(毫秒) | Number | 1000                |
| complex-am | 稍复杂的动画，耗能会高     | Boolean | false |
| height          | 每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值                 | Number | 40              |
| close-mode  | 是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标                                   | Boolean       | false  |

### Slots

| 参数         | 说明                             | 
|--------------|----------------------------------|
| default         | 通知文本的内容               | 
| right-icon        | 自定义右侧图标    | 
| left-icon        | 自定义左侧图标    | 
### Events

| 字段  | 说明             | 回调参数     |
| ----- | ---------------- | ------------ |
| click | 外层点击事件回调 | event: Event |
| close | 关闭通知栏时触发 | event: Event |