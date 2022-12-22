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
    <nut-rate v-model="value" />
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

### Half Star

:::demo
```html
<template>
    <nut-rate allow-half v-model="value"></nut-rate>
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
    <nut-rate :icon="HeartFill" v-model="value" />
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

### Custom quantity

:::demo
```html
<template>
    <nut-rate :count="6" v-model="value" />
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

### disabled state

:::demo
```html
<template>
    <nut-rate disabled v-model="value" />
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
    <nut-rate v-model="value" readonly />
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
### bind event

:::demo
```html
<template>
    <nut-rate v-model="value" @change="onChange" />
</template>
<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
export default {
    setup() {
        const value = ref(3);
        const onChange = (val)=>{
            Toast.text(val);
        }
    return { value,onChange }
    }
}
</script>
```
:::



## API
### Props

| Attribute          | Description                                                                      | Type    | Default          |
|--------------------|----------------------------------------------------------------------------------|---------|------------------|
| v-model            | The current number of stars, you can use v-model to bind data in both directions | Number  | -                |
| count              | Total number of stars                                                            | Number  | 5                |
| active-color       | Icon selection color                                                             | String  | #fa200c          |
| void-color         | Icon unselected color                                                            | String  | #ccc             |
| allow-half         | half star                                                                        | Boolean | false            |
| readonly           | read-only                                                                        | Boolean | false            |
| disabled           | whether to disable                                                               | Boolean | false            |
| spacing            | spacing                                                                          | Number  | 20               |
| touchable`v3.1.22` | Whether to allow select rate by touch gesture                                    | Boolean | true             |


### Events
| Event  | Description                                                | Arguments |
|--------|------------------------------------------------------------|-----------|
| change | An event that fires whenever the current score is modified | val       |