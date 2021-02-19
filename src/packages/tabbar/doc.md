# Tabbar 列表组件

### 介绍

XXXXXX
### 安装

``` javascript
import { createApp } from 'vue';
import { Tabbar } from '@nutui/nutui';

const app = createApp();
app.use(Tabbar);

```

## 代码示例

### 基础用法

``` html
<nut-tabbar :tabbar-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>
```

``` javascript
// ...
  setup() {
    const tabList = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home',
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category',
      },
      {
        tabTitle: '发现',
        curr: false,
        icon: 'find',
      },
      {
        tabTitle: '购物车',
        curr: false,
        icon: 'cart',
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my',
      },
    ];
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    return {
      ...reactive({
        tabList,
      }),
      tabSwitch,
    };
  },
// ...
```

### 徽标提示

``` html
<nut-tabbar :tabbar-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>
```

``` javascript
// ...
  setup() {
    const tabList = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home',
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category',
      },
      {
        tabTitle: '发现',
        curr: false,
        icon: 'find',
      },
      {
        tabTitle: '购物车',
        curr: false,
        icon: 'cart',
        num: '12'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my',
      },
    ];
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    return {
      ...reactive({
        tabList,
      }),
      tabSwitch,
    };
  },
// ...
```

### 自定义颜色

``` html
<nut-tabbar :tabbar-List="tabList" @tab-switch="tabSwitch" unactiveColor="#7d7e80" activeColor="#1989fa" ></nut-tabbar>
```

``` javascript
// ...
  setup() {
    const tabList = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home',
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category',
      },
      {
        tabTitle: '发现',
        curr: false,
        icon: 'find',
      },
      {
        tabTitle: '购物车',
        curr: false,
        icon: 'cart',
        num: '12'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my',
      },
    ];
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    return {
      ...reactive({
        tabList,
      }),
      tabSwitch,
    };
  },
// ...
```

### 三个图标的标签栏

``` html
<nut-tabbar :tabbar-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>
```

``` javascript
// ...
  setup() {
        const tabList = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home'
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my'
      }
    ];
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    return {
      ...reactive({
        tabList,
      }),
      tabSwitch,
    };
  },
// ...
```

### 固定底部，可自由跳转

``` html
<nut-tabbar :tabbar-List="tabList" @tab-switch="tabSwitch" :bottom="true" ></nut-tabbar>
```

``` javascript
// ...
  setup() {
        const tabList = [
      {
        tabTitle: '首页',
        curr: false,
        icon: 'home'
      },
      {
        tabTitle: '分类',
        curr: false,
        icon: 'category'
      },
      {
        tabTitle: '发现',
        curr: false,
        icon: 'find'
      },
      {
        tabTitle: '购物车',
        curr: false,
        icon: 'cart',
        num: '122'
      },
      {
        tabTitle: '我的',
        curr: false,
        icon: 'my'
      }
    ];
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    return {
      ...reactive({
        tabList,
      }),
      tabSwitch,
    };
  },
// ...
```
### Prop

### nut-tabbar

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| type | 页签栏的样式 based/card：based是默认样式如吸底样式，card类型每个卡片间有边界线 | String | based
| tabbar-list | 渲染数据 ，兼容 tabbar-list 和 tabbarList| Array | []
| bottom | 是否固定在页面底部 |Booble|false|
| unactiveColor | icon未激活的颜色 |string|#7d7e80|
| activeColor | icon激活的颜色 |string|#1989fa|

### tabbar-list

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| tabTitle | 标签页的标题 | String | --
| curr | 是否为选中的标签页 | Booble | false
| icon | 标签页显示的icon | String | --
| href | 标签页的跳转链接 | String | --
| num |页签右上角的数字角标，超出99之后为99+|Number|--


### Event

| 事件名称 | 说明 | 回调参数 
|----- | ----- | ----- 
| tabSwitch | 切换页签时触发事件 | 点击的索引值和对应的数据



