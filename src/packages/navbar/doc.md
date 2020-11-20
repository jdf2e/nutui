# Navbar 头部导航

### 介绍 


提供导航功能。

### 安装

```javascript

import { createApp } from 'vue';
import { Navbar } from '@nutui/nutui';

const app = createApp();
app.use(Navbar);

```

### 代码示例

### 基本用法

```html
    <nut-navbar leftShow title="订单详情" icon="share"></nut-navbar>
    <nut-navbar leftShow title="浏览记录" desc="清空"></nut-navbar>
    <nut-navbar :leftShow="false" title="购物车" titIcon="locationg3" desc="编辑" icon="more"></nut-navbar>
```

### 增加tab及右侧按钮

```html
    <nut-navbar title="商品" titIcon="locationg3" desc="编辑" icon="horizontal"></nut-navbar>
```

### 多tab切换导航

```html
    <nut-navbar title="商品" titIcon="locationg3" icon="more"></nut-navbar>
```

### 链接

### 展示图标

### API

### Prop

| 字段            | 说明                                                                                           | 类型    | 默认值  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| title           | 标题名称                                                                                       | String  | -       |
| desc            | 右侧描述                                                                                       | String  | -       |
| leftShow        | 是否展示左侧箭头                                                                              | Boolean | false   |
| icon            | 左侧 [图标名称](#/icon) 或图片链接                                                             | String  | -       |

### Event