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


### 基础用法

```html
<view class="demo">
  <nut-backtop @click="click">
    <template v-slot:content>
      <div class="text-data">我是测试数据1</div>
      <div class="text-data">我是测试数据2</div>
      <div class="text-data">我是测试数据3</div>
      <div class="text-data">我是测试数据4</div>
      <div class="text-data">我是测试数据5</div>
      <div class="text-data">我是测试数据6</div>
      <div class="text-data">我是测试数据7</div>
      <div class="text-data">我是测试数据8</div>
      <div class="text-data">我是测试数据9</div>
      <div class="text-data">我是测试数据10</div>
      <div class="text-data">我是测试数据11</div>
      <div class="text-data">我是测试数据12</div>
      <div class="text-data">我是测试数据13</div>
      <div class="text-data">我是测试数据14</div>
      <div class="text-data">我是测试数据15</div>
      <div class="text-data">我是测试数据16</div>
      <div class="text-data">我是测试数据17</div>
      <div class="text-data">我是测试数据18</div>
      <div class="text-data">我是测试数据19</div>
      <div class="text-data">我是测试数据20</div>
      <div class="text-data">我是测试数据21</div>
      <div class="text-data">我是测试数据22</div>
      <div class="text-data">我是测试数据23</div>
      <div class="text-data">我是测试数据24</div>
    </template>
  </nut-backtop>
</view>
<script>
export default {
  setup() {
    const click = () => {
      console.log('click');
    };

    return {
      click
    };
  }
};
</script>
<style lang="scss">
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }
}
</style>
```

### 设置出现位置

```html
<view class="demo">
  <nut-backtop :distance="200">
    <template v-slot:content>
      <div class="text-data">我是测试数据1</div>
      <div class="text-data">我是测试数据2</div>
      <div class="text-data">我是测试数据3</div>
      <div class="text-data">我是测试数据4</div>
      <div class="text-data">我是测试数据5</div>
      <div class="text-data">我是测试数据6</div>
      <div class="text-data">我是测试数据7</div>
      <div class="text-data">我是测试数据8</div>
      <div class="text-data">我是测试数据9</div>
      <div class="text-data">我是测试数据10</div>
      <div class="text-data">我是测试数据11</div>
      <div class="text-data">我是测试数据12</div>
      <div class="text-data">我是测试数据13</div>
      <div class="text-data">我是测试数据14</div>
      <div class="text-data">我是测试数据15</div>
      <div class="text-data">我是测试数据16</div>
      <div class="text-data">我是测试数据17</div>
      <div class="text-data">我是测试数据18</div>
      <div class="text-data">我是测试数据19</div>
      <div class="text-data">我是测试数据20</div>
      <div class="text-data">我是测试数据21</div>
      <div class="text-data">我是测试数据22</div>
      <div class="text-data">我是测试数据23</div>
      <div class="text-data">我是测试数据24</div>
    </template>
  </nut-backtop>
</view>
```

### 自定义样式

```html
<nut-backtop :distance="100" :bottom="90"><div>自定义内容</div></nut-backtop>
```

### click事件

```html
<view class="demo">
  <nut-backtop @click="click">
    <template v-slot:content>
      <div class="text-data">我是测试数据1</div>
      <div class="text-data">我是测试数据2</div>
      <div class="text-data">我是测试数据3</div>
      <div class="text-data">我是测试数据4</div>
      <div class="text-data">我是测试数据5</div>
      <div class="text-data">我是测试数据6</div>
      <div class="text-data">我是测试数据7</div>
      <div class="text-data">我是测试数据8</div>
      <div class="text-data">我是测试数据9</div>
      <div class="text-data">我是测试数据10</div>
      <div class="text-data">我是测试数据11</div>
      <div class="text-data">我是测试数据12</div>
      <div class="text-data">我是测试数据13</div>
      <div class="text-data">我是测试数据14</div>
      <div class="text-data">我是测试数据15</div>
      <div class="text-data">我是测试数据16</div>
      <div class="text-data">我是测试数据17</div>
      <div class="text-data">我是测试数据18</div>
      <div class="text-data">我是测试数据19</div>
      <div class="text-data">我是测试数据20</div>
      <div class="text-data">我是测试数据21</div>
      <div class="text-data">我是测试数据22</div>
      <div class="text-data">我是测试数据23</div>
      <div class="text-data">我是测试数据24</div>
    </template>
  </nut-backtop>
</view>
<script>
export default {
  setup() {
    const click = () => {
      console.log('click');
    };

    return {
      click
    };
  }
};
</script>
<style lang="scss">
.demo {
  .text-data {
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 20px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    width: 100%;
    height: 46px;
    background: rgba(255, 255, 255, 1);
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    line-height: 19px;
    font-size: 13px;
    color: rgba(102, 102, 102, 1);
  }
}
</style>
```

### API

### Props  

| 字段            | 说明                 | 类型    | 默认值  |
|-----------------|------------------------------------------|---------|---------|
| height           | 滚动区域的高度         | String | `100vh`       |
| bottom         | 距离页面底部距离    | Number  | `20`       |
| right        | 距离页面右侧距离      | Number |  `10`  |
| distance     | 页面垂直滚动多高后出现   | Number  | `200`      |
| z-index         | 设置组件页面层级   | Number  | `10`       |                                          

### Events
| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 按钮点击时触发事件 | event: MouseEvent |

### Slots

| 名称    | 说明         |
|---------|--------------|
| content | 	滚动容器中包含的内容 |
| icon | 	返回到顶部，按钮内容 |