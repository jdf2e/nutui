# Elevator

### Intro

It is used to quickly locate the list and display the index

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { Elevator } from '@nutui/nutui';
// taro
import { Elevator } from '@nutui/nutui-taro';

const app = createApp();
app.use(Elevator);
```

### Basic Usage

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
                name: 'AnHui',
                id: 1
              }
            ]
          },
          {
            title: 'B',
            list: [
              {
                name: 'BeiJing',
                id: 2
              }
            ]
          },
          {
            title: 'G',
            list: [
              {
                name: 'GuangXi',
                id: 3
              },
              {
                name: 'GuangDong',
                id: 4
              }
            ]
          },
          {
            title: 'H',
            list: [
              {
                name: 'HuNan',
                id: 5
              },
              {
                name: 'HuBei',
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

### Custom index

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
            num: 'One',
            list: [
              {
                name: 'BeiJing',
                id: 1
              },
              {
                name: 'ShangHai',
                id: 2
              },
              {
                name: 'ShenZhen',
                id: 3
              },
              {
                name: 'GuangZhou',
                id: 4
              },
              {
                name: 'HangZhou',
                id: 5
              }
            ]
          },
          {
            num: 'Two',
            list: [
              {
                name: 'ChengDu',
                id: 6
              },
              {
                name: 'XiAn',
                id: 7
              },
              {
                name: 'TianJin',
                id: 8
              },
              {
                name: 'WuHan',
                id: 9
              },
              {
                name: 'ChangSha',
                id: 10
              },
              {
                name: 'ChongQin',
                id: 11
              },
              {
                name: 'SuZhou',
                id: 12
              },
              {
                name: 'NanJing',
                id: 13
              }
            ]
          },
          {
            num: 'Three',
            list: [
              {
                name: 'XiNing',
                id: 14
              },
              {
                name: 'LanZhou',
                id: 15
              },
              {
                name: 'ShiJiaZhuang',
                id: 16
              },
              {
                name: 'QinHuangDao',
                id: 17
              },
              {
                name: 'DaLian',
                id: 18
              },
              {
                name: 'HaErBin',
                id: 19
              },
              {
                name: 'ChangChun',
                id: 20
              },
              {
                name: 'TaiYuan',
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

### Index ceiling

:::demo

``` html
<template>
  <nut-elevator :index-list="dataList3" :is-sticky="true" :height="220"  @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
        dataList3: [
          {
            title: 'A',
            list: [
              {
                name: 'AnHui',
                id: 1
              }
            ]
          },
          {
            title: 'B',
            list: [
              {
                name: 'BeiJing',
                id: 2
              }
            ]
          },
          {
            title: 'C',
            list: [
              {
                name: 'ChongQin',
                id: 3
              }
            ]
          },
          {
            title: 'F',
            list: [
              {
                name: 'FuJian',
                id: 4
              }
            ]
          },
          {
            title: 'G',
            list: [
              {
                name: 'GuangXi',
                id: 5
              },
              {
                name: 'GuangDong',
                id: 6
              },
              {
                name: 'GanSu',
                id: 7
              },
              {
                name: 'GuiZhou',
                id: 8
              }
            ]
          },
          {
            title: 'H',
            list: [
              {
                name: 'HuNan',
                id: 9
              },
              {
                name: 'HuBei',
                id: 10
              },
              {
                name: 'HaiNan',
                id: 11
              },
              {
                name: 'HeBei',
                id: 12
              },
              {
                name: 'HeNan',
                id: 13
              },
              {
                name: 'HeiLongJiang',
                id: 14
              }
            ]
          },
          {
            title: 'J',
            list: [
              {
                name: 'JiLin',
                id: 15
              },
              {
                name: 'JiangSu',
                id: 16
              },
              {
                name: 'JiangXi',
                id: 17
              }
            ]
          },
          {
            title: 'L',
            list: [
              {
                name: 'LiaoNing',
                id: 18
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

### Custom Content

:::demo

``` html
<template>
  <nut-elevator :index-list="dataList" :height="260" @click-item="clickItem" @click-index="clickIndex">
      <template v-slot:default="slotProps">
        <nut-icon name='JD' size="12"></nut-icon>
        <span :style="{marginLeft: '15px'}">{{ slotProps.item.name }}</span>
      </template>
  </nut-elevator>
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
                name: 'AnHui',
                id: 1
              }
            ]
          },
          {
            title: 'B',
            list: [
              {
                name: 'BeiJing',
                id: 2
              }
            ]
          },
          {
            title: 'G',
            list: [
              {
                name: 'GuangXi',
                id: 3
              },
              {
                name: 'GuangDong',
                id: 4
              }
            ]
          },
          {
            title: 'H',
            list: [
              {
                name: 'HuNan',
                id: 5
              },
              {
                name: 'HuBei',
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

## API

### Props

| Attribute                   | Description                                                             | Type    | Default |
|------------------------|----------------------------------------------------------------|---------|------|
| height                 | Height of elevator area                                                    | Number、String  | `200px`
| accept-key             | Index key value                                                      | String  | `title` |
| index-list             | Index list                                                         | Array（`item` needs to contain `id` and `name` attributes, and `name` supports passing in `html` structure）  | `[{id: 0, name: ''}]` |
| is-sticky            | Whether the index is ceiling                                                    | Boolean  | `false` |
| space-height             | Up and down spacing of right anchor point              | Number  | `23` |
| title-height             | Height of left index                                                     | Number  | `35` |

### Slots

| Attribute                   | Description                                                             |
|------------------------|----------------------------------------------------------------|
| default                 | Customize the contents of each data under the left index        |

### Events

| Event  | Description     | Arguments    |
|-------|----------|-------------|
| click-item | Click content | key: string, item: { id: 0, name: '' } |
| click-index | Click index | key: string |

### API

| Event           | Description                   | Arguments           |
| ---------------- | ---------------------- | ------------ |
| scrollTo         | Scroll to the location of the corresponding index       | index:number |