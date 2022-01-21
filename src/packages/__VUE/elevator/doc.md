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

:::demo

``` html
<template>
  <nut-elevator :index-list="dataList" :height="260" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        acceptKey: 'num',
        dataList: [
          {
            title: 'A',
            list: [
              {
                name: '安徽',
                id: 1
              }
            ]
          },
          {
            title: 'B',
            list: [
              {
                name: '北京',
                id: 2
              }
            ]
          },
          {
            title: 'G',
            list: [
              {
                name: '广西',
                id: 3
              },
              {
                name: '广东',
                id: 4
              }
            ]
          },
          {
            title: 'H',
            list: [
              {
                name: '湖南',
                id: 5
              },
              {
                name: '湖北',
                id: 6
              }
            ]
          }
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
  };
</script>
```

:::

### 自定义索引

:::demo

``` html
<template>
  <nut-elevator :index-list="dataList2" :height="220" :acceptKey="acceptKey" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        acceptKey: 'num',
        dataList2: [
          {
            num: '一',
            list: [
              {
                name: '北京',
                id: 1
              },
              {
                name: '上海',
                id: 2
              },
              {
                name: '深圳',
                id: 3
              },
              {
                name: '广州',
                id: 4
              },
              {
                name: '杭州',
                id: 5
              }
            ]
          },
          {
            num: '二',
            list: [
              {
                name: '成都',
                id: 6
              },
              {
                name: '西安',
                id: 7
              },
              {
                name: '天津',
                id: 8
              },
              {
                name: '武汉',
                id: 9
              },
              {
                name: '长沙',
                id: 10
              },
              {
                name: '重庆',
                id: 11
              },
              {
                name: '苏州',
                id: 12
              },
              {
                name: '南京',
                id: 13
              }
            ]
          },
          {
            num: '三',
            list: [
              {
                name: '西宁',
                id: 14
              },
              {
                name: '兰州',
                id: 15
              },
              {
                name: '石家庄',
                id: 16
              },
              {
                name: '秦皇岛',
                id: 17
              },
              {
                name: '大连',
                id: 18
              },
              {
                name: '哈尔滨',
                id: 19
              },
              {
                name: '长春',
                id: 20
              },
              {
                name: '太原',
                id: 21
              }
            ]
          }
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
  };
</script>
```

:::

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


