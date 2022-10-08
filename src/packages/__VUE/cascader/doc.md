# Cascader 级联选择

### 介绍

级联选择器，用于多层级数据的选择，典型场景为省市区选择。

### 安装

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

### 基础用法

传入`options`列表。
:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="选择地址">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="请选择地址"
      type="text"
    />
    <nut-cascader
      title="地址选择"
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

### 自定义属性名称

可通过`textKey`、`valueKey`、`childrenKey`指定属性名。
:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="选择地址">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="请选择地址"
      type="text"
    />
    <nut-cascader
      title="地址选择"
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

### 动态加载

使用`lazy`标识是否需要动态获取数据，此时不传`options`代表所有数据都需要通过`lazyLoad`加载，首次加载通过`root`属性区分，当遇到非叶子节点时会调用`lazyLoad`方法，参数为当前节点和`resolve`方法，注意`resolve`方法必须调用，不传子节点时会被当做叶子节点处理。
:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="选择地址">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="请选择地址"
      type="text"
    />
    <nut-cascader
      title="地址选择"
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

### 部分数据动态加载

:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="选择地址">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="请选择地址"
      type="text"
    />
    <nut-cascader
      title="地址选择"
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

### 自动转换

如果你的数据为可转换为树形结构的扁平结构时，可以通过`convertConfig`告诉组件需要进行自动转换，`convertConfig`接受4个参数，`topId`为顶层节点的父级id，`idKey`为节点唯一id，`pidKey`为指向父节点id的属性名，存在`sortKey`将根据指定字段调用Array.prototype.sort()进行同层排序。


:::demo
```html
<template>
 <nut-form>
  <nut-form-item label="选择地址" @click="state.visible = true">
    <input
      class="nut-input-text"
      @click="state.visible = true"
      :value="state.value"
      readonly
      placeholder="请选择地址"
      type="text"
    />
    <nut-cascader
      title="地址选择"
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

| 参数          | 说明                                                  | 类型     | 默认值 |
| ------------- | ----------------------------------------------------- | -------- | ------ |
| v-model       | 选中值，双向绑定                                      | Array    | -      |
| options       | 级联数据                                              | Array    | -      |
| lazy          | 是否开启动态加载                                      | Boolean  | -      |
| lazy-load      | 动态加载回调，开启动态加载时生效                      | Function | -      |
| value-key      | 自定义`options`结构中`value`的字段                    | String   | -      |
| text-key       | 自定义`options`结构中`text`的字段                     | String   | -      |
| children-key   | 自定义`options`结构中`children`的字段                 | String   | -      |
| convert-config | 当options为可转换为树形结构的扁平结构时，配置转换规则 | Object   | -      |
| title `v3.1.21` | 标题 | String   | ''      |
| close-icon-position `v3.1.21` | 取消按钮位置，继承 Popup 组件 | String   | "top-right"      |
| close-icon `v3.1.21` | 自定义关闭按钮，继承 Popup 组件 | String   | "close"     |
| closeable `v3.1.21` | 是否显示关闭按钮，继承 Popup 组件 | Boolean   | true     |
| poppable `v3.2.3` | 是否需要弹层展示（设置为false后，title失效） | Boolean   | true     |

### Events

| 事件名     | 说明             | 回调参数           |
| ---------- | ---------------- | ------------------ |
| change     | 选中值改变时触发 | (value, pathNodes) |
| path-change | 选中项改变时触发 | (pathNodes)        |
