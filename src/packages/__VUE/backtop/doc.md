# BackTop 返回顶部

### 介绍

提供较长的页面快捷返回顶部功能。

### 安装

```javascript

import { createApp } from 'vue';
import { BackTop,Icon } from '@nutui/nutui';

const app = createApp();
app.use(BackTop);
app.use(Icon);

```

### 代码实例

### 基本用法

```html
<nut-backtop  el-id="elId" ></nut-backtop>
```

### 设置出现位置

```html
<nut-backtop :distance="200" ></nut-backtop>
```

### 自定义样式

```html
<nut-backtop @click="handleClick" el-id="elId" :distance="100" :bottom="90" ><div>无</div></nut-backtop>
```

### click事件

```html
<nut-backtop @click="handleClick" ></nut-backtop>
```

```html
<script>
export default createDemo({
  setup(props, { emit }) {
    const handleClick = () => {
      console.log('触发返回顶部');
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

| 字段            | 说明                 | 类型    | 默认值  |
|-----------------|------------------------------------------|---------|---------|
| el-id           | 获取监听元素的父级元素         | String | -       |
| bottom         | 距离页面底部距离    | Number  | `20`       |
| right        | 距离页面右侧距离      | Number |  `10`  |
| distance     | 页面垂直滚动多高后出现   | Number  | `200`      |
| z-index         | 设置组件页面层级   | Number  | `10`       |  
| is-animation         | 是否有动画,和duration参数互斥   | Boolean  | `true`       |  
| duration         | 设置动画持续时间   | Number  | `1000`       |                                          

### Event
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 按钮点击时触发事件 | event: MouseEvent |