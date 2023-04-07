# Tabs

### Intro

It is often used for the storage and display of large blocks of content in the level area, and supports the form of embedded tags and rendering loop data.

### Install

``` javascript
import { createApp } from 'vue';
import { Tabs, TabPane } from '@nutui/nutui';

const app = createApp();
app.use(Tabs);
app.use(TabPane);
```

### Basic Usage
:::demo
```html
<template>
<nut-tabs v-model="state.tab1value">
  <nut-tab-pane title="Tab 1">
    Tab 1
  </nut-tab-pane>
  <nut-tab-pane title="Tab 2">
    Tab 2
  </nut-tab-pane>
  <nut-tab-pane title="Tab 3">
    Tab 3
  </nut-tab-pane>
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
### Swipeable
:::demo
```html
<template>
<nut-tabs v-model="state.tab1value" swipeable>
  <nut-tab-pane title="Tab 1">
    Tab 1
  </nut-tab-pane>
  <nut-tab-pane title="Tab 2">
    Tab 2
  </nut-tab-pane>
  <nut-tab-pane title="Tab 3">
    Tab 3
  </nut-tab-pane>
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
  <nut-tab-pane title="Tab 1">
    Tab 1
  </nut-tab-pane>
  <nut-tab-pane title="Tab 2">
    Tab 2
  </nut-tab-pane>
  <nut-tab-pane title="Tab 3">
    Tab 3
  </nut-tab-pane>
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
  <nut-tab-pane title="Tab 1" pane-key="0">
    Tab 1
  </nut-tab-pane>
  <nut-tab-pane title="Tab 2" pane-key="1" :disabled="true">
    Tab 2
  </nut-tab-pane>
  <nut-tab-pane title="Tab 3" pane-key="2">
    Tab 3
  </nut-tab-pane>
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

### TabPane height auto

Automatic height. When set to `true`, `nut-tabs` and `nut-tabs__content` will change with the height of the current `nut-tab-pane`.

:::demo
```html
<template>
  <nut-tabs v-model="state.tab2value" :auto-height="true">
    <nut-tab-pane title="Tab 1" pane-key="0">
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
      <p>Tab 1</p>
    </nut-tab-pane>
    <nut-tab-pane title="Tab 2" pane-key="1"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3" pane-key="2"> Tab 3 </nut-tab-pane>
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
  <nut-tab-pane v-for="item in state.list3" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tab-pane>
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
    }, 3000);
    return { state };
  }
};
</script>
```
:::

### A large number of scrolling operations

The automatic scrolling direction of the title bar can be modified through the `direction` property.

In the `taro` environment, `name` must be set to enable the automatic scrolling function of the title bar.

:::demo
```html
<template>
<nut-tabs v-model="state.tab4value" title-scroll title-gutter="10">
  <nut-tab-pane v-for="item in state.list4" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tab-pane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
export default {
  setup() {
    const state = reactive({
      tab4value: '0',
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
  <nut-tab-pane v-for="item in state.list5" :pane-key="item" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tab-pane>
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
  <nut-tab-pane v-for="item in state.list5" :pane-key="item" :title="'Tab '+ item">
    Tab {{item}}
  </nut-tab-pane>
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
  <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
  <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
  <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
</nut-tabs>
<nut-tabs v-model="state.tab1value" size="normal">
  <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
  <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
  <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
</nut-tabs>
<nut-tabs v-model="state.tab1value" size="small">
  <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
  <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
  <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
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
      <Dongdong />
      <span class="nut-tabs__titles-item__text">{{item.title}}</span>
      <span class="nut-tabs__titles-item__line"></span>
    </div>
  </template>
  <nut-tab-pane v-for="item in state.list6" :pane-key="item.paneKey">
    {{item.title}}
  </nut-tab-pane>
</nut-tabs>
</template>
<script lang="ts">
import { reactive } from 'vue';
import { Dongdong } from '@nutui/icons-vue';
export default {
  components: { Dongdong },
  setup() {
    const state = reactive({
      tab7value: 'c1',
       list6: [
        {
          title: 'custom 1',
          paneKey: 'c1'
        },
        {
          title: 'custom 2',
          paneKey: 'c2'
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

| Attribute        | Description                                                                                                                         | Type             | Default      |
|------------------|-------------------------------------------------------------------------------------------------------------------------------------|------------------|--------------|
| v-model          | Index of active tab                                                                                                                 | number \| string | `0`          |
| color            | Label selection color                                                                                                               | string           | `#1a1a1a`    |
| background       | Tab bar background color                                                                                                            | string           | `#f5f5f5`    |
| direction        | Use landscape orientation optional value `horizontal`、`vertical`                                                                   | string           | `horizontal` |
| type             | Check the bottom display style optional value `line`、`smile`                                                                       | string           | `line`       |
| swipeable`4.0.3` | Whether to enable gestures to slide left and right                                                                                  | boolean          | `false`      |
| title-scroll     | Is the tab bar scrollable                                                                                                           | boolean          | `false`      |
| ellipsis         | Whether to omit too long title text                                                                                                 | boolean          | `true`       |
| animated-time    | Switch animation duration, unit ms 0 means no `animation`                                                                           | number \| string | `300`        |
| title-gutter     | Label gap                                                                                                                           | number \| string | `0`          |
| size             | Tab bar font size optional value  `large` `normal` `small`                                                                          | string           | `normal`     |
| auto-height      | Automatic height. When set to `true`, `nut-tabs` and `nut-tabs__content` will change with the height of the current `nut-tab-pane`. | boolean          | `false`      |
| sticky           | Whether to use sticky mode                                                                                                          | boolean          | `false`      |
| top              | Sticky offset top                                                                                                                   | number           | `0`          |
| name             | In the `taro` environment, `name` must be set to enable the automatic scrolling function of the title bar.                          | string           | ''           |

### Tabs Slots

| Name    | Description            |
|---------|------------------------|
| titles  | Custom Titles Area     |
| default | Custom Default Content |

### TabPane Props

| Attribute | Description                       | Type    | Default          |
|-----------|-----------------------------------|---------|------------------|
| title     | title                             | string  |                  |
| pane-key  | Tag Key , the matching identifier | string  | 默认索引0,1,2... |
| disabled  | whether to disable tabs           | boolean | false            |


### TabPane Slots

| Name    | Description            |
|---------|------------------------|
| default | Custom Default Content |

### Tabs Events

| Event  | Description                                 | Arguments                |
|--------|---------------------------------------------|--------------------------|
| click  | Triggered when the label is clicked         | {title,paneKey,disabled} |
| change | Fired when the currently active tab changes | {title,paneKey,disabled} |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                                                | Default Value                                                                  |
|-----------------------------------------------------|--------------------------------------------------------------------------------|
| --nut-tabs-tab-smile-color                          | _var(--nut-primary-color)_                                                     |
| --nut-tabs-titles-border-radius                     | _0_                                                                            |
| --nut-tabs-titles-item-large-font-size              | _var(--nut-font-size-3)_                                                       |
| --nut-tabs-titles-item-font-size                    | _var(--nut-font-size-2)_                                                       |
| --nut-tabs-titles-item-small-font-size              | _var(--nut-font-size-1)_                                                       |
| --nut-tabs-titles-item-color                        | _var(--nut-title-color)_                                                       |
| --nut-tabs-titles-item-active-color                 | _var(--nut-title-color)_                                                       |
| --nut-tabs-titles-background-color                  | _var(--nut-help-color)_                                                        |
| --nut-tabs-horizontal-tab-line-color                | _linear-gradient(90deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_  |
| --nut-tabs-horizontal-titles-height                 | _46px_                                                                         |
| --nut-tabs-horizontal-titles-item-min-width         | _50px_                                                                         |
| --nut-tabs-horizontal-titles-item-active-line-width | _40px_                                                                         |
| --nut-tabs-vertical-tab-line-color                  | _linear-gradient(180deg,var(--nut-primary-color) 0%,rgba(#fa2c19, 0.15) 100%)_ |
| --nut-tabs-vertical-titles-item-height              | _40px_                                                                         |
| --nut-tabs-vertical-titles-item-active-line-height  | _14px_                                                                         |
| --nut-tabs-vertical-titles-width                    | _100px_                                                                        |
| --nut-tabs-titles-item-line-border-radius           | _0_                                                                            |
| --nut-tabs-titles-item-line-opacity                 | _1_                                                                            |

