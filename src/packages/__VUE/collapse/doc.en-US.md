# Collapse Folding panel


### Intro

Place the content in multiple folded panels, and click the panel title to expand or shrink the content.

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { Collapse,CollapseItem } from '@nutui/nutui';
// taro
import { Collapse,CollapseItem } from '@nutui/nutui-taro';

const app = createApp();
app.use(Collapse);
app.use(CollapseItem);
```



### Basic Usage

Control the expanded panel list through 'V-model', and 'activenames' is in array format

:::demo

```html
<template>
<nut-collapse v-model:active="activeNames" icon="down-arrow">
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
### No icon style
:::demo

```html
<template>
  <nut-collapse v-model:active="activeName" :accordion="true">
    <nut-collapse-item :title="title1" :name="1">
      Introduce new features of vue3, such as composition API, teleport, emits, etc
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2">
      Full use of typescipt
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
      title3: 'title3',
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
### accordion

You can set accordion mode through 'accordion', and expand up to one panel. At this time, 'activename' is in string format` Subtitle ` you can set the content of a subtitle

:::demo
```html
<template>
  <nut-collapse v-model:active="activeName" :accordion="true" icon="down-arrow">
    <nut-collapse-item :title="title1" :name="1">
      Build scenes based on JD design language system
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" :sub-title="subTitle">
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
    icon="arrow-right2"
    rotate="90"
  >
    <nut-collapse-item :title="title1" :name="1">
      <template v-slot:sTitle>
        text test
      </template>
      NUTUI3. 0 rethink its internal consistency and composability
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" sub-title="text content">
      Improve the efficiency of production research output docking and reduce the output workload
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

### Custom title Icon

Set custom icons through icon and rotate to set the rotation angle of icons
:::demo

```html
<template>
  <nut-collapse
    v-model:active="activeName"
    title-icon="issue"
    title-icon-color="red"
    title-icon-size="20px"
    title-icon-position="left"
    icon="down-arrow"
    :accordion="true"
  >
    <nut-collapse-item :title="title1" :name="1">
      component emits events are extracted separately to enhance code readability
    </nut-collapse-item>
    <nut-collapse-item :title="title2" :name="2" sub-title="文本内容">
      reconstruct and mount class components using the new feature of teleport
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
### Set fixed content (do not collapse)

Set content through slot: extrarender
    
```html
<template>
  <nut-collapse v-model:active="activeName" icon="down-arrow" :accordion="true">
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

| Attribute | Description | Type   | Default |
|----- | ----- | ----- | ----- 
| v-model | Of the currently expanded panel name | Accordion mode：string \| number<br>Non accordion mode：(string \| number)[] | - |
| accordion | Whether to turn on accordion mode | boolean | false |
| icon | Icon link and / or icon using nutui | string | ‘’ |
| icon-size | Icon size | string | 16px |
| icon-color | Icon color | string | '' |
| title-icon | Title icon link and / or icon using nutui | string | ‘’ |
| title-icon-size | Title icon size | string | 16px |
| title-icon-color | Title icon color | string | ’‘ |
| title-icon-position | Title icon location | string | ‘left' |
| rotate | Click the rotation angle of collapse and expansion to take effect in the custom icon mode | string \ number | 180 |


### CollapseItem Props
| Attribute | Description | Type   | Default  | 
|------|------|------|------|
|name | unique identifier, required | string \ number | - 1|
|title | the content on the left side of the title bar supports slot incoming (props incoming has higher priority) | string | -|
|sub-title | subtitle of title bar, support slot incoming (props incoming has higher priority) | string | -|
|disabled | whether the title bar is disabled | Boolean | false|
|slot:extrarender `v3.1.20`| set the fixed content under the title (no folding) | - | '|


### Events
| Attribute | Description | Callback Arguments |
|------|------|------|
| change | Triggered when the panel is switched | The type is consistent with the value bound by V-model|