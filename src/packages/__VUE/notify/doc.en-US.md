#  Notify

### Intro
    
Show message tips at the top of the page
    
### Install

``` javascript
import { createApp } from 'vue';
import { Notify } from '@nutui/nutui';

const app = createApp();
app.use(Notify);
```    

### Basic Usage

:::demo
```html
<template>
  <nut-cell is-Link @click="baseNotify('Basic Usage')">Basic Usage</nut-cell>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const baseNotify = (msg: string) => {
      Notify.text(msg, {
        onClose: () => {
          console.log('close');
        },
        onClick: () => {
          console.log('click');
        }
      });
    };
    return {
      baseNotify
    }
  }
}
</script>
```
:::

### Notify Type

:::demo
```html
<template>
   <nut-cell-group title="Notify Type">
      <nut-cell is-Link @click="primaryNotify('Primary Notify')">Primary Notify</nut-cell>
      <nut-cell is-Link @click="successNotify('Success Notify')">Success Notify</nut-cell>
      <nut-cell is-Link @click="errorNotify('Error Notify')">Error Notify</nut-cell>
      <nut-cell is-Link @click="warningNotify('Warning Notify')">Warning Notify</nut-cell>
    </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const primaryNotify = (msg: string) => {
      Notify.primary(msg);
    };
    const successNotify = (msg: string) => {
      Notify.success(msg);
    };
    const errorNotify = (msg: string) => {
      Notify.danger(msg);
    };
    const warningNotify = (msg: string) => {
      Notify.warn(msg);
    };
    return {
      primaryNotify,
      successNotify,
      errorNotify,
      warningNotify,
    }
  }
}
</script>
```
:::
### Custom
:::demo
```html
<template>
  <nut-cell-group title="Custom Style">
    <nut-cell is-Link @click="cusBgNotify('Customize background and font colors')">Customize background and font colors</nut-cell>
  </nut-cell-group>
    <nut-cell-group title="Custom Duration">
      <nut-cell is-Link @click="timeNotify('Custom Duration')">Custom Duration</nut-cell>
  </nut-cell-group>
  <nut-cell-group title="Custom Postion">
    <nut-cell is-Link @click="positionNotify('Custom Postion')">Custom Postion</nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const cusBgNotify = (msg: string) => {
      Notify.text(msg, { color: '#ad0000', background: '#ffe1e1' });
    };
    const timeNotify = (msg: string) => {
      Notify.text(msg, { duration: 10000 });
    };
    const positionNotify = (msg: string) => {
      Notify.text(msg, { position: 'bottom' });
    };
    return {
      cusBgNotify,
      timeNotify,
      positionNotify
    };
  }
}
</script>
```
:::



### Template use
:::demo
```html
<template>
  <nut-cell-group title="Template use">
    <nut-cell is-Link @click="showNotify">Template use</nut-cell>
    <nut-notify v-model:visible="show">
      <span>Content</span>
    </nut-notify>
  </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { Notify } from '@nutui/nutui';
export default {
  setup() {
    const show = ref(false);
    const showNotify = () => {
      show.value = true;
      setTimeout(() => {
        show.value = false;
      }, 2000);
    };
    return {
      show,
      showNotify
    };
  }
}
</script>
```
:::
   
    
### API
    
### Props
    
| Attribute  | Description                                              | Type          | Default  |
|------------|----------------------------------------------------------|---------------|----------|
| type       | Display Type（primary,success ,danger,warning）      | String        | 'danger' |
| message    | Display copy, support line feed through \n              | Boolean       | false    |
| duration   | Display duration (ms),value is 0 ,notify not disappear | String        | 3000     |
| color      | Font Color                                               | String        | -        |
| background | Background color                                         | String        | -        |
| class-name | Custom class name                                        | String/Number | 1        |

> Component call is supported after version 'v3.1.20'.

### Events

| Event  | Description                    | Arguments |
|--------|--------------------------------|-----------|
| click  | Emitted when notify is clicked | -         |
| closed | Emitted when notify is closed  | -         |
    