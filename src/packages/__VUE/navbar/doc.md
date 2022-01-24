# NavBar 头部导航

### 介绍 


提供导航功能。

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

#
### 基本用法

:::demo
```html
  <template>
<nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-send="send"
      title="订单详情"
      icon="share-n"
    ></nut-navbar>
    <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-clear="clear"
      title="浏览记录"
      desc="清空"
    ></nut-navbar>
    <nut-navbar
      :left-show="false"
      @on-click-title="title"
      @on-click-icon="icon"
      @on-click-clear="edit"
      @on-click-send="more"
      title="购物车"
      titIcon="cart2"
      desc="编辑"
      icon="more-x"
    ></nut-navbar>
  
  </template>

  <script lang="ts">
  import { ref } from 'vue';
  export default {
  setup() {
    const methods = {
      back() {
        alert('header头部， 点击返回');
      },
      title() {
        alert('header头部， 点击title');
      },
      icon() {
        alert('icon');
      },
      send() {
        alert('发送');
      },
      edit() {
        alert('编辑');
      },
      more() {
        alert('更多');
      },
      clear() {
        alert('清空');
      },
    };

    return {
      ...methods,
    };
  }
}
</script>

```
:::

### 设置slot:content可以自定义导航栏中间内容

:::demo
```html
<template>
 <nut-navbar
      @on-click-back="back"
      @on-click-title="title"
      @on-click-clear="edit"
      @on-click-send="list"
      desc="编辑"
      icon="horizontal-n"
    >
      <template #content>
        <nut-tabs v-model="tab1value" @click="changeTab">
          <nut-tabpane title="商品"> </nut-tabpane>
          <nut-tabpane title="店铺"> </nut-tabpane>
        </nut-tabs>
      </template>
    </nut-navbar>
  </template>

  <script lang="ts">
    import { ref } from 'vue';
    export default {
    setup() {
      const tab1value = ref(0);
      const methods = {
        back () {
          alert('header头部， 点击返回');
        },
        title () {
          alert('header头部， 点击title');
        },
        edit () {
          alert('编辑');
        },
        list () {
          alert('列表');
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

### 多tab切换导航及增加右侧按钮

:::demo
```html
<template>
   <nut-navbar @on-click-back="back" @on-click-send="list" icon="more-x">
      <template #content>
        <nut-tabs v-model="tab2value" @click="changeTabList">
          <nut-tabpane title="商品"> </nut-tabpane>
          <nut-tabpane title="评价"> </nut-tabpane>
          <nut-tabpane title="详情"> </nut-tabpane>
          <nut-tabpane title="推荐"> </nut-tabpane>
        </nut-tabs>
      </template>
      <template #icons>
        <nut-icon class="icon" name="share" @on-click-slot-send="morelist"></nut-icon>
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
          alert('header头部， 点击返回');
        },
        list() {
          alert('列表');
        },
        morelist () {
          alert('多个更多');
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

### Prop  

| 字段            | 说明                                                                                           | 类型    | 默认值  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| title           | 标题名称                                                                                       | String  | -       |
| desc            | 右侧描述                                                                                       | String  | -       |
| left-show        | 是否展示左侧箭头                                                                              | Boolean | false   |
| icon            | 左侧 [图标名称](#/icon) 或图片链接                                                             | String  | -       |
| tit-icon         | 标题带icon                                                         | String  | -       |                                          

### Event
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| title | 点击页面标题事件 | event:Event |
| right | 点击右侧按钮事件 | event:Event |
| back | 点击返回上一页事件 | event:Event |

### Slot
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| icons | 增加右侧图标 |  |
| content |  自定义导航栏中间内容 |  |