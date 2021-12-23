# NavBar 头部导航

### 介绍 


提供导航功能。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Navbar,Icon } from '@nutui/nutui';
// taro
import { Navbar,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Navbar);
app.use(Icon);

```

#
### 基本用法

```html
  <nut-navbar  @on-click-back="back" @on-click-title="title" @on-click-send="send" title="订单详情" icon="share"></nut-navbar>
  <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-clear="clear"  title="浏览记录" desc="清空"></nut-navbar>
  <nut-navbar :left-show="false" @on-click-title="title" @on-click-icon="icon" @on-click-clear="edit"  @on-click-send="more" title="购物车" titIcon="locationg3" desc="编辑" icon="more"></nut-navbar>

```

### 设置slot:tabs可以增加tab

```html
    <nut-navbar @on-click-back="back" @on-click-title="title" @on-click-clear="edit" @on-click-send="list" desc="编辑" icon="horizontal">
      <template v-slot:tabs>
        <nut-tab>
          <nut-tab-panel tab-title="商品"><p class="content">这里是页签全部内容</p></nut-tab-panel>
          <nut-tab-panel tab-title="店铺"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
        </nut-tab>
      </template>
    </nut-navbar>
```

### 多tab切换导航及增加右侧按钮

```html
    <nut-navbar @on-click-back="back" icon="share" @on-click-send="send">
      <template v-slot:tabs>
        <nut-tab>
          <nut-tab-panel tab-title="商品"><p class="content">这里是页签全部内容</p></nut-tab-panel>
          <nut-tab-panel tab-title="评价"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
          <nut-tab-panel tab-title="详情"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
          <nut-tab-panel tab-title="推荐"><p class="content">这里是页签待付款内容</p></nut-tab-panel>
        </nut-tab>
      </template>

      <template #icons >
        <nut-icon class="icon" name="more" @on-click-slot-send="morelist"></nut-icon>
      </template>
    </nut-navbar>
```

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