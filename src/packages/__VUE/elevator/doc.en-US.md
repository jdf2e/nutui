# Elevator

### Intro

It is used to quickly locate the list and display the index

### Install

```js
import { createApp } from 'vue';
import { Elevator } from '@nutui/nutui';

const app = createApp();
app.use(Elevator);
```

### Basic Usage

:::demo

```vue
<template>
  <nut-elevator :index-list="data" :height="260" @click-item="clickItem" @click-index="clickIndex" />
</template>
<script setup>
import { ref } from 'vue';
const data = ref([
  {
    title: 'A',
    list: [{ name: 'Anhui', id: 1 }]
  },
  {
    title: 'B',
    list: [{ name: 'Beijing', id: 2 }]
  },
  {
    title: 'G',
    list: [
      { name: 'Guangxi', id: 3 },
      { name: 'Guangdong', id: 4 }
    ]
  },
  {
    title: 'H',
    list: [
      { name: 'Hunan', id: 5 },
      { name: 'Hubei', id: 6 }
    ]
  }
]);

const clickItem = (key, item) => {
  console.log(key, item);
};

const clickIndex = (key) => {
  console.log(key);
};
</script>
```

:::

### Custom index

:::demo

```vue
<template>
  <nut-elevator
    :index-list="data"
    :height="220"
    accept-key="num"
    @click-item="clickItem"
    @click-index="clickIndex"
  ></nut-elevator>
</template>
<script setup>
import { ref } from 'vue';
const data = ref([
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
]);

const clickItem = (key, item) => {
  console.log(key, item);
};

const clickIndex = (key) => {
  console.log(key);
};
</script>
```

:::

### Index ceiling

:::demo

```vue
<template>
  <nut-elevator
    :index-list="data"
    is-sticky
    :height="220"
    @click-item="clickItem"
    @click-index="clickIndex"
  ></nut-elevator>
</template>
<script setup>
import { ref } from 'vue';
const data = ref([
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
    title: 'C',
    list: [
      {
        name: '重庆',
        id: 3
      }
    ]
  },
  {
    title: 'F',
    list: [
      {
        name: '福建',
        id: 4
      }
    ]
  },
  {
    title: 'G',
    list: [
      {
        name: '广西',
        id: 5
      },
      {
        name: '广东',
        id: 6
      },
      {
        name: '甘肃',
        id: 7
      },
      {
        name: '贵州',
        id: 8
      }
    ]
  },
  {
    title: 'H',
    list: [
      {
        name: '湖南',
        id: 9
      },
      {
        name: '湖北',
        id: 10
      },
      {
        name: '海南',
        id: 11
      },
      {
        name: '河北',
        id: 12
      },
      {
        name: '河南',
        id: 13
      },
      {
        name: '黑龙江',
        id: 14
      }
    ]
  },
  {
    title: 'J',
    list: [
      {
        name: '吉林',
        id: 15
      },
      {
        name: '江苏',
        id: 16
      },
      {
        name: '江西',
        id: 17
      }
    ]
  },
  {
    title: 'L',
    list: [
      {
        name: '辽宁',
        id: 18
      }
    ]
  }
]);

const clickItem = (key, item) => {
  console.log(key, item);
};

const clickIndex = (key) => {
  console.log(key);
};
</script>
```

:::

### Custom Content

:::demo

```vue
<template>
  <nut-elevator :index-list="data" :height="260" @click-item="clickItem" @click-index="clickIndex">
    <template #default="slotProps">
      <Jd width="12px"></Jd>
      <span :style="{ marginLeft: '15px' }">{{ slotProps.item.name }}</span>
    </template>
  </nut-elevator>
</template>
<script setup>
import { ref } from 'vue';
import { Jd } from '@nutui/icons-vue';
const data = ref([
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
]);

const clickItem = (key, item) => {
  console.log(key, item);
};

const clickIndex = (key) => {
  console.log(key);
};
</script>
```

:::

## API

### Props

| Attribute | Description | Type | Default |
|  ---  |  ---  |  ---  |  ---  |
| height | Height of elevator area | number \| string | `200px` |
| accept-key | Index key value | string | `title` |
| index-list | Index list | Array（`item` needs to contain `id` and `name` attributes, and `name` supports passing in `html` structure） | `[{id: 0, name: ''}]` |
| is-sticky | Whether the index is ceiling | boolean | `false` |
| space-height | Up and down spacing of right anchor point | number | `23` |
| title-height | Height of left index | number | `35` |

### Slots

| Name | Description |
|  ---  |  ---  |
| default | Customize the contents of each data under the left index |

### Events

| Event | Description | Arguments |
|  ---  |  ---  |  ---  |
| click-item | Click content | `key: string, item: { id: 0, name: '' }` |
| click-index | Click index | `key: string` |
| change | Change index | `index: number` |

### Methods

| Name | Description | Arguments |
|  ---  |  ---  |  ---  |
| scrollTo | Scroll to the location of the corresponding index | `index:number` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
|  ---  |  ---  |
| --nut-elevator-list-item-highcolor | _var(--nut-primary-color)_ |
| --nut-elevator-list-item-font-size | _12px_ |
| --nut-elevator-list-item-font-color | _#333333_ |
| --nut-elevator-list-item-name-padding | _0 20px_ |
| --nut-elevator-list-item-name-height | _30px_ |
| --nut-elevator-list-item-name-line-height | _30px_ |
| --nut-elevator-list-item-code-font-size | _14px_ |
| --nut-elevator-list-item-code-font-color | _#1a1a1a_ |
| --nut-elevator-list-item-code-font-weight | _500_ |
| --nut-elevator-list-item-code-padding | _0 20px_ |
| --nut-elevator-list-item-code-height | _35px_ |
| --nut-elevator-list-item-code-line-height | _35px_ |
| --nut-elevator-list-item-code-after-width | _100%_ |
| --nut-elevator-list-item-code-after-height | _1px_ |
| --nut-elevator-list-item-code-after-bg-color | _#f5f5f5_ |
| --nut-elevator-list-item-code-current-box-shadow | _0 3px 3px 1px rgba(240, 240, 240, 1)_ |
| --nut-elevator-list-item-code-current-bg-color | _#fff_ |
| --nut-elevator-list-item-code-current-border-radius | _50%_ |
| --nut-elevator-list-item-code-current-width | _45px_ |
| --nut-elevator-list-item-code-current-height | _45px_ |
| --nut-elevator-list-item-code-current-line-height | _45px_ |
| --nut-elevator-list-item-code-current-position | _absolute_ |
| --nut-elevator-list-item-code-current-right | _60px_ |
| --nut-elevator-list-item-code-current-top | _50%_ |
| --nut-elevator-list-item-code-current-transform | _translateY(-50%)_ |
| --nut-elevator-list-item-code-current-text-align | _center_ |
| --nut-elevator-list-item-bars-position | _absolute_ |
| --nut-elevator-list-item-bars-right | _8px_ |
| --nut-elevator-list-item-bars-top | _50%_ |
| --nut-elevator-list-item-bars-transform | _translateY(-50%)_ |
| --nut-elevator-list-item-bars-padding | _15px 0_ |
| --nut-elevator-list-item-bars-background-color | _#eeeff2_ |
| --nut-elevator-list-item-bars-border-radius | _6px_ |
| --nut-elevator-list-item-bars-text-align | _center_ |
| --nut-elevator-list-item-bars-z-index | _1_ |
| --nut-elevator-list-item-bars-inner-item-padding | _3px_ |
| --nut-elevator-list-item-bars-inner-item-font-size | _10px_ |
| --nut-elevator-list-fixed-color | _var(--nut-primary-color)_ |
| --nut-elevator-list-fixed-bg-color | _var(--nut-white)_ |
| --nut-elevator-list-fixed-box-shadow | _0 0 10px #eee_ |
| --nut-elevator-list-item-bars-inner-item-active-color | _var(--nut-primary-color)_ |
