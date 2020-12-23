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
<nut-tabbar :tab-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>
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
<nut-tabbar :tab-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>
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
<nut-tabbar :tab-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>
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
<nut-tabbar :tab-List="tabList" @tab-switch="tabSwitch"></nut-tabbar>
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
<nut-tabbar :tab-List="tabList" @tab-switch="tabSwitch" :bottom="true" ></nut-tabbar>
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



