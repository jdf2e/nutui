#  Swipe

### Intro

Used for cell components that can slide left and right to display operation buttons.

### Install

```javascript
import { createApp } from 'vue';
//vue
import { Swipe,Cell,Button } from '@nutui/nutui';
//taro
import { Swipe,Cell,Button } from '@nutui/nutui-taro';

const app = createApp();
app.use(Swipe);
app.use(Cell);
app.use(Button);
```

### Basic Usage

:::demo
```html
<template>
<nut-swipe>
    <nut-cell round-radius="0" desc="Swipe left to delete" />
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
    </template>
</nut-swipe>
</template>
```
:::


### Disable swipe


:::demo
```html
<template>
<nut-swipe disabled>
    <nut-cell round-radius="0" desc="Disable swipe" />
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
    </template>
</nut-swipe>
</template>
```
:::

### Swipe left and right


:::demo
```html
<template>
<nut-swipe>
    <template #left>
        <nut-button shape="square" style="height:100%" type="success">Select</nut-button>
    </template>
    <nut-cell round-radius="0" desc="You can swipe left and right" />
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
        <nut-button shape="square" style="height:100%" type="info">Collect</nut-button>
    </template>
</nut-swipe>
</template>
```
:::

### Async control swipe

Need to introduce the `switch` component separately

:::demo
```html
<template>
<nut-swipe ref="refSwipe" @open="open" @close="close">
    <nut-cell title="Async on and off">
    <template v-slot:link>
        <nut-switch v-model="checked" @change="changSwitch" active-text="on" inactive-text="off" />
    </template>
    </nut-cell>
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
    </template>
</nut-swipe>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const refSwipe = ref<HTMLElement>();
        const checked = ref(false);
        const changSwitch = (value: boolean) => {
            if (value) {
                refSwipe.value?.open('left');
            } else {
                refSwipe.value?.close();
            }
        };
         const open = (obj: any) => {
            console.log(obj);
            checked.value = true;
        };
        const close = () => {
            checked.value = false;
        };
        return { checked, changSwitch, refSwipe, open, close };
    }
}
</script>
```
:::

### Custom

Need to introduce the `inputnumber` component separately

:::demo
```html
<template>
<nut-swipe>
    <template #left>
        <nut-button shape="square" style="height:100%" type="success">Select</nut-button>
    </template>
    <nut-cell title="product description">
    <template v-slot:link>
        <nut-inputnumber v-model="number" />
    </template>
    </nut-cell>
    <template #right>
        <nut-button shape="square" style="height:100%" type="danger">Delelte</nut-button>
        <nut-button shape="square" style="height:100%" type="info">Collect</nut-button>
    </template>
</nut-swipe>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
    setup() {
        const number = ref(0);
        return { number };
    }
}
</script>
```
:::

## API
### Props

| Attribute                   | Description               | Type    | Default |
|-----------------------------|---------------------------|---------|---------|
| name                        | identifies                | String  | -       |
| disabled                    | Whether to disabled swipe | String  | false   |
| touch-move-prevent-default  | Whether to stop touchmove event preventdefault       | boolean | false   |
| touch-move-stop-propagation | Whether to stop touchmove event propagation      | boolean | false   |
### Events

| Event | Description                  | Arguments              |
|-------|------------------------------|------------------------|
| open  | Emitted when Swipe is opened | {type:'left or right'} |
| close | Emitted when Swipe is closed | {type:'left or right'} |
    

### Slots
| Name    | Description    |
|---------|----------------|
| left    | Custom left    |
| default | Custom default |
| right   | Custom right   |

### Methods

Use [ref](https://vuejs.org/guide/essentials/template-refs.html) to get Swipe instance and call instance methods.

| Name  | Description | Arguments     |
|-------|-------------|---------------|
| open  | open swipe  | left or right |
| close | close swipe |               |