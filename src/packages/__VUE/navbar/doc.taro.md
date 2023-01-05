# NavBar 头部导航

### 介绍 

提供导航功能，常用于页面顶部。

### 安装

```javascript

import { createApp } from 'vue';
import { Navbar, Tabs, TabPane } from '@nutui/nutui-taro';

const app = createApp();
app.use(Navbar);
app.use(Tabs);
app.use(TabPane);
```

### 基础用法

:::demo
```html
<template>
  <nut-navbar @on-click-back="back" @on-click-title="title" title="订单详情">
    <template #left>
      <div>返回</div>
    </template>
    <template #right>
      <ShareN width="16px"></ShareN>
    </template>
  </nut-navbar>

  <nut-navbar
    @on-click-back="back"
    @on-click-title="title"
    @on-click-right="rightClick"
    title="浏览记录"
    desc="清空"
  ></nut-navbar>

  <nut-navbar
    :left-show="false"
    @on-click-back="back"
    @on-click-title="title"
    @on-click-icon="icon"
    @on-click-right="rightClick"
    title="购物车"
    :titleIcon="true"
    desc="编辑"
  >
    <template #titleIcon>
      <Cart2 width="16px"></Cart2>
    </template>
    <template #right>
      <MoreX class="right" width="16px"></MoreX>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { ShareN, Cart2, MoreX } from '@nutui/icons-vue';
  export default {
  components: { ShareN, Cart2, MoreX },
  setup() {
    const methods = {
      back() {
        alert('Click Back');
      },
      title() {
        alert('Click Title');
      },
      rightClick() {
        alert('Click Right');
      }
    };

    return {
      ...methods,
    };
  }
}
</script>

```
:::

### 自定义导航栏中间内容

:::demo
```html
<template>
  <nut-navbar
    @on-click-back="back"
    @on-click-title="title"
    @on-click-right="rightClick"
    desc="编辑"
  >
    <template #content>
      <nut-tabs v-model="tab1value" @click="changeTab">
        <nut-tab-pane title="标题1"> </nut-tab-pane>
        <nut-tab-pane title="标题2"> </nut-tab-pane>
      </nut-tabs>
    </template>

    <template #right>
      <MoreX class="right" width="16px"></MoreX>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
import { ref } from 'vue';
import { MoreX } from '@nutui/icons-vue';
export default {
  components: { MoreX },
  setup() {
    const tab1value = ref(0);
    const methods = {
      back() {
        alert('Click Back');
      },
      title() {
        alert('Click Title');
      },
      rightClick() {
        alert('Click Right');
      },
      changeTab(tab: any) {
        tab1value.value = tab.paneKey as number;
      },
    };

    return {
      tab1value,
      ...methods
    };
  }
}
</script>
```
:::

### 多 tab 切换导航

:::demo
```html
<template>
  <nut-navbar @on-click-back="back" >
    <template #content>
      <nut-tabs v-model="tab2value" @click="changeTabList">
        <nut-tab-pane title="标题1"> </nut-tab-pane>
        <nut-tab-pane title="标题2"> </nut-tab-pane>
        <nut-tab-pane title="标题3"> </nut-tab-pane>
      </nut-tabs>
    </template>

    <template #right>
      <HorizontalN class="right" width="16px"></HorizontalN>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
  import { ref } from 'vue';
  import { HorizontalN } from '@nutui/icons-vue';
  export default {
    components: { HorizontalN },
    setup() {
    const tab2value = ref(0);
    const methods = {
      back() {
        alert('Click Back');
      },
      changeTabList(tab: any) {
        tab2value.value = tab.paneKey as number;
      }
    };
    return {
      tab2value,
      ...methods
    };
  }
}
</script>

```
:::
## API
### Props

| 参数            | 说明                                                    | 类型    | 默认值  |
|-----------------|--------------------------------------------------------|---------|---------|
| title           | 标题名称                                                 | string  | -       |
| left-text       | 左侧文案                                                 | string  | -       |
| desc            | 右侧描述                                                 | string  | -       |
| left-show       | 是否展示左侧箭头                                          | boolean | `false`   |
| title-icon        | 标题中是否展示 `icon`                                        | boolean  | `false`      |
| border          | 是否显示下边框                                            | boolean  | `false`  |
| fixed           | 是否固定到顶部                                            | boolean  | `false`    |
| placeholder     | 固定在顶部时，是否在标签位置生成一个等高的占位元素              | boolean  | `false`   |
| safe-area-inset-top   | 是否开启顶部安全区适配                                | boolean  | `false`   |
| z-index | 导航栏 `z-index`                                            | number ｜ string  | -       |


### Events
| 事件名  | 说明     | 回调参数    |
|-------|----------|-------------|
| on-click-title | 点击页面标题事件 | event:Event |
| on-click-icon | 点击页面标题icon事件 | event:Event |
| on-click-right | 点击右侧按钮事件 | event:Event |
| on-click-back | 点击左侧图标事件 | event:Event |

### Slots
| 名称  | 说明     |
|-------|----------|
| left | 自定义左侧内容 |
| right | 自定义右侧内容 |
| content |  自定义导航栏中间内容 |
| leftShow  | 左侧箭头自定义图标 |
| titleIcon  | 标题中自定义图标 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/config-provider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- | 
| --nut-navbar-height| _44px_ |
| --nut-navbar-margin-bottom| _20px_ |
| --nut-navbar-padding| _0 16px_ |
| --nut-navbar-background| _var(--nut-white)_ |
| --nut-navbar-box-shadow| _0px 1px 7px 0px rgba(237, 238, 241, 1)_ |
| --nut-navbar-color| _var(--nut-title-color2)_ |
| --nut-navbar-title-base-font| _var(--nut-font-size-2)_ |
| --nut-navbar-title-font| _var(--nut-font-size-2)_ |
| --nut-navbar-title-font-weight| _0_ |
| --nut-navbar-title-font-color| _var(--nut-navbar-color)_ |
| --nut-navbar-title-width| _100px_ |
| --nut-navbar-title-icon-margin| _0 0 0 13px_ |
