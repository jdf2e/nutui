# Temp xx组件

### 介绍

基于 xxxxxxx

### 安装

``` javascript
import { createApp } from 'vue';
import { Temp } from '@nutui/nutui';

const app = createApp();
app.use(Temp);

```

## 代码演示

### 基础用法1

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

```html
<nut-temp name="wifi"></nut-temp>
<nut-temp name="mail"></nut-temp>
```

### 基础用法2

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

```html
<nut-temp name="wifi"></nut-temp>
<nut-temp name="mail"></nut-temp>
```

### 基础用法3

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

```html
<nut-temp name="wifi"></nut-temp>
<nut-temp name="mail"></nut-temp>
```


## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名称或图片链接 | _string_ | - |
| color | 图标颜色 | _string_ | - |
| size | 图标大小，如 `20px` `2em`，默认单位为`px` | _number \| string_ | - |
| class-prefix | 类名前缀，用于使用自定义图标 | _string_ | `nutui-icon` |
| tag | HTML 标签 | _string_ | `i` |

### Events

| 事件名 | 说明           | 回调参数       |
| ------ | -------------- | -------------- |
| click  | 点击图标时触发 | _event: Event_ |

