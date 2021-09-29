# Badge 徽标

### 介绍

出现在图标或文字右上角的红色圆点、数字或者文字，表示有新内容或者待处理的信息。

### 安装

```javascript

import { createApp } from 'vue';
// vue
import { Badge } from '@nutui/nutui';
// taro
import { Badge } from '@nutui/nutui-taro';

const app = createApp();
app.use(Badge);

```

### 代码实例

### 基本用法

```html
  <nut-badge :value="8" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge :value="76" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge value="NEW" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge dot class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
```

### 最大值

```html
  <nut-badge :value="200" :max="9" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge :value="200" :max="20" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge :value="200" :max="99" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
```

### 自定义颜色

```html
  <nut-badge
        :value="8"
        class="item"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge
        :value="76"
        class="item"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge
        value="NEW"
        class="item"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge
        dot
        class="item"
        color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
      >
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
```

### 自定义徽标内容

```html
  <nut-badge class="item">
    <template #icons>
      <nut-icon name="Check" color="#ffffff" size="12"></nut-icon>
    </template>
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge class="item">
    <template #icons>
      <nut-icon name="link" color="#ffffff" size="12"></nut-icon>
    </template>
    <nut-avatar class="demo-svg" shape="square"></nut-avatar></nut-badge>
  <nut-badge class="item">
    <template #icons>
      <nut-icon name="download" color="#ffffff" size="12"></nut-icon>
    </template>
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
```

### 自定义位置

```html
  <nut-badge :value="8" top="5" right="5" class="item">
    <div class="demo-svg"></div >
  </nut-badge>
  <nut-badge :value="76" top="10" right="10" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
  <nut-badge value="NEW" class="item">
    <nut-avatar class="demo-svg" shape="square"></nut-avatar>
  </nut-badge>
```

### 独立展示

```html
  <nut-badge :value="8" class="item"> </nut-badge>
  <nut-badge :value="76" class="item"> </nut-badge>
  <nut-badge value="NEW" class="item"> </nut-badge>
```


### Prop  

| 字段             | 说明                                 | 类型      | 默认值   |
|-----------------|--------------------------------------|----------|---------|
| value           | 显示的内容                             | String   | -       |
| max             | value 为数值时，最大值                  | Number   | `10000` |
| z-index         | 徽标的 z-index 值                      | Number   |  `10`   |
| dot             | 是否为小点                             | Boolean  | `false` |
| hidden          | 是否隐藏                               | Boolean  | `false` |  
| top             | 上下偏移量，支持单位设置，可设置为：5px 等  | Number   | `0`     |  
| right           | 左右偏移量，支持单位设置，可设置为：5px 等  | Number   | `0`     |                                          

