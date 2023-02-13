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
import { showNotify } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/notify/style';
export default {
  setup() {
    const baseNotify = (msg: string) => {
      showNotify.text(msg, {
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
import { showNotify } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/notify/style';
export default {
  setup() {
    const primaryNotify = (msg: string) => {
      showNotify.primary(msg);
    };
    const successNotify = (msg: string) => {
      showNotify.success(msg);
    };
    const errorNotify = (msg: string) => {
      showNotify.danger(msg);
    };
    const warningNotify = (msg: string) => {
      showNotify.warn(msg);
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
import { showNotify } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/notify/style';
export default {
  setup() {
    const cusBgNotify = (msg: string) => {
      showNotify.text(msg, { color: '#ad0000', background: '#ffe1e1' });
    };
    const timeNotify = (msg: string) => {
      showNotify.text(msg, { duration: 10000 });
    };
    const positionNotify = (msg: string) => {
      showNotify.text(msg, { position: 'bottom' });
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
    <nut-cell is-Link @click="onClick">Template use</nut-cell>
    <nut-notify v-model:visible="show" :duration="2000">
      <span>Content</span>
    </nut-notify>
  </nut-cell-group>
</template>
<script lang="ts">
import { ref } from 'vue';
import { showNotify } from '@nutui/nutui';
import '@nutui/nutui/dist/packages/notify/style';
export default {
  setup() {
    const show = ref(false);
    const onClick = () => {
      show.value = true;
    };
    return {
      show,
      onClick
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
| type       | The information type of the prompt, the optional values are `primary` `success` `danger` `warning`      | string        | `danger` |
| visible    | Display or not                                           | boolean | `false` |
| msg    | Display content, support line feed through `\n`                              | string       | `''`    |
| duration   | Display duration (ms),value is 0 ,notify not disappear | number        | `3000`     |
| color      | Font Color                                               | string        | `-`        |
| background | Background color                                         | string        | `-`        |
| class-name | Custom class name                                        | string \| number | `1 `       |
| position | custom position, optional values are `top` `bottom` `left` `right` `center` | string | `top` |

> Component call is supported after version 'v3.1.20'.

### Events

| Event  | Description                    | Arguments |
|--------|--------------------------------|-----------|
| click  | Emitted when notify is clicked | `-`         |
| closed | Emitted when notify is closed  | `-`         |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value | 
| --------------------------------------- | -------------------------- |
|  --nut-notify-text-color| _var(--nut-white)_  |
|  --nut-notify-padding| _12px 0_  |
|  --nut-notify-font-size| _14px_  |
|  --nut-notify-height| _44px_  |
|  --nut-notify-line-height| _auto_  |
|  --nut-notify-base-background-color| _linear-gradient(135deg,var(--nut-primary-color) 0%,var(--nut-primary-color-end) 100%)_  |
|  --nut-notify-primary-background-color| _linear-gradient(315deg, rgba(73, 143, 242, 1) 0%, rgba(73, 101, 242, 1) 100%)_  |
|  --nut-notify-success-background-color| _linear-gradient(135deg,rgba(38, 191, 38, 1) 0%,rgba(39, 197, 48, 1) 45%,rgba(40, 207, 63, 1) 83%,rgba(41, 212, 70, 1) 100%)_  |
|  --nut-notify-danger-background-color| _rgba(250, 50, 25, 1)_  |
|  --nut-notify-warning-background-color| _linear-gradient(135deg, rgba(255, 93, 13, 1) 0%, rgba(255, 154, 13, 1) 100%)_  |
    