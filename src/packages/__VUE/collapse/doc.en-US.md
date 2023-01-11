# Collapse Folding panel


### Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

### Install

``` javascript
import { createApp } from 'vue';
import { Collapse, CollapseItem } from '@nutui/nutui';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```



### Basic Usage

Control the expanded panel list through 'V-model', and 'activenames' is in array format

:::demo

```html
<template>
<nut-collapse v-model="activeNames">
  <nut-collapse-item :name="1">
    <template v-slot:title>
      {{title1}}
    </template>
    Nutui is a lightweight Vue component library with JD style
  </nut-collapse-item>
  <nut-collapse-item :title="title2" :name="2">
    The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
  </nut-collapse-item>
  <nut-collapse-item :title="title3" :name="3" disabled>
  </nut-collapse-item>
</nut-collapse>
</template>
<script>
import { reactive, toRefs } from 'vue';
export default {
  setup() {
    const activeNames = reactive([1, 2]);
    const title = reactive({
      title1: 'title1',
      title2: 'title2',
      title3: 'title3',
    })
    return {
      activeNames,
      ...toRefs(title)
    };
  }
}
</script>
```
:::
### accordion

You can set accordion mode through 'accordion', and expand up to one panel. At this time, 'activename' is in string format` value ` you can set the content of a subtitle

:::demo
```html
<template>
  <nut-collapse v-model="activeName" :accordion="true">
    <nut-collapse-item :title="title1" :name="1" :value="subTitle">
      Build scenes based on JD design language system
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2">
      Improve the modularity and generality of the boundary
    </nut-collapse-item>
    <nut-collapse-item :title="title3" :name="3">
      It adopts combinatorial API composition syntax to reconstruct, with clear structure and modular function
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const subTitle = 'subtitle';
    const title = reactive({
      title1: 'title1',
      title2: 'title2',
      title3: 'title3',
    })
    return {
      activeName,
      subTitle,
      ...toRefs(title)
    };
  }
}
</>
```

:::
### Custom collapse Icon

Set custom icons through icon and rotate to set the rotation angle of icons

:::demo

```html
<template>
  <nut-collapse
    v-model="activeName"
    :accordion="true"
  >
    <nut-collapse-item :title="title1" :name="1" :icon="Notice">
      <template v-slot:value>
        text test
      </template>
      NUTUI3. 0 rethink its internal consistency and composability
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" :icon="Follow">
      Improve the efficiency of production research output docking and reduce the output workload
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
import { Notice, Follow } from '@nutui/icons-vue';
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: 'title1',
      title2: 'title2',
    })
    return {
      activeName,
      ...toRefs(title),
      Notice,
      Follow
    };
  }
}
</script>
```
:::

### Set fixed content (do not collapse)

Set content through slot: extra

:::demo

```html
<template>
  <nut-collapse v-model="activeName" :accordion="true">
    <nut-collapse-item :title="title1" :name="1">
      <template v-slot:extra>fixed content</template>
      Nutui is a lightweight Vue component library with JD style
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2">
      The product has been comprehensively upgraded in terms of function, experience, ease of use and flexibility!
    </nut-collapse-item>
  </nut-collapse>
</template>
<script>
import { reactive, ref, toRefs } from 'vue';
export default {
  setup() {
    const activeName = ref(1);
    const title = reactive({
      title1: 'title1',
      title2: 'title2',
    })
    return {
      activeName,
      ...toRefs(title)
    };
  }
}
</script>
```
:::
## API
### Collapse Props

| Attribute | Description | Type | Default
|----- | ----- | ----- | -----
| v-model | `name` of the currently expanded panel | accordion-mode: string \| number<br>non-accordion-mode: (string \| number)[] | `-` |
| accordion | Whether to enable accordion mode | boolean | `false` |

### CollapseItem Props
| Attribute | Description | Type | Default |
|------|------|------|------|
| name | unique identifier, required | string \| number | `-1` |
| title | The content on the left side of the title bar, supports slot input (`props` input has a higher priority) | string |`-` |
| value | The content on the right side of the title bar, support slot input (`props` input has a higher priority) | string | `-` |
| icon | The icon component on the left side of the title bar, equivalent to the `nutui-icon` component | - | `-` |
| label | title bar description | number \| string | `-` |
| rotate | Click the rotation angle of folding and unfolding, effective in the custom icon mode | string \| number | `180` |
| disabled | whether the title bar is disabled | boolean | `false` |
| border | Whether to display borders | boolean | `true` |


### CollapseItem Slots

|Name | Description|
|------|------|
|title | Content slot on the left side of the title bar|
|alue | Right content slot of the title bar|
|extra | Set fixed content under the title (no folding)|



### Events

|Event | Description | Callback parameter|
|------|------|------|
|change | Triggered when switching panels | The type is consistent with the value bound to the v-model|

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。

| 名称                                    | 默认值                     |
| --------------------------------------- | -------------------------- | 
| --nut-collapse-item-padding| _13px 36px 13px 26px_ |
| --nut-collapse-item-color| _#666666_ |
| --nut-collapse-item-disabled-color| _#c8c9cc_ |
| --nut-collapse-item-icon-color| _#666666_ |
| --nut-collapse-item-font-size| _var(--nut-font-size-2)_ |
| --nut-collapse-item-line-height| _24px_ |
| --nut-collapse-item-sub-title-color| _#666666_ |
| --nut-collapse-wrapper-content-padding| _12px 26px_ |
| --nut-collapse-wrapper-empty-content-padding| _0 26px_ |
| --nut-collapse-wrapper-content-color| _#666666_ |
| --nut-collapse-wrapper-content-font-size| _var(--nut-font-size-2)_ |
| --nut-collapse-wrapper-content-line-height| _1.5_ |
| --nut-collapse-wrapper-content-background-color| _var(--nut-white)_ |