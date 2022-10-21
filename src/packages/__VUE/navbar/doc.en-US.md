# NavBar

### Intro

Provide navigation function, often used at the top of the page.

### Install

```javascript

import { createApp } from 'vue';
// vue
import { Navbar,Icon,Tabs, TabPane } from '@nutui/nutui';
// taro
import { Navbar,Icon,Tabs, TabPane } from '@nutui/nutui-taro';

const app = createApp();
app.use(Navbar);
app.use(Icon);
app.use(Tabs);
app.use(TabPane);
```

### Basic Usage

:::demo
```html
<template>
  <nut-navbar @on-click-back="back" @on-click-title="title" title="Order details">
    <template #left>
      <div>Back</div>
    </template>
    <template #right>
      <nut-icon class="right" name="share-n"></nut-icon>
    </template>
  </nut-navbar>

  <nut-navbar
    @on-click-back="back"
    @on-click-title="title"
    @on-click-right="rightClick"
    title="Browsing history"
    desc="Clear"
  ></nut-navbar>

  <nut-navbar
    :left-show="false"
    @on-click-back="back"
    @on-click-title="title"
    @on-click-icon="icon"
    @on-click-right="rightClick"
    title="Cart"
    titIcon="cart2"
    desc="Edit"
  >
    <template #right>
      <nut-icon class="right" name="more-x"></nut-icon>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
  import { ref } from 'vue';
  export default {
  setup() {
    const methods = {
      back() {
        alert('Click Back');
      },
      title() {
        alert('Click Title');
      },
      rightClick() {
        alert('Click Right');
      }
    };

    return {
      ...methods,
    };
  }
}
</script>

```
:::

### Customize the middle content of the navigation bar

:::demo
```html
<template>
  <nut-navbar
    @on-click-back="back"
    @on-click-title="title"
    @on-click-right="rightClick"
    desc="Edit"
  >
    <template #content>
      <nut-tabs v-model="tab1value" @click="changeTab">
        <nut-tabpane title="Title1"> </nut-tabpane>
        <nut-tabpane title="Title2"> </nut-tabpane>
      </nut-tabs>
    </template>

    <template #right>
      <nut-icon class="right" name="more-x"></nut-icon>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const tab1value = ref(0);
    const methods = {
      back() {
        alert('Click Back');
      },
      title() {
        alert('Click Title');
      },
      rightClick() {
        alert('Click Right');
      },
      changeTab(tab: any) {
        tab1value.value = tab.paneKey as number;
      },
    };

    return {
      tab1value,
      ...methods
    };
  }
}
</script>
```
:::

### Multi-tab switching navigation

:::demo
```html
<template>
  <nut-navbar @on-click-back="back" >
    <template #content>
      <nut-tabs v-model="tab2value" @click="changeTabList">
        <nut-tabpane title="Title1"> </nut-tabpane>
        <nut-tabpane title="Title2"> </nut-tabpane>
        <nut-tabpane title="Title3"> </nut-tabpane>
      </nut-tabs>
    </template>
    <template #icons>
      <nut-icon class="icon" name="share"></nut-icon>
    </template>

    <template #right>
      <nut-icon class="right" name="horizontal-n"></nut-icon>
    </template>
  </nut-navbar>
</template>

<script lang="ts">
  import { ref } from 'vue';
  export default {
    setup() {
    const tab2value = ref(0);
    const methods = {
      back() {
        alert('Click Back');
      },
      changeTabList(tab: any) {
        tab2value.value = tab.paneKey as number;
      }
    };
    return {
      tab2value,
      ...methods
    };
  }
}
</script>

```
:::
## API
### Props 

|  Attribute          | Description                                   | Type    | Default |
|---------------------|-----------------------------------------------|---------|---------|
| title               | Title                                         | String  | -       |
| left-text `v3.1.21` | Left Text                                     | String  | -       |
| desc                | Desc                                          | String  | -       |
| left-show           | Whether to show the left arrow                | Boolean | false   |
| tit-icon            | Insert icon in title                          | String  | -       | 
| border `v3.1.21`    | Whether to show bottom border                     | Boolean  | false  |
| fixed               | Is it pinned to the top                       | Boolean | false    |
| placeholder `v3.1.21` | Whether to generate a placeholder element when fixed   | Boolean  | false   |
| safe-area-inset-top | Whether to enable top safety zone adaptation  | Boolean | false    |
| z-index `v3.1.21` | Z-index                                            | Number ｜ String  | -       |

### Events
| Event           | Description              | Arguments    |
|-----------------|-------------------------|-------------|
| on-click-title  | Click page title event  | event:Event |
| on-click-icon   | Click the page title icon event | event:Event |
| on-click-right  | Click right button event | event:Event |
| on-click-back   | Click left Icon event   | event:Event |

### Slots
| Name  | Description     | 
|-------|----------|
| left | 自定义左侧内容 |
| right | 自定义右侧内容 |
| content |  自定义导航栏中间内容 |