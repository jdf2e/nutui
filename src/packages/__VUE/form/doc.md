# Form 表单组件

### 介绍

用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Cell 组件搭配使用。

### 安装

    
``` javascript
import { createApp } from 'vue';
// vue
import { Form,Cell,CellGroup } from '@nutui/nutui';
// taro
import { Form,Cell,CellGroup  } from '@nutui/nutui-taro';

const app = createApp();
app.use(Form);
app.use(Cell);
app.use(CellGroup);

```


### 基础用法



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name         | 图标名称或图片链接               | String | -                |
| color        | 图标颜色                         | String | -                |
| size         | 图标大小，如 '20px' '2em' '2rem' | String | -                |
| class-prefix | 类名前缀，用于使用自定义图标     | String | 'nutui-iconfont' |
| tag          | HTML 标签                        | String | 'i'              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |
    