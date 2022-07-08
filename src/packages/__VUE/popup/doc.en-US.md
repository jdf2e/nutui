# Popup

### Intro

The pop-up layer container is used to display pop-up windows, information prompts and other contents, and supports the superposition display of multiple pop-up layers

### Install

```javascript
import { createApp } from 'vue';
//vue
import { Popup,OverLay } from '@nutui/nutui';
//taro
import { Popup,OverLay } from '@nutui/nutui-taro';

const app = createApp();
app.use(Popup).use(OverLay)
```

### Basic Usage

`visible` Control show / hide

:::demo

```html
<template>
  <nut-cell title="Show pop-up layer" is-link @click="state.showBasic = true"></nut-cell>
  <nut-popup pop-class="popclass" :style="{ padding: '30px 50px' }" v-model:visible="state.showBasic" :z-index="100">text</nut-popup>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showBasic: false
      });
      return { state };
    }
  };
</script>
```

:::

### Eject position

:::demo

```html
<template>
  <nut-cell title="Top pop-up" is-link @click="state.showTop = true"></nut-cell>
  <nut-popup position="top" :style="{ height: '20%' }" v-model:visible="state.showTop"></nut-popup>
  <nut-cell title="Bottom pop-up" is-link @click="state.showBottom = true"></nut-cell>
  <nut-popup position="bottom" :style="{ height: '20%' }" v-model:visible="state.showBottom"></nut-popup>
  <nut-cell title="Left pop-up" is-link @click="state.showLeft = true"></nut-cell>
  <nut-popup position="left" :style="{ width: '20%', height: '100%' }" v-model:visible="state.showLeft"></nut-popup>
  <nut-cell title="Right pop-up" is-link @click="state.showRight = true"></nut-cell>
  <nut-popup position="right" :style="{ width: '20%', height: '100%' }" v-model:visible="state.showRight"></nut-popup>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showTop: false,
        showBottom: false,
        showLeft: false,
        showRight: false,
      });
      return { state };
    }
  };
</script>
```

:::

### Icon


:::demo

```html
<template>
  <nut-cell title="Close icon" is-link @click="state.showIcon = true"></nut-cell>
  <nut-popup position="bottom" closeable :style="{ height: '20%' }" v-model:visible="state.showIcon"></nut-popup>
  <nut-cell title="Icon location" is-link @click="state.showIconPosition = true" ></nut-cell>
  <nut-popup position="bottom" closeable close-icon-position="top-left" :style="{ height: '20%' }" v-model:visible="state.showIconPosition" ></nut-popup>
  <nut-cell title="Custom icon" is-link @click="state.showCloseIcon = true" ></nut-cell>
  <nut-popup position="bottom" closeable close-icon-position="top-left" close-icon="heart" :style="{ height: '20%' }" v-model:visible="state.showCloseIcon"></nut-popup>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showIcon: false,
        showIconPosition: false,
        showCloseIcon: false,
      });
      return { state };
    }
  };
</script>
```

:::

### Rounded bullet frame

:::demo

```html
<template>
  <nut-cell title="Rounded pop-up" is-link @click="state.showRound = true"></nut-cell>
  <nut-popup position="bottom" closeable round :style="{ height: '30%' }" v-model:visible="state.showRound"></nut-popup>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showRound: false,
      });
      return { state };
    }
  };
</script>
```

:::

### Specify mount node

:::demo

```html
<template>
  <nut-cell title="Specify mount node" is-link @click="state.showTeleport = true"></nut-cell>
  <nut-popup :style="{ padding: '30px 50px' }" teleport="#app" v-model:visible="state.showTeleport" >app</nut-popup>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showTeleport: false,
      });
      return { state };
    }
  };
</script>
```

:::

### Multi stack

:::demo

```html
<template>
  <nut-cell title="Multi stack" is-link @click="state.showPop1 = true"></nut-cell>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="state.showPop1">
    <div @click="state.showPop2 = true">Click it</div>
  </nut-popup>
  <nut-popup :style="{ padding: '30px 50px' }" v-model:visible="state.showPop2">text</nut-popup>
</template>
<script lang="ts">
  import { reactive } from 'vue';
  export default {
    props: {},
    setup() {
      const state = reactive({
        showPop1: false,
        showPop2: false
      });
      return { state };
    }
  };
</script>
```

:::

## API

### Props

| Attribute                   | Description                                                        | Type           | Default        |
|------------------------|-------------------------------------------------------------|----------------|---------------|
| v-model:visible        | Whether the current component is displayed                  | Boolean        | `false`       |
| z-index                | Mask level                                                    | String、Number | `2000`        |
| duration               | Animation duration，Unit second                                         | String、Number | `0.3`         |
| overlay-class          | Custom mask classname                                              | String         | -             |
| overlay-style          | Custom mask style                                             | CSSProperties  | -             |
| lock-scroll            | Whether the background is locked                                                | Boolean        | `true`       |
| overlay                | Show mask                                                | Boolean        | `true`        |
| close-on-click-overlay | Click to close the mask                                            | Boolean        | `true`        |
| position               | Eject position（top,bottom,left,right,center）                    | String         | `"center"`    |
| transition             | Animation name                                                      | String         | -             |
| style                  | Custom pop-up style                                              | CSSProperties  | -             |
| pop-class              | Custom bullet box classname                                              | String         | -             |
| closeable              | Show close button                                           | Boolean        | `false`        |
| close-icon-position    | Close button position（top-left,top-right,bottom-left,bottom-right） | String         | `"top-right"` |
| close-icon             | Custom Icon                                                 | String         | `"close"`     |
| destroy-on-close       | Will the contents of `slot` be cleared after the bullet layer is closed   | Boolean        | `true`        |
| round                  | Show fillet                                                | Boolean        | `false`       |
| teleport               | Specify the mount node (`not supported by miniProgram')   | String         | `"body"`      |
| safe-area-inset-bottom `v3.1.19`	| Whether to enable iPhone series full screen bottom safety zone adaptation, which is only valid when `position` is  `bottom` |	Boolean	|`false`     |

### Events

| Event | Description                  | Arguments   |
|------------------|------------------------|----------------|
| click            | Triggered when the pop-up box is clicked         | `event: Event` |
| click-close-icon | Triggered when the close icon is clicked     | `event: Event` |
| open             | Triggered when the pop-up box is opened         | -              |
| close            | Triggered when the pop-up box is closed         | -              |
| opend            | Triggered at the end of the mask open animation | `event: Event` |
| closed           | Triggered when the mask closes and the animation ends | `event: Event` |
| click-overlay    | Click mask trigger           | `event: Event` |
