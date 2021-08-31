# Elevator 电梯组件

### 介绍

用于列表快速定位以及索引的显示

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { Elevator } from '@nutui/nutui';
// taro
import { Elevator } from '@nutui/nutui-taro';

const app = createApp();
app.use(Elevator).use(Icon);

```

## API

### Prop

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| show-indicator         | 是否显示索引值提示符                                                         | Boolean  | `true`     |
| init-index             | 初始化进入后，当前定位到的索引值                                                        | Number/String  | `0`    |
| index-list             | 索引字符列表                                                         | String[]  | -     |

### Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click | 点击事件 | event:Event |


