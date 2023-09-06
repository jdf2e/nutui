# Backtop 返回顶部

### 介绍

提供较长的页面快捷返回顶部功能。

### 安装

```js
import { createApp } from 'vue';
import { Backtop } from '@nutui/nutui-taro';

const app = createApp();
app.use(Backtop);
```

### 基础用法

```html
<view class="demo">
  <nut-backtop>
    <template #content>
      <div v-for="(item, index) in 24" class="test">{{index}}</div>
    </template>
  </nut-backtop>
</view>
<style>
  .test {
    padding: 12px 0 12px 20px;
    border-top: 1px solid #eee;
  }
</style>
```

### API

### Props

| 参数     | 说明                   | 类型   | 默认值  |
| -------- | ---------------------- | ------ | ------- |
| height   | 滚动区域的高度         | string | `100vh` |
| bottom   | 距离页面底部距离       | number | `20`    |
| right    | 距离页面右侧距离       | number | `10`    |
| distance | 页面垂直滚动多高后出现 | number | `200`   |
| z-index  | 设置组件页面层级       | number | `10`    |

### Events

| 事件名 | 说明               | 回调参数            |
| ------ | ------------------ | ------------------- |
| click  | 按钮点击时触发事件 | `event: MouseEvent` |

### Slots

| 名称    | 说明                 |
| ------- | -------------------- |
| content | 滚动容器中包含的内容 |
| icon    | 返回到顶部，按钮内容 |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                       | 默认值    |
| -------------------------- | --------- |
| --nut-backtop-border-color | _#e0e0e0_ |
