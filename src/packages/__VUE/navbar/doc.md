# NavBar 头部导航

### 介绍 

提供导航功能，常用于页面顶部。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Navbar,Icon,Tabs, TabPane } from '@nutui/nutui';
// taro
import { Navbar,Icon,Tabs, TabPane } from '@nutui/nutui-taro';

const app = createApp();
app.use(Navbar);
app.use(Icon);
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
      <nut-icon class="right" name="share-n"></nut-icon>
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
    titIcon="cart2"
    desc="编辑"
  >
    <template #right>
      <nut-icon class="right" name="more-x"></nut-icon>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
  import { ref } from 'vue';
  export default {
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
        <nut-tabpane title="标题1"> </nut-tabpane>
        <nut-tabpane title="标题2"> </nut-tabpane>
      </nut-tabs>
    </template>

    <template #right>
      <nut-icon class="right" name="more-x"></nut-icon>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
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
        <nut-tabpane title="标题1"> </nut-tabpane>
        <nut-tabpane title="标题2"> </nut-tabpane>
        <nut-tabpane title="标题3"> </nut-tabpane>
      </nut-tabs>
    </template>
    <template #icons>
      <nut-icon class="icon" name="share"></nut-icon>
    </template>

    <template #right>
      <nut-icon class="right" name="horizontal-n"></nut-icon>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
  import { ref } from 'vue';
  export default {
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

| 字段            | 说明                                                    | 类型    | 默认值  |
|-----------------|--------------------------------------------------------|---------|---------|
| title           | 标题名称                                                 | String  | -       |
| left-text `v3.1.21`       | 左侧文案                                                 | String  | -       |
| desc            | 右侧描述                                                 | String  | -       |
| left-show       | 是否展示左侧箭头                                          | Boolean | false   |
| tit-icon        | 标题中插入icon                                           | String  | -       |
| border `v3.1.21`          | 是否显示下边框                                            | Boolean  | false  |
| fixed           | 是否固定到顶部                                            | Boolean  | false    |
| placeholder `v3.1.21`     | 固定在顶部时，是否在标签位置生成一个等高的占位元素              | Boolean  | false   |
| safe-area-inset-top   | 是否开启顶部安全区适配                                | Boolean  | false   |
| z-index `v3.1.21` | 导航栏 z-index                                            | Number ｜ String  | -       |


### Events
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| on-click-title | 点击页面标题事件 | event:Event |
| on-click-icon | 点击页面标题icon事件 | event:Event |
| on-click-right | 点击右侧按钮事件 | event:Event |
| on-click-back | 点击左侧图标事件 | event:Event |

### Slots
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| left | 自定义左侧内容 |  |
| right | 自定义右侧内容 |  |
| content |  自定义导航栏中间内容 |  |