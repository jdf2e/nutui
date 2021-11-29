# Tag 标签

### 介绍

用于标记和分类的标签。

### 安装

``` javascript
import { Tag } from '@nutui/nutui';
```

## 代码实例

### 基础用法

```tsx
<Tag type="primary">标签</Tag>
<Tag type="success">标签</Tag>
<Tag type="danger">标签</Tag>
<Tag type="warning">标签</Tag>
```

### 空心样式

```tsx
<Tag plain>标签</Tag>
```

### 圆角样式

```tsx
<Tag round type="primary">标签</Tag>
```

### 标记样式

```tsx
<Tag mark type="primary">标签</Tag>
```

### 可关闭标签

```tsx
<Tag isShow={isShow} closeable onClick={close} type="primary">标签</Tag>
```

### 自定义颜色

```tsx
<Tag color="#FA685D">标签</Tag>
<Tag color="#E9E9E9" text-color="#999999">标签</Tag>
<Tag color="#FA2400" plain>标签</Tag>
```

## API

### Props

| 字段       | 说明                                             | 类型    | 默认值    |
|------------|--------------------------------------------------|---------|-----------|
| type       | 标签类型，可选值为primary success danger warning | String  | `default` |
| color      | 标签颜色                                         | String  | -         |
| text-color | 文本颜色，优先级高于color属性                    | String  | `white`   |
| plain      | 是否为空心样式                                   | Boolean | `false`   |
| round      | 是否为圆角样式                                   | Boolean | `false`   |
| mark       | 是否为标记样式                                   | Boolean | `false`   |
| closeable  | 是否为可关闭标签                                 | Boolean | `false`   |


### Event

| 事件名称 | 说明     | 回调参数 |
|----------|----------|----------|
| close    | 关闭事件 | event    |

