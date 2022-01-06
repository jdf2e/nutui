# BackTop 返回顶部

### 介绍

提供较长的页面快捷返回顶部功能。

### 安装

```javascript

import { createApp } from 'vue';
import { BackTop,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(BackTop);
app.use(Icon);
```

### 代码实例

### 基本用法

```html
<nut-backtop height="100vh">
  <template v-slot:content>
    <div class="text-data">我是测试数据1</div>
    <div class="text-data">我是测试数据2</div>
    <div class="text-data">我是测试数据3</div>
    <div class="text-data">我是测试数据4</div>
    <div class="text-data">我是测试数据5</div>
    <div class="text-data">我是测试数据6</div>
    ...
  </template>
</nut-backtop>
```

### 设置出现位置

```html
<nut-backtop :distance="200"></nut-backtop>
```

### 自定义样式

```html
<nut-backtop :distance="100" :bottom="90"><div>自定义内容</div></nut-backtop>
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
| height           | 滚动区域的高度         | String | `100vh`       |
| bottom         | 距离页面底部距离    | Number  | `20`       |
| right        | 距离页面右侧距离      | Number |  `10`  |
| distance     | 页面垂直滚动多高后出现   | Number  | `200`      |
| z-index         | 设置组件页面层级   | Number  | `10`       |                                          

### Event
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 按钮点击时触发事件 | event: MouseEvent |