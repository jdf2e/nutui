# Tabs

### Intro

It is often used for the storage and display of large blocks of content in the level area, and supports the form of embedded tags and rendering loop data.

### Install

``` javascript
import { createApp } from 'vue';
// vue
import { Tabs, TabPane } from '@nutui/nutui';
// taro
import { Tabs, TabPane } from '@nutui/nutui-taro';

const app = createApp();
app.use(Tabs);
app.use(TabPane);
```

### Basic Usage
:::demo
```html
<template>
<nut-tabs v-model="state.tab1value">
  <nut-tabpane title="Tab 1">
    Tab 1
  </nut-tabpane>
  <nut-tabpane title="Tab 2">
    Tab 2
  </nut-tabpane>
  <nut-tabpane title="Tab 3">
    Tab 3
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### Basic Usage - Smile Curve
:::demo
```html
<template>
<nut-tabs v-model="state.tab11value" type="smile">
  <nut-tabpane title="Tab 1">
    Tab 1
  </nut-tabpane>
  <nut-tabpane title="Tab 2">
    Tab 2
  </nut-tabpane>
  <nut-tabpane title="Tab 3">
    Tab 3
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab11value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### Match by pane-key

:::demo
```html
<template>
<nut-tabs v-model="state.tab2value">
  <nut-tabpane title="Tab 1" pane-key="0">
    Tab 1
  </nut-tabpane>
  <nut-tabpane title="Tab 2" pane-key="1" :disabled="true">
    Tab 2
  </nut-tabpane>
  <nut-tabpane title="Tab 3" pane-key="2">
    Tab 3
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab2value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### Tabpane height auto

Automatic height. When set to `true`, `nut-tabs` and `nut-tabs__content` will change with the height of the current `nut-tabpane`.

:::demo
```html
<template>
  <nut-tabs v-model="state.tab2value" :auto-height="true">
    <nut-tabpane title="Tab 1" pane-key="0">
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
    </nut-tabpane>
    <nut-tabpane title="Tab 2" pane-key="1"> Tab 2 </nut-tabpane>
    <nut-tabpane title="Tab 3" pane-key="2"> Tab 3 </nut-tabpane>
  </nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab2value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### Data is rendered asynchronously for 3s

:::demo
```html
<template>
<nut-tabs v-model="state.tab3value">
  <nut-tabpane v-for="item in state.list3" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab3value: '0',
      list3: Array.from(new Array(2).keys()),
    });
    setTimeout(() => {
      state.list3.push(999);
      state.tab3value = '2';
    }, 3000);
    return { state };
  }
};
</script>
```
:::

### A large number of scrolling operations

:::demo
```html
<template>
<nut-tabs v-model="state.tab4value" title-scroll title-gutter="10">
  <nut-tabpane v-for="item in state.list4" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
      list4: Array.from(new Array(10).keys()),
    });
    return { state };
  }
};
</script>
```
:::

### Left and right layout

:::demo
```html
<template>
<nut-tabs style="height:300px" v-model="state.tab5value" title-scroll direction="vertical">
  <nut-tabpane v-for="item in state.list5" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab5value: '0',
      list5: Array.from(new Array(2).keys()),
    });
    return { state };
  }
};
</script>
```
:::

### Left and Right Layout - Smile Curve

:::demo
```html
<template>
<nut-tabs style="height:300px" v-model="state.tab6value" type="smile" title-scroll direction="vertical">
  <nut-tabpane v-for="item in state.list5" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab6value: '0',
      list5: Array.from(new Array(2).keys()),
    });
    return { state };
  }
};
</script>
```
:::

### tab bar font size large normal small
:::demo
```html
<template>
<nut-tabs v-model="state.tab1value" size="large">
  <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
  <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
  <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
</nut-tabs>
<nut-tabs v-model="state.tab1value" size="normal">
  <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
  <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
  <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
</nut-tabs>
<nut-tabs v-model="state.tab1value" size="small">
  <nut-tabpane title="Tab 1"> Tab 1 </nut-tabpane>
  <nut-tabpane title="Tab 2"> Tab 2 </nut-tabpane>
  <nut-tabpane title="Tab 3"> Tab 3 </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab1value: '0',
    });
    return { state };
  }
};
</script>
```
:::

### custom tab bar
:::demo
```html
<template>
<nut-tabs v-model="state.tab7value">
  <template v-slot:titles>
    <div class="nut-tabs__titles-item" @click="state.tab7value=item.paneKey"
      :class="{active:state.tab7value==item.paneKey}" :key="item.paneKey" v-for="item in state.list6">
      <nut-icon v-if="item.icon" :name="item.icon" />
      <span class="nut-tabs__titles-item__text">{{item.title}}</span>
      <span class="nut-tabs__titles-item__line"></span>
    </div>
  </template>
  <nut-tabpane v-for="item in state.list6" :pane-key="item.paneKey">
    {{item.title}}
  </nut-tabpane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab7value: 'c1',
       list6: [
        {
          title: 'custom 1',
          paneKey: 'c1',
          icon: 'dongdong'
        },
        {
          title: 'custom 2',
          paneKey: 'c2',
          icon: 'JD'
        },
        {
          title: 'custom 3',
          paneKey: 'c3'
        }
      ]
    });
    return { state };
  }
};
</script>
```
:::

## API

### Tabs Props

| Attribute            | Description                                                                                                                        | Type          | Default    |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------|---------------|------------|
| v-model              | Index of active tab                                                                                                                | number,string | 0          |
| color                | Label selection color                                                                                                              | string        | #1a1a1a    |
| background           | Tab bar background color                                                                                                           | string        | #f5f5f5    |
| direction            | Use landscape orientation optional value `horizontal`、`vertical`                                                                  | string        | horizontal |
| type                 | Check the bottom display style optional value `line`、`smile`                                                                      | string        | line       |
| title-scroll         | Is the tab bar scrollable                                                                                                          | boolean       | false      |
| ellipsis             | Whether to omit too long title text                                                                                                | boolean       | true       |
| animated-time        | Switch animation duration, unit ms 0 means no animation                                                                            | number,string | 300        |
| title-gutter         | Label gap                                                                                                                          | number,string | 0          |
| size`v3.1.13`        | Tab bar font size optional value  `large` `normal` `small`                                                                         | string        | normal     |
| auto-height`v3.1.21` | Automatic height. When set to `true`, `nut-tabs` and `nut-tabs__content` will change with the height of the current `nut-tabpane`. | boolean       | false      |
| sticky`v3.2.3` `applet not supported` | Whether to use sticky mode| boolean       | false      |
| top`v3.2.3` `applet not supported` | Sticky offset top | number       | 0      |

### Tabs Slots

| Name    | Description            |
|---------|------------------------|
| titles  | Custom Titles Area     |
| default | Custom Default Content |

### Tabpane Props

| Attribute | Description                       | Type    | Default          |
|-----------|-----------------------------------|---------|------------------|
| title     | title                             | string  |                  |
| pane-key  | Tag Key , the matching identifier | string  | 默认索引0,1,2... |
| disabled  | whether to disable tabs           | boolean | false            |


### Tabpane Slots

| Name    | Description            |
|---------|------------------------|
| default | Custom Default Content |

### Tabs Events

| Event  | Description                                 | Arguments                |
|--------|---------------------------------------------|--------------------------|
| click  | Triggered when the label is clicked         | {title,paneKey,disabled} |
| change | Fired when the currently active tab changes | {title,paneKey,disabled} |

