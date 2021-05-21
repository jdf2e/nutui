# Tabbar 标签栏组件

### 介绍

底部导航常用场景
### 安装

``` javascript
import { createApp } from 'vue';
import { Tabbar,Icon } from '@nutui/nutui';

const app = createApp();
app.use(Tabbar).use(Icon);

```

## 代码示例

### 基础用法

``` html
<nut-tabbar @tab-switch="tabSwitch">
  <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
  <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
  <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
  <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
  <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
</nut-tabbar>
```

``` javascript
setup() {
  function tabSwitch(item: object, index: number) {
    console.log(item, index);
  }
  return {
    tabSwitch,
  };
},
```

### 自定义选中

``` html
<nut-tabbar v-model:visible="active">
  <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
  <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
  <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
  <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
  <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
</nut-tabbar>
```
``` javascript
setup() {
  const active = ref(2)
  return {
    active
  };
},
```
### 徽标提示

``` html
<nut-tabbar>
  <nut-tabbar-item tab-title="首页" icon="home" num="11"></nut-tabbar-item>
  <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
  <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
  <nut-tabbar-item tab-title="购物车" icon="cart" num="110"></nut-tabbar-item>
  <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
</nut-tabbar>
```
### 自定义颜色

``` html
<nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
  <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
  <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
  <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
  <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
  <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
</nut-tabbar>
```
### 三个图标的标签栏

``` html
<nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
  <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
  <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
  <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
</nut-tabbar>
```
### 固定底部，可自由跳转

``` html
<nut-tabbar :bottom="true">
  <nut-tabbar-item tab-title="首页" href="" icon="home"></nut-tabbar-item>
  <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
  <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
  <nut-tabbar-item
    tab-title="购物车"
    href="https://m.jd.com"
    icon="cart"
  ></nut-tabbar-item>
  <nut-tabbar-item
    tab-title="我的"
    href="######"
    icon="my"
  ></nut-tabbar-item>
</nut-tabbar>
```
### Prop

### nut-tabbar

| 字段            | 说明               | 类型   | 默认值  |
|-----------------|--------------------|--------|---------|
| v-model:visible | 选中标签的索引值   | number | 0       |
| bottom          | 是否固定在页面底部 | Booble | false   |
| unactive-color  | icon未激活的颜色   | string | #7d7e80 |
| active-color    | icon激活的颜色     | string | #1989fa |

### tabbar-item

| 字段      | 说明                                      | 类型   | 默认值 |
|-----------|-------------------------------------------|--------|--------|
| tab-title | 标签页的标题                              | String | --     |
| icon      | 标签页显示的[图标名称](#/icon) 或图片链接 | String | --     |
| href      | 标签页的跳转链接                          | String | --     |
| num       | 页签右上角的数字角标，超出99之后为99+     | Number | --     |


### Event

| 事件名称   | 说明               | 回调参数           |
|------------|--------------------|--------------------|
| tab-switch | 切换页签时触发事件 | 点击的数据和索引值 |



