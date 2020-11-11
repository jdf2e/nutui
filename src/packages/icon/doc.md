# Icon 图标组件

### 介绍

基于 IconFont 字体的图标集，可以通过 Icon 组件使用。

### 安装

``` javascript
import { createApp } from 'vue';
import { Icon } from '@nutui/nutui';

const app = createApp();
app.use(Icon);

```

## 代码演示

### 基础用法

`Icon` 的 `name` 属性支持传入图标名称或图片链接。

```html
<nut-icon name="wifi"></nut-icon>
<nut-icon name="mail"></nut-icon>
```

### 图标颜色

`Icon` 的 `color` 属性用来设置图标的颜色。

```html
<nut-icon name="mail" color="#fa2c19"></nut-icon>
<nut-icon name="mail" color="#64b578"></nut-icon>
```

### 图标大小

`Icon` 的 `size` 属性用来设置图标的尺寸大小，默认单位为 `px`。

```html
<nut-icon name="mail"></nut-icon>
<nut-icon name="mail" size="24px"></nut-icon>
<nut-icon name="mail" size="16px"></nut-icon>
```

### 自定义图标

如果需要在现有 Icon 的基础上使用更多图标，可以引入第三方 iconfont 对应的字体文件和 CSS 文件，之后就可以在 Icon 组件中直接使用。

```css
/* 引入第三方或自定义的字体图标样式 */
@font-face {
  font-family: 'my-icon';
  src: url('./my-icon.ttf') format('truetype');
}

.my-icon {
  font-family: 'my-icon';
}

.my-icon-extra::before {
  content: '\e626';
}
```

```html
<!-- 通过 class-prefix 指定类名为 my-icon -->
<nut-icon class-prefix="my-icon" name="extra" />
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

