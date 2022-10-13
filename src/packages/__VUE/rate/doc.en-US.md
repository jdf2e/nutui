# Rate

### Intro

Use for quick rating actions, or to showcase reviews.

### Install

``` javascript
import { createApp } from 'vue';
//vue
import { Rate,Icon } from '@nutui/nutui';
//taro
import { Rate,Icon } from '@nutui/nutui-taro';

const app = createApp();
app.use(Rate);
app.use(Icon);
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
    <nut-rate checked-icon="heart-fill1" unchecked-icon="heart" v-model="value" />
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

### Custom color

:::demo
```html
<template>
    <nut-rate active-color="#FFC800" v-model="value" />
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

### Custom size 35px

:::demo
```html
<template>
    <nut-rate v-model="value" icon-size="35" />
</template>
<script lang="ts">
import { ref } from 'vue';
import { Toast } from '@nutui/nutui';
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

| Attribute          | Description                                                                      | Type    | Default          |
|--------------------|----------------------------------------------------------------------------------|---------|------------------|
| v-model            | The current number of stars, you can use v-model to bind data in both directions | Number  | -                |
| count              | Total number of stars                                                            | Number  | 5                |
| icon-size          | Star size                                                                        | Number  | 18               |
| active-color       | Icon selection color                                                             | String  | #fa200c          |
| void-color         | Icon unselected color                                                            | String  | #ccc             |
| unchecked-icon     | Use icon (unchecked)[icon name](#/icon)                                          | String  | star-n           |
| checked-icon       | Use icon (checked)[icon name](#/icon)                                            | String  | star-fill-n      |
| font-class-name    | Custom icon font base class name                                                 | String  | `nutui-iconfont` |
| class-prefix       | Custom icon class name prefix for using custom icons                             | String  | `nut-icon`       |
| allow-half         | half star                                                                        | Boolean | false            |
| readonly           | read-only                                                                        | Boolean | false            |
| disabled           | whether to disable                                                               | Boolean | false            |
| spacing            | spacing                                                                          | Number  | 20               |
| touchable`v3.1.22` | Whether to allow select rate by touch gesture                                    | Boolean | true             |


### Events
| Event  | Description                                                | Arguments |
|--------|------------------------------------------------------------|-----------|
| change | An event that fires whenever the current score is modified | val       |