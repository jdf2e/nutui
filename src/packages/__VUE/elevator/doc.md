# Elevator 电梯楼层

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
app.use(Elevator);
```

### 基本用法

``` html
<nut-elevator :index-list="dataList" :height="260" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
```
``` javascript
setup() {
    const state = reactive({
      acceptKey: 'num',
      dataList: [
        {
          title: 'A',
          list: [
            {
              name: '<span>安徽</span>',
              id: 1
            }
          ]
        }
        ...
      ],
      dataList2: [
        {
          num: '一',
          list: [
            {
              name: '北京',
              id: 1
            }
          ]
        }
        ...
      ]
    });

    const clickItem = (key: string, item: any) => {
      console.log(key, JSON.stringify(item));
    };

    const clickIndex = (key: string) => {
      console.log(key);
    };

    return { ...toRefs(state), clickItem, clickIndex };
}
```

### 自定义索引

``` html
<nut-elevator :index-list="dataList2" :height="220" :acceptKey="acceptKey" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
```

## API

### Prop

| 字段                   | 说明                                                             | 类型    | 默认值 |
|------------------------|----------------------------------------------------------------|---------|------|
| height                 | 电梯区域的高度                                                    | Number、String  | `200px`
| accept-key             | 索引 key 值                                                      | String  | `title` |
| index-list             | 索引列表                                                         | Array（item需包含 id、name属性, name支持传入 html 结构）  | `[{id: 0, name: ''}]` |

### Event

| 名称  | 说明     | 回调参数    |
|-------|----------|-------------|
| click-item | 点击内容 | key: string, item: { id: 0, name: '' } |
| click-index | 点击索引 | key: string |


