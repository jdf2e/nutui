# Elevator

### Intro

It is used to quickly locate the list and display the index

### Install

``` javascript
import { createApp } from 'vue';
import { Elevator } from '@nutui/nutui';

const app = createApp();
app.use(Elevator);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-elevator :index-list="dataList" :height="260" @click-item="clickItem" @click-index="clickIndex"></nut-elevator>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    setup() {
      const state = reactive({
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

```vue
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

```vue
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

```vue
<template>
  <nut-elevator :index-list="dataList" :height="260" @click-item="clickItem" @click-index="clickIndex">
      <template v-slot:default="slotProps">
        <Jd width="12px"></Jd>
        <span :style="{marginLeft: '15px'}">{{ slotProps.item.name }}</span>
      </template>
  </nut-elevator>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  import { Jd } from '@nutui/icons-vue'
  export default {
    components: {
      Jd,
    },
    setup() {
      const state = reactive({
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
| height                 | Height of elevator area                                                    | number \| string  | `200px`
| accept-key             | Index key value                                                      | string  | `title` |
| index-list             | Index list                                                         | Array（`item` needs to contain `id` and `name` attributes, and `name` supports passing in `html` structure）  | `[{id: 0, name: ''}]` |
| is-sticky            | Whether the index is ceiling                                                    | boolean  | `false` |
| space-height             | Up and down spacing of right anchor point              | number  | `23` |
| title-height             | Height of left index                                                     | number  | `35` |

### Slots

| Name                   | Description                                                             |
|------------------------|----------------------------------------------------------------|
| default                 | Customize the contents of each data under the left index        |

### Events

| Event  | Description     | Arguments    |
|-------|----------|-------------|
| click-item | Click content | `key: string, item: { id: 0, name: '' }` |
| click-index | Click index | `key: string` |
| change | Change index | `index: number` |   

### Methods

| Name           | Description                   | Arguments           |
| ---------------- | ---------------------- | ------------ |
| scrollTo         | Scroll to the location of the corresponding index       | `index:number` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
| --nut-elevator-list-item-highcolor| _var(--nut-primary-color)_  | 
| --nut-elevator-list-item-font-size| _12px_  | 
| --nut-elevator-list-item-font-color| _#333333_  | 
| --nut-elevator-list-item-name-padding| _0 20px_  | 
| --nut-elevator-list-item-name-height| _30px_  | 
| --nut-elevator-list-item-name-line-height| _30px_  | 
| --nut-elevator-list-item-code-font-size| _14px_  | 
| --nut-elevator-list-item-code-font-color| _#1a1a1a_  | 
| --nut-elevator-list-item-code-font-weight| _500_  | 
| --nut-elevator-list-item-code-padding| _0 20px_  | 
| --nut-elevator-list-item-code-height| _35px_  | 
| --nut-elevator-list-item-code-line-height| _35px_  | 
| --nut-elevator-list-item-code-after-width| _100%_  | 
| --nut-elevator-list-item-code-after-height| _1px_  | 
| --nut-elevator-list-item-code-after-bg-color| _#f5f5f5_  | 
| --nut-elevator-list-item-code-current-box-shadow| _0 3px 3px 1px rgba(240, 240, 240, 1)_  | 
| --nut-elevator-list-item-code-current-bg-color| _#fff_  | 
| --nut-elevator-list-item-code-current-border-radius| _50%_  | 
| --nut-elevator-list-item-code-current-width| _45px_  | 
| --nut-elevator-list-item-code-current-height| _45px_  | 
| --nut-elevator-list-item-code-current-line-height| _45px_  | 
| --nut-elevator-list-item-code-current-position| _absolute_  | 
| --nut-elevator-list-item-code-current-right| _60px_  | 
| --nut-elevator-list-item-code-current-top| _50%_  | 
| --nut-elevator-list-item-code-current-transform| _translateY(-50%)_  | 
| --nut-elevator-list-item-code-current-text-align| _center_  | 
| --nut-elevator-list-item-bars-position| _absolute_  | 
| --nut-elevator-list-item-bars-right| _8px_  | 
| --nut-elevator-list-item-bars-top| _50%_  | 
| --nut-elevator-list-item-bars-transform| _translateY(-50%)_  | 
| --nut-elevator-list-item-bars-padding| _15px 0_  | 
| --nut-elevator-list-item-bars-background-color| _#eeeff2_  | 
| --nut-elevator-list-item-bars-border-radius| _6px_  | 
| --nut-elevator-list-item-bars-text-align| _center_  | 
| --nut-elevator-list-item-bars-z-index| _1_  | 
| --nut-elevator-list-item-bars-inner-item-padding| _3px_  | 
| --nut-elevator-list-item-bars-inner-item-font-size| _10px_  | 
| --nut-elevator-list-fixed-color| _var(--nut-primary-color)_  | 
| --nut-elevator-list-fixed-bg-color| _var(--nut-white)_  | 
| --nut-elevator-list-fixed-box-shadow| _0 0 10px #eee_  | 
| --nut-elevator-list-item-bars-inner-item-active-color| _var(--nut-primary-color)_  | 