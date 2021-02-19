# BackTop 回到顶部

### 介绍

提供较长的页面快捷回到顶部功能。

### 安装

```javascript

import { createApp } from 'vue';
import { BackTop } from '@nutui/nutui';

const app = createApp();
app.use(BackTop);

```

### 代码实例

### 基本用法

```html
    <nut-backtop  elId="elId" ></nut-backtop>
```

### 设置出现位置

```html
    <nut-backtop :distance="200" ></nut-backtop>
```

### 自定义样式

```html
    <nut-backtop @click="handleClick" elId="elId" :distance="100" :bottom="90" ><div>无</div></nut-backtop>
```

### 设置样式
<nut-backtop>
</nut-backtop>


### click事件

```html
    <nut-backtop @click="handleClick" ></nut-backtop>
```

```html
<script>
export default createDemo({
  setup(props, { emit }) {
    const handleClick = () => {
      console.log('触发回到顶部');
    };

    return {
      handleClick
    };
  }
});
</script>
```


### API

### Prop  

| 字段            | 说明                                                                                           | 类型    | 默认值  |
|-----------------|------------------------------------------------------------------------------------------------|---------|---------|
| elId           | 获取监听元素的父级元素                                                                           | String  | -       |
| bottom         | 距离页面底部距离                                                                                | Number  | -       |
| right        | 距离页面右侧距离                                                                                  | Number |    |
| distance     | 页面垂直滚动多高后出现                                                            | Number  | -       |
| zIndex         | 设置组件页面层级                                                         | Number  | -       |                                          

### Event
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 按钮点击时触发事件 | event:Event |