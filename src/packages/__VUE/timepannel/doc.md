# TimeSelect 配送时间

### 介绍

用于xxx

### 安装

``` javascript
import { createApp } from 'vue';
// vue
import { TimeSelect } from '@nutui/nutui';
// taro
import { TimeSelect } from '@nutui/nutui-taro';

const app = createApp();
app.use(TimeSelect);
```

### 基础用法

``` html
<nut-timeselect></nut-timeselect>
```
``` javascript
setup() {
    const state = reactive({
      
    });

    return { ...toRefs(state) };
  }
```

## API

### Props

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| height                 | 电梯区域的高度                                                    | Number、String  | `200px`


### Events

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click-item | 点击内容 | key: string, item: { id: 0, name: '' } |


