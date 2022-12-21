# Collapse Folding panel


### Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

### Install

``` javascript
import { createApp } from 'vue';
import { Collapse,CollapseItem } from '@nutui/nutui';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```



### Basic Usage

Control the expanded panel list through 'V-model', and 'activenames' is in array format

:::demo

```html
<template>
<nut-collapse v-model:active="activeNames">
  <nut-collapse-item :name="1">
    <template v-slot:mTitle>
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

```
:::
### accordion

You can set accordion mode through 'accordion', and expand up to one panel. At this time, 'activename' is in string format` value ` you can set the content of a subtitle

:::demo
```html
<template>
  <nut-collapse v-model:active="activeName" :accordion="true">
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
</script>
```

:::
### Custom collapse Icon

Set custom icons through icon and rotate to set the rotation angle of icons

:::demo

```html
<template>
  <nut-collapse
    v-model:active="activeName"
    :accordion="true"
  >
    <nut-collapse-item :title="title1" :name="1" :icon="Notice">
      <template v-slot:sTitle>
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

Set content through slot: extrarender

:::demo

```html
<template>
  <nut-collapse v-model:active="activeName" :accordion="true">
    <nut-collapse-item :title="title1" :name="1">
      <template v-slot:extraRender>fixed content</template>
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

|Field | Description | Type | Default
|----- | ----- | ----- | -----
|V-model | name of the current expansion panel | accordion mode: string | number<br>Non accordion mode: (string | number) [] | -|
|Accordion | Enable accordion mode |_boolean_ | `false` |

### CollapseItem Props

|Parameter | Description | Type | Default|
|------|------|------|------|
|Name | Unique identifier, required | string number | - 1|
|Title | The content on the left side of the title bar supports slot incoming (the incoming priority of props is higher) | string | -|
|Value | The content on the right side of the title bar supports slot incoming (the incoming priority of props is higher) | string | -|
|Label | Title bar description information |_number \| string_ | - |
|Rotate | Click the rotation angle of folding and unfolding to take effect in custom icon mode | string number | 180|
|Disabled | Disable the title bar |_boolean_ | false |
|Border | Display border |_boolean_ | `true` |


### CollapseItem Slots

|Slot name | Description|
|------|------|
|Slot: mTitle | Content slot on the left side of the title bar|
|Slot: value | Right content slot of the title bar|
|Slot: extraRender `v3.1.20 ` | Set fixed content under the title (no folding)|



### Events

|Event name | Description | Callback parameter|
|------|------|------|
|Change | Triggered when switching panels | The type is consistent with the value bound to the v-model|