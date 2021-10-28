# Tag 标签

### 介绍

用于标记和分类的标签。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Tag } from '@nutui/nutui';
// taro
import { Tag } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tag);

```

### 代码实例

### 基础用法

```html
 <nut-tag type="primary">标签</nut-tag>
 <nut-tag type="success">标签</nut-tag>
 <nut-tag type="danger">标签</nut-tag>
 <nut-tag type="warning">标签</nut-tag>
```

### 空心样式

```html
 <nut-tag plain>标签</nut-tag>
```


### 圆角样式

```html
 <nut-tag round type="primary">标签</nut-tag>
```


### 标记样式

```html
 <nut-tag mark type="primary">标签</nut-tag>
```


### 可关闭标签

```html
 <nut-tag v-if="show" closeable  @close="close" type="primary">标签</nut-tag>
```


### 自定义颜色

```html
 <nut-tag color="#FA685D">标签</nut-tag>
 <nut-tag color="#E9E9E9" text-color="#999999">标签</nut-tag>
 <nut-tag color="#FA2400" plain>标签</nut-tag>
```



### Prop  

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|--------------------------------------------------|---------|-----------|
| type       | 标签类型，可选值为primary success danger warning | String  | `default` |
| color      | 标签颜色                                         | String  | -         |
| text-color | 文本颜色，优先级高于color属性                    | String  | `white`   |
| plain      | 是否为空心样式                                   | Boolean | `false`   |
| round      | 是否为圆角样式                                   | Boolean | `false`   |
| mark       | 是否为标记样式                                   | Boolean | `false`   |
| closeable  | 是否为可关闭标签                                 | Boolean | `false`   |


### Slots

| 名称    | 说明         |
|---------|--------------|
| default | 标签显示内容 |

### Event

| 事件名称 | 说明     | 回调参数 |
|----------|----------|----------|
| close    | 关闭事件 | event    |
