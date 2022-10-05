# Cascader

### Intro

The cascader component is used for the selection of multi-level data. The typical scene is the selection of provinces and cities.

### Install

```js
import { createApp } from 'vue';
// vue
import { Cascader, Tabs, TabPane } from '@nutui/nutui';
// taro
import { Cascader, Tabs, TabPane } from '@nutui/nutui-taro';

const app = createApp();
app.use(Cascader);
app.use(Tabs);
app.use(TabPane);
```

### Basic Usage

Pass in the `options` list.
:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="Select address">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="Please select an address"
      type="text"
    />
    <nut-cascader
      title="Select address"
      v-model:visible="state.visible"
      v-model="state.value"
      @change="events.change"
      @path-change="events.pathChange"
      :options="state.options"
    ></nut-cascader>
  </nut-form-item>
 </nut-form>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    // 基础用法
    const state = reactive({
      visible: false,
      // value: ['湖南'],
      value: [],
      options: [
        {
          value: '浙江',
          text: '浙江',
          children: [
            {
              value: '杭州',
              text: '杭州',
              disabled: true,
              children: [
                { value: '西湖区', text: '西湖区' },
                { value: '余杭区', text: '余杭区' }
              ]
            },
            {
              value: '温州',
              text: '温州',
              children: [
                { value: '鹿城区', text: '鹿城区' },
                { value: '瓯海区', text: '瓯海区' }
              ]
            }
          ]
        },
        {
          value: '湖南',
          text: '湖南',
          disabled: true
        },
        {
          value: '福建',
          text: '福建',
          children: [
            {
              value: '福州',
              text: '福州',
              children: [
                { value: '鼓楼区', text: '鼓楼区' },
                { value: '台江区', text: '台江区' }
              ]
            }
          ]
        }
      ]
    });
    const events = {
      change(...args: any) {
        console.log('change', ...args);
      },
      pathChange(...args: any) {
        console.log('pathChange', ...args);
      }
    };

    return {
      state,
      events
    }
  }
}
</script>
```
:::

### Custom attribute name

use `textKey`、`valueKey`、`childrenKey`Specify the property name.
:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="Select address">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="Please select an address"
      type="text"
    />
    <nut-cascader
      title="Select address"
      v-model:visible="state.visible"
      v-model="state.value"
      text-key="text"
      @change="events.change"
      @path-change="events.pathChange"
      value-key="text"
      children-key="items"
      :options="state.options"
    ></nut-cascader>
  </nut-form-item>
 </nut-form>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    // 自定义属性名称
    const state = reactive({
      visible: false,
      value: ['福建', '福州', '台江区'],
      options: [
        {
          text: '浙江',
          items: [
            {
              text: '杭州',
              disabled: true,
              items: [{ text: '西湖区' }, { text: '余杭区' }]
            },
            {
              text: '温州',
              items: [{ text: '鹿城区' }, { text: '瓯海区' }]
            }
          ]
        },
        {
          text: '福建',
          items: [
            {
              text: '福州',
              items: [{ text: '鼓楼区' }, { text: '台江区' }]
            }
          ]
        }
      ]
    });
    const events = {
      change(...args: any) {
        console.log('change', ...args);
      },
      pathChange(...args: any) {
        console.log('pathChange', ...args);
      },
    };

    return { state, events };
  }
}
</script>
```
:::

### Async loading

Use `lazy` to identify whether data needs to be obtained dynamically. At this time, not transmitting `options` means that all data needs to be loaded through `lazyload` . The first loading is distinguished by the `root` attribute. When a non leaf node is encountered, the `lazyload` method will be called. The parameters are the current node and the `resolve` method. Note that the `resolve` method must be called. If it is not transmitted to a child node, it will be treated as a leaf node.
:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="Select address">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="Please select an address"
      type="text"
    />
    <nut-cascader
      title="Select address"
      v-model:visible="state.visible"
      v-model="state.value"
      @change="events.change"
      @path-change="events.pathChange"
      lazy
      :lazy-load="state.lazyLoad"
    ></nut-cascader>
  </nut-form-item>
 </nut-form>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      visible: false,
      value: ['A0', 'A12', 'A23', 'A32'],
      lazyLoad(node: any, resolve: (children: any) => void) {
        setTimeout(() => {
          // root表示第一层数据
          if (node.root) {
            resolve([
              { value: 'A0', text: 'A0' },
              { value: 'B0', text: 'B0' },
              { value: 'C0', text: 'C0' }
            ]);
          } else {
            const { value, level } = node;
            const text = value.substring(0, 1);
            const value1 = `${text}${level + 1}1`;
            const value2 = `${text}${level + 1}2`;
            const value3 = `${text}${level + 1}3`;
            resolve([
              { value: value1, text: value1, leaf: level >= 6 },
              { value: value2, text: value2, leaf: level >= 6 },
              { value: value3, text: value3, leaf: level >= 6 }
            ]);
          }
        }, 300);
      }
    });
    const events = {
      change(...args: any) {
        console.log('change', ...args);
      },
      pathChange(...args: any) {
        console.log('pathChange', ...args);
      },
    };

    return { state, events };
  }
}
</script>
```
:::

### Async loading of partial data

:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="Select address">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="Please select an address"
      type="text"
    />
    <nut-cascader
      title="Select address"
      v-model:visible="state.visible"
      v-model="state.value"
      @change="events.change"
      @path-change="events.pathChange"
      :options="state.options"
      lazy
      :lazy-load="state.lazyLoad"
    ></nut-cascader>
  </nut-form-item>
 </nut-form>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      visible: false,
      value: [],
      options: [
        { value: 'A0', text: 'A0' },
        {
          value: 'B0',
          text: 'B0',
          children: [
            { value: 'B11', text: 'B11', leaf: true },
            { value: 'B12', text: 'B12' }
          ]
        },
        { value: 'C0', text: 'C0' }
      ],
      lazyLoad(node: any, resolve: (children: any) => void) {
        setTimeout(() => {
          const { value, level } = node;
          const text = value.substring(0, 1);
          const value1 = `${text}${level + 1}1`;
          const value2 = `${text}${level + 1}2`;
          resolve([
            { value: value1, text: value1, leaf: level >= 2 },
            { value: value2, text: value2, leaf: level >= 1 }
          ]);
        }, 500);
      }
    });
    const events = {
      change(...args: any) {
        console.log('change', ...args);
      },
      pathChange(...args: any) {
        console.log('pathChange', ...args);
      },
    };

    return { state, events };
  }
}
</script>
```
:::

### Automatic data conversion

If your data is a flat structure that can be converted into a tree structure, you can tell the component that automatic conversion is required through `convertConfig`, ` convertConfig` accepts four parameters, `topid` is the parent ID of the top-level node, `idkey` is the unique ID of the node, `pidkey` is the attribute name pointing to the parent node ID, and if there is a `sortkey`, `Array.prototype.sort()` to sort at the same level.


:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="Select address" @click="state.visible = true">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="Please select an address"
      type="text"
    />
    <nut-cascader
      title="Select address"
      v-model:visible="state.visible"
      v-model="state.value"
      @change="events.change"
      @path-change="events.pathChange"
      :options="state.options"
      :convertConfig="state.convertConfig"
    ></nut-cascader>
  </nut-form-item>
 </nut-form>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      visible: false,
      value: ['广东省', '广州市'],
      convertConfig: {
        topId: null,
        idKey: 'id',
        pidKey: 'pid',
        sortKey: ''
      },
      options: [
        { value: '北京', text: '北京', id: 1, pid: null },
        { value: '朝阳区', text: '朝阳区', id: 11, pid: 1 },
        { value: '亦庄', text: '亦庄', id: 111, pid: 11 },
        { value: '广东省', text: '广东省', id: 2, pid: null },
        { value: '广州市', text: '广州市', id: 21, pid: 2 }
      ]
    });
    const events = {
      change(...args: any) {
        console.log('change', ...args);
      },
      pathChange(...args: any) {
        console.log('pathChange', ...args);
      },
    };

    return { state, events };
  }
}
</script>
```
:::

## API

### Props

| Attribute           | Description                                                                                                  | Type     | Default     |
|---------------------|--------------------------------------------------------------------------------------------------------------|----------|-------------|
| v-model             | Selected value, bidirectional binding                                                                        | Array    | -           |
| options             | Cascade data                                                                                                 | Array    | -           |
| lazy                | Whether to enable dynamic loading                                                                            | Boolean  | -           |
| lazy-load           | Dynamic loading callback, which takes effect when dynamic loading is enabled                                 | Function | -           |
| value-key           | Customize the field of `value` in the `options` structure                                                    | String   | -           |
| text-key            | Customize the fields of `text` in the `options` structure                                                    | String   | -           |
| children-key        | Customize the fields of `children` in the `options` structure                                                | String   | -           |
| convert-config      | When options is a flat structure that can be converted into a tree structure, configure the conversion rules | Object   | -           |
| title `v3.1.21`     | Title                                                                                                        | String   | ''          |
| close-icon-position `v3.1.21` | Cancel the button position and inherit the popup component                                                   | String   | "top-right" |
| close-icon `v3.1.21` | Customize the close button and inherit the popup component                                                   | String   | "close"     |
| closeable `v3.1.21` | Whether to display the close button and inherit the popup component                                          | Boolean  | true        |
| poppable `v3.2.3` | Whether to display the popup（After setting to false, the title is invalid） | Boolean   | true     |

### Events

| Event      | Description                               | Arguments          |
|------------|-------------------------------------------|--------------------|
| change     | Triggered when the selected value changes | (value, pathNodes) |
| path-change | Triggered when the selected item changes  | (pathNodes)        |
