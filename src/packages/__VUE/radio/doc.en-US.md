# Radio

### Intro

Used to make a single selection in a set of alternatives

### Install

``` ts
import { createApp } from 'vue';
import { Radio,RadioGroup,Icon } from '@nutui/nutui';
import { Checklist } from '@nutui/icons-vue'
const app = createApp();
app.use(Radio);
app.use(RadioGroup);
app.use(Checklist);
```
### Basic Usage

Bind the **label** of the current option through **v-model**. And it must be used in combination with **nut-radio-group** and **nut-radio**

:::demo

```html
<template>
  <nut-cell-group title="Basic">
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio disabled label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal" text-position="left">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio disabled label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio shape="button" label="1">Option 1</nut-radio>
        <nut-radio disabled shape="button" label="2">Option 2</nut-radio>
        <nut-radio shape="button" label="3">Option 3</nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### Horizontal use

:::demo

```html
<template>
  <nut-cell-group title="Horizontal use">
    <nut-cell>
      <nut-radio-group v-model="radioVal" direction="horizontal">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal" text-position="left" direction="horizontal">
        <nut-radio label="1">Option 1</nut-radio>
        <nut-radio label="2">Option 2</nut-radio>
        <nut-radio label="3">Option 3</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell>
      <nut-radio-group v-model="radioVal" direction="horizontal">
        <nut-radio shape="button" label="1">Option 1</nut-radio>
        <nut-radio shape="button" label="2">Option 2</nut-radio>
        <nut-radio shape="button" label="3">Option 3</nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::
### Custom size

:::demo

```html
<template>
  <nut-cell-group title="Custom size">
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio label="1" icon-size="12">Custom size 12</nut-radio>
        <nut-radio label="2" icon-size="12">Custom size 12</nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### Custom icon

Customize the icon through the slot, it is recommended to set the `icon` and `checkedIcon` two slots at the same time

:::demo

```html
<template>
  <nut-cell-group title="Radio Custom icon">
    <nut-cell>
      <nut-radio-group v-model="radioVal">
        <nut-radio label="1">
          Custom icon
          <template #icon> <Checklist /> </template>
          <template #checkedIcon> <Checklist color="red" /> </template>
        </nut-radio>
        <nut-radio label="2">
          Custom icon
          <template #icon> <Checklist /> </template>
          <template #checkedIcon> <Checklist color="red" /> </template>
        </nut-radio>
      </nut-radio-group>
    </nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      return { radioVal };
    },
  };
</script>
```

:::

### Trigger change event

:::demo

```html
<template>
  <nut-cell-group title="Trigger event">
    <nut-cell>
      <nut-radio-group v-model="radioVal" @change="handleChange">
        <nut-radio label="1">Trigger event</nut-radio>
        <nut-radio label="2">Trigger event</nut-radio>
      </nut-radio-group>
    </nut-cell>
    <nut-cell title="Currently selected value" :desc="radioVal"></nut-cell>
  </nut-cell-group>
</template>
<script lang="ts">
  import { ref } from 'vue';
  export default {
    props: {},
    setup() {
      const radioVal = ref('1');
      const handleChange = (value: any) => {
        console.log(value);
      };
      return { radioVal, handleChange };
    },
  };
</script>
```
:::

## API

### Radio Props

| Attribute             | Description                                                         | Type                    | Default            |
|------------------|--------------------------------------------------------------|-------------------------|-------------------|
| disabled         | Disable selection                                           | boolean                 | `false`           |
| icon-size        | [Icon Size](#/en-US/icon)                                           | string \| number           | `18`              |
| label            | Radio box ID                                                  | string \| number \| boolean | -                 |
| shape            | Shape, optional values are `button`、`round`                                | string                  | `round`             |
### Radio Slots
| Name | Description |
|-|-|
| icon | Icon when not selected |
| checkedIcon | Icon when selected |
### RadioGroup Props

| Attribute          | Description                                          | Type                    | Default     |
|---------------|-----------------------------------------------|-------------------------|------------|
| v-model       | The identifier of the currently selected item is selected when it is consistent with the `label` value | string \| number \| boolean | -          |
| text-position | The position of the text, optional value：`left`,`right`        | string                  | `right`    |
| direction     | Use horizontal and vertical optional values `horizontal`、`vertical`      | string                  | `vertical` |

### RadioGroup Events

| Event   | Description         | Arguments                                           |
|--------|--------------|----------------------------------------------------|
| change | Triggered when the value changes | Currently selected item value（label）【There is a value after setting `label`, which is empty by default】 |


## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Default Value |
| --------------------------------------- | -------------------------- |
|  --nut-radio-label-font-color|  _#1d1e1e_  |
|  --nut-radio-label-font-active-color|  _var(--nut-primary-color)_  |
|  --nut-radio-label-disable-color|  _#999_  |
|  --nut-radio-icon-disable-color|  _#d6d6d6_  |
|  --nut-radio-label-button-border-color|  _var(--nut-primary-color)_  |
|  --nut-radio-label-button-background|  _var(--nut-active-color)_  |
|  --nut-radio-label-margin-left|  _15px_  |
|  --nut-radio-button-border-radius|  _15px_  |
|  --nut-radio-label-font-size|  _14px_  |
|  --nut-radio-button-font-size|  _12px_  |
|  --nut-radio-button-padding|  _5px 18px_  |
|  --nut-radio-icon-font-size|  _18px_  |
|  --nut-radio-icon-disable-color2|  _var(--nut-help-color)_  |