# Rate

### Intro

Use for quick rating actions, or to showcase reviews.

### Install

``` javascript
import { createApp } from 'vue';
import { Rate } from '@nutui/nutui';
const app = createApp();
app.use(Rate);
```

### Basic Usage

:::demo
```html
<template>
     <nut-cell class="cell">
       <nut-rate v-model="state.val" />
     </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
     setup() {
         const value = ref(3);
         return { value }
     }
}
</script>
```
:::

### half star

:::demo
```html
<template>
     <nut-cell class="cell">
         <nut-rate allow-half v-model="value"></nut-rate>
     <nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
     setup() {
         const value = ref(3.5);
         return { value }
     }
}
</script>
```
:::

### Custom icon

:::demo
```html
<template>
     <nut-cell class="cell">
         <nut-rate :custom-icon="HeartFill" v-model="value" />
     </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
import { HeartFill } from '@nutui/icons-vue';
export default {
     components: { HeartFill },
     setup() {
         const value = ref(3);
         return { value, HeartFill }
     }
}
</script>
```
:::

### Custom Quantity

:::demo
```html
<template>
     <nut-cell class="cell">
         <nut-rate count="10" v-model="value" />
     </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
     setup() {
         const value = ref(3);
         return { value }
     }
}
</script>
```
:::

### Disabled state

:::demo
```html
<template>
     <nut-cell class="cell">
         <nut-rate disabled v-model="value" />
     </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
     setup() {
         const value = ref(3);
         return { value }
     }
}
</script>
```
:::

### read-only status

:::demo
```html
<template>
     <nut-cell class="cell">
         <nut-rate v-model="value" readonly />
     </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
     setup() {
         const value = ref(3);
         return { value }
     }
}
</script>
```
:::
### Binding events

:::demo
```html
<template>
     <nut-cell class="cell">
         <nut-rate v-model="value" @change="onChange" />
     </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
import { showToast } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/toast/style';
export default {
     setup() {
         const value = ref(3);
         const onChange = (val) => {
             showToast. text(val);
         }
     return { value, onChange }
     }
}
</script>
```
:::

### Custom Size 35px

:::demo
```html
<template>
    <nut-cell class="cell">
        <nut-rate v-model="value" size="35" />
    </nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const value = ref(3);
        return { value }
    }
}
</script>
```
:::


## API
### Props

| Attribute    | Description                                                                                     | Type             | Default     |
|--------------|-------------------------------------------------------------------------------------------------|------------------|-------------|
| v-model      | The current number of stars, you can use v-model to bind data in both directions                | number \| string | -           |
| count        | Total number \| string of stars                                                                 | number \| string | `5`         |
| active-color | Icon selection color                                                                            | string           | `#fa200c`   |
| void-color   | Icon unselected color                                                                           | string           | `#ccc`      |
| allow-half   | half star                                                                                       | boolean          | `false`     |
| readonly     | read-only                                                                                       | boolean          | `false`     |
| disabled     | whether to disable                                                                              | boolean          | `false`     |
| spacing      | spacing                                                                                         | number \| string | `20`        |
| touchable    | Whether to allow select rate by touch gesture                                                   | boolean          | `true`      |
| size         | `Icon` custom size , eg `20px` `2em` `2rem`                                                     | number \| string | -           |
| custom-icon  | custom `Icon`, set [VNode](https://vuejs.org/guide/extras/render-function.html#creating-vnodes) | VNode \| h       | `StarFillN` |


### Events
| Event  | Description                                                | Arguments |
|--------|------------------------------------------------------------|-----------|
| change | An event that fires whenever the current score is modified | val       |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name                       | Default Value              |
|----------------------------|----------------------------|
| --nut-rate-icon-color      | _var(--nut-primary-color)_ |
| --nut-rate-icon-void-color | _var(--nut-disable-color)_ |