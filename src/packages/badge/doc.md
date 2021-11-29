# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

``` javascript
import { Badge } from '@nutui/nutui';
```

## 代码实例

### 基本用法

```tsx
<Badge value={8}>
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value={76}>
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value="NEW">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge dot>
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
```

### 最大值

```tsx
<Badge value={200} max={9}>
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value={200} max={20}>
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value={200} max={99}>>
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
```

### 自定义颜色

```tsx
<Badge value={8} color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value={76} color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value="NEW" color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge dot color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
```

### 自定义徽标内容

```tsx
<Badge icon="checklist">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge icon="link">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge icon="download">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
```

### 自定义位置

```tsx
<Badge value={8} top="5" right="5">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value={76} top="10" right="10">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
<Badge value="NEW">
  <Avatar icon="my" shape="square"></Avatar>
</Badge>
```

### 独立展示

```tsx
<Badge value={8}> </Badge>
<Badge value={76}> </Badge>
<Badge value="NEW"> </Badge>
```

## API

### Props

| 字段    | 说明                                       | 类型    | 默认值    |
|---------|--------------------------------------------|---------|-----------|
| value   | 显示的内容                                 | String  | -         |
| max     | value 为数值时，最大值                     | Number  | `10000`   |
| z-index | 徽标的 z-index 值                          | Number  | `10`      |
| dot     | 是否为小点                                 | Boolean | `false`   |
| hidden  | 是否隐藏                                   | Boolean | `false`   |
| top     | 上下偏移量，支持单位设置，可设置为：5px 等 | Number  | `0`       |
| right   | 左右偏移量，支持单位设置，可设置为：5px 等 | Number  | `0`       |
| color   | 徽标背景颜色                               | String  | `#fa2c19` |
| icons   | 徽标自定义                               | String  | - |



