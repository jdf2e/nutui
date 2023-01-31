# Popup

### Intro

The pop-up layer container is used to display pop-up windows, information prompts and other contents, and supports the superposition display of multiple pop-up layers

### Install

```javascript
import { createApp } from 'vue';
//vue
import { Popup,OverLay, Icon } from '@nutui/nutui';
//taro
import { Popup,OverLay, Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Popup)
app.use(OverLay)
app.use(Icon)
```

### Basic Usage

Control display/hide by setting `visible`

:::demo

```html
<template>
  <nut-cell title="Display pop-up layer" is-link @click="showBasic = true"></nut-cell>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showBasic">text</nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showBasic: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Eject position

Control the pop-up position by setting the value of `position`

:::demo

```html
<template>
  <nut-cell title="Top Eject" is-link @click="showTop = true"></nut-cell>
  <nut-popup position="top" :style="{ height: '20%' }" v-model:visible="showTop"></nut-popup>
  <nut-cell title="Bottom Eject" is-link @click="showBottom = true"></nut-cell>
  <nut-popup position="bottom" :style="{ height: '20%' }" v-model:visible="showBottom"></nut-popup>
  <nut-cell title="Left Eject" is-link @click="showLeft = true"></nut-cell>
  <nut-popup position="left" :style="{ width: '20%', height: '100%' }" v-model:visible="showLeft"></nut-popup>
  <nut-cell title="Right Eject" is-link @click="showRight = true"></nut-cell>
  <nut-popup position="right" :style="{ width: '20%', height: '100%' }" v-model:visible="showRight"></nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showTop: false,
        showBottom: false,
        showLeft: false,
        showRight: false,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Icon

The `closeable` controls whether the icon can be closed. The `close-icon-position` sets the position of the icon. The `close-icon` defines the display icon. For details, refer to [Icon](#/en-US/component/icon)

:::demo

```html
<template>
  <nut-cell title="close icon" is-link @click="showIcon = true"></nut-cell>
  <nut-popup position="bottom" closeable :style="{ height: '20%' }" v-model:visible="showIcon"></nut-popup>
  <nut-cell title="icon position" is-link @click="showIconPosition = true" ></nut-cell>
  <nut-popup position="bottom" closeable close-icon-position="top-left" :style="{ height: '20%' }" v-model:visible="showIconPosition" ></nut-popup>
  <nut-cell title="custom icon" is-link @click="showCloseIcon = true" ></nut-cell>
  <nut-popup position="bottom" closeable close-icon-position="top-left" close-icon="heart" :style="{ height: '20%' }" v-model:visible="showCloseIcon"></nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showIcon: false,
        showIconPosition: false,
        showCloseIcon: false,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Rounded bullet frame

Set `round` to control whether rounded corners are displayed

:::demo

```html
<template>
  <nut-cell title="rounded pop-up" is-link @click="showRound = true"></nut-cell>
  <nut-popup position="bottom" closeable round :style="{ height: '30%' }" v-model:visible="showRound"></nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showRound: false,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Specify mount node

Specify the mount node through `teleport`

:::demo

```html
<template>
  <nut-cell title="Specify mount node" is-link @click="showTeleport = true"></nut-cell>
  <nut-popup :style="{ padding: '30px 50px' }" teleport="#app" v-model:visible="showTeleport" >app</nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showTeleport: false,
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

### Multi stack

:::demo

```html
<template>
  <nut-cell title="Multi stack" is-link @click="showPop1 = true"></nut-cell>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop1">
    <div @click="showPop2 = true">Click it</div>
  </nut-popup>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="showPop2">Text</nut-popup>
</template>
<script lang="ts">
  import { reactive, toRefs } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showPop1: false,
        showPop2: false
      });
      return { ...toRefs(state) };
    }
  };
</script>
```

:::

## API

> The current component transmits [Icon Component](#/en-US/component/icon) and [Overlay Component](#/en-US/component/overlay) internally

### Props

| Attribute                   | Description                                                        | Type           | Default        |
|------------------------|-------------------------------------------------------------|----------------|---------------|
| v-model:visible        | Control the display/hide of the current component                  | boolean        | `false`       |
| z-index                | Mask level                                                    | string、number | `2000`        |
| duration               | Animation duration of component display/hide, in seconds          | string、number | `0.3`         |
| overlay-class          | Custom mask classname                                              | string         | -             |
| overlay-style          | Custom mask style                                             | CSSProperties  | -             |
| lock-scroll            | Whether the background is locked                                                | boolean        | `true`       |
| overlay                | Show mask                                                | boolean        | `true`        |
| close-on-click-overlay | Click to close the mask                                            | boolean        | `true`        |
| position               | Eject position（top,bottom,left,right,center）                    | string         | `"center"`    |
| transition             | Animation name                                                      | string         | -             |
| style                  | Custom pop-up style                                              | CSSProperties  | -             |
| pop-class              | Custom bullet box classname                                              | string         | -             |
| closeable              | Show close button                                           | boolean        | `false`        |
| close-icon-position    | Close button position（top-left,top-right,bottom-left,bottom-right） | string         | `"top-right"` |
| close-icon             | [icon name](#/en-US/component/icon) or image url          | string         | `"close"`     |
| destroy-on-close       | Will the contents of `slot` be cleared after the bullet layer is closed   | boolean        | `true`        |
| round                  | Show fillet                                                | boolean        | `false`       |
| teleport               | Specify the mount node (`not supported by miniProgram')   | string         | `"body"`      |
| teleport-disable `v3.2.7`              | Whether the node is allowed to be mounted(`not supported by miniProgram')        | boolean         | `false`      |
| overlay-class          | Custom mask class name   | string         | -      |
| overlay-style          | Custom Mask Style   | CSSProperties  | -      |
| safe-area-inset-bottom `v3.1.19`	| Whether to enable iPhone series full screen bottom safety zone adaptation, which is only valid when `position` is  `bottom` |	Boolean	|`false`     |

### Events

| Event | Description                  | Arguments   |
|------------------|------------------------|----------------|
| click            | Triggered when clicking the pop-up layer         | `event: Event` |
| click-close-icon | Triggered when the close icon is clicked     | `event: Event` |
| open             | Triggered when the pop-up box is opened         | -              |
| close            | Triggered when the pop-up box is closed         | -              |
| opend            | Triggered at the end of the mask open animation | `event: Event` |
| closed           | Triggered when the mask closes and the animation ends | `event: Event` |
| click-overlay    | Click mask trigger           | `event: Event` |

### Slots

| Name | Description       |
| ------ | ---------- |
| default  | Customize Embedded Content |
