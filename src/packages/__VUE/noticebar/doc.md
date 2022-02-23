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


### 基本用法

:::demo

```html
<template>
  <nut-noticebar text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"></nut-noticebar>
</template>

```
:::
### 禁用滚动
文字内容多于一行时，可通过scrollable参数控制是否开启滚动

:::demo

```html
<template>
  <nut-noticebar
      text="华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！"
      :scrollable="false"
    ></nut-noticebar>
</template>

```
:::

### 通告栏模式--关闭模式

:::demo

```html
<template>
  <nut-noticebar
      :closeMode="true"
      @click="hello"
    >华为畅享9新品即将上市，活动期间0元预约可参与抽奖，赢HUAWEI WATCH等好礼，更多产品信息请持续关注！
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
### 纵向滚动
:::demo
```html
<template>
    <nut-noticebar direction='vertical' :list="horseLamp1" :speed='10' :standTime='1000'  @click='go' :closeMode="true"></nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']);
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
    <nut-noticebar direction='vertical' :list="horseLamp2" :speed='10' :standTime='2000' :complexAm='true'></nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp2 = ref(['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']);
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
    <nut-noticebar direction='vertical' :height='50' :speed='10' :standTime='1000' :list="[]"  @close='go'>
      <div class="custom-item" :data-index='index' v-for="(item,index) in horseLamp3" :key="index">{{item}}</div>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp3 = ref(['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']);
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
    <nut-noticebar direction='vertical' :list="horseLamp1" :speed='10' :standTime='1000' >
      <template v-slot:rightIcon>
        <nut-icon 
          type="trolley" 
          color="#f0250f"
        >
        </nut-icon>

      </template>
    </nut-noticebar>
</template>

<script>
  import { ref } from 'vue';
  export default {
    setup(props) {
      const horseLamp1 = ref(['惊喜红包免费领', '爆款准点秒', '买超值优惠', '赢百万京豆']);
      return { horseLamp1 };
    }
  }
</script>
```
:::


### Prop

| 字段       | 说明                                                       | 类型          | 默认值 |
| ---------- | ---------------------------------------------------------- | ------------- | ------ |
| direction       | 滚动的方向，可选 across、vertical                         | String        | across     |
| text       | 提示的信息                                                 | String        | 空     |
| closeMode  | 是否启用关闭模式                                           | Boolean       | false  |
| leftIcon   | close为没有左边icon,其他为自定义的图片链接，没有为默认图片 | String        | 空     |
| color      | 导航栏的文字颜色                                           | String        | 空     |
| background | 导航栏的背景颜色                                           | String        | 空     |
| delay      | 延时多少秒                                                 | String/Number | 1      |
| scrollable | 是否可以滚动                                               | Boolean       | true   |
| speed      | 滚动速率 (px/s)                                            | Number        | 50     |

### Prop（direction=vertical）

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| list         | 纵向滚动数据列表               | Array | []               |
| speed        | 滚动的速度                         | Number | 50               |
| standTime         | 停留时间(毫秒) | Number | 1000                |
| complexAm | 稍复杂的动画，耗能会高     | Boolean | false |
| height          | 每一个滚动列的高度(px)，注意：在使用 slot 插槽定义滚动单元时，按照实际高度修改此值                 | Number | 40              |
| closeMode  | 是否启用右侧关闭图标，可以通过slot[name=rightIcon]自定义图标                                   | Boolean       | false  |

### Event

| 字段  | 说明             | 回调参数     |
| ----- | ---------------- | ------------ |
| click | 外层点击事件回调 | event: Event |
| close | 关闭通知栏时触发 | event: Event |